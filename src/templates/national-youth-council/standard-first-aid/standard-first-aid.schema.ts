import { JSONSchema } from 'json-schema-to-typescript'
import { getEnumValues } from '../common-assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/StandardFirstAid',
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
                'ci-signature&1e4008a9529d7f62affa65d71ca40f9e92fe15041b9e77d331ec5a839217fdfc.png',
            ]),
            examples: getEnumValues([
                'ci-signature&1e4008a9529d7f62affa65d71ca40f9e92fe15041b9e77d331ec5a839217fdfc.png',
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
