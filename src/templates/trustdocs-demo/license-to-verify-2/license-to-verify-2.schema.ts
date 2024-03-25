import { JSONSchema } from 'json-schema-to-typescript'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'TrustdocsDemo/LicenseToVerify_2',
    type: 'object',
    required: ['name', 'issuedOn'],
    properties: {
        name: {
            type: 'string',
            description: 'Name of the recipient',
            examples: ['{Your Name}'],
            minLength: 1,
        },
        issuedOn: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2024-01-01'],
            format: 'date',
        },
    },
    additionalProperties: false,
} as JSONSchema
