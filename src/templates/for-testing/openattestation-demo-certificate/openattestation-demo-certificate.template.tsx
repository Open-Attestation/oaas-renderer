import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { ForTestingOpenattestationDemoCertificateOaDoc } from './openattestation-demo-certificate.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import oaLogoSrc from './assets/oa.svg'

const TemplateContainer = styled.div`
    pre {
        background-color: lightgray;
        overflow-wrap: anywhere;
        white-space: break-spaces;
    }
`

export const ForTestingOpenattestationDemoCertificateTemplate: FunctionComponent<
    TemplateProps<ForTestingOpenattestationDemoCertificateOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    return (
        <>
            <Helmet>
                <title>for-testing - openattestation-demo-certificate</title>
            </Helmet>
            <TemplateContainer
                className={className}
                id="for-testing-openattestation-demo-certificate"
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
                    <img
                        src={oaLogoSrc}
                        alt="Open Attestation logo"
                        style={{
                            height: '100px',
                        }}
                    />
                    <p>This is to certify that </p>
                    <h2>{document.name}</h2>
                    <p>has completed the course</p>
                    <h1>{document.courseTitle}</h1>
                    <p>on</p>
                    <h2>{document.courseStartDate}</h2>
                </div>
            </TemplateContainer>
        </>
    )
}
