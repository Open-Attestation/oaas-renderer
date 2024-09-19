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
    ],
    properties: {
        name: makeRequiredString(
            'Name of recipient',
            'Tan Chen Chen, Orange',
            30
        ),
        workshopTitle: makeRequiredString(
            "Workshop's title",
            'Workshop Title',
            40
        ),
        trainerName: makeRequiredString('Trainer Name', 'Christopher Tan', 30),
        organisation: makeRequiredString(
            'Organisation',
            'Ministry of Magic',
            30
        ),
        signature_image: makeRequiredString(
            'Filename of signature',
            'signature.png'
        ),
    },
    additionalProperties: false,
} as JSONSchema
