import { JSONSchema } from 'json-schema-to-typescript'
import { makeDateType, makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'SingaporeFoodAgency/SfaL1PdfPoc',
    type: 'object',
    required: ['validUntil', 'meta', 'input_pdf'],
    properties: {
        signatoryName: makeRequiredString(
            'Name of SAL officer',
            'Thong Yong Jie Andre'
        ),
        signatoryDesignation: makeRequiredString(
            'Designation of SAL officer',
            'Approving officer'
        ),
        agencyName: makeRequiredString(
            'Agency name for the SAL e-apostille',
            'Singapore Food Agency'
        ),
        validUntil: makeDateType('Expiry date of permit', '2030-04-20'),
        meta: {
            type: 'object',
            required: ['organisationName', 'documentName'],
            additionalProperties: false,
            properties: {
                organisationName: makeRequiredString(
                    'Name of the receiving oraganisation',
                    'ABC PTE LTD'
                ),
                documentName: makeRequiredString(
                    'Document name of the TrustDoc',
                    'XYZ License'
                ),
            },
        },
        input_pdf: makeRequiredString('input pdf filename', 'input.pdf'),
    },
    additionalProperties: false,
} as JSONSchema
