import { JSONSchema } from 'json-schema-to-typescript'
import enumValues from '../common-assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/ObsWmfr',
    type: 'object',
    required: [
        'name',
        'issueDate',
        'serialNumber',
        'issuingOfficerName',
        'issuingOfficerPosition',
        'issuingOfficerSignature',
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
            example: '2022-12-31',
            format: 'date',
        },
        serialNumber: {
            type: 'string',
            description: 'Serial number',
            examples: ['OBSWMFR20XX/XXX'],
            minLength: 1,
        },
        issuingOfficerName: {
            type: 'string',
            description: 'Name of the issuing officer',
            examples: ['Nicholas Conceicao'],
            minLength: 1,
        },
        issuingOfficerPosition: {
            type: 'string',
            description: 'Position of the issuing officer',
            examples: ['Executive Director'],
            minLength: 1,
        },
        issuingOfficerSignature: {
            type: 'string',
            description: "Image hash value of the issuing officer's signature",
            examples: [
                '1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120',
            ],
            enum: enumValues,
        },
    },
    additionalProperties: false,
} as JSONSchema
