import { JSONSchema } from 'json-schema-to-typescript'
import enumValues from '../common-assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/CciLevel_1',
    type: 'object',
    required: [
        'name',
        'issueDate',
        'courseDate',
        'dutyProgrammeOfficerName',
        'dutyProgrammeOfficerSignature',
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
        courseDate: {
            type: 'string',
            format: 'date',
            description: 'Course date',
            examples: ['2022-11-30'],
        },
        dutyProgrammeOfficerName: {
            type: 'string',
            description: 'Name of Duty Programme Officer',
            minLength: 1,
        },
        dutyProgrammeOfficerSignature: {
            type: 'string',
            description: "Duty Programme Officer's signature",
            enum: enumValues,
        },
        serialNumber: {
            type: 'string',
            description: 'Certificate number',
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
