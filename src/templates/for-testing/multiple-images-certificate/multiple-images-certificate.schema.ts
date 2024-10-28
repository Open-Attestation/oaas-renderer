import { JSONSchema } from 'json-schema-to-typescript'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'ForTesting/MultipleImagesCertificate',
    type: 'object',
    required: ['imageOne_image', 'levelTwo'],
    properties: {
        imageOne_image: {
            type: 'string',
            minLength: 1,
            examples: ['image1.jpeg'],
        },
        levelTwo: {
            type: 'object',
            required: ['imageTwo_image', 'imageThree_image', 'levelThree'],
            properties: {
                imageTwo_image: {
                    type: 'string',
                    minLength: 1,
                    examples: ['image2.png'],
                },
                imageThree_image: {
                    type: 'string',
                    minLength: 1,
                    examples: ['image3.jpg'],
                },
                levelThree: {
                    type: 'object',
                    required: ['imageFour_image'],
                    properties: {
                        imageFour_image: {
                            type: 'string',
                            minLength: 1,
                            examples: ['image4.png'],
                        },
                    },
                    additionalProperties: false,
                },
            },
            additionalProperties: false,
        },
    },
    additionalProperties: false,
} as JSONSchema
