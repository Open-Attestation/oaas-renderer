import { JSONSchema } from 'json-schema-to-typescript'
import { makeDateType, makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'HealthSciencesAuthority/FreeSaleMedicalDevices',
    type: 'object',
    required: [
        'DateOfIssue',
        'certificateNumber',
        'manufacturingSiteName',
        'manufacturingSiteAddress',
        'productOwnerName',
        'productOwnerAddress',
        'registrantName',
        'registrantAddress',
        'signature_image',
        'signatoryName',
        'signatoryTitle',
        'schedule',
    ],
    properties: {
        DateOfIssue: makeDateType('Date of Issue in YYYY-MM-DD', '2023-12-31'),
        certificateNumber: makeRequiredString(
            'Certificate Number',
            'FSC/258/2023'
        ),
        manufacturingSiteName: makeRequiredString(
            'Manufacturing Site name',
            'GMC INC'
        ),
        manufacturingSiteAddress: makeRequiredString(
            'Manufacturing Site address',
            'NO.686, SU CHU RD, CHUZHOU, ANHUI, CHINA'
        ),
        productOwnerName: makeRequiredString(
            'Product owner name',
            'ROSSMAX SWISS GMBH'
        ),
        productOwnerAddress: makeRequiredString(
            'Product owner address',
            'WIDNAUERSTRASSE 1, CH-9435, HEERBRUGG, SWITZERLAND'
        ),
        registrantName: makeRequiredString(
            'Registrant name',
            'BION ADVANCE PTE. LTD'
        ),
        registrantAddress: makeRequiredString(
            'Registrant address',
            '35 PIONEER ROAD NORTH, #02-03 SINGAPORE 628475'
        ),
        signature_image: makeRequiredString(
            'Signature of signatory',
            'signature.png'
        ),
        signatoryName: makeRequiredString(
            'Signature of signatory',
            'DR LAKSHMIDEVI BALAKRISHNAN'
        ),
        signatoryTitle: makeRequiredString(
            'Title of signatory',
            'REGULATORY CONSULTANT'
        ),
        schedule: {
            type: 'array',
            maxItems: 10,
            minItems: 1,
            items: {
                type: 'object',
                required: [
                    'deviceProprietaryOrBrandName',
                    'intendedUse',
                    'appendix',
                ],
                additionalProperties: false,
                properties: {
                    deviceProprietaryOrBrandName: makeRequiredString(
                        'Device Proprietary/Brand Name',
                        'Rossmax Blood Pressure Monitors(Upper Arm)'
                    ),
                    intendedUse: makeRequiredString(
                        'Intended Use',
                        'Intended for measuring systolic and diastolic blood pressure using the oscillometric method for adults at home.'
                    ),
                    appendix: {
                        type: 'array',
                        maxItems: 10,
                        minItems: 1,
                        items: {
                            type: 'object',
                            required: ['modelOrDescription', 'productNumber'],
                            additionalProperties: false,
                            properties: {
                                modelOrDescription: makeRequiredString(
                                    'Model/ Description',
                                    'Rossmax CF155f'
                                ),
                                productNumber: makeRequiredString(
                                    'Product number',
                                    'CF155f'
                                ),
                            },
                        },
                    },
                },
            },
        },
    },
    additionalProperties: false,
} as JSONSchema
