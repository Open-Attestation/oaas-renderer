---
to: src/templates/<%= h.changeCase.paramCase(issuerId) %>/<%= h.changeCase.paramCase(docType) %>/<%= h.changeCase.paramCase(docType) %>.schema.ts
---

import { JSONSchema } from 'json-schema-to-typescript'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: '<%= h.changeCase.pascalCase(issuerId) %>/<%= h.changeCase.pascalCase(docType) %>',
    type: 'object',
    required: [
        'name',
        'courseTitle',
        'courseStartDate',
        'courseEndDate',
        'presentedBy',
        'signatureOne',
        'signatureTwo',
    ],
    properties: {
        name: {
            type: 'string',
            description: 'Name of awardee',
            examples: ['Thong Yong Jie Andre'],
            minLength: 1,
        },
        courseTitle: {
            type: 'string',
            description: 'Title of the course',
            examples: ['CSA Milestone Programme'],
            minLength: 1,
        },
        courseStartDate: {
            type: 'string',
            description: 'Start date of course',
            examples: ['2022-05-10'],
            format: 'date',
        },
        courseEndDate: {
            type: 'string',
            description: 'End date of course',
            examples: ['2022-06-03'],
            format: 'date',
        },
        presentedBy: {
            type: 'array',
            description: 'list of presenters jointly presenting the award',
            items: {
                type: 'string',
                description:
                    'organization or entity that is presenting the award',
                examples: ['Cyber Security Agency of Singapore (CSA)'],
            },
        },
        signatureOne: {
            type: 'object',
            required: ['name', 'signatureHash', 'title', 'organization'],
            properties: {
                name: {
                    type: 'string',
                    description: 'owner of signature',
                    examples: ['Betsie Chacko'],
                },
                title: {
                    type: 'string',
                    description: 'title of owner of signature',
                    examples: ['Associate Director'],
                },
                organization: {
                    type: 'string',
                    description: 'organization of owner of signature',
                    examples: ['CISA International'],
                },
                signatureHash: {
                    type: 'string',
                    description: "Hash of the signature's image file",
                    examples: ['7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab'],
                },
            },
            additionalProperties: false,
        },
        signatureTwo: {
            type: 'object',
            required: ['name', 'signatureHash', 'title', 'organization'],
            properties: {
                name: {
                    type: 'string',
                    description: 'owner of signature',
                    examples: ['Betsie Chacko'],
                },
                title: {
                    type: 'string',
                    description: 'title of owner of signature',
                    examples: ['Associate Director'],
                },
                organization: {
                    type: 'string',
                    description: 'organization of owner of signature',
                    examples: ['CISA International'],
                },
                signatureHash: {
                    type: 'string',
                    description: "Hash of the signature's image file",
                    examples: ['7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab'],
                },
            },
            additionalProperties: false,
        },
    },
    additionalProperties: false,
} as JSONSchema
