import { JSONSchema } from 'json-schema-to-typescript'

import { getEnumValues } from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/BclsAedOct_24',
    type: 'object',
    required: [
        'name',
        'partialNricOrPassport',
        'issueDate',
        'courseBatchNumber',
        'ciName',
        'ciSignature',
        'certificateNumber',
    ],
    properties: {
        name: {
            type: 'string',
            examples: ['John Wick'],
            minLength: 1,
        },
        partialNricOrPassport: {
            type: 'string',
            description: 'Last 4 characters of NRIC/passport',
            examples: ['123A'],
            minLength: 4,
            maxLength: 4,
        },
        issueDate: {
            type: 'string',
            format: 'date',
            description: 'Issuance date of the certificate',
            examples: ['2022-12-31'],
        },
        courseBatchNumber: {
            type: 'string',
            description: 'Course batch number',
            examples: ['MST-SFA-2024-01'],
        },
        ciName: {
            type: 'string',
            description: 'Name of trainer',
            enum: [`Jaffar Ali`, `Fazdli Jamal`, `Darvin Bin Rozali`],
            examples: [`Jaffar Ali`],
            minLength: 1,
        },
        ciSignature: {
            type: 'string',
            description: "CI's signature",
            enum: getEnumValues([
                'jaffar-ali-signature&3d805f88bf49b640f6498c0e5335806289c24ee9533c7b79b08f3a5e454f1be4.png',
                'fazdli-jamal-signature&09fc5bfca94f8c519f9433c611b4fb9ff8cfed316343125469a8addee67c6b06.png',
                'darvin-bin-rozali-signature&88b24e2878675c1939b90322909ee5d40e1a36648fce0c29cb8ded459eb2d3b6.png',
            ]),
            examples: getEnumValues([
                'jaffar-ali-signature&3d805f88bf49b640f6498c0e5335806289c24ee9533c7b79b08f3a5e454f1be4.png',
                'fazdli-jamal-signature&09fc5bfca94f8c519f9433c611b4fb9ff8cfed316343125469a8addee67c6b06.png',
                'darvin-bin-rozali-signature&88b24e2878675c1939b90322909ee5d40e1a36648fce0c29cb8ded459eb2d3b6.png',
            ]),
        },
        certificateNumber: {
            type: 'string',
            description: 'Certificate number',
            examples: ['OBSBCLS-2024-001'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
