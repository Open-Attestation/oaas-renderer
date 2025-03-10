import { JSONSchema } from 'json-schema-to-typescript'
import { makeRequiredString, makeEnumString } from 'utils/json-schema-utils'

import * as commonAssets from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'Govtech/CrisprCop',
    type: 'object',
    required: [
        'name',
        'programmeTitle',
        'issueDate',
        'signeeName',
        'signeeDesignation',
        'signeeSignature',
    ],
    properties: {
        name: makeRequiredString('Name of participant', 'John Doe', 40),
        programmeTitle: makeRequiredString(
            'Title of the programme',
            'CRISPr Workshop',
            60
        ),
        issueDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2025-03-26'],
            format: 'date',
        },
        signeeName: makeEnumString(
            'Name of signee',
            ['Yap Ghim Eng'] as const,
            'Yap Ghim Eng'
        ),
        signeeDesignation: makeEnumString(
            'Designation of signee',
            ['Director of Data Engineering Practice'] as const,
            'Director of Data Engineering Practice'
        ),
        signeeSignature: {
            type: 'string',
            description: "SHA256 hash of the signee's signature",
            enum: commonAssets.getEnumValues([
                'yap-ghim-eng-signature&d5385b8a7e5a66e9be2b8e942ead4c23d9392c196d77b93a1be24d5c94324986.png',
            ]),
            examples: commonAssets.getEnumValues([
                'yap-ghim-eng-signature&d5385b8a7e5a66e9be2b8e942ead4c23d9392c196d77b93a1be24d5c94324986.png',
            ]),
        },
    },
    additionalProperties: false,
} as JSONSchema
