---
to: src/templates/<%= h.changeCase.paramCase(issuerId) %>/<%= h.changeCase.paramCase(docType) %>/<%= h.changeCase.paramCase(docType) %>.types.ts
---
import { v2 } from '@govtechsg/open-attestation'
import { <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %> } from '__generated__/<%= h.changeCase.paramCase(docType) %>.schema'

export type <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>OaDoc = <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %> & v2.OpenAttestationDocument
