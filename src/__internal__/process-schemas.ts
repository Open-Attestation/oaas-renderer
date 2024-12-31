import fs from 'fs'
import path from 'path'

import Ajv, { Schema } from 'ajv'
import addFormats from 'ajv-formats'
import glob from 'glob'
import { compileFromFile } from 'json-schema-to-typescript'

const foldersToSearch = process.argv[2] ? process.argv[2].split(' ') : []

const ajv = new Ajv({
    $data: true,
})
addFormats(ajv)

// Define a custom format for MM-YYYY
ajv.addFormat('MM-YYYY', {
    type: 'string',
    validate: /^(0[1-9]|10|11|12)-\d{4}$/, // Regular expression for MM-YYYY format
})

const GENERATED_FOLDER_NAME = '__generated__'

let filenames = foldersToSearch.flatMap((path) => {
    return glob.sync(path + '/**/*.schema.ts')
})

if (!filenames.length) filenames = glob.sync('src/**/*.schema.ts')

void Promise.all(
    filenames.map(async (filepath: string) => {
        const dirOfFile = path.dirname(filepath)
        const filename = path.basename(filepath)

        // create a target dir where the original file was found
        const targetDir = path.join(dirOfFile, GENERATED_FOLDER_NAME)
        try {
            fs.mkdirSync(targetDir)
        } catch (err: any) {
            // ignore if directory already exists
            if (!err.message.includes('EEXIST')) throw err
        }

        const schemaTsFilepath = filepath
            .replace('.schema.ts', '.schema')
            .replace('src/', '../')
        // generate json file from schema.ts
        const { default: schema } = await import(schemaTsFilepath)

        const targetSchemaFilepath = path.join(
            targetDir,
            filename.replace('.schema.ts', '.schema.json')
        )

        // make sure schema is compilable
        try {
            ajv.compile(schema)
        } catch (error) {
            console.error(
                `Validation failed while processing schema:\n ${schemaTsFilepath}.ts`
            )
            console.error(error)
        }

        assertExplicitNoAdditionalProperties(filepath, schema)

        const jsonSchemaString = JSON.stringify(schema, undefined, 4)
        fs.writeFileSync(targetSchemaFilepath, jsonSchemaString)

        // generate typescrypt interfaces from json schema
        const targetTsFilepath = path.join(
            targetDir,
            filename.replace('.schema.ts', '.schema.d.ts')
        )
        const ts = await compileFromFile(targetSchemaFilepath)
        fs.writeFileSync(targetTsFilepath, ts)
    })
)

export function assertExplicitNoAdditionalProperties(
    filepath: string,
    schema: Schema
) {
    // we only care about objects
    if (typeof schema !== 'object' || schema === null) {
        return
    }

    if ('type' in schema && schema.type === 'object') {
        if (
            schema.additionalProperties === undefined ||
            schema.additionalProperties
        ) {
            throw new Error(
                `All objects in JSON Schema (${filepath}) MUST EXPILICLY SET "additionalProperties: false"`
            )
        }
    }

    const keys = Object.keys(schema)
    for (const key of keys) {
        const value = schema[key]

        if (Array.isArray(value)) {
            for (const item of value) {
                assertExplicitNoAdditionalProperties(filepath, item)
            }
        } else {
            assertExplicitNoAdditionalProperties(filepath, value)
        }
    }
}
