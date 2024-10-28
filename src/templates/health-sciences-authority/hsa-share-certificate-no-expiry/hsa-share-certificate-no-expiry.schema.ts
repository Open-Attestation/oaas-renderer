import { JSONSchema } from 'json-schema-to-typescript'
import {
    makeRequiredString,
    makeEnumString,
    makeDateType,
} from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'HealthSciencesAuthority/HsaShareCertificateNoExpiry',
    type: 'object',
    required: [
        'organisationName',
        'documentName',
        'documentReference',
        'signatoryName',
        'signatoryDesignation',
        'agencyName',
        'pdfContent_pdf',
    ],
    properties: {
        organisationName: makeRequiredString(
            'Name of the receiving oraganisation',
            'ABC PTE LTD'
        ),
        documentName: makeRequiredString(
            'Document name',
            'Free Sale Certificate'
        ),
        documentReference: makeRequiredString(
            'Document reference',
            'MCELYY00xxx'
        ),
        signatoryName: makeRequiredString(
            'Name of SAL officer',
            'Thong Yong Jie Andre'
        ),
        signatoryDesignation: makeRequiredString(
            'Designation of SAL officer',
            'Approving officer'
        ),
        agencyName: makeEnumString(
            'Agency name for the SAL e-apostille',
            ['Health Sciences Authority'] as const,
            'Health Sciences Authority'
        ),
        pdfContent_pdf: makeRequiredString(
            'input pdf filename or base64 encoded string',
            'input.pdf'
        ),
    },
    additionalProperties: false,
} as JSONSchema
