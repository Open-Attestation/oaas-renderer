import { JSONSchema } from 'json-schema-to-typescript'
import * as commonAssets from '../common/assets/__generated__/images-enum-values'
import { makeEnumString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/GeneralCertificate',
    type: 'object',
    required: [
        'name',
        'courseTitle',
        'courseStartDate',
        'courseEndDate',
        'organisationRepSignature',
        'organisationRepName',
        'organisationRepTitle',
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
            examples: ['2021-12-31'],
            format: 'date',
        },
        courseEndDate: {
            type: 'string',
            description: 'End date of course',
            examples: ['2022-12-31'],
            format: 'date',
        },
        organisationRepName: makeEnumString(
            'Name of the organisation representation',
            ['Nicholas Conceicao'] as const,
            'Nicholas Conceicao'
        ),
        organisationRepTitle: makeEnumString(
            'Title of the organisation representation',
            ['Executive Director'] as const,
            'Executive Director'
        ),
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
    },
    additionalProperties: false,
} as JSONSchema
