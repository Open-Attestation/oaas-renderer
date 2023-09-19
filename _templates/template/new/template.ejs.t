---
to: src/templates/<%= h.changeCase.paramCase(issuerId) %>/<%= h.changeCase.paramCase(docType) %>/<%= h.changeCase.paramCase(docType) %>.template.tsx
---
import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>OaDoc } from './<%= h.changeCase.paramCase(docType) %>.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

const TemplateContainer = styled.div`
    pre {
        background-color: lightgray;
        overflow-wrap: anywhere;
        white-space: break-spaces;
    }
`

export const <%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>Template: FunctionComponent<
    TemplateProps<<%= h.changeCase.pascalCase(issuerId + ' ' + docType) %>OaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    return (
        <>
            <Helmet>
                <title><%= issuerId %> - <%= docType %></title>
            </Helmet>
            <TemplateContainer className={className} id="<%= h.changeCase.paramCase(issuerId + ' ' + docType) %>">
                <div>
                    <h1>{document?.name ?? 'Default title'}</h1>
                    <pre>{JSON.stringify(document, null, 2)}</pre>
                </div>
            </TemplateContainer>
        </>
    )
}
