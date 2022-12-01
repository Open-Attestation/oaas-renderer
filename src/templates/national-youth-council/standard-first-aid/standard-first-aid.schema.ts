import { JSONSchema } from 'json-schema-to-typescript'
import { getEnumValues } from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/StandardFirstAid',
    type: 'object',
    required: ['name', 'issueDate', 'ciName', 'ciSignature', 'serialNumber'],
    properties: {
        name: {
            type: 'string',
            examples: ['John Wick'],
            minLength: 1,
        },
        issueDate: {
            type: 'string',
            format: 'date',
            description: 'Issuance date of the certificate',
            examples: ['2022-12-31'],
        },
        ciName: {
            type: 'string',
            description: 'Name of trainer',
            enum: ['Fazdli Jamal'],
            examples: ['Fazdli Jamal'],
            minLength: 1,
        },
        ciSignature: {
            type: 'string',
            description: "CI's signature",
            enum: getEnumValues([
                'fazdli-jamal-signature&bd3a19338a826f4634b51ec9540cd6c044bda125bc6add929df6ef407b458bb2.png',
            ]),
            examples: getEnumValues([
                'fazdli-jamal-signature&bd3a19338a826f4634b51ec9540cd6c044bda125bc6add929df6ef407b458bb2.png',
            ]),
        },
        serialNumber: {
            type: 'string',
            description: 'Certificate number',
            examples: ['OBSSFA20XX/XXX'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema