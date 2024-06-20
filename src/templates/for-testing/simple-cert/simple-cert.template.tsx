import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { ForTestingSimpleCertOaDoc } from './simple-cert.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

const TemplateContainer = styled.div`
    pre {
        background-color: lightgray;
        overflow-wrap: anywhere;
        white-space: break-spaces;
    }
`

export const ForTestingSimpleCertTemplate: FunctionComponent<
    TemplateProps<ForTestingSimpleCertOaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    return (
        <>
            <Helmet>
                <title>for-testing - simple-cert</title>
            </Helmet>
            <TemplateContainer
                className={className}
                id="for-testing-simple-cert"
            >
                <div
                    style={{
                        border: '1px solid black',
                        borderRadius: '10px',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h1>{document.courseTitle}</h1>
                    <p style={{ textAlign: 'center' }}>To reward</p>
                    <h2>{document.name}</h2>
                    <p>for completion of course</p>
                    <h2>
                        {document.courseStartDate} - {document.courseEndDate}
                    </h2>
                    <p>serial number: {document.serialNumber}</p>
                </div>
            </TemplateContainer>
        </>
    )
}
