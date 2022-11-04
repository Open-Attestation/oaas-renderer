import React, { FunctionComponent } from 'react'
import { NationalYouthCouncilGeneralCertificateOaDoc } from './general-certificate.types'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'

import { DateTime } from 'luxon'

import { Typography } from '../common/components'
import commonImagesMap from '../common/assets/__generated__/images-map'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'

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
            <ObsCertMainPage
                title={
                    <Typography $textAlign="center" $size={'xlarge'} $bold>
                        Certificate of <br />
                        Completion
                    </Typography>
                }
                signatures={[
                    {
                        signatureSrc:
                            commonImagesMap[document.organisationRepSignature],
                        name: document.organisationRepName,
                        title: document.organisationRepTitle,
                    },
                ]}
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
                        {startDate === endDate
                            ? startDate
                            : `${startDate} - ${endDate}`}
                    </Typography>
                </FlexBox>
            </ObsCertMainPage>
        </>
    )
}
