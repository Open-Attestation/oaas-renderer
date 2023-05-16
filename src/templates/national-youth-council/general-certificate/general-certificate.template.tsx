import React, { FunctionComponent } from 'react'
import { NationalYouthCouncilGeneralCertificateOaDoc } from './general-certificate.types'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'

import { Typography } from '../common/components'
import commonImagesMap from '../common/assets/__generated__/images-map'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import { formatCourseDatefor } from '../common/utils'

export const NationalYouthCouncilGeneralCertificateTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilGeneralCertificateOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const name = document.name.toUpperCase()
    const courseTitle = document.courseTitle.toUpperCase()
    const courseDate = formatCourseDatefor(
        document.courseStartDate,
        document.courseEndDate
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
                        {name}
                    </Typography>
                    <Typography $size={'large'} $mt={1}>
                        has completed
                    </Typography>
                    <Typography $size={'xlarge'} $bold $mt={1}>
                        {courseTitle}
                    </Typography>
                    <Typography $size={'xlarge'} $bold $mt={1}>
                        {courseDate}
                    </Typography>
                </FlexBox>
            </ObsCertMainPage>
        </>
    )
}
