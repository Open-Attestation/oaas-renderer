import { JSONSchema } from 'json-schema-to-typescript'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'ForTesting/SimpleCert',
    type: 'object',
    required: [
        'name',
        'courseTitle',
        'courseStartDate',
        'courseEndDate',
        'serialNumber',
    ],
    properties: {
        name: {
            type: 'string',
            description: 'Name of awardee',
            examples: ['Thong Yong Jie Andre'],
            minLength: 1,
        },
        courseTitle: {
            type: 'string',
            description: 'Title of the course',
            examples: ['CSA Milestone Programme'],
            minLength: 1,
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
        serialNumber: {
            type: 'string',
            description: 'Certificate number',
            examples: ['OBSBCLS20XX/XXX'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
