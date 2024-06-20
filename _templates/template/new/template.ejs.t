---
to: src/templates/<%= h.changeCase.paramCase(issuerId) %>/<%= h.changeCase.paramCase(docType) %>/<%= h.changeCase.paramCase(docType) %>.template.tsx
---
import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>OaDoc } from './<%= h.changeCase.paramCase(docType) %>.types'
import { Helmet } from 'react-helmet-async'

export const <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>Template: FunctionComponent<
    TemplateProps<<%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>OaDoc> & { className?: string }
> = ({ document }) => {
    return (
        <>
            <Helmet>
                <title><%= issuerId %> - <%= docType %></title>
            </Helmet>
            <div 
                id="<%= h.changeCase.paramCase(issuerId + ' ' + docType) %>"
                className="bg-gray-200 overflow-wrap-anywhere whitespace-pre-wrap"
            >
                <div>
                    <h1>{document?.name ?? 'Default title'}</h1>
                    <pre>{JSON.stringify(document, null, 2)}</pre>
                </div>
            </div>
        </>
    )
}
