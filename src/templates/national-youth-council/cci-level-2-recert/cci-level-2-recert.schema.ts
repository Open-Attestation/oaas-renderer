import { JSONSchema } from 'json-schema-to-typescript'
import * as commonAssets from '../common/assets/__generated__/images-enum-values'
import { makeEnumString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/CciLevel_2Recert',
    type: 'object',
    required: [
        'name',
        'issueDate',
        'serialNumber',
        'organisationRepSignature',
        'organisationRepName',
        'organisationRepTitle',
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
        serialNumber: {
            type: 'string',
            description: 'Certificate number',
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
