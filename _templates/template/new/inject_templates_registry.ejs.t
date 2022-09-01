---
to: src/templates/<%= h.changeCase.paramCase(issuerId) %>/index.ts
inject: true
after: 'export const registry: TemplateRegistry<any> = {'
---
    '<%= h.changeCase.paramCase(issuerId) + '/' + h.changeCase.paramCase(docType) %>': <%= h.changeCase.camelCase(issuerId + ' ' + docType) %>Templates,