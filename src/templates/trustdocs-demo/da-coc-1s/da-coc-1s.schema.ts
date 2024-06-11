import { JSONSchema } from 'json-schema-to-typescript'
import { makeEnumString } from 'utils/json-schema-utils'
import * as commonAssets from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'TrustdocsDemo/DaCoc_1s',
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
    ],
    properties: {
        name: {
            type: 'string',
            description: 'Name of participant',
            examples: ['SAMPLE_NAME1'],
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
            ['Sample_name2'] as const,
            'Sample_name2'
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
                'demo_signature&73dc9d9d6712302c945fbb91d91cc65ef20f6b0d60a0665defbf7d418a506d33.png',
            ]),
            examples: commonAssets.getEnumValues([
                'demo_signature&73dc9d9d6712302c945fbb91d91cc65ef20f6b0d60a0665defbf7d418a506d33.png',
            ]),
        },
    },
    additionalProperties: false,
} as JSONSchema
