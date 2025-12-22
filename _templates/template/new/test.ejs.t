---
to: src/templates/<%= h.changeCase.paramCase(issuerId) %>/<%= h.changeCase.paramCase(docType) %>/__tests__/<%= h.changeCase.paramCase(docType) %>.test.tsx
---
import * as React from 'react'
import renderer from 'react-test-renderer'
import { <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>Template } from '../<%= h.changeCase.paramCase(docType) %>.template'
import { sample } from '../<%= h.changeCase.paramCase(docType) %>.sample'

describe('<%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>Template', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <<%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>Template document={sample} handleObfuscation={() => void 0} />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot()
    })
})