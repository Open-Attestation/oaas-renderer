import { JSONSchema } from 'json-schema-to-typescript'
import * as commonAssets from '../common/assets/__generated__/images-enum-values'
import { makeEnumString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/ObsCoaching',
    type: 'object',
    required: [
        'name',
        'courseTitle',
        'issueDate',
        'validityDurationInYears',
        'certificateNumber',
        'organisationRepSignature',
        'organisationRepName',
        'organisationRepTitle',
    ],
    properties: {
        name: {
            type: 'string',
            description: 'Name of awardee',
            examples: ['Abdul Haireel Bin Abdul Haleem'],
            minLength: 1,
        },
        courseTitle: {
            type: 'string',
            description: 'Title of the course',
            examples: ['Dinghy Sailing Coach'],
            minLength: 1,
        },
        issueDate: {
            type: 'string',
            description: 'Issue date of certificate',
            examples: ['2021-12-31'],
            format: 'date',
        },
        validityDurationInYears: {
            type: 'string',
            description: 'Duration of certificate validity in years',
            enum: ['1', '2', '3'],
        },
        certificateNumber: {
            type: 'string',
            description: 'Certificate number',
            examples: ['DSL1-2022-001'],
            minLength: 1,
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
