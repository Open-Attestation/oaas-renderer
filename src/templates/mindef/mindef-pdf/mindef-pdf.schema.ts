import { JSONSchema } from 'json-schema-to-typescript'
import { makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'Mindef/MindefPdf',
    type: 'object',
    required: ['name', 'referenceNo', 'input_pdf'],
    properties: {
        name: makeRequiredString('Name of participant', 'Johnathan Doe'),
        referenceNo: makeRequiredString('Reference number', 'Johnathan Doe'),
        input_pdf: makeRequiredString('input pdf filename', 'input.pdf'),
    },
    additionalProperties: false,
} as JSONSchema
