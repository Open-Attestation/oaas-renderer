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
                    <CardFace $vertical $justifyContent="space-between">
                        {/* Header container */}
                        <FlexBox
                            $spacing={1}
                            $justifyContent="flex-start"
                            $width="100%"
                        >
                            <LogoImage
                                src={obsLogoSrc}
                                alt="Outward Bound School Logo"
                            />
                        </FlexBox>
                        {/* Center container */}
                        <FlexBox $vertical $spacing={2}>
                            <Typography $m={0} $size="large">
                                {document.name}
                            </Typography>
                            <Typography
                                $m={0}
                                $size="large"
                                $maxWidth="312px"
                                $textAlign="center"
                            >
                                Is certified as a BCLS + AED Provider Accredited
                                by SRFAC
                            </Typography>
                        </FlexBox>
                        {/* Footer container */}
                        <FooterContainer>
                            <Typography $m={0}>
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
                    <CardFace $vertical $justifyContent="space-between">
                        {/* Header container */}
                        <Typography $size="large" $textAlign="center" $m={0}>
                            The holder of this card has successfully completed
                            <br />
                            the
                            <br />
                            course requirements
                        </Typography>
                        {/* Center container */}
                        <FlexBox $vertical>
                            <Typography $size="large" $m={0} $mb={1}>
                                {document.ciSignature}
                            </Typography>
                            <Line $maxWidth="162px" />
                            <FlexBox $vertical $spacing={2} $mt={2}>
                                <Typography $size="large" $m={0}>
                                    {document.trainerName}
                                </Typography>
                                <Typography $size="large" $m={0}>
                                    Chief Instructor
                                </Typography>
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
                            $m={0}
                        >
                            S/N: {document.serialNumber}
                        </Typography>
                    </CardFace>
                }
            />
        </>
    )
}
