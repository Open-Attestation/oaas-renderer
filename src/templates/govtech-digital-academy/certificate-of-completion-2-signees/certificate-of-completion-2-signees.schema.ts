import { JSONSchema } from 'json-schema-to-typescript'
import * as commonAssets from '../common/assets/__generated__/images-enum-values'
import { makeEnumString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'GovtechDigitalAcademy/CertificateOfCompletion_2Signees',
    type: 'object',
    required: ['name', 'programmeTitle', 'issueDate', 'signeeOne', 'signeeTwo'],
    properties: {
        name: {
            type: 'string',
            description: 'Name of participant',
            examples: ['Thong Yong Jie Andre'],
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
        signeeOne: {
            type: 'object',
            required: [
                'name',
                'designation',
                'division',
                'organisation',
                'signature_image',
            ],
            properties: {
                name: {
                    type: 'string',
                    description: 'Name of signee one',
                    examples: ['Betsie Chacko'],
                },
                designation: {
                    type: 'string',
                    description: 'Designation of signee one',
                    examples: ['Associate Director'],
                },
                division: {
                    type: 'string',
                    description: 'Division of signee one',
                    examples: ['GovTech Digital Academy'],
                },
                organisation: {
                    type: 'string',
                    description: 'Organisation of signee one',
                    examples: ['Government Technology Agency'],
                },
                signature_image: {
                    type: 'string',
                    description: 'Signature of signee one',
                    examples: ['signature.png'],
                    minLength: 1,
                },
            },
            additionalProperties: false,
        },
        signeeTwo: {
            type: 'object',
            required: [
                'name',
                'designation',
                'division',
                'organisation',
                'signature',
            ],
            properties: {
                name: makeEnumString(
                    'Name of signee two',
                    ['Sahas Sankaran'] as const,
                    'Sahas Sankaran'
                ),
                designation: makeEnumString(
                    'Designation of signee two',
                    ['Director'] as const,
                    'Director'
                ),
                division: makeEnumString(
                    'Division of signee two',
                    ['GovTech Digital Academy'] as const,
                    'GovTech Digital Academy'
                ),
                organisation: makeEnumString(
                    'Organisation of signee two',
                    ['Government Technology Agency'] as const,
                    'Government Technology Agency'
                ),
                signature: {
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
        },
    },
    additionalProperties: false,
} as JSONSchema
