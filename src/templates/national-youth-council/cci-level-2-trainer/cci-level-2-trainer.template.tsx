import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilCciLevel_2TrainerOaDoc } from './cci-level-2-trainer.types'
// import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'

import { DateTime } from 'luxon'

import {
    Root,
    UnorderedList,
    UnorderedDashList,
} from './cci-level-2-trainer.components'

import { A4 } from 'components/paper-size'
import { Typography } from '../common/components'
import commonImagesMap from '../common/assets/__generated__/images-map'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'

export const NationalYouthCouncilCciLevel_2TrainerTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilCciLevel_2TrainerOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const issueDate = DateTime.fromISO(document.courseEndDate).toFormat(
        'dd MMMM yyyy'
    )
    const courseDate = DateTime.fromISO(document.courseStartDate).toFormat(
        'dd MMMM yyyy'
    )

    const validTillDate = DateTime.fromISO(document.courseEndDate)
        .plus({ years: 3 })
        .minus({ days: 1 })
    const validTillDateString = validTillDate.toFormat('dd MMM yyyy')

    return (
        <>
            <Helmet>
                <title>national-youth-council - cci-level-2-trainer</title>
            </Helmet>
            <Root $vertical>
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
                        <Typography $size={'medium'} $mt={0}>
                            This is to certify that
                        </Typography>
                        <Typography $size={'large'} $mt={0} $bold>
                            {document.name}
                        </Typography>
                        <Typography $size={'medium'} $mt={0}>
                            Has successfully fulfilled{' '}
                            <span style={{ fontWeight: 'bold' }}>64</span> hours
                            of qualification training and
                        </Typography>
                        <Typography $size={'medium'} $mt={-1}>
                            is hereby appointed as a
                        </Typography>
                        <Typography $size={'large'} $mt={0} $bold>
                            Challenge Course Instructor (Level 2) Trainer
                        </Typography>
                        <Typography $size={'medium'} $mt={0}>
                            On the date of
                        </Typography>
                        <Typography $size={'large'} $mt={0} $bold>
                            {issueDate}
                        </Typography>
                        <Typography $size={'medium'} $mt={0}>
                            The training curriculum includes risk management,
                            course delivery and rescue principles & techniques
                            that
                        </Typography>
                        <Typography $size={'medium'} $mt={-1}>
                            are relevant to the conduct of a safe and quality
                            CCI Level 2 certification course.
                        </Typography>
                        <Typography $size={'medium'} $mt={-1}>
                            The process includes supervised on-the-job training
                            and assessment involving:
                        </Typography>
                        <ul>
                            <li>
                                <Typography $size={'medium'} $mt={-1}>
                                    Completing a 3-day Accelerated CCI Level 2
                                    Certification Course (24 hours)
                                </Typography>
                            </li>
                            <li>
                                <Typography $size={'medium'} $mt={-1}>
                                    Co-instructing one (1) CCI Level 2
                                    Certification course (40 hours)
                                </Typography>
                            </li>
                        </ul>
                        <Typography $size={'medium'} $mt={0} $bold>
                            Course Date: {courseDate}
                        </Typography>
                        <Typography $size={'medium'} $mt={-1} $bold>
                            Certificate is valid till {validTillDateString}
                        </Typography>
                    </FlexBox>
                </ObsCertMainPage>
                <A4>
                    <FlexBox $vertical $alignItems={'flex-start'} $spacing={1}>
                        <Typography $size={'medium'} $bold $italic>
                            This certificate does not grant the holder any form
                            of license to operate at other premises unless
                            otherwise accepted and endorsed by the premise
                            owners
                        </Typography>
                        <Typography $size={'medium'} $bold $italic>
                            This certificate shall remain valid for a period of
                            3 years.
                        </Typography>
                        <Typography $size={'medium'} $bold $italic>
                            To revalidate at CCI (Level 2) Trainer, the Trainer
                            shall hold a valid certificate and either:
                        </Typography>
                        <UnorderedList>
                            <Typography
                                as="li"
                                $bold
                                $italic
                                $size={'medium'}
                                $my={2}
                            >
                                Provide a portfolio within the preceding three
                                (3) years documenting
                                <UnorderedDashList>
                                    <li>
                                        <Typography
                                            as="span"
                                            $bold
                                            $italic
                                            $size={'medium'}
                                        >
                                            five hundred (500) hours of
                                            experience delivering CCI Level 1 or
                                            Level 2 certification courses, with
                                            the last course delivered not more
                                            than one (1) year ago; and
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography
                                            as="span"
                                            $bold
                                            $italic
                                            $size={'medium'}
                                        >
                                            forty (40) hours of related
                                            professional training
                                        </Typography>
                                    </li>
                                </UnorderedDashList>
                            </Typography>
                        </UnorderedList>
                        <Typography $bold $italic $size={'medium'}>
                            OR
                        </Typography>
                        <UnorderedList>
                            <Typography
                                as="li"
                                $bold
                                $italic
                                $size={'medium'}
                                $my={2}
                            >
                                Provide a portfolio within the preceding three
                                (3) years documenting
                                <UnorderedDashList>
                                    <li>
                                        <Typography
                                            as="span"
                                            $bold
                                            $italic
                                            $size={'medium'}
                                        >
                                            hundred and fifty (150) hours of
                                            experience delivering CCI or ropes
                                            course-related training; and
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography
                                            as="span"
                                            $bold
                                            $italic
                                            $size={'medium'}
                                        >
                                            forty (40) hours of related
                                            professional training; and
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography
                                            as="span"
                                            $bold
                                            $italic
                                            $size={'medium'}
                                        >
                                            pass a practical revalidation
                                            assessment.
                                        </Typography>
                                    </li>
                                </UnorderedDashList>
                            </Typography>
                        </UnorderedList>
                    </FlexBox>
                </A4>
            </Root>
        </>
    )
}
