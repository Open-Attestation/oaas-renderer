import { JSONSchema } from 'json-schema-to-typescript'
import { getEnumValues } from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/BclsAed',
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
            examples: [`Jaffar Ali`],
            enum: ['Fazdli Jamal', `Jaffar Ali`],
            minLength: 1,
        },
        ciSignature: {
            type: 'string',
            description: "CI's signature",
            enum: getEnumValues([
                'jaffar-ali-signature&acd83f1fde2dd3fbddb93bcd870370fd3e273e0675019b4b42ada360e8cdfec4.jpg',
                'fazdli-jamal-signature&bd3a19338a826f4634b51ec9540cd6c044bda125bc6add929df6ef407b458bb2.png',
            ]),
            examples: getEnumValues([
                'jaffar-ali-signature&acd83f1fde2dd3fbddb93bcd870370fd3e273e0675019b4b42ada360e8cdfec4.jpg',
            ]),
        },
        serialNumber: {
            type: 'string',
            description: 'Certificate number',
            examples: ['OBSBCLS20XX/XXX'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
