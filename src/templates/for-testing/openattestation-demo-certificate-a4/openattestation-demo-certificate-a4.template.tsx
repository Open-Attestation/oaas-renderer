import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'

import { DateTime } from 'luxon'

import { Typography } from '../common/components'
import { OaCertMainPage } from '../common/oa-cert-main-page/oa-cert-main-page'
import { ForTestingOpenattestationDemoCertificateA4OaDoc } from './openattestation-demo-certificate-a4.types'

export const ForTestingOpenattestationDemoCertificateA4Template: FunctionComponent<
    TemplateProps<ForTestingOpenattestationDemoCertificateA4OaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const startDate = DateTime.fromISO(document.courseStartDate).toFormat(
        'dd MMM yyyy'
    )
    return (
        <>
            <Helmet>
                <title>OpenAttestation - demo-certificate</title>
            </Helmet>
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
        </>
    )
}