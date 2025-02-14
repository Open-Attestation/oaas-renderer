import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { FlexBox } from 'components/flexbox'
import { A4HeightPx, A4WidthPx } from 'components/paper-size'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import { DateTime } from 'luxon'
import { FunctionComponent, ComponentProps } from 'react'
import { Helmet } from 'react-helmet-async'

import imagesMap from '../common/assets/__generated__/images-map'
import { Typography } from '../common/components'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import { Root } from './obs-wmfr-oct-24.components'
import { NationalYouthCouncilObsWmfrOct_24OaDoc } from './obs-wmfr-oct-24.types'

const documentWidth = A4WidthPx
const documentHeight = A4HeightPx

export const NationalYouthCouncilObsWmfrOct_24Template: FunctionComponent<
    TemplateProps<NationalYouthCouncilObsWmfrOct_24OaDoc> & {
        className?: string
    }
> = ({ document }) => {
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
                                title: getExecDirTitle(document.ExecDirName),
                                location: getExecDirLocation(
                                    document.ExecDirName
                                ),
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
                                $mt={-1.0}
                                $bold
                            >
                                MEDICAL SERVICES & TRAINING
                            </Typography>
                            <Typography $size={'small'} $mt={0} $bold>
                                <br />
                                Course Date: {document.courseDate}
                            </Typography>
                            <Typography $size={'small'} $mt={-1.0} $bold>
                                Course Code: {document.courseCode}
                            </Typography>
                            <Typography $size={'small'} $mt={-1.0} $bold>
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

function getExecDirTitle(
    execDirName: TemplateProps<NationalYouthCouncilObsWmfrOct_24OaDoc>['document']['ExecDirName']
): string {
    switch (execDirName) {
        case 'Dr Ng Yih Yng':
            return 'Chairman of Medical Advisory Panel'
        case 'Nicholas Conceicao':
        default:
            return 'Executive Director'
    }
}

function getExecDirLocation(
    execDirName: TemplateProps<NationalYouthCouncilObsWmfrOct_24OaDoc>['document']['ExecDirName']
): string | undefined {
    switch (execDirName) {
        case 'Dr Ng Yih Yng':
            return 'Life Support Training Centre'
        case 'Nicholas Conceicao':
        default:
            return undefined
    }
}
