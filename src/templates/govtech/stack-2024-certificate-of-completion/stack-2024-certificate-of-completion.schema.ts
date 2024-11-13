import { JSONSchema } from 'json-schema-to-typescript'
import { makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'Govtech/Stack_2024CertificateOfCompletion',
    type: 'object',
    required: [
        'name',
        'workshopTitle',
        'trainerName',
        'organisation',
        'signature_image',
        'issueDate',
    ],
    properties: {
        name: makeRequiredString(
            'Name of recipient',
            'Tan Chen Chen, Orange',
            50
        ),
        workshopTitle: makeRequiredString(
            "Workshop's title",
            'Workshop Title',
            100
        ),
        trainerName: makeRequiredString('Trainer Name', 'Christopher Tan', 50),
        organisation: makeRequiredString(
            'Organisation',
            'Ministry of Magic',
            50
        ),
        signature_image: makeRequiredString(
            'Filename of signature',
            'signature.png'
        ),
        issueDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2024-11-05'],
            format: 'date',
        },
    },
    additionalProperties: false,
} as JSONSchema
