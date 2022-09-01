---
to: src/templates/<%= h.changeCase.paramCase(issuerId) %>/index.ts
unless_exists: true
---
import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { <%= h.changeCase.camelCase(issuerId + ' ' + docType) %>Templates } from './<%= h.changeCase.paramCase(docType) %>'

export const registry: TemplateRegistry<any> = {
    '<%= h.changeCase.paramCase(issuerId) + '/' + h.changeCase.paramCase(docType) %>': <%= h.changeCase.camelCase(issuerId + ' ' + docType) %>Templates,
}
