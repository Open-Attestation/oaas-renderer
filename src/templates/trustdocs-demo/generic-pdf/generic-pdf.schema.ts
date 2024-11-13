import { JSONSchema } from 'json-schema-to-typescript'
import { makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'TrustdocsDemo/GenericPdf',
    type: 'object',
    required: ['name', 'input_pdf'],
    properties: {
        name: makeRequiredString('Name of participant', 'Johnathan Doe'),
        input_pdf: makeRequiredString('input pdf filename', 'input.pdf'),
    },
    additionalProperties: false,
} as JSONSchema
