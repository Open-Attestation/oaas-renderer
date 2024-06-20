// DO NOT TOUCH! This is only used during development!
import { writeFileSync } from 'fs'
import glob from 'glob'
import path from 'path'
import { camelCase } from 'change-case'

const PROJECT_DIR = path.join(__dirname, '../../')
const DEVELOPMENT_DIR = __dirname

const TEMPLATE_REGISTRIES_GLOB = path.join(
    PROJECT_DIR,
    'src',
    'templates',
    '*/index.ts'
)

const SAMPLES_GLOB = path.join(PROJECT_DIR, 'src', '/**/*.sample*.ts')

function prepareTemplateRegistries() {
    const filepaths = glob.sync(TEMPLATE_REGISTRIES_GLOB)

    filepaths.sort()

    const sb = ['// @ts-nocheck']
    const moduleNames = []
    for (const filepath of filepaths) {
        const importPath = filepath.replace('/index.ts', '').split('src/')[1]

        const moduleName = camelCase(`${importPath.split('/')[1]}Registry`)
        moduleNames.push(moduleName)
        sb.push(`import { registry as ${moduleName} } from '${importPath}'`)
    }

    sb.push(
        `export const registry = { ${moduleNames
            .map((moduleName) => `...${moduleName}`)
            .join(', ')} }
            `
    )
    writeFileSync(
        path.join(DEVELOPMENT_DIR, 'combined-registry.ts'),
        sb.join('\n')
    )
}

async function prepareSamples() {
    const filepaths = glob.sync(SAMPLES_GLOB)
    // samples grouped by issuers
    const issuersSamples: Record<
        string,
        Record<string, { importPath: string }[]>
    > = {}
    for (const filepath of filepaths) {
        const importPath = filepath
            .replace('.tsx', '')
            .replace('.ts', '')
            .split('src/')[1]

        const content = await import(path.join('../', importPath))
        const templateName = content?.['sample']?.['$template']?.['name']

        if (!templateName)
            throw new Error(
                'Sample file is invalid, expected shape of { "sample": { "$template": { "name": "..." } } }'
            )

        const [issuerId, docType] = templateName.split('/')

        if (!issuersSamples[issuerId]) {
            issuersSamples[issuerId] = {}
        }

        if (!issuersSamples[issuerId][docType]) {
            issuersSamples[issuerId][docType] = []
        }

        issuersSamples[issuerId][docType].push({
            importPath: importPath,
        })
    }

    const issuerIds = Object.keys(issuersSamples)

    const importsSb: string[] = ['// @ts-nocheck']
    const exportsSb: string[] = ['{']
    for (let issuerId of issuerIds) {
        exportsSb.push(`"${issuerId}": {`)
        const docTypes = Object.keys(issuersSamples[issuerId])
        for (let docType of docTypes) {
            const samples = issuersSamples[issuerId][docType]
            for (let i = 0; i < samples.length; i += 1) {
                const namePostFix = i === 0 ? '' : ' ' + i
                const { importPath } = samples[i]
                const importName = camelCase(docType + namePostFix)
                importsSb.push(
                    `import { sample as ${importName} } from '${importPath}'`
                )

                exportsSb.push(`"${docType}${namePostFix}": ${importName},`)
            }
        }
        exportsSb.push(`},`)
    }
    exportsSb.push('};')

    const sb: string[] = [
        ...importsSb,
        '',
        `export const samples =`,
        ...exportsSb,
    ]

    writeFileSync(path.join(DEVELOPMENT_DIR, 'samples.ts'), sb.join('\n'))
}

prepareSamples()
prepareTemplateRegistries()
