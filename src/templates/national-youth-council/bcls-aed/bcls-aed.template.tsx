import './styles.css'

import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { DateTime } from 'luxon'
import { FunctionComponent } from 'react'

import { SRFACLogoImage, Typography, Root } from './bcls-aed.components'

import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'

import srfacLogoSrc from '../common/assets/srfac-logo.png'
import imagesMap from '../common/assets/__generated__/images-map'

import { NationalYouthCouncilBclsAedOaDoc } from './bcls-aed.types'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import { A4HeightPx, A4WidthPx } from 'components/paper-size'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'

const documentWidth = A4WidthPx
const documentHeight = A4HeightPx

export const NationalYouthCouncilBclsAedTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilBclsAedOaDoc> & { className?: string }
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
                <title>nyc - bcls-aed</title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <Root $vertical>
                    <ObsCertMainPage
                        title={
                            <Typography
                                $mt={0}
                                $mb={0}
                                $textAlign="center"
                                $size={'xlarge'}
                                $bold
                            >
                                BCLS & AED
                            </Typography>
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
                                BASIC CARDIAC LIFE SUPPORT +
                            </Typography>
                            <Typography
                                $textAlign="center"
                                $size="medium"
                                $mt={-1}
                                $bold
                            >
                                AUTOMATED EXTERNAL DEFIBRILLATION
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
