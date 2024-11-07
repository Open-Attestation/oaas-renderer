import { JSONSchema } from 'json-schema-to-typescript'
import { makeEnumString, makeRequiredString } from 'utils/json-schema-utils'

import * as commonAssets from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'Govtech/DatCoa',
    type: 'object',
    required: [
        'name',
        'awardPlacement',
        'awardType',
        'issueDate',
        'signeeName',
        'signeeDesignation',
        'signeeSignature',
    ],
    properties: {
        name: makeRequiredString('Name of participant', 'Johnathan Doe', 28),
        awardPlacement: makeEnumString(
            'Awardee placement',
            [
                'Champion',
                '1st Runner Up',
                '2nd Runner Up',
                'Semi Finalist',
            ] as const,
            'Champion'
        ),
        awardType: makeEnumString(
            'Award type',
            [
                'Prompt Royale Award',
                'Prompt Royale X Award',
                'Prompt Royale Open Award',
                'VIZtory Award',
            ] as const,
            'Prompt Royale Award'
        ),
        issueDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2024-11-15'],
            format: 'date',
        },
        signeeName: makeEnumString(
            'Name of signee',
            ['Chang Sau Sheong'] as const,
            'Chang Sau Sheong'
        ),
        signeeDesignation: makeEnumString(
            'Designation of signee',
            ['DEPUTY CHIEF EXECUTIVE'] as const,
            'DEPUTY CHIEF EXECUTIVE'
        ),
        signeeSignature: {
            type: 'string',
            description: "SHA256 hash of the signee's signature",
            enum: commonAssets.getEnumValues([
                'chang-sau-sheong-signature&9b31b9f05b81bc64dfd2a9ecb412ed43297da93bf7c8708407954d1ac855ad96.png',
            ]),
            examples: commonAssets.getEnumValues([
                'chang-sau-sheong-signature&9b31b9f05b81bc64dfd2a9ecb412ed43297da93bf7c8708407954d1ac855ad96.png',
            ]),
        },
    },
    additionalProperties: false,
} as JSONSchema
