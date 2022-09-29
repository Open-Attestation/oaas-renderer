import Ajv from 'ajv'
import addFormats from 'ajv-formats'

import glob from 'glob'
import fs from 'fs'
import path from 'path'
import { compileFromFile } from 'json-schema-to-typescript'

const ajv = new Ajv()
addFormats(ajv)

const GENERATED_FOLDER_NAME = '__generated__'
const filenames = glob.sync('src/**/*.schema.ts')

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
