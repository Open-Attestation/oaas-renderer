import { JSONSchema } from 'json-schema-to-typescript'
import { makeEnumString, makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'Mindef/MindefPdf',
    type: 'object',
    required: ['name', 'documentName', 'referenceNo', 'input_pdf'],
    properties: {
        name: makeRequiredString('Name of participant', 'Johnathan Doe'),
        documentName: makeEnumString(
            'Name of this document',
            [
                'Certificate of Service Package',
                'Certificate of Service',
                'Transcript',
                'Testimonial',
                'Transcript and Testimonial',
            ] as const,
            'Certificate of Service Package'
        ),
        referenceNo: makeRequiredString('Reference number', '0034567'),
        input_pdf: makeRequiredString('input pdf filename', 'input.pdf'),
    },
    additionalProperties: false,
} as JSONSchema
