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
            ['Natalie Skead'] as const,
            'Natalie Skead'
        ),
        signeeDesignation: makeEnumString(
            'Designation of signee',
            ['Dean'] as const,
            'Dean'
        ),
        signeeSignature: {
            type: 'string',
            description: "SHA256 hash of the signee's signature",
            enum: commonAssets.getEnumValues([
                'natalie-skead-signature&195bd78f3c419e8ec21d3d364f50f703e85d43c401639a628d0119b7cbefd935.png',
            ]),
            examples: commonAssets.getEnumValues([
                'natalie-skead-signature&195bd78f3c419e8ec21d3d364f50f703e85d43c401639a628d0119b7cbefd935.png',
            ]),
        },
    },
    additionalProperties: false,
} as JSONSchema
