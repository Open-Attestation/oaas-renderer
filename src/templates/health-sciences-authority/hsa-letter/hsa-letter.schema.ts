import { JSONSchema } from 'json-schema-to-typescript'
import { makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'HealthSciencesAuthority/HsaLetter',
    type: 'object',
    required: ['organisationName', 'letter_pdf'],
    properties: {
        organisationName: makeRequiredString(
            'Name of Organisation',
            'ABC PTE LTD'
        ),
        letter_pdf: makeRequiredString('Letter content', 'letter.pdf'),
    },
    additionalProperties: false,
} as JSONSchema
