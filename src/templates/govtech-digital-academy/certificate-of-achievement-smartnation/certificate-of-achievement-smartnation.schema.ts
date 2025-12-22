import { JSONSchema } from 'json-schema-to-typescript'
import { makeRequiredString, makeEnumString } from 'utils/json-schema-utils'

import * as commonAssets from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'GovtechDigitalAcademy/CertificateOfAchievementSmartnation',
    type: 'object',
    required: [
        'name',
        'programmeTitle',
        'programmeStartDate',
        'programmeEndDate',
        'signeeName',
        'signeeDesignation',
        'signeeOrganisation',
        'signeeSignature',
    ],
    properties: {
        name: makeRequiredString('Name of participant', 'Tan Chen Chen', 100),
        programmeTitle: makeRequiredString(
            'Title of the programme',
            'TechUp Run 3',
            100
        ),
        programmeStartDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2024-10-28'],
            format: 'date',
            formatMaximum: {
                $data: '1/programmeEndDate',
            },
        },
        programmeEndDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2024-11-22'],
            format: 'date',
            formatMinimum: {
                $data: '1/programmeStartDate',
            },
        },
        signeeName: makeEnumString(
            'Name of signee',
            ['Joseph Leong'] as const,
            'Joseph Leong'
        ),
        signeeDesignation: makeEnumString(
            'Designation of signee',
            ['Permanent Secretary'] as const,
            'Permanent Secretary'
        ),
        signeeOrganisation: makeEnumString(
            'Organisation of signee',
            [
                'Ministry of Digital Development and Information, Smart Nation, and Cybersecurity',
            ] as const,
            'Ministry of Digital Development and Information, Smart Nation, and Cybersecurity'
        ),
        signeeSignature: {
            type: 'string',
            description: "SHA256 hash of the signee's signature",
            enum: commonAssets.getEnumValues([
                'joseph-leong-coa-signature&3f58615390f610d16d0dfdfb330cad21194eb768780cec807924ce66a321f821.png',
            ]),
            examples: commonAssets.getEnumValues([
                'joseph-leong-coa-signature&3f58615390f610d16d0dfdfb330cad21194eb768780cec807924ce66a321f821.png',
            ]),
        },
    },
    additionalProperties: false,
} as JSONSchema
