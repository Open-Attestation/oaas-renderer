import { JSONSchema } from 'json-schema-to-typescript'
import { makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'Govtech/LaunchCertificate',
    type: 'object',
    required: [
        'name',
        'certificateTitle',
        'certificateSubtitle',
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
        certificateTitle: makeRequiredString(
            'Title of the programme',
            'LAUNCH! Your Vote Contest 2024',
            35
        ),
        certificateSubtitle: makeRequiredString(
            'Subtitle of the programme',
            'Whole-of-Government Most Voted Hackathon Team',
            55
        ),
        awardTitle: makeRequiredString('Title of the award', '1st place', 31),
        awardDescription: makeRequiredString(
            'Description of the award',
            'In recognition of your exceptional achievement in the LAUNCH! Hackathon sprint organised by GovTech Singapore for public officers.',
            246
        ),
        issueDate: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2024-11-15'],
            format: 'date',
        },
        signeeName: makeRequiredString(
            'Name of signee',
            'Chang Sau Sheong',
            42
        ),
        signeeDesignation: makeRequiredString(
            'Designation of signee',
            'Deputy Chief Executive, GovTech',
            42
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
