import { JSONSchema } from 'json-schema-to-typescript'
import * as commonAssets from '../common/assets/__generated__/images-enum-values'
import { makeEnumString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'GovtechDigitalAcademy/CertificateOfParticipation_1Signee',
    type: 'object',
    required: [
        'name',
        'programmeTitle',
        'issueDate',
        'signeeName',
        'signeeDesignation',
        'signeeDivision',
        'signeeOrganisation',
        'signeeSignature',
        'partnerLogo_image',
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
        signeeName: makeEnumString(
            'Name of signee',
            ['Sahas Sankaran'] as const,
            'Sahas Sankaran'
        ),
        signeeDesignation: makeEnumString(
            'Designation of signee',
            ['Director'] as const,
            'Director'
        ),
        signeeDivision: makeEnumString(
            'Division of signee',
            ['GovTech Digital Academy'] as const,
            'GovTech Digital Academy'
        ),
        signeeOrganisation: makeEnumString(
            'Organisation of signee',
            ['Government Technology Agency'] as const,
            'Government Technology Agency'
        ),
        signeeSignature: {
            type: 'string',
            description: "SHA256 hash of the signee's signature",
            enum: commonAssets.getEnumValues([
                'sahas-sankaran-signature&d83beb8b8fe3c9a7efba8b80a693c4d58d33e4e94f1f4b556f13769742f861b9.svg',
            ]),
            examples: commonAssets.getEnumValues([
                'sahas-sankaran-signature&d83beb8b8fe3c9a7efba8b80a693c4d58d33e4e94f1f4b556f13769742f861b9.svg',
            ]),
        },
        partnerLogo_image: {
            type: 'string',
            description: 'Logo of partner',
            examples: ['partnerlogo.png'],
            minLength: 1,
        },
    },
} as JSONSchema
