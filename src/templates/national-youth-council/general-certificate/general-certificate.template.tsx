import React, { FunctionComponent } from 'react'
import { NationalYouthCouncilGeneralCertificateOaDoc } from './general-certificate.types'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'
import { A4 } from 'components/paper-size'

import { DateTime } from 'luxon'

import mainBg from '../common/assets/background.svg'
import {
    Typography,
    AbsoluteBottom,
    SignatureComponent,
} from '../common/components'
import commonImagesMap from '../common/assets/__generated__/images-map'

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
            {/* Page 1: Certificate */}
            <A4 $bgImg={mainBg}>
                {/* Course title */}
                <FlexBox $mt={29.5} $vertical>
                    <Typography $textAlign="center" $size={'xlarge'} $bold>
                        Certificate of <br />
                        Completion
                    </Typography>
                </FlexBox>
                {/* Course Details */}
                <FlexBox $mt={2} $vertical>
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
                        {startDate === endDate
                            ? startDate
                            : `${startDate} - ${endDate}`}
                    </Typography>
                </FlexBox>
                <AbsoluteBottom $flexDirection="row-reverse">
                    <SignatureComponent
                        signatureSrc={
                            commonImagesMap[document.organisationRepSignature]
                        }
                        name={document.organisationRepName}
                        title={document.organisationRepTitle}
                    />
                </AbsoluteBottom>
            </A4>
        </>
    )
}
