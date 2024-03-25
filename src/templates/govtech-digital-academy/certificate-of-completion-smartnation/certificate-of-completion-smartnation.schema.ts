import { JSONSchema } from 'json-schema-to-typescript'
import { makeEnumString } from 'utils/json-schema-utils'
import * as commonAssets from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'GovtechDigitalAcademy/CertificateOfCompletionSmartnation',
    type: 'object',
    required: [
        'name',
        'programmeTitle',
        'programmeStartDate',
        'issueDate',
        'signeeName',
        'signeeDesignation',
        'signeeOrganisation',
        'signeeSignature',
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
                'Information & Communications Technology & Smart Systems Sector Milestone Programme (ICTMP)',
            ],
            minLength: 1,
        },
        programmeStartDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2022-05-10'],
            format: 'date',
            formatMaximum: {
                $data: '1/issueDate',
            },
        },
        issueDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2022-06-03'],
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
            ['Smart Nation and Digital Government Group'] as const,
            'Smart Nation and Digital Government Group'
        ),
        signeeSignature: {
            type: 'string',
            description: "SHA256 hash of the signee's signature",
            enum: commonAssets.getEnumValues([
                'joseph-leong-signature&6bb7c9981a0e17da0609cf3722b244af0006e585d7dc5a293f2383689303672d.png',
            ]),
            examples: commonAssets.getEnumValues([
                'joseph-leong-signature&6bb7c9981a0e17da0609cf3722b244af0006e585d7dc5a293f2383689303672d.png',
            ]),
        },
    },
    additionalProperties: false,
} as JSONSchema
