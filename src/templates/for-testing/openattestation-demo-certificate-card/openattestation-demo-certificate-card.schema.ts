import { JSONSchema } from 'json-schema-to-typescript'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'ForTesting/OpenattestationDemoCertificateCard',
    type: 'object',
    required: ['name', 'issueDate', 'serialNumber'],
    properties: {
        name: {
            type: 'string',
            examples: ['John Doe'],
            minLength: 1,
        },
        issueDate: {
            type: 'string',
            format: 'date',
            description: 'Issuance date of the certificate',
            examples: ['2022-12-31'],
        },
        serialNumber: {
            type: 'string',
            description: 'Certificate number',
            examples: ['OADC20XX/XXX'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
