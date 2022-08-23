// DO NOT TOUCH! This is only used during development!
const { writeFileSync } = require('fs')
const glob = require('glob')
const path = require('path')
const { camelCase } = require('change-case')

const PROJECT_DIR = path.join(__dirname, '../../')
const DEVELOPMENT_DIR = __dirname

const TEMPLATE_REGISTRIES_GLOB = path.join(
    PROJECT_DIR,
    'src',
    'templates',
    '*/index.ts'
)

const SAMPLES_GLOB = path.join(PROJECT_DIR, 'src', '/**/*.sample.ts')

function prepareTemplateRegistries() {
    const filepaths = glob.sync(TEMPLATE_REGISTRIES_GLOB)

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

function prepareSamples() {
    const filepaths = glob.sync(SAMPLES_GLOB)
    const sb = ['// @ts-nocheck']
    for (const filepath of filepaths) {
        const importPath = filepath
            .replace('.tsx', '')
            .replace('.ts', '')
            .split('src/')[1]

        const regex = /templates\/(.*).sample/
        const match = regex.exec(importPath)

        if (match === null)
            throw new Error('Unable to parse import path with given regex')

        const captureGroup = match[1]
        const sampleName = camelCase(
            captureGroup.substring(0, captureGroup.lastIndexOf('/') + 1)
        )

        sb.push(`export { sample as ${sampleName} } from '${importPath}'`)
    }
    writeFileSync(path.join(DEVELOPMENT_DIR, 'samples.ts'), sb.join('\n'))
}

prepareSamples()
prepareTemplateRegistries()
