import { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { ForTestingOpenattestationDemoCertificateA4LandscapeOaDoc } from './openattestation-demo-certificate-a4-landscape.types'
import { Helmet } from 'react-helmet-async'
import landscapeBg from '../common/assets/background-landscape.png'
import {
    A4Landscape,
    A4LandscapeHeightPx,
    A4LandscapeWidthPx,
} from 'components/paper-size'
import { Header } from './openattestation-demo-certificate-a4-landscape.components'
import { Typography } from '../common/components'
import { FlexBox } from 'components/flexbox'
import { DateTime } from 'luxon'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'

const documentWidth = A4LandscapeWidthPx
const documentHeight = A4LandscapeHeightPx

export const ForTestingOpenattestationDemoCertificateA4LandscapeTemplate: FunctionComponent<
    TemplateProps<ForTestingOpenattestationDemoCertificateA4LandscapeOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const startDate = DateTime.fromISO(document.courseStartDate).toFormat(
        'dd MMM yyyy'
    )

    const transformScale = useShrinkToViewport(documentWidth)
    return (
        <>
            <Helmet>
                <title>
                    for-testing - openattestation-demo-certificate-a4-landscape
                </title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <A4Landscape $bgImg={landscapeBg}>
                    <Header>
                        <Typography $textAlign="center" $size={'xlarge'} $bold>
                            Certificate of Completion
                        </Typography>
                    </Header>
                    <div style={{ marginTop: '24px' }}>
                        <FlexBox $vertical>
                            <Typography $size={'large'} $mt={0}>
                                This is to certify that
                            </Typography>
                            <Typography $size={'xlarge'} $bold $mt={1}>
                                {document.name}
                            </Typography>
                            <Typography $size={'large'} $mt={1}>
                                has completed
                            </Typography>
                            <Typography $size={'xlarge'} $bold $mt={1}>
                                {document.courseTitle}
                            </Typography>
                            <Typography $size={'xlarge'} $bold $mt={1}>
                                {startDate}
                            </Typography>
                        </FlexBox>
                    </div>
                </A4Landscape>
            </ScalableDocument>
        </>
    )
}
