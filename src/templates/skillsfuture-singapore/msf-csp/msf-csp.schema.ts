import { JSONSchema } from 'json-schema-to-typescript'
import {
    makeDateType,
    makeEnumString,
    makeRequiredString,
} from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'SkillsfutureSingapore/MsfCsp',
    type: 'object',
    required: [
        'name',
        'issueDate',
        'expiryDate',
        'topSkills',
        'employmentHistory',
        'professionalCertifications',
        'academicQualifications',
    ],
    properties: {
        name: makeRequiredString('Registrant name', 'Stella Tan Jia Xin'),
        issueDate: makeDateType('Date of issue in YYYY-MM-DD', '2025-05-13'),
        expiryDate: makeDateType('Date of expiry in YYYY-MM-DD', '2025-05-26'),
        topSkills: {
            type: 'object',
            required: ['displayOrder', 'skills'],
            additionalProperties: false,
            properties: {
                displayOrder: {
                    type: 'number',
                    description:
                        'Display order on MySkillsFuture Skills Passport',
                    minimum: 0,
                    examples: [0],
                },
                skills: {
                    type: 'array',
                    items: {
                        type: 'object',
                        required: ['type', 'shortName', 'fullName'],
                        additionalProperties: false,
                        properties: {
                            type: makeEnumString(
                                'Skill Type',
                                [
                                    'CERTIFIED',
                                    'SELF_DECLARED',
                                    'INFERRED',
                                ] as const,
                                'CERTIFIED'
                            ),
                            shortName: makeRequiredString(
                                'Short name of Skill',
                                'meetings, incentives, conferences an...'
                            ),
                            fullName: makeRequiredString(
                                'Full name of Skill',
                                'meetings, incentives, conferences and exhibitions'
                            ),
                            acquiredFrom: {
                                type: 'string',
                                description: 'Source of Skill',
                                examples: [
                                    'Bachelor of BA (Honours) in Marketing, University of Singapore, Academic Qualification',
                                ],
                            },
                        },
                    },
                },
            },
        },
        employmentHistory: {
            type: 'object',
            required: ['displayOrder', 'positions'],
            additionalProperties: false,
            properties: {
                displayOrder: {
                    type: 'number',
                    description:
                        'Display order on MySkillsFuture Skills Passport',
                    minimum: 0,
                    examples: [1],
                },
                positions: {
                    type: 'array',
                    items: {
                        type: 'object',
                        required: [
                            'isVerifiedEmployee',
                            'position',
                            'employer',
                            'period',
                        ],
                        additionalProperties: false,
                        properties: {
                            isVerifiedEmployee: {
                                type: 'boolean',
                            },
                            position: makeRequiredString(
                                'Title of position',
                                'Marketing Manager (Senior Marketing Manager)'
                            ),
                            employer: makeRequiredString(
                                'Name of employer',
                                'Equinet Academy'
                            ),
                            period: makeRequiredString(
                                'Period of employment',
                                'Jan 2015 - Present (8 years 8 months)'
                            ),
                        },
                    },
                },
            },
        },
        professionalCertifications: {
            type: 'object',
            required: ['displayOrder', 'certifications'],
            additionalProperties: false,
            properties: {
                displayOrder: {
                    type: 'number',
                    description:
                        'Display order on MySkillsFuture Skills Passport',
                    minimum: 0,
                    examples: [2],
                },
                certifications: {
                    type: 'array',
                    items: {
                        type: 'object',
                        required: [
                            'isVerified',
                            'certificateTitle',
                            'source',
                            'dateAttained',
                        ],
                        properties: {
                            isVerified: {
                                type: 'boolean',
                            },
                            certificateTitle: makeRequiredString(
                                'Title of professional certification',
                                'WSQ Digital Marketing Strategy'
                            ),
                            source: makeRequiredString(
                                'Source of professional certification',
                                'Equinet Academy'
                            ),
                            dateAttained: makeRequiredString(
                                'Date attained of professional certification',
                                'May 2014'
                            ),
                        },
                        additionalProperties: false,
                    },
                },
            },
        },
        academicQualifications: {
            type: 'object',
            required: ['displayOrder', 'qualifications'],
            additionalProperties: false,
            properties: {
                displayOrder: {
                    type: 'number',
                    description:
                        'Display order on MySkillsFuture Skills Passport',
                    minimum: 0,
                    examples: [3],
                },
                qualifications: {
                    type: 'array',
                    items: {
                        type: 'object',
                        required: [
                            'isVerified',
                            'qualificationTitle',
                            'source',
                            'dateAttained',
                        ],
                        properties: {
                            isVerified: {
                                type: 'boolean',
                            },
                            qualificationTitle: makeRequiredString(
                                'Title of qualification',
                                'Degree in Social Science'
                            ),
                            source: makeRequiredString(
                                'Source of professional certification',
                                'National University of Singapore'
                            ),
                            dateAttained: makeRequiredString(
                                'Date attained of academic qualification',
                                '2010'
                            ),
                        },
                        additionalProperties: false,
                    },
                },
            },
        },
    },
    additionalProperties: false,
} as JSONSchema
