import { JSONSchema } from 'json-schema-to-typescript'
import { getEnumValues } from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/BclsAed',
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
            examples: [`Jaffar Ali`],
            enum: ['Fazdli Jamal', `Jaffar Ali`],
            minLength: 1,
        },
        ciSignature: {
            type: 'string',
            description: "CI's signature",
            enum: getEnumValues([
                'jaffar-ali-signature&8b44a84d49ccd38fea996c652df243b8ab2b1debebdfc32049373e64c3d46807.png',
            ]),
            examples: getEnumValues([
                'jaffar-ali-signature&8b44a84d49ccd38fea996c652df243b8ab2b1debebdfc32049373e64c3d46807.png',
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
