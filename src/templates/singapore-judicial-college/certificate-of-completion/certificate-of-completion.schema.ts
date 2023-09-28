import { JSONSchema } from 'json-schema-to-typescript'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'SingaporeJudicialCollege/CertificateOfCompletion',
    type: 'object',
    required: ['name', 'courseTitle', 'courseStartDate', 'courseEndDate'],
    properties: {
        name: {
            type: 'string',
            description: 'Name of awardee',
            examples: ['Goh Yihan'],
            minLength: 1,
            maxLength: 31,
        },
        courseTitle: {
            type: 'string',
            description: 'Title of the course',
            examples: ['COURTROOM COMMUNICATION'],
            minLength: 1,
            maxLength: 155,
        },
        courseStartDate: {
            type: 'string',
            description: 'Start date of course',
            examples: ['2022-05-10'],
            format: 'date',
            formatMaximum: {
                $data: '1/courseEndDate',
            },
        },
        courseEndDate: {
            type: 'string',
            description: 'End date of course',
            examples: ['2022-06-03'],
            format: 'date',
            formatMinimum: {
                $data: '1/courseStartDate',
            },
        },
    },
    additionalProperties: false,
} as JSONSchema
