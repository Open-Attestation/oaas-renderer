import { JSONSchema } from 'json-schema-to-typescript'
import { makeDateType, makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'HealthSciencesAuthority/FreeSale',
    type: 'object',
    required: [
        'certNumber',
        'typeOfMedicinalProduct',
        'manufacturerName',
        'manufacturerAddress',
        'distributorName',
        'distributorAddress',
        'dateOfIssue',
        'signature',
        'designationOfSignee',
        'productName',
        'brandName',
        'intendedUse',
        'countries',
        'ingredients',
    ],
    properties: {
        certNumber: makeRequiredString('certificate number', 'MCEL2300000M'),
        typeOfMedicinalProduct: makeRequiredString(
            'type of medicinal product',
            'Traditional Medicine'
        ),
        manufacturerName: makeRequiredString(
            'name of manufacturer',
            'Example Company A Pte Ltd'
        ),
        manufacturerAddress: makeRequiredString(
            'name of manufacturer',
            '123 Canberra, 01-01 Office A, Singapore 123456'
        ),
        distributorName: makeRequiredString(
            'name of local distributor',
            'Example Company B Pte Ltd'
        ),
        distributorAddress: makeRequiredString(
            'name of local distributor',
            '123 Canberra, 02-02 Office B, Singapore 123457'
        ),
        dateOfIssue: makeDateType('date of issue', '2023-01-01'),
        signature_image: makeRequiredString(
            'file name of uploaded image',
            'signature.png'
        ),
        designationOfSignee: makeRequiredString(
            'designation of Signee',
            'Regulatory Consultant'
        ),
        productName: makeRequiredString(
            'product name in english',
            'Aloe balm body care'
        ),
        brandName: makeRequiredString('brand name', 'Aloe Balm Body Care'),
        intendedUse: makeRequiredString('intended use', 'External use on skin'),
        countries: {
            type: 'array',
            maxItems: 5,
            minItems: 1,
            items: {
                type: 'string',
                description: 'country name',
                examples: ['SPAIN'],
            },
        },
        ingredients: {
            type: 'array',
            maxItems: 20,
            minItems: 1,
            items: {
                type: 'object',
                additionalProperties: false,
                required: ['name', 'strength'],
                properties: {
                    name: makeRequiredString('name of ingredient', 'Lanolin'),
                    strength: makeRequiredString(
                        'amount of ingredient',
                        '500mg'
                    ),
                },
            },
        },
    },
    additionalProperties: false,
} as JSONSchema
