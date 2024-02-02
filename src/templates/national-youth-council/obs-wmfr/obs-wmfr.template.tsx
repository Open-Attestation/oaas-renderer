import { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilObsWmfrOaDoc } from './obs-wmfr.types'
import { DateTime } from 'luxon'
import { Helmet } from 'react-helmet-async'

import { Root } from './obs-wmfr.components'
import imagesMap from '../common/assets/__generated__/images-map'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import { Typography } from '../common/components'
import { FlexBox } from 'components/flexbox'
import { A4HeightPx, A4WidthPx } from 'components/paper-size'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'

const documentWidth = A4WidthPx
const documentHeight = A4HeightPx

export const NationalYouthCouncilObsWmfrTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilObsWmfrOaDoc> & { className?: string }
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
                <title>national-youth-council - obs-wmfr</title>
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
                                WILDERNESS MEDICAL FIRST RESPONDER
                            </Typography>
                        }
                        signatures={[
                            {
                                signatureSrc:
                                    imagesMap[document.ExecDirSignature],

                                name: document.ExecDirName,
                                title: 'Executive Director',
                            },
                        ]}
                    >
                        <FlexBox $vertical>
                            <Typography $size={'large'} $mt={0} $bold>
                                <br />
                                {name}
                            </Typography>
                            <Typography $size={'small'} $mt={-1.0}>
                                Is Certified as a
                            </Typography>
                            <Typography
                                $textAlign="center"
                                $size="large"
                                $mt={0}
                                $bold
                            >
                                WILDERNESS MEDICAL FIRST RESPONDER (WMFR)
                            </Typography>
                            <Typography $size={'small'} $mt={-1.0}>
                                On
                            </Typography>
                            <Typography $size={'large'} $mt={0} $bold>
                                {issueDate}
                            </Typography>
                            <Typography $size={'small'} $mt={-1.0}>
                                Conducted by
                            </Typography>
                            <Typography
                                $textAlign="center"
                                $size="large"
                                $mt={0}
                                $bold
                            >
                                OUTWARD BOUND SINGAPORE
                            </Typography>
                            <Typography
                                $textAlign="center"
                                $size="large"
                                $mt={0}
                                $bold
                            >
                                MEDICAL SERVICES & TRAINING
                            </Typography>
                            <Typography $size={'small'} $mt={0} $bold>
                                <br />
                                Certificate No.: {document.certificateNumber}
                            </Typography>
                            <Typography $size={'small'} $mt={0} $bold>
                                Certificate is valid till {validTillDateString}
                            </Typography>
                        </FlexBox>
                    </ObsCertMainPage>
                </Root>
            </ScalableDocument>
        </>
    )
}
