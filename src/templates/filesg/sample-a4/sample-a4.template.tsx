import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { FlexBox } from 'components/flexbox'
import { Typography } from 'components/flippable-card/flip-instruction'
import { A4WidthPx, A4HeightPx } from 'components/paper-size'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import { DateTime } from 'luxon'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'
import { OaCertMainPage } from 'templates/for-testing/common/oa-cert-main-page/oa-cert-main-page'

import { FilesgSampleA4OaDoc } from './sample-a4.types'

const documentWidth = A4WidthPx
const documentHeight = A4HeightPx

export const FilesgSampleA4Template: FunctionComponent<
    TemplateProps<FilesgSampleA4OaDoc> & { className?: string }
> = ({ document }) => {
    const startDate = DateTime.fromISO(document.courseStartDate).toFormat(
        'dd MMM yyyy'
    )

    const transformScale = useShrinkToViewport(documentWidth)
    return (
        <>
            <Helmet>
                <title>filesg - sample-a4</title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <OaCertMainPage
                    title={
                        <Typography $textAlign="center" $size={'xlarge'} $bold>
                            Certificate of <br />
                            Completion
                        </Typography>
                    }
                >
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
                </OaCertMainPage>
            </ScalableDocument>
        </>
    )
}
