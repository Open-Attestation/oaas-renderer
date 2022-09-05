import React, { FunctionComponent } from 'react'
import { NationalYouthCouncilGeneralCertificateOaDoc } from './general-certificate.types'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'
import { CardFace } from 'components/card-face'
import {
    Root,
    BackgroundImg,
    Typography,
} from './general-certificate.components'

import { DateTime } from 'luxon'

import backgroundImg from '../common-assets/background.png'

const CERT_WIDTH = 633
const CERT_HEIGHT = 882

export const NationalYouthCouncilGeneralCertificateTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilGeneralCertificateOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const startDate = DateTime.fromISO(document.courseStartDate).toFormat(
        'dd MMM yyyy'
    )
    const endDate = DateTime.fromISO(document.courseEndDate).toFormat(
        'dd MMM yyyy'
    )
    return (
        <>
            <Helmet>
                <title>national-youth-council - generate-certificate</title>
            </Helmet>
            <Root $vertical>
                <CardFace
                    $width={`${CERT_WIDTH}px`}
                    $height={`${CERT_HEIGHT}px`}
                    $zIndex={-2}
                    $vertical
                >
                    <BackgroundImg src={backgroundImg}></BackgroundImg>
                    {/* Course title */}
                    <FlexBox $vertical $mt={-4}>
                        <Typography $mt={0} $size={'xlarge'} $bold>
                            Certificate of
                        </Typography>
                        <Typography $mt={-3} $size={'xlarge'} $bold>
                            Completion
                        </Typography>
                    </FlexBox>
                    {/* Course Details */}
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
                            {startDate} - {endDate}
                        </Typography>
                    </FlexBox>
                </CardFace>
            </Root>
        </>
    )
}
