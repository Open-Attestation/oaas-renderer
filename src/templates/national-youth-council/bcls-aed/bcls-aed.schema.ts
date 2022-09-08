import { JSONSchema } from 'json-schema-to-typescript'
import enumValues from '../common-assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/BclsAed',
    type: 'object',
    required: [
        'name',
        'nric',
        'issueDate',
        'trainerName',
        'ciSignature',
        'serialNumber',
    ],
    properties: {
        name: {
            type: 'string',
            examples: ['John Wick'],
            minLength: 1,
        },
        nric: {
            type: 'string',
            description: 'NRIC of the recipient',
            examples: ['S0000001A'],
            minLength: 1,
        },
        issueDate: {
            type: 'string',
            format: 'date',
            description: 'Issuance date of the certificate',
            examples: ['2022-12-31'],
        },
        trainerName: {
            type: 'string',
            description: 'Name of trainer',
            examples: ['Keanu Reeves'],
            minLength: 1,
        },
        ciSignature: {
            type: 'string',
            description: "CI's signature",
            enum: enumValues,
        },
        serialNumber: {
            type: 'string',
            description: 'Certificate number',
            examples: ['OBSBCLS20XX/XXX'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
