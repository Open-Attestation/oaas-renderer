import { JSONSchema } from 'json-schema-to-typescript'
import { makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'HealthSciencesAuthority/HsaLicenseCertificate',
    type: 'object',
    required: [
        'organisationName',
        'certificateNo',
        'certContent_pdf',
        'productInfo_pdf',
    ],
    properties: {
        organisationName: makeRequiredString(
            'Name of Organisation',
            'ABC PTE LTD'
        ),
        certificateNo: makeRequiredString('Certificate Number', 'MCEL2000999'),
        certContent_pdf: makeRequiredString(
            'Certificate content',
            'certificate.pdf'
        ),
        productInfo_pdf: {
            type: 'string',
            description: 'Product information',
            examples: ['product.pdf'],
        },
    },
    additionalProperties: false,
} as JSONSchema
