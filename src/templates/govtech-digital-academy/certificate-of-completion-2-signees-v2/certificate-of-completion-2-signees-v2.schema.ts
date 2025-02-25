import { JSONSchema } from 'json-schema-to-typescript'
import { makeEnumString } from 'utils/json-schema-utils'

import * as commonAssets from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'GovtechDigitalAcademy/CertificateOfCompletion_2SigneesV2',
    type: 'object',
    required: [
        'name',
        'programmeTitle',
        'issueDate',
        'signeeOneName',
        'signeeOneDesignation',
        'signeeOneDivision',
        'signeeOneOrganisation',
        'signeeOneSignature_image',
        'signeeTwoName',
        'signeeTwoDesignation',
        'signeeTwoDivision',
        'signeeTwoOrganisation',
        'signeeTwoSignature',
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
        signeeOneName: {
            type: 'string',
            description: 'Name of signee one',
            examples: ['Betsie Chacko'],
        },
        signeeOneDesignation: {
            type: 'string',
            description: 'Designation of signee one',
            examples: ['Associate Director'],
        },
        signeeOneDivision: {
            type: 'string',
            description: 'Division of signee one',
            examples: ['GovTech Digital Academy'],
        },
        signeeOneOrganisation: {
            type: 'string',
            description: 'Organisation of signee one',
            examples: ['Government Technology Agency'],
        },
        signeeOneSignature_image: {
            type: 'string',
            description: 'Signature of signee one',
            examples: ['signature.png'],
            minLength: 1,
        },
        signeeTwoName: makeEnumString(
            'Name of signee two',
            ['Patrick Pang'] as const,
            'Patrick Pang'
        ),
        signeeTwoDesignation: makeEnumString(
            'Designation of signee two',
            ['Director'] as const,
            'Director'
        ),
        signeeTwoDivision: makeEnumString(
            'Division of signee two',
            ['GovTech Digital Academy'] as const,
            'GovTech Digital Academy'
        ),
        signeeTwoOrganisation: makeEnumString(
            'Organisation of signee two',
            ['Government Technology Agency'] as const,
            'Government Technology Agency'
        ),
        signeeTwoSignature: {
            type: 'string',
            description: "SHA256 hash of the signee two's signature",
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
