import { JSONSchema } from 'json-schema-to-typescript'
import { makeEnumString } from 'utils/json-schema-utils'

import * as commonAssets from '../common/assets/__generated__/images-enum-values'
export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'GovtechDigitalAcademy/CertificateOfAchievement_1SigneeV2',
    type: 'object',
    required: [
        'name',
        'programmeTitle',
        'issueDate',
        'signeeOneName',
        'signeeOneDesignation',
        'signeeOneDivision',
        'signeeOneOrganisation',
        'signeeOneSignature',
    ],
    properties: {
        name: {
            type: 'string',
            description: 'Name of participant',
            examples: ['THONG YONG JIE ANDRE'],
            minLength: 1,
        },
        programmeTitle: {
            type: 'string',
            description: 'Title of the programme',
            examples: [
                'Certified ScrumMaster (CSM) + Certified LeSS Basics (CLB) Workshop',
            ],
            minLength: 1,
        },
        issueDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2022-05-10'],
            format: 'date',
        },
        signeeOneName: makeEnumString(
            'Name of signee one',
            ['Patrick Pang'] as const,
            'Patrick Pang'
        ),
        signeeOneDesignation: makeEnumString(
            'Designation of signee one',
            ['Director'] as const,
            'Director'
        ),
        signeeOneDivision: makeEnumString(
            'Division of signee one',
            ['GovTech Digital Academy'] as const,
            'GovTech Digital Academy'
        ),
        signeeOneOrganisation: makeEnumString(
            'Organisation of signee one',
            ['Government Technology Agency'] as const,
            'Government Technology Agency'
        ),
        signeeOneSignature: {
            type: 'string',
            description: "SHA256 hash of the signee one's signature",
            enum: commonAssets.getEnumValues([
                'patrick-pang-signature&39573e7f99ce6836b3fc4785dc6d2071b037fe9926fc9133b08aaabab40451a4.png',
            ]),
            examples: commonAssets.getEnumValues([
                'patrick-pang-signature&39573e7f99ce6836b3fc4785dc6d2071b037fe9926fc9133b08aaabab40451a4.png',
            ]),
        },
    },
    additionalProperties: false,
} as JSONSchema
