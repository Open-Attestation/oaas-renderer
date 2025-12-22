import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'

import { MinistryOfCommunicationsAndInformationDummyTemplateOaDoc } from './dummy-template.types'

const TemplateContainer = styled.div`
    pre {
        background-color: lightgray;
        overflow-wrap: anywhere;
        white-space: break-spaces;
    }
`

export const MinistryOfCommunicationsAndInformationDummyTemplateTemplate: FunctionComponent<
    TemplateProps<MinistryOfCommunicationsAndInformationDummyTemplateOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    return (
        <>
            <Helmet>
                <title>
                    ministry-of-communications-and-information - dummy-template
                </title>
            </Helmet>
            <TemplateContainer
                className={className}
                id="ministry-of-communications-and-information-dummy-template"
            >
                <div>
                    <h1>{document?.name ?? 'Default title'}</h1>
                    <pre>{JSON.stringify(document, null, 2)}</pre>
                </div>
            </TemplateContainer>
        </>
    )
}
