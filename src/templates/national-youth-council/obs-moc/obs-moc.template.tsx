import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { FlexBox } from 'components/flexbox'
import { A4 } from 'components/paper-size'
import { DateTime } from 'luxon'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import commonImagesMap from '../common/assets/__generated__/images-map'
import descriptionBg from '../common/assets/description-watermark.png'
import { Typography } from '../common/components'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import { DescriptionComponent, GroupImg } from './obs-moc.components'
import { descriptions } from './obs-moc.descriptions'
import { NationalYouthCouncilObsMocOaDoc } from './obs-moc.types'

export const NationalYouthCouncilObsMocTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilObsMocOaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    const courseStartDate = DateTime.fromISO(document.courseStartDate).toFormat(
        'dd MMM yyyy'
    )
    const courseEndDate = DateTime.fromISO(document.courseEndDate).toFormat(
        'dd MMM yyyy'
    )
    return (
        <>
            <Helmet>
                <title>
                    national-youth-council - National Outdoor Adventure
                    Education Masterplan
                </title>
            </Helmet>
            <ObsCertMainPage
                title={
                    <Typography $textAlign="center" $size={'xlarge'} $bold>
                        Certificate of <br />
                        Participation
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
                    <Typography
                        $size={'xlarge'}
                        $bold
                        $mt={1}
                        $textAlign={'center'}
                    >
                        A mentally and physically challenging expeditionary
                        Outward Bound Course as part of the National Outdoor
                        Adventure Education Masterplan
                    </Typography>
                    <Typography $size={'xlarge'} $bold $mt={1}>
                        {courseStartDate === courseEndDate
                            ? courseStartDate
                            : `${courseStartDate} - ${courseEndDate}`}
                    </Typography>
                </FlexBox>
            </ObsCertMainPage>

            <A4 $bgImg={descriptionBg}>
                <DescriptionComponent>
                    <div>{descriptions['moc']}</div>
                </DescriptionComponent>
            </A4>

            <A4 $bgImg={descriptionBg}>
                <FlexBox $alignItems="center" $vertical>
                    <GroupImg src={document.groupPhoto_image} />
                </FlexBox>
            </A4>
        </>
    )
}
