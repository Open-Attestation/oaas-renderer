import { JSONSchema } from 'json-schema-to-typescript'
import * as commonAssets from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/ObsMoc',
    type: 'object',
    required: [
        'name',
        'courseTitle',
        'courseStartDate',
        'courseEndDate',
        'courseDescription',
        'organisationRepSignature',
        'organisationRepName',
        'organisationRepTitle',
        'groupPhoto',
    ],
    properties: {
        name: {
            type: 'string',
            description: 'Name of the awardee',
            examples: ['Yeo Yoyo'],
            minLength: 1,
        },
        courseTitle: {
            type: 'string',
            description: 'Title of the course',
            examples: [
                'A mentally and physically challenging expeditionary Outward Bound Course as part of the National Outdoor Adventure Education Masterplan',
            ],
            minLength: 1,
        },
        courseStartDate: {
            type: 'string',
            description: 'Start date of the course',
            examples: ['2022-05-10'],
            format: 'date',
        },
        courseEndDate: {
            type: 'string',
            description: 'End date of the course',
            examples: ['2022-05-15'],
            format: 'date',
        },
        organisationRepName: {
            type: 'string',
            description: 'Name of the organisation representation',
            examples: ['Nicholas Conceicao'],
            minLength: 1,
        },
        organisationRepTitle: {
            type: 'string',
            description: 'Title of the organisation representation',
            examples: ['Executive Director'],
            minLength: 1,
        },
        organisationRepSignature: {
            type: 'string',
            description:
                "SHA256 hash of the organisation representation's signature",
            enum: commonAssets.getEnumValues([
                'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
            ]),
            examples: commonAssets.getEnumValues([
                'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
            ]),
        },
        courseDescription: {
            type: 'string',
            description: 'Description of the course',
            examples: ['national-outdoor-adventure-education-masterplan'],
            minLength: 1,
        },
        groupPhoto: {
            type: 'string',
            description: 'Group photo',
            examples: ['photo.png'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
