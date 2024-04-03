import { JSONSchema } from 'json-schema-to-typescript'
import { makeEnumString } from 'utils/json-schema-utils'
import * as commonAssets from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'SingaporeJudicialCollege/CertificateOfCompletion',
    type: 'object',
    required: [
        'name',
        'courseTitle',
        'courseStartDate',
        'courseEndDate',
        'issuanceDate',
        'signeeName',
        'signeeDesignation',
        'signeeSignature',
    ],
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
        issuanceDate: {
            type: 'string',
            description: 'Issuance date of certificate',
            examples: ['2022-06-04'],
            format: 'date',
            formatMinimum: {
                $data: '1/courseEndDate',
            },
        },
        signeeName: makeEnumString(
            'Name of signee',
            ['Sundaresh Menon'] as const,
            'Sundaresh Menon'
        ),
        signeeDesignation: makeEnumString(
            'Designation of signee',
            ['Chief Justice'] as const,
            'Chief Justice'
        ),
        signeeSignature: {
            type: 'string',
            description: "SHA256 hash of the signee's signature",
            enum: commonAssets.getEnumValues([
                'sample-signature&cacfb1e1c1af263245b1925f10eab6cb6bf675111478bb91e54ecd250482ce7c.png',
            ]),
            examples: commonAssets.getEnumValues([
                'sample-signature&cacfb1e1c1af263245b1925f10eab6cb6bf675111478bb91e54ecd250482ce7c.png',
            ]),
        },
    },
    additionalProperties: false,
} as JSONSchema
