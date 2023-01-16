import './styles.css'

import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { DateTime } from 'luxon'
import React, { FunctionComponent } from 'react'

import {
    FooterContainer,
    LogoImage,
    SignatureImage,
    Typography,
    Root,
} from './openattestation-demo-certificate-card.components'

import { Helmet } from 'react-helmet-async'
import { FlippableCard } from 'components/flippable-card/flippable-card'
import { FlipInstruction } from 'components/flippable-card/flip-instruction'
import { CardFace } from 'components/card-face'
import { FlexBox } from 'components/flexbox'
import { Line } from 'components/line'

import obsLogoSrc from '../common/assets/oa.svg'
import { ForTestingOpenattestationDemoCertificateCardOaDoc } from './openattestation-demo-certificate-card.types'

const CERT_WIDTH = 500
const CERT_HEIGHT = 350

export const ForTestingOpenattestationDemoCertificateCardTemplate: FunctionComponent<
    TemplateProps<ForTestingOpenattestationDemoCertificateCardOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const issueDate = DateTime.fromISO(document.issueDate)
    const issueDateString = issueDate.toFormat('dd/MM/yyyy')

    const validTillDate = DateTime.fromISO(document.issueDate)
        .plus({ years: 2 })
        .minus({ days: 1 })
    const validTillDateString = validTillDate.toFormat('dd MMM yyyy')

    return (
        <>
            <Helmet>
                <title>nyc - bcls-aed</title>
            </Helmet>
            <Root $justifyContent="center" $vertical>
                <FlippableCard
                    widthInPx={CERT_WIDTH}
                    front={
                        <CardFace
                            $width={`${CERT_WIDTH}px`}
                            $height={`${CERT_HEIGHT}px`}
                            $vertical
                            $justifyContent="space-between"
                            $padding="24px 24px 8px 24px"
                            style={{ overflow: 'hidden' }}
                        >
                            {/* Header container */}
                            <FlexBox
                                $spacing={1}
                                $justifyContent="flex-start"
                                $width="100%"
                            >
                                <LogoImage
                                    src={obsLogoSrc}
                                    alt="Outward Bound School Logo"
                                    $imgHeight="70px"
                                />
                            </FlexBox>
                            {/* Center container */}
                            <FlexBox $vertical $spacing={2}>
                                <FlexBox $vertical>
                                    <Typography
                                        $mb={0}
                                        $m={0}
                                        $mt={2}
                                        $size="large"
                                        $bold
                                    >
                                        {document.name}
                                    </Typography>
                                </FlexBox>
                                <Typography
                                    $m={0}
                                    $size="medium"
                                    $maxWidth="312px"
                                    $textAlign="center"
                                >
                                    Is certified as a OpenAttestation user
                                </Typography>
                            </FlexBox>
                            {/* Footer container */}
                            <FooterContainer>
                                <Typography
                                    $size="small"
                                    $textAlign="center"
                                    $m={0}
                                    $mt={1}
                                >
                                    Date issued: {issueDateString}
                                </Typography>
                                <img
                                    src={obsLogoSrc}
                                    alt="OUTWARD BOUND SINGAPORE LIFE SUPPORTING TRAINING CENTRE"
                                />
                            </FooterContainer>
                        </CardFace>
                    }
                    back={
                        <CardFace
                            $width={`${CERT_WIDTH}px`}
                            $height={`${CERT_HEIGHT}px`}
                            $vertical
                            $justifyContent="space-between"
                            $padding="56px 24px 4px 24px"
                        >
                            {/* Header container */}
                            <Typography
                                $size="medium"
                                $textAlign="center"
                                $m={0}
                            >
                                The holder of this card has successfully
                                completed the demo
                            </Typography>
                            {/* Center container */}
                            <FlexBox $vertical>
                                <FlexBox $vertical $spacing={2} $mt={0}>
                                    <Typography $size="medium" $m={0}>
                                        Certificate is valid till{' '}
                                        {validTillDateString}
                                    </Typography>
                                </FlexBox>
                            </FlexBox>
                            {/* Footer */}
                            <Typography
                                $size="small"
                                $textAlign="left"
                                $width="100%"
                            >
                                S/N: {document.serialNumber}
                            </Typography>
                        </CardFace>
                    }
                />
                <FlipInstruction />
            </Root>
        </>
    )
}
