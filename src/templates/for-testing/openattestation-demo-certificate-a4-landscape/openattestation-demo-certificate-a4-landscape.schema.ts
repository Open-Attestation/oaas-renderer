import { JSONSchema } from 'json-schema-to-typescript'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'ForTesting/OpenattestationDemoCertificateA4Landscape',
    type: 'object',
    required: ['name', 'courseTitle', 'courseStartDate'],
    properties: {
        name: {
            type: 'string',
            description: 'Name of awardee',
            examples: ['John Doe'],
            minLength: 1,
        },
        courseTitle: {
            type: 'string',
            description: 'Title of the course',
            examples: ['OpenAttestation Demo'],
            minLength: 1,
        },
        courseStartDate: {
            type: 'string',
            description: 'Start date of course',
            examples: ['2023-01-16'],
            format: 'date',
        },
    },
    additionalProperties: false,
} as JSONSchema
