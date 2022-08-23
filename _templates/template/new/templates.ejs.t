---
to: src/templates/<%= h.changeCase.paramCase(issuerId) %>/<%= h.changeCase.paramCase(docType) %>/index.ts
---
import { <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>Template } from './<%= h.changeCase.paramCase(docType) %>.template'

export const <%= h.changeCase.camelCase(issuerId + ' ' + docType) %>Templates = [
    {
        id: '<%= h.changeCase.camelCase(issuerId + ' ' + docType) %>',
        label: '<%= h.changeCase.camelCase(issuerId + ' ' + docType) %>',
        template: <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>Template,
    },
]
