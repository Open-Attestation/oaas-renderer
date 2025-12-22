import { JSONSchema } from 'json-schema-to-typescript'
import { makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'Govtech/LaunchHackathon',
    type: 'object',
    required: [
        'name',
        'programmeTitle',
        'awardTitle',
        'awardDescription',
        'issueDate',
        'signeeName',
        'signeeDesignation',
        'signeeSignature_image',
        'partnershipLogo_image',
    ],
    properties: {
        name: makeRequiredString('Name of participant', 'Johnathan Doe', 31),
        programmeTitle: makeRequiredString(
            'Title of the programme',
            'GovTech X OpenAI Hackathon 2024',
            71
        ),
        awardTitle: makeRequiredString('Title of the award', 'First Place', 31),
        awardDescription: makeRequiredString(
            'Description of the award',
            'In recognition of your outstanding achievement in the GovTech X OpenAI Hackathon 2024, organised by the GovTech and OpenAI for developers.',
            207
        ),
        issueDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2024-11-22'],
            format: 'date',
        },
        signeeName: makeRequiredString(
            'Name of signee',
            'Chang Sau Sheong',
            39
        ),
        signeeDesignation: makeRequiredString(
            'Designation of signee',
            'Deputy Chief Executive, GovTech',
            39
        ),
        signeeSignature_image: makeRequiredString(
            'Sigature of signee',
            'signature.png'
        ),
        partnershipLogo_image: makeRequiredString(
            'Image of the partnership logo',
            'logo.png'
        ),
    },
    additionalProperties: false,
} as JSONSchema
