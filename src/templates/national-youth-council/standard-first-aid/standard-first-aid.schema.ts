import { JSONSchema } from 'json-schema-to-typescript'
import { getEnumValues } from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/StandardFirstAid',
    type: 'object',
    required: [
        'name',
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
        issueDate: {
            type: 'string',
            format: 'date',
            description: 'Issuance date of the certificate',
            examples: ['2022-12-31'],
        },
        trainerName: {
            type: 'string',
            description: 'Name of trainer',
            minLength: 1,
        },
        ciSignature: {
            type: 'string',
            description: "CI's signature",
            enum: getEnumValues([
                'ci-1-signature&bf8c6cd029b7d6775aee555a09a1bf87166f8440c8b8be7eadf3551d6e9fab6e.svg',
                'ci-1-signature-thick&682cb920fc8ee86c4b5e60ca908bd0dcd2fe1a5a4695edb9206c5a7e8edffaa2.svg',
            ]),
            examples: getEnumValues([
                'ci-1-signature-thick&682cb920fc8ee86c4b5e60ca908bd0dcd2fe1a5a4695edb9206c5a7e8edffaa2.svg',
            ]),
        },
        serialNumber: {
            type: 'string',
            description: 'Certificate number',
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
