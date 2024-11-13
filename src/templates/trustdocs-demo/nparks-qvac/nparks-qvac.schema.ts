import { JSONSchema } from 'json-schema-to-typescript'
import {
    makeDateType,
    makeEnumString,
    makeRequiredString,
} from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'TrustdocsDemo/NparksQvac',
    type: 'object',
    required: [
        'animalName',
        'microchipNumber',
        'species',
        'breed',
        'monthYearOfBirth',
        'sex',
        'colour',
        'exportCountry',
        'name',
        'quarantine',
    ],
    properties: {
        animalName: makeRequiredString('Name of animal', 'SAMPLE_NAME1'),
        microchipNumber: makeRequiredString(
            'Microchip of animal',
            '000 000 000 000 000'
        ),
        species: makeEnumString(
            'Species of animal',
            ['CANINE', 'FELINE'] as const,
            'CANINE'
        ),
        breed: makeRequiredString('Breed of animal', 'Toy Poodle'),
        monthYearOfBirth: {
            type: 'string',
            description: 'Birth month and year of the animal',
            examples: ['12-2023'],
            format: 'MM-YYYY',
        },
        sex: makeEnumString(
            'Sex of animal',
            [
                'MALE',
                'MALE (NEUTERED)',
                'FEMALE',
                'FEMALE (STERILISED)',
            ] as const,
            'MALE'
        ),
        colour: makeRequiredString('Color of animal', 'White'),
        exportCountry: makeRequiredString('Country of export', 'Malaysia'),
        name: makeRequiredString('Name of owner', 'SAMPLE_NAME2'),
        quarantine: {
            type: 'object',
            required: ['numOfDays', 'startDate', 'endDate'],
            properties: {
                numOfDays: {
                    type: 'number',
                    description: '',
                    examples: [11],
                    minimum: 0,
                },
                startDate: makeDateType(
                    'Start date of quarantine in YYYY-MM-DD',
                    '2023-12-21'
                ),
                endDate: makeDateType(
                    'End date of quarantine in YYYY-MM-DD (inclusive)',
                    '2023-12-31'
                ),
            },
            additionalProperties: false,
        },
        rabiesVaccination: {
            type: 'object',
            required: [
                'manufacturer',
                'date',
                'validityDuration',
                'batch',
                'veterinarian',
            ],
            properties: {
                manufacturer: makeRequiredString(
                    'Manufacturer of vaccine',
                    'SAMPLE_NAME3'
                ),
                date: makeDateType('Date of vaccination', '2022-09-13'),
                validityDuration: makeRequiredString(
                    'Duration of validity',
                    '1 Year'
                ),
                batch: {
                    type: 'object',
                    required: ['number', 'expiry'],
                    properties: {
                        number: makeRequiredString('Batch number', 'X000000'),
                        expiry: makeDateType('Expiry of batch', '2023-12-31'),
                    },
                    additionalProperties: false,
                },
                veterinarian: makeRequiredString(
                    'Veterinarian that administered vaccine',
                    'SAMPLE_NAME4'
                ),
            },
            additionalProperties: false,
        },
    },
    additionalProperties: false,
} as JSONSchema
