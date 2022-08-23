import './styles.css'

import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { FlexBox } from 'components/flexbox'
import { Line } from 'components/line'
import { DateTime } from 'luxon'
import React, { FunctionComponent } from 'react'

import {
    CardFace,
    FooterContainer,
    LogoImage,
    Typography,
} from './bcls-aed.components'
import { NycBclsAedOaDoc } from './bcls-aed.types'
import obsLogoSrc from './obs-logo.png'
import obstcLogoSrc from './obstc-logo.png'
import { Helmet } from 'react-helmet-async'
import { FlippableCard } from 'components/flippable-card/flippable-card'

export const NycBclsAedTemplate: FunctionComponent<
    TemplateProps<NycBclsAedOaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    const issueDate = DateTime.fromISO(document.issueDate).toFormat(
        'dd/MM/yyyy'
    )

    return (
        <>
            <Helmet>
                <title>nyc - bcls-aed</title>
            </Helmet>
            <FlippableCard
                widthInPx={500}
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
                                <Typography $mt={0} $size="medium">
                                    {document.nric}
                                </Typography>
                            </FlexBox>
                            <Typography
                                $m={0}
                                $size="medium"
                                $maxWidth="312px"
                                $textAlign="center"
                            >
                                Is certified as a BCLS + AED Provider Accredited
                                by SRFAC
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
                                Date issued: {issueDate}
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
                        <Typography $size="medium" $textAlign="center" $m={0}>
                            The holder of this card has successfully completed
                            the course requirements
                        </Typography>
                        {/* Center container */}
                        <FlexBox $vertical>
                            <Typography $size="large" $m={0} $mb={1} $bold>
                                {document.ciSignature}
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
                                        {document.trainerName}
                                    </Typography>
                                    <Typography $size="small" $mt={0}>
                                        Chief Instructor
                                    </Typography>
                                </FlexBox>
                                <Typography $size="medium" $m={0}>
                                    Certification is valid for 2 years from date
                                    of issue
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
        </>
    )
}
