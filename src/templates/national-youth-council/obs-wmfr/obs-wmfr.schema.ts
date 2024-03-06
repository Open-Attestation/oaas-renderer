import { JSONSchema } from 'json-schema-to-typescript'
import { getEnumValues } from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/ObsWmfr',
    type: 'object',
    required: [
        'name',
        'issueDate',
        'certificateNumber',
        'ExecDirName',
        'ExecDirSignature',
    ],
    properties: {
        name: {
            type: 'string',
            examples: ['John Wick'],
            minLength: 1,
        },
        issueDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2022-12-31'],
            format: 'date',
        },
        certificateNumber: {
            type: 'string',
            description: 'Certificate number',
            examples: ['OBSWMFR-2024-001'],
            minLength: 1,
        },
        ExecDirName: {
            type: 'string',
            description: 'Name of the issuing officer',
            enum: ['Nicholas Conceicao'],
            examples: ['Nicholas Conceicao'],
            minLength: 1,
        },
        ExecDirSignature: {
            type: 'string',
            description: "Image hash value of the issuing officer's signature",
            enum: getEnumValues([
                'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
            ]),
            examples: getEnumValues([
                'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
            ]),
        },
    },
    additionalProperties: false,
} as JSONSchema
