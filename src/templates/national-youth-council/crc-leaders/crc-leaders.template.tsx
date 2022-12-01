import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilCrcLeadersOaDoc } from './crc-leaders.types'
// import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'

import { DateTime } from 'luxon'

import { Root } from './crc-leaders.components'

import { A4 } from 'components/paper-size'
import { Typography } from '../common/components'
import commonImagesMap from '../common/assets/__generated__/images-map'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'

export const NationalYouthCouncilCrcLeadersTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilCrcLeadersOaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    const issueDate = DateTime.fromISO(document.courseEndDate).toFormat(
        'dd MMMM yyyy'
    )
    const courseDate = DateTime.fromISO(document.courseStartDate).toFormat(
        'dd MMMM yyyy'
    )

    return (
        <>
            <Helmet>
                <title>national-youth-council - crc-leaders</title>
            </Helmet>
            <Root $vertical>
                <ObsCertMainPage
                    title={
                        <Typography $textAlign="center" $size={'xlarge'} $bold>
                            Certificate of Proficiency
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
                            has been tested and found proficient to qualify for
                            the following award
                        </Typography>
                        <Typography
                            $size={'large'}
                            $mt={0}
                            $bold
                            $textAlign="center"
                        >
                            Outward Bound Singapore:<br></br>Challenge Ropes
                            Course (Leader)
                        </Typography>
                        <Typography $size={'medium'} $mt={0}>
                            On the date of
                        </Typography>
                        <Typography $size={'large'} $mt={0} $bold>
                            {issueDate}
                        </Typography>
                        <Typography
                            $size={'medium'}
                            $mt={0}
                            $textAlign="center"
                        >
                            This course was conducted in Outward Bound Singapore
                            and delivered by OBS CRC Trainers;<br></br>
                            trained and assessed to their exacting standards.
                        </Typography>
                        <Typography $size={'medium'} $mt={0} $bold>
                            Course Date: {courseDate}
                        </Typography>
                    </FlexBox>
                </ObsCertMainPage>
                <A4>
                    <FlexBox $vertical $alignItems={'flex-start'}>
                        <Typography
                            $size={'medium'}
                            $bold
                            style={{
                                position: 'relative',
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}
                        >
                            Course Modules – 32 Training hours
                        </Typography>
                        <Typography $size={'small'}>
                            The curriculum for the OBS Challenge Ropes Course
                            (Leader) level programme aims to provide experienced
                            practitioners with a wider range of rope skills and
                            knowledge on rescue equipment and techniques.
                            Practitioners are trained to independently apply
                            recovery and rescue techniques in situations where a
                            casualty is in distress (either bringing the
                            casualty back onto the activity tower or to the
                            ground) while maintaining different anchor points
                            for both self and the casualty. This includes
                            executing set-ups for Horizontal and Vertical
                            Rescues.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            1) Risk Analysis & Management System (RAMS)
                        </Typography>
                        <Typography $size={'small'}>
                            Able to explain and apply various RAMS processes to
                            OBS Challenge Rope Courses activities.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            2) Equipment and Hardware
                        </Typography>
                        <Typography $size={'small'}>
                            Able to explain the usage, purpose, care and
                            maintenance of different types of safety equipment,
                            CRC hardware and Personal Protective Equipment.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            3) Rigging of Outward Bound Singapore Ropes Courses
                        </Typography>
                        <Typography $size={'small'}>
                            Able to set and rig up all OBS CRC activities
                            independently.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            4) Identification of Parts of a Ropes Course and
                            their Critical Application
                        </Typography>
                        <Typography $size={'small'}>
                            Able to identify components of a ropes course and
                            select correct applications for safe loading of a
                            person on a dynamic or static belay.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            5) Ascend and Descend Techniques (using prussic)
                        </Typography>
                        <Typography $size={'small'}>
                            Able to perform ascending and descending on ropes
                            using prussic and tapes.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            6) Aerial Rescue (Vertical and Horizontal Rescues)
                        </Typography>
                        <Typography $size={'small'}>
                            Able to apply concept of Escalation Model and the
                            principles of:<br></br>
                            -&emsp;Assess, Access, Execute and Exit.<br></br>
                            -&emsp;Safe, Simple and Speedy.<br></br>
                            Able to independently execute safe and timely aerial
                            rescue techniques to reduce any form of suspension
                            trauma situations. Rescue includes self and others.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            7) Group Management and Supervision
                        </Typography>
                        <Typography $size={'small'}>
                            Able to lead safe and quality conduct of CRC
                            activities in all OBS premises, including mood
                            setting, safety briefing, group management, applying
                            appropriate leadership skills, facilitating learning
                            outcomes and continuously apply risk assessment in
                            their supervision to ensure safety of participants
                            when participating in any CRC activities.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            8) CRC Operating Systems
                        </Typography>
                        <Typography $size={'small'}>
                            Able to explain and apply various CRC operating
                            systems.
                        </Typography>
                        <Typography $size={'small'} $bold>
                            This certificate does not grant the holder any form
                            of license to operate at other premises unless
                            otherwise accepted and endorsed by the premise
                            owners.
                        </Typography>
                        <Typography $size={'small'} $bold>
                            This certificate shall remain valid for the period
                            that the holder is an Operational instructional
                            staff of OBS.
                        </Typography>
                    </FlexBox>
                </A4>
            </Root>
        </>
    )
}
