import { JSONSchema } from 'json-schema-to-typescript'
import * as commonAssets from '../common/assets/__generated__/images-enum-values'
import { makeEnumString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'GovtechDigitalAcademy/CertificateOfCompletion_2Signees',
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
            ['Sahas Sankaran'] as const,
            'Sahas Sankaran'
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
                'sahas-sankaran-signature&d83beb8b8fe3c9a7efba8b80a693c4d58d33e4e94f1f4b556f13769742f861b9.svg',
            ]),
            examples: commonAssets.getEnumValues([
                'sahas-sankaran-signature&d83beb8b8fe3c9a7efba8b80a693c4d58d33e4e94f1f4b556f13769742f861b9.svg',
            ]),
        },
    },
    additionalProperties: false,
} as JSONSchema
