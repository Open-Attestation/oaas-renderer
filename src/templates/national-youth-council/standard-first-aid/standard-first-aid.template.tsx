import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilStandardFirstAidOaDoc } from './standard-first-aid.types'
// import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

import {
    Root,
    SRFACLogoImage,
    Typography,
} from './standard-first-aid.components'
import { DateTime } from 'luxon'

import { FlexBox } from 'components/flexbox'
import imagesMap from '../common/assets/__generated__/images-map'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import srfacLogoSrc from '../common/assets/srfac-logo.png'
import { A4HeightPx, A4WidthPx } from 'components/paper-size'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'

const documentWidth = A4WidthPx
const documentHeight = A4HeightPx

export const NationalYouthCouncilStandardFirstAidTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilStandardFirstAidOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const name = document.name.toUpperCase()
    const issueDate = DateTime.fromISO(document.issueDate).toFormat(
        'dd MMMM yyyy'
    )

    const validTillDate = DateTime.fromISO(document.issueDate)
        .plus({ years: 2 })
        .minus({ days: 1 })
    const validTillDateString = validTillDate.toFormat('dd MMMM yyyy')

    const transformScale = useShrinkToViewport(documentWidth)
    return (
        <>
            <Helmet>
                <title>national-youth-council - standard-first-aid</title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <Root $vertical>
                    <ObsCertMainPage
                        title={
                            <>
                                <Typography
                                    $mt={0}
                                    $mb={0}
                                    $textAlign="center"
                                    $size={'xlarge'}
                                    $bold
                                >
                                    STANDARD FIRST AID
                                </Typography>
                                <Typography
                                    $mt={0}
                                    $mb={0}
                                    $textAlign="center"
                                    $size={'small'}
                                >
                                    With CPR (Hands Only) and AED Provider
                                </Typography>
                            </>
                        }
                        signatures={[
                            {
                                signatureSrc: imagesMap[document.ciSignature],

                                name: document.ciName,
                                title: 'Chief Instructor',
                                location: 'Life Support Training Centre',
                            },
                        ]}
                    >
                        <FlexBox $vertical>
                            <Typography $size={'medium'} $mt={0} $bold>
                                <br />
                                {name}
                            </Typography>
                            <Typography $size={'small'} $mt={-1.0}>
                                Is Certified as a Provider of
                            </Typography>
                            <Typography
                                $textAlign="center"
                                $size="medium"
                                $mt={0}
                                $bold
                            >
                                STANDARD FIRST AID (SFA), and
                            </Typography>
                            <Typography
                                $textAlign="center"
                                $size="medium"
                                $mt={-1}
                                $bold
                            >
                                With CARDIOPULMONARY RESUSCITATION (CPR) – HANDS
                                ONLY, and
                            </Typography>
                            <Typography
                                $textAlign="center"
                                $size="medium"
                                $mt={-1}
                                $bold
                            >
                                AUTOMATED EXTERNAL DEFIBRILLATION (AED)
                            </Typography>
                            <Typography
                                $textAlign="center"
                                $size="medium"
                                $mt={-1}
                                $bold
                            >
                                PROVIDER
                            </Typography>
                            <Typography $size={'small'} $mt={0}>
                                On
                            </Typography>
                            <Typography $size={'medium'} $mt={0} $bold>
                                {issueDate}
                            </Typography>
                            <Typography $size={'small'} $mt={-1} $bold>
                                Certificate No.: {document.certificateNumber}
                            </Typography>
                            <Typography $size={'small'} $mt={0} $bold>
                                Certificate is valid till {validTillDateString}
                            </Typography>
                            <Typography $size={'small'} $mt={0}>
                                <br />
                                Accredited by
                            </Typography>
                            <SRFACLogoImage
                                src={`${srfacLogoSrc}`}
                                alt="SRFAC Logo"
                            />
                        </FlexBox>
                    </ObsCertMainPage>
                </Root>
            </ScalableDocument>
        </>
    )
}
