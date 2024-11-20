import { JSONSchema } from 'json-schema-to-typescript'

import { getEnumValues } from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/StandardFirstAidOct_24',
    type: 'object',
    required: [
        'name',
        'partialNricOrPassport',
        'issueDate',
        'courseDate',
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
        courseDate: {
            type: 'string',
            description: 'Course date of the certificate',
            examples: ['01-02 September 2024'],
        },
        courseBatchNumber: {
            type: 'string',
            description: 'Course batch number',
            examples: ['MST-SFA-2024-01'],
        },
        ciName: {
            type: 'string',
            description: 'Name of trainer',
            enum: ['Darvin Bin Rozali'],
            examples: ['Darvin Bin Rozali'],
            minLength: 1,
        },
        ciSignature: {
            type: 'string',
            description: "CI's signature",
            enum: getEnumValues([
                'darvin-bin-rozali-signature&88b24e2878675c1939b90322909ee5d40e1a36648fce0c29cb8ded459eb2d3b6.png',
            ]),
            examples: getEnumValues([
                'darvin-bin-rozali-signature&88b24e2878675c1939b90322909ee5d40e1a36648fce0c29cb8ded459eb2d3b6.png',
            ]),
        },
        certificateNumber: {
            type: 'string',
            description: 'Certificate number',
            examples: ['OBSSFA-2024-001'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
