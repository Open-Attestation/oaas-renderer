import { JSONSchema } from 'json-schema-to-typescript'
import {
    makeDateType,
    makeEnumString,
    makeRequiredString,
} from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'TrustdocsDemo/LicenseToVerifyTrial',
    type: 'object',
    required: [
        'name',
        'profile_image',
        'issuedOnDate',
        'validTillDate',
        'assessorName',
        'countryOfAssessment',
    ],
    properties: {
        name: makeRequiredString('Name of recipient', '{Your Name}'),
        profile_image: makeRequiredString(
            'Filename of the profile image',
            'photo.png'
        ),
        issuedOnDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2024-11-20'],
            format: 'date',
            formatMaximum: {
                $data: '1/validTillDate',
            },
        },
        validTillDate: {
            type: 'string',
            description: 'Date of expiry',
            examples: ['2024-12-31'],
            format: 'date',
            formatMinimum: {
                $data: '1/issuedOnDate',
            },
        },
        assessorName: makeRequiredString('Name of assessor', 'TrustDocs demo'),
        countryOfAssessment: makeEnumString(
            'Contry of assessment',
            ['Singapore'] as const,
            'Singapore'
        ),
    },
    additionalProperties: false,
} as JSONSchema
