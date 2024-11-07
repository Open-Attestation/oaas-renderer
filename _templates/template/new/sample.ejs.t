---
to: src/templates/<%= h.changeCase.paramCase(issuerId) %>/<%= h.changeCase.paramCase(docType) %>/<%= h.changeCase.paramCase(docType) %>.sample.ts
---
import { v2 } from '@govtechsg/open-attestation'

import { <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>OaDoc } from './<%= h.changeCase.paramCase(docType) %>.types'

export const sample: <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>OaDoc = {
    $template: {
        name: '<%= h.changeCase.paramCase(issuerId) + '/' + h.changeCase.paramCase(docType) %>',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    courseTitle: ' CSA Milestone Programme',
    courseStartDate: '2022-05-10',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
