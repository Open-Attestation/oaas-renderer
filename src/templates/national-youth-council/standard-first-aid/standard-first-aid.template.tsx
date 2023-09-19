import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilStandardFirstAidOaDoc } from './standard-first-aid.types'
// import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

import {
    Root,
    LogoImage,
    Typography,
    FooterContainer,
    SignatureImage,
} from './standard-first-aid.components'
import obsLogoSrc from '../common/assets/obs-logo.png'
import obstcLogoSrc from '../common/assets/obstc-logo.png'
import { DateTime } from 'luxon'

import { FlippableCard } from 'components/flippable-card/flippable-card'
import { FlipInstruction } from 'components/flippable-card/flip-instruction'
import { CardFace } from 'components/card-face'
import { Line } from 'components/line'
import { FlexBox } from 'components/flexbox'
import imagesMap from '../common/assets/__generated__/images-map'

const CERT_WIDTH = 500
const CERT_HEIGHT = 350

export const NationalYouthCouncilStandardFirstAidTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilStandardFirstAidOaDoc> & {
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
                <title>national-youth-council - standard-first-aid</title>
            </Helmet>
            <Root $justifyContent="center" $vertical>
                <FlippableCard
                    widthInPx={CERT_WIDTH}
                    heightInPx={CERT_HEIGHT}
                    front={
                        <CardFace
                            $vertical
                            $justifyContent="space-between"
                            $padding="24px 24px 8px 24px"
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
                                    Is certified as a Standard First Aid (SFA)
                                    with CPR (Hands only) + AED Provider
                                    Accredited by SRFAC
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
                                    src={obstcLogoSrc}
                                    alt="OUTWARD BOUND SINGAPORE LIFE SUPPORTING TRAINING CENTRE"
                                />
                            </FooterContainer>
                        </CardFace>
                    }
                    back={
                        <CardFace
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
                                completed the course requirements
                            </Typography>
                            {/* Center container */}
                            <FlexBox $vertical>
                                <Typography $size="large" $m={0} $mb={1} $bold>
                                    <SignatureImage
                                        src={`${
                                            imagesMap[document.ciSignature]
                                        }`}
                                        alt="ci signature"
                                    />
                                </Typography>
                                <Line $maxWidth="162px" />
                                <FlexBox $vertical $spacing={2} $mt={0}>
                                    <FlexBox $vertical>
                                        <Typography
                                            $size="small"
                                            $mt={1}
                                            $m={0}
                                            $bold
                                        >
                                            {document.ciName}
                                        </Typography>
                                        <Typography $size="small" $mt={0}>
                                            Chief Instructor
                                        </Typography>
                                    </FlexBox>
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
