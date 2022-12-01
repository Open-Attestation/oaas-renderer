import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilCrcBasicOaDoc } from './crc-basic.types'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'

import { DateTime } from 'luxon'

import { Root } from './crc-basic.components'

import { A4 } from 'components/paper-size'
import { Typography } from '../common/components'
import commonImagesMap from '../common/assets/__generated__/images-map'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'

export const NationalYouthCouncilCrcBasicTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilCrcBasicOaDoc> & { className?: string }
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
                <title>national-youth-council - crc-basic</title>
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
                            Outward Bound Singapore:<br></br> Challenge Ropes
                            Course (Basic)
                        </Typography>
                        <Typography $size={'medium'} $mt={0}>
                            On the date of
                        </Typography>
                        <Typography $size={'large'} $mt={0} $bold>
                            {issueDate}
                        </Typography>
                        <Typography $size={'medium'} $mt={0}>
                            This course was conducted in Outward Bound Singapore
                            and delivered by OBS CRC Trainers;
                        </Typography>
                        <Typography $size={'medium'} $mt={-1}>
                            trained and assessed to their exacting standards.
                        </Typography>
                        <Typography $size={'medium'} $mt={0} $bold>
                            Course Date: {courseDate}
                        </Typography>
                    </FlexBox>
                </ObsCertMainPage>
                <A4>
                    {/* Course title */}
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
                            Course Modules – 40 Training hours
                        </Typography>
                        <Typography $size={'small'}>
                            The curriculum for the Challenge Ropes Course (CRC)
                            Basic level programme aims to equip novice
                            practitioners with the essential skills and
                            knowledge to conduct safe and quality challenge
                            ropes course activities in OBS. This includes
                            familiarisation to all OBS CRC elements,
                            competencies in RAMS for CRC, Activity Checks,
                            Rigging of OBS Ropes Courses, Ropes Course Activity
                            Management and Facilitation.
                        </Typography>
                        <Typography $size={'small'}>
                            Practitioners are also trained and assessed in
                            executing basic recovery and troubleshooting skills
                            to allow them to resolve simple participant
                            situations that do not require the removal of the
                            participant’s safety systems while it is being used,
                            and also the minor rectification of belay systems on
                            both Horizontal and Vertical elements.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            1) Risk Analysis & Management System (RAMS) and
                            Familiarisation to OBS CRC Related elements
                        </Typography>
                        <Typography $size={'small'}>
                            Able to apply risk analysis and management processes
                            to OBS Challenge Ropes Course activities.<br></br>
                            Complete the process of negotiating all OBS CRC
                            activities at Camp 1 and 2.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            2) Activity Checks
                        </Typography>
                        <Typography $size={'small'}>
                            Able to execute the following tasks:<br></br>
                            -&emsp;Pre Activity checks involving Environment,
                            Equipment and Element.<br></br>
                            -&emsp;Pre Dispatch checks involving Anchor, Belay,
                            Climber and Devices.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            3) Rigging of Outward Bound Singapore Ropes Course
                        </Typography>
                        <Typography $size={'small'}>
                            Able to independently set up an OBS CRC activity
                            with the correct rigging method and ensuring that
                            CRC is ready for loading via a load test.
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
                            5) Escalation Model application for Recovery
                        </Typography>
                        <Typography $size={'small'}>
                            Able to apply concept of Escalation Model (Verbal
                            Assist, Self/Buddy Assist, Recovery & Rescue) for
                            recovery of participants with the principles of:
                            <br></br>
                            -&emsp;Assess, Access, Execute and Exit.<br></br>
                            -&emsp;Safe, Simple and Speedy.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            6) Troubleshooting of Ropes Course
                        </Typography>
                        <Typography $size={'small'}>
                            Able to rectify both Horizontal and Vertical anchor
                            systems using concept and principles of Escalation
                            Model.
                        </Typography>
                        <Typography
                            $size={'small'}
                            $bold
                            $textDecoration={'underline'}
                        >
                            7) Ropes Course Activity Management
                        </Typography>
                        <Typography $size={'small'}>
                            Able to articulate knowledge and execute skills to
                            conduct a safe and quality ropes course activity.
                            <br></br>
                            -&emsp;Comprehensive briefing to highlight the
                            safety information as stated in the OBS Training
                            Safety Regulations,<br></br>
                            -&emsp;Participant group management during ropes
                            course activity,<br></br>
                            -&emsp;Effective supervision of the activity to
                            ensure safety,<br></br>
                            -&emsp;Facilitate the review of ropes course
                            activity using Experiential Learning Cycle,<br></br>
                            -&emsp;Use of High and Low elements, and <br></br>
                            -&emsp;Able to operate in OBS Camp 1 and Camp 2.
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
