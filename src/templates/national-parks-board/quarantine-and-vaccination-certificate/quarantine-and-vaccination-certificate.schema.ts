import { JSONSchema } from 'json-schema-to-typescript'
import {
    makeDateType,
    makeEnumString,
    makeRequiredString,
} from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalParksBoard/QuarantineAndVaccinationCertificate',
    type: 'object',
    required: [
        'animalName',
        'microchipNumber',
        'species',
        'breed',
        'birthDate',
        'sex',
        'colour',
        'exportCountry',
        'ownerName',
        'quarantine',
    ],
    properties: {
        animalName: makeRequiredString('Name of animal', 'KOBE'),
        microchipNumber: makeRequiredString(
            'Microchip of animal',
            '900 111 881 990 863'
        ),
        species: makeRequiredString('Species of animal', 'Dog'),
        breed: makeRequiredString('Breed of animal', 'Shiba Inu'),
        birthDate: makeDateType('Date of birth of animal', '2021-10-14'),
        sex: makeEnumString(
            'Sex of animal',
            ['male', 'female'] as const,
            'male'
        ),
        colour: makeRequiredString('Color of animal', 'White'),
        exportCountry: makeRequiredString('Country of export', 'China'),
        ownerName: makeRequiredString('Name of owner', 'CHAN ZI ANG'),
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
                    'MERIAL RABISIN R'
                ),
                date: makeDateType('Date of vaccination', '2022-09-13'),
                validityDuration: makeRequiredString('Duration of validity', '1 Year'),
                batch: {
                    type: 'object',
                    required: ['number', 'expiry'],
                    properties: {
                        number: makeRequiredString('Batch number', 'L489157'),
                        expiry: makeDateType('Expiry of batch', '2023-12-31'),
                    },
                    additionalProperties: false,
                },
                veterinarian: makeRequiredString(
                    'Veterinarian that administered vaccine',
                    'Clarissa Frany Francisco, DVM'
                ),
            },
            additionalProperties: false,
        },
    },
    additionalProperties: false,
} as JSONSchema
