import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilObsCoachingOaDoc } from './obs-coaching.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import { Typography } from '../common/components'
import { FlexBox } from 'components/flexbox'

import commonImagesMap from '../common/assets/__generated__/images-map'
import { DateTime } from 'luxon'

const TemplateContainer = styled.div`
    pre {
        background-color: lightgray;
        overflow-wrap: anywhere;
        white-space: break-spaces;
    }
`

export const NationalYouthCouncilObsCoachingTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilObsCoachingOaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    const issueDate = DateTime.fromISO(document.issueDate).toFormat(
        'dd MMM yyyy'
    )
    const expiryDate = DateTime.fromISO(document.issueDate)
        .plus({
            days: -1,
            years: Number(document.validityDurationInYears),
        })
        .toFormat('dd MMM yyyy')
    return (
        <>
            <Helmet>
                <title>national-youth-council - obs-coaching</title>
            </Helmet>
            <TemplateContainer
                className={className}
                id="national-youth-council-obs-coaching"
            >
                <ObsCertMainPage
                    title={
                        <Typography $textAlign="center" $size={'xlarge'} $bold>
                            Certificate of Appointment
                        </Typography>
                    }
                    signatures={[
                        {
                            signatureSrc:
                                commonImagesMap[
                                    document.organisationRepSignature
                                ],
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
                            is appointed as a
                        </Typography>
                        <Typography
                            $size={'xlarge'}
                            $bold
                            $mt={1}
                            $textAlign={'center'}
                        >
                            Outward Bound Singapore:
                            <br />
                            Dinghy Sailing Coach
                        </Typography>
                        <Typography $size={'large'} $mt={1}>
                            On the date of
                        </Typography>
                        <Typography
                            $size={'xlarge'}
                            $bold
                            $mt={1}
                            $textAlign={'center'}
                        >
                            {issueDate}
                        </Typography>
                        <Typography $size={'large'} $mt={1} $textAlign="center">
                            Certificate is valid till <b>{expiryDate}</b>
                            <br />
                            Certificate #: {document.certificateNumber}
                        </Typography>
                    </FlexBox>
                </ObsCertMainPage>
            </TemplateContainer>
        </>
    )
}
