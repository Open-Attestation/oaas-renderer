import glob from 'glob'
import crypto from 'crypto'
import fs from 'fs'
import path from 'path'
import { camelCase } from 'change-case'

const TARGET_DIR_NAME = '__generated__'

const targetDirMap: Record<
    string,
    {
        imageName: string
        imageExtension: string
        imageFilepath: string
    }[]
> = {}

// grab all filepaths of images that needs to be hashed
const imageFilepaths = glob.sync('src/**/*.hash.{png,jpg,jpeg}')
for (const imageFilepath of imageFilepaths) {
    // directory where the image is found
    const imageDir = path.dirname(imageFilepath)

    // .png or .jpg or .jpeg
    const imageExtension = path.extname(imageFilepath)
    // example.hash.png
    const imageFilenameWithExt = path.basename(imageFilepath)
    // example.hash.png -> example
    const imageName = imageFilenameWithExt.replace('.hash' + imageExtension, '')

    // target directory where ALL the generated files will go
    const targetDir = path.join(imageDir, TARGET_DIR_NAME)

    // group all the info needed for the generation step into a map
    if (!targetDirMap[targetDir]) targetDirMap[targetDir] = []

    targetDirMap[targetDir].push({
        imageExtension,
        imageName,
        imageFilepath,
    })
}

const targetDirs = Object.keys(targetDirMap)
for (const targetDir of targetDirs) {
    // make sure target dir exists
    try {
        fs.mkdirSync(targetDir)
    } catch (err: any) {
        // ignore if directory already exists
        if (!err.message.includes('EEXIST')) throw err
    }

    const infos = targetDirMap[targetDir]
    const imports: string[] = []
    const exportMapContent: string[] = []
    const exportEnumValuesContent: string[] = []
    for (const { imageExtension, imageName, imageFilepath } of infos) {
        // get sha256 hash (hex) of file
        const imageFileBuffer = fs.readFileSync(imageFilepath)
        const imageHash = calcHashOfFile(imageFileBuffer)

        const targetImageFilename = `${imageName}&${imageHash}${imageExtension}`
        const targetImageFilepath = path.join(targetDir, targetImageFilename)
        // copy image file with its new name
        fs.writeFileSync(targetImageFilepath, imageFileBuffer)

        const imageIdentifier = camelCase(imageName)
        imports.push(
            `import ${imageIdentifier} from './${targetImageFilename}'`
        )
        exportMapContent.push(
            `   '${targetImageFilename}': ${imageIdentifier},`
        )
        exportEnumValuesContent.push(`"${targetImageFilename}"`)
    }

    // 2 files to be generated
    // file 1: map of targetImageFilename to imageSourceObject
    const mapFileContent = [
        imports.join('\n'),
        '',
        'export default {',
        exportMapContent.join('\n'),
        '} as const;',
    ].join('\n')
    fs.writeFileSync(path.join(targetDir, 'images-map.ts'), mapFileContent)

    // file 2: array of enum values to be used in json schema
    const enumValuesFileContent = [
        `const enumValues = [${exportEnumValuesContent.join(', ')}]`,
        `export default enumValues;`,
    ].join('\n')
    fs.writeFileSync(
        path.join(targetDir, 'images-enum-values.ts'),
        enumValuesFileContent
    )
}

function calcHashOfFile(fileBuffer: Buffer) {
    // // get sha256 hash (hex) of file
    const hashSum = crypto.createHash('sha256')
    hashSum.update(fileBuffer)
    return hashSum.digest('hex')
}
