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
            examples: [`Farah Binte Ja'afar`],
            enum: ['Fazdli Jamal', `Farah Binte Ja'afar`],
            minLength: 1,
        },
        ciSignature: {
            type: 'string',
            description: "CI's signature",
            enum: getEnumValues([
                'farah-binte-ja-afar-signature&bcb9a2d20c8b72e7b5372df3e518a0528c15b4cdddc92025b06fd5fc986e1e20.png',
                'fazdli-jamal-signature&bd3a19338a826f4634b51ec9540cd6c044bda125bc6add929df6ef407b458bb2.png',
            ]),
            examples: getEnumValues([
                'farah-binte-ja-afar-signature&bcb9a2d20c8b72e7b5372df3e518a0528c15b4cdddc92025b06fd5fc986e1e20.png',
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