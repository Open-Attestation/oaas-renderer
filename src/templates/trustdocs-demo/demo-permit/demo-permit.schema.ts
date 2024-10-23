import { JSONSchema } from 'json-schema-to-typescript'
import { makeDateType, makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'TrustdocsDemo/DemoPermit',
    type: 'object',
    required: [
        'name',
        'effectiveDate',
        'expiryDate',
        'addressLineOne',
        'addressLineTwo',
    ],
    properties: {
        name: makeRequiredString(
            'Name of recipient',
            'Tan Chen Chen, Orange',
            35
        ),
        effectiveDate: makeDateType('Effective date of permit', '2024-08-20'),
        expiryDate: makeDateType('Expiry date of permit', '2030-04-20'),
        addressLineOne: makeRequiredString('Address line 1', 'ECLIPSE,', 58),
        addressLineTwo: makeRequiredString(
            'Address line 2',
            '1 Fusionopolis View, Singapore, 138577',
            58
        ),
        logo_image: {
            type: 'string',
            description:
                'base64 data uri of logo image, but filename if it is excel upload flow',
            examples: ['example.png'],
        },
    },
    additionalProperties: false,
} as JSONSchema
