import { JSONSchema } from 'json-schema-to-typescript'
import * as commonAssets from '../common/assets/__generated__/images-enum-values'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'NationalYouthCouncil/TechnicalSkills',
    type: 'object',
    required: [
        'name',
        'courseTitle',
        'courseDate',
        'dutyProgrammeOfficerName',
        'dutyProgrammeOfficerTitle',
        'dutyProgrammeOfficerSignature',
        'courseDescription',
        'organisationRepSignature',
        'organisationRepName',
        'organisationRepTitle',
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
        dutyProgrammeOfficerName: {
            type: 'string',
            description: 'Name of the duty programme officer',
            examples: ['Abdul Haireel Bin Abdul Haleem'],
            minLength: 1,
        },
        dutyProgrammeOfficerTitle: {
            type: 'string',
            description: 'Title of the duty programme officer',
            examples: ['Trainer'],
            minLength: 1,
        },
        dutyProgrammeOfficerSignature: {
            type: 'string',
            description:
                "SHA256 hash of the duty programme officer's signature",
            enum: commonAssets.getEnumValues([
                'sample-signature&a2693ac50a6b39568d13114834a66c9568dc4b51ede88592ef4516b46960c204.png',
            ]),
            examples: commonAssets.getEnumValues([
                'sample-signature&a2693ac50a6b39568d13114834a66c9568dc4b51ede88592ef4516b46960c204.png',
            ]),
        },
        organisationRepName: {
            type: 'string',
            description: 'Name of the organisation representation',
            examples: ['Nicholas Conceicao'],
            minLength: 1,
        },
        organisationRepTitle: {
            type: 'string',
            description: 'Title of the organisation representation',
            examples: ['Executive Director'],
            minLength: 1,
        },
        organisationRepSignature: {
            type: 'string',
            description:
                "SHA256 hash of the organisation representation's signature",
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
