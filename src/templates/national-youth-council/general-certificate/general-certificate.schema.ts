import { JSONSchema } from 'json-schema-to-typescript'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/GeneralCertificate',
    type: 'object',
    required: ['name', 'courseTitle', 'courseStartDate', 'courseEndDate'],
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
            example: 'CSA Milestone Programme',
            minLength: 1,
        },
        courseStartDate: {
            type: 'string',
            description: 'Start date of course',
            example: '2021-12-31',
            format: 'date',
        },
        courseEndDate: {
            type: 'string',
            description: 'End date of course',
            example: '2022-12-31',
            format: 'date',
        },
    },
    additionalProperties: false,
} as JSONSchema
