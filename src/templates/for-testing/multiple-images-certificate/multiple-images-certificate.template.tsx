import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { ForTestingMultipleImagesCertificateOaDoc } from './multiple-images-certificate.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

const TemplateContainer = styled.div`
    img {
        max-width: 1000px;
    }
`

export const ForTestingMultipleImagesCertificateTemplate: FunctionComponent<
    TemplateProps<ForTestingMultipleImagesCertificateOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    return (
        <>
            <Helmet>
                <title>for-testing - multiple-images-certificate</title>
            </Helmet>
            <TemplateContainer
                className={className}
                id="for-testing-multiple-images-certificate"
            >
                <div>
                    <h1>Multiple images certificate</h1>
                    <h2>level 1</h2>
                    <h3>image 1</h3>
                    <img
                        src={document['imageOne_image']}
                        alt="imageOne_image"
                    />
                    <div
                        style={{
                            paddingLeft: '10%',
                        }}
                    >
                        <h2>level 2</h2>
                        <h3>image 2</h3>
                        <img
                            src={document.levelTwo['imageTwo_image']}
                            alt="imageTwo_image"
                        />
                        <h3>image 3</h3>
                        <img
                            src={document.levelTwo['imageThree_image']}
                            alt="imageThree_image"
                        />
                        <div
                            style={{
                                paddingLeft: '10%',
                            }}
                        >
                            <h2>level 3</h2>
                            <h3>image 4</h3>
                            <img
                                src={
                                    document.levelTwo.levelThree[
                                        'imageFour_image'
                                    ]
                                }
                                alt="imageFour_image"
                            />
                        </div>
                    </div>
                </div>
            </TemplateContainer>
        </>
    )
}
