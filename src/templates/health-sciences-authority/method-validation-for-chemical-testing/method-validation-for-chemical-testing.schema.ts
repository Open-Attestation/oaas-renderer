import { JSONSchema } from 'json-schema-to-typescript'
import { makeEnumString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'HealthSciencesAuthority/MethodValidationForChemicalTesting',
    type: 'object',
    required: [
        'name',
        'courseTitle',
        'courseEndDate',
        'signeeName',
        'signeeDesignation',
        'signeeDivision',
        'signeeGroup',
        'signeeOrganisation',
        'signeeSignature_image',
    ],
    properties: {
        name: {
            type: 'string',
            description: 'Name of awardee',
            examples: ['Thong Yong Jie Andre'],
            minLength: 1,
            maxLength: 44,
        },
        courseTitle: makeEnumString(
            'Title of the course',
            ['Method Validation for Chemical Testing'] as const,
            'Method Validation for Chemical Testing'
        ),
        courseEndDate: {
            type: 'string',
            description: 'End date of course',
            examples: ['2022-06-03'],
            format: 'date',
        },
        signeeName: {
            type: 'string',
            description: 'Name of signee',
            examples: ['Dr Betsie Chacko'],
        },
        signeeDesignation: {
            type: 'string',
            description: 'Designation of signee',
            examples: ['Associate Director'],
        },
        signeeDivision: {
            type: 'string',
            description: 'Division of signee',
            examples: ['Chemical Metrology Division'],
        },
        signeeGroup: {
            type: 'string',
            description: 'Group of signee',
            examples: ['Applied Sciences Group'],
        },
        signeeOrganisation: makeEnumString(
            'Organisation of signee',
            ['Health Sciences Authority'] as const,
            'Health Sciences Authority'
        ),
        signeeSignature_image: {
            type: 'string',
            description: 'Signature of signee',
            examples: ['signature.png'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
