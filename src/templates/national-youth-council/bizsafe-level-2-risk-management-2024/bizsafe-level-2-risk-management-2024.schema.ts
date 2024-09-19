import { JSONSchema } from 'json-schema-to-typescript'
import { makeDateType, makeEnumString } from 'utils/json-schema-utils'

import * as commonAssets from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/BizsafeLevel_2RiskManagement_2024',
    type: 'object',
    required: [
        'name',
        'nricFirstCharacter',
        'nricLast4Characters',
        'issueDate',
        'organisationRepSignature',
        'organisationRepName',
        'organisationRepTitle',
    ],
    properties: {
        name: {
            type: 'string',
            description: 'Name of recipient',
            examples: ['Chao Siew Bao'],
            minLength: 1,
        },
        nricFirstCharacter: {
            type: 'string',
            description: 'First character of recipient NRIC',
            examples: ['S'],
            minLength: 1,
            maxLength: 1,
        },
        nricLast4Characters: {
            type: 'string',
            description: 'Last 4 characters of recipient NRIC',
            examples: ['888G'],
            minLength: 4,
            maxLength: 4,
        },
        issueDate: makeDateType('Date of issue', '2024-12-31'),
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
