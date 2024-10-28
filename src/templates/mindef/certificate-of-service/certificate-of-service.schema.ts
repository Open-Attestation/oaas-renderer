import { JSONSchema } from 'json-schema-to-typescript'
import { makeDateType, makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'Mindef/CertificateOfService',
    type: 'object',
    required: [
        'name',
        'referenceNo',
        'issueDate',
        'signeeName',
        'signeeDesignation',
        'signeeDepartment',
        'signeeSignature_image',
    ],
    properties: {
        name: makeRequiredString('Name of participant', 'Johnathan Doe'),
        referenceNo: makeRequiredString('Reference number', '0034567'),
        issueDate: makeDateType('Date of Issue', '2024-08-20'),
        signeeName: makeRequiredString('Name of signee', 'LTC SAMPLE NAME'),
        signeeDesignation: makeRequiredString(
            'Designation of signee',
            'Head MINDEF/SAF'
        ),
        signeeDepartment: makeRequiredString(
            'Department of signee',
            'Human Resource Shared Services Centre'
        ),
        signeeSignature_image: {
            type: 'string',
            description: 'Signature of signee',
            examples: ['signature.png'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
