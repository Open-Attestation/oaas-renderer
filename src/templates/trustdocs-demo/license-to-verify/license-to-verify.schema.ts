import { JSONSchema } from 'json-schema-to-typescript'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'TrustdocsDemo/LicenseToVerify',
    type: 'object',
    required: [
        'name',
        'profile_image',
        'issuedOn',
        'validTill',
        'countryOfAccessment',
        'accessedBy',
        'qrCodeValue',
    ],
    properties: {
        name: {
            type: 'string',
            description: 'Name of the recipient',
            examples: ['{Your Name}'],
            minLength: 1,
        },
        profile_image: {
            type: 'string',
            description: 'Filename of the profile image',
            examples: ['handsome.png'],
            minLength: 1,
        },
        issuedOn: {
            type: 'string',
            description: 'Date of issue',
            examples: ['2022-05-10'],
            format: 'date',
            formatMaximum: {
                $data: '1/validTill',
            },
        },
        validTill: {
            type: 'string',
            description: 'Last date of validity',
            examples: ['2022-05-10'],
            format: 'date',
            formatMinimum: {
                $data: '1/issuedOn',
            },
        },
        countryOfAccessment: {
            type: 'string',
            description: 'Country of accessment',
            examples: ['Singapore'],
            minLength: 1,
        },
        accessedBy: {
            type: 'string',
            description: 'Name of person who accessed',
            examples: ['John Demo'],
            minLength: 1,
        },
        qrCodeValue: {
            type: 'string',
            minLength: 1,
            maxLength: 2000,
            examples: [
                'https://www.trustdocs.gov.sg/verify?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstorage.demo.trustdocs.gov.sg%2Fdemo.trustdoc%22%7D%7D',
            ],
        },
    },
    additionalProperties: false,
} as JSONSchema
