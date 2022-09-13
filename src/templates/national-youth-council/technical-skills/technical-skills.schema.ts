import { JSONSchema } from 'json-schema-to-typescript'
import * as certAssets from './__generated__/images-enum-values'
import * as commonAssets from '../common-assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/TechnicalSkills',
    type: 'object',
    required: [
        'name',
        'courseTitle',
        'courseDate',
        'trainerName',
        'trainerTitle',
        'trainerSignature',
        'dutyProgrammeOfficerName',
        'dutyProgrammeOfficerTitle',
        'dutyProgrammeOfficerSignature',
        'courseDescription',
    ],
    properties: {
        name: {
            type: 'string',
            description: 'Name of the awardee',
            examples: ['Yeo Yoyo'],
            minLength: 1,
        },
        courseTitle: {
            type: 'string',
            description: 'Title of the course',
            example: 'Challenge Rope Course',
            minLength: 1,
        },
        courseDate: {
            type: 'string',
            description: 'Date of the course',
            example: '2022-05-10',
            format: 'date',
        },
        trainerName: {
            type: 'string',
            description: 'Name of the trainer',
            examples: ['Abdul Haireel Bin Abdul Haleem'],
            minLength: 1,
        },
        trainerTitle: {
            type: 'string',
            description: 'Title of the trainer',
            examples: ['Trainer'],
            minLength: 1,
        },
        trainerSignature: {
            type: 'string',
            description: "SHA256 hash of the trainer's signature",
            enum: certAssets.getEnumValues(),
            examples: certAssets.getEnumValues(),
        },
        dutyProgrammeOfficerName: {
            type: 'string',
            description: 'Name of the duty programme officer',
            examples: ['Nicholas Conceicao'],
            minLength: 1,
        },
        dutyProgrammeOfficerTitle: {
            type: 'string',
            description: 'Title of the duty programme officer',
            examples: ['Executive Director'],
            minLength: 1,
        },
        dutyProgrammeOfficerSignature: {
            type: 'string',
            description:
                "SHA256 hash of the duty programme officer's signature",
            enum: commonAssets.getEnumValues([
                'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
            ]),
            examples: commonAssets.getEnumValues([
                'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
            ]),
        },
        courseDescription: {
            type: 'string',
            description: 'Description of the course',
            examples: ['challenge-rope-course'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
