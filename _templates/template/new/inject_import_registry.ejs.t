---
to: src/templates/<%= h.changeCase.paramCase(issuerId) %>/index.ts
inject: true
after: "import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'"
---
import { <%= h.changeCase.camelCase(issuerId + ' ' + docType) %>Templates } from './<%= h.changeCase.paramCase(docType) %>'