import { JSONSchema } from 'json-schema-to-typescript'
import { getEnumValues } from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/StandardFirstAid',
    type: 'object',
    required: [
        'name',
        'issueDate',
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
        issueDate: {
            type: 'string',
            format: 'date',
            description: 'Issuance date of the certificate',
            examples: ['2022-12-31'],
        },
        ciName: {
            type: 'string',
            description: 'Name of trainer',
            enum: ['Fazdli Jamal', 'Jaffar Ali'],
            examples: ['Fazdli Jamal'],
            minLength: 1,
        },
        ciSignature: {
            type: 'string',
            description: "CI's signature",
            enum: getEnumValues([
                'fazdli-jamal-signature&09fc5bfca94f8c519f9433c611b4fb9ff8cfed316343125469a8addee67c6b06.png',
                'jaffar-ali-signature&3d805f88bf49b640f6498c0e5335806289c24ee9533c7b79b08f3a5e454f1be4.png',
            ]),
            examples: getEnumValues([
                'fazdli-jamal-signature&09fc5bfca94f8c519f9433c611b4fb9ff8cfed316343125469a8addee67c6b06.png',
                'jaffar-ali-signature&3d805f88bf49b640f6498c0e5335806289c24ee9533c7b79b08f3a5e454f1be4.png',
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
