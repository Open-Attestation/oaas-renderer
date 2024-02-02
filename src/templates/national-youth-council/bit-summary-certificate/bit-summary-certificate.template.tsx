import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { FlexBox } from 'components/flexbox'
import { A4, A4HeightPx2Pages, A4WidthPx } from 'components/paper-size'
import { DateTime } from 'luxon'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import commonImagesMap from '../common/assets/__generated__/images-map'
import descriptionBg from '../common/assets/description-watermark.png'
import { Typography } from '../common/components'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import { NationalYouthCouncilBitSummaryCertificateOaDoc } from './bit-summary-certificate.types'
import { BrickWallModel, Root, RowHeader, Table } from './bit-summary.component'
import brickWallModelImg from './brick-wall-model.png'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'

const documentWidth = A4WidthPx
const documentHeight = A4HeightPx2Pages

export const NationalYouthCouncilBitSummaryCertificateTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilBitSummaryCertificateOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const name = document.name.toUpperCase()
    const issueDate = DateTime.fromISO(document.issueDate).toFormat(
        'dd MMMM yyyy'
    )

    const transformScale = useShrinkToViewport(documentWidth)
    return (
        <>
            <Helmet>
                <title>national-youth-council - bit-summary-certificate</title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <Root $vertical>
                    <ObsCertMainPage
                        title={
                            <Typography
                                $mt={0}
                                $mb={0}
                                $textAlign="center"
                                $size={'xlarge'}
                                $bold
                            >
                                Certificate of
                                <br />
                                Completion
                            </Typography>
                        }
                        signatures={[
                            {
                                signatureSrc:
                                    commonImagesMap[
                                        'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png'
                                    ],
                                name: document.organisationRepName,
                                title: document.organisationRepTitle,
                            },
                        ]}
                    >
                        <FlexBox $vertical $spacing={3}>
                            <FlexBox $vertical $spacing={2}>
                                <Typography $size="medium" $m={0}>
                                    This is to certify that
                                </Typography>
                                <Typography $size={'xlarge'} $m={0} $bold>
                                    {name}
                                </Typography>
                                <Typography $size="medium" $m={0}>
                                    has successfully completed the
                                </Typography>
                                <Typography
                                    $textAlign="center"
                                    $size="xlarge"
                                    $m={0}
                                    $bold
                                >
                                    Outward Bound Singapore:
                                    <br />
                                    Basic Instructor Training Programme
                                    <br />
                                    (Professional Development)
                                </Typography>
                            </FlexBox>
                            <FlexBox $vertical>
                                <Typography $size="medium" $mt={0}>
                                    The Basic Instructor Training (BIT) is a
                                    core part of the requirement for an
                                    Instructor to be Operational (competent to
                                    lead and conduct OBS courses). The 6 months
                                    training programme incorporates the
                                    following outdoor skills and competencies:
                                    Facilitation skills; Organisational skills;
                                    Instructional skills; Technical Activity
                                    skills; Safety and Risk skills;
                                    Environmental skills; Field Deployment,
                                    History, Philosophy, Typology of OAE, Trends
                                    and Issues.
                                </Typography>
                                <Typography $size="medium" $my={0}>
                                    The Trainee Instructors are also assessed in
                                    the following areas: Skills Assessment
                                    (Trek, Life Saving and Kayak); OBS Training
                                    Safety Regulation; and OBS 5 days
                                    Expeditionary Course. Upon completion of the
                                    BIT programme, the Trainee Instructor will
                                    be deemed competent as OBS Instructor and be
                                    assigned to conduct OBS courses
                                    independently and any other operational
                                    duties.
                                </Typography>
                            </FlexBox>
                            <Typography
                                $width="100%"
                                $size="medium"
                                $textAlign="left"
                                $my={0}
                            >
                                Operational Date: {issueDate}
                            </Typography>
                        </FlexBox>
                    </ObsCertMainPage>
                    <A4 $bgImg={descriptionBg}>
                        <FlexBox $vertical $spacing={3}>
                            <FlexBox $vertical $spacing={1}>
                                <Typography $bold>
                                    Brick Wall Model of Core Competencies for
                                    Effective Outdoor Leadership
                                </Typography>
                                <FlexBox $vertical $spacing={0}>
                                    <BrickWallModel
                                        src={brickWallModelImg}
                                        alt="brick wall model"
                                    />
                                    <Typography $m={0} $size="small" $italic>
                                        Priest, S. & Gass, M. (2018). Effective
                                        Leadership in Adventure Programming (3rd
                                        ed.). Human Kinetics
                                    </Typography>
                                </FlexBox>
                            </FlexBox>
                            <div>
                                <Typography $size={'xlarge'} $bold $m={0}>
                                    Basic Instructor Training Modules
                                </Typography>
                                <Typography $bold $m={0} $textAlign="center">
                                    Competencies and Assessments Required to be
                                    Operational
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    $bold
                                    $textAlign="left"
                                    $width="100%"
                                    $m={0}
                                >
                                    Facilitation, Organisational, Safety and
                                    Risk Skills Training
                                </Typography>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <RowHeader>
                                                Soft Skills 1a&1b{' '}
                                            </RowHeader>
                                            <td>
                                                Evidence, Philosophy, History,
                                                Professional Ethics, Trends and
                                                Issues
                                            </td>
                                        </tr>
                                        <tr>
                                            <RowHeader>Soft Skills 2</RowHeader>
                                            <td>OBS Learning Methodology</td>
                                        </tr>
                                        <tr>
                                            <RowHeader>Soft Skills 3</RowHeader>
                                            <td>
                                                Program Development and
                                                Introduction
                                            </td>
                                        </tr>
                                        <tr>
                                            <RowHeader>Soft Skills 4</RowHeader>
                                            <td>
                                                Facilitation Skills,
                                                Organizational Skills,
                                                Instructional Skills,
                                                Communication and Conditional
                                                Leadership
                                            </td>
                                        </tr>
                                        <tr>
                                            <RowHeader>
                                                Soft Skills 5a&5b
                                            </RowHeader>
                                            <td>
                                                Games Familiarisation and
                                                Leadership
                                            </td>
                                        </tr>
                                        <tr>
                                            <RowHeader>
                                                Soft Skills 6&7{' '}
                                            </RowHeader>
                                            <td>
                                                Problem Solving, Decision Making
                                                & Sound Judgement Social
                                                Psychology and Group Management
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Typography $m={0}>
                                    OBS - WSHC, Risk Analysis and Management
                                    System and bizSAFE Level 2
                                </Typography>
                                <Typography $m={0}>
                                    Outward Bound Singapore, Wilderness Medical
                                    First Responder
                                </Typography>
                                <Typography $m={0}>
                                    Singapore Resuscitation & First Aid Council,
                                    Basic Cardiac Life Support and AED
                                    Certification
                                </Typography>
                                <Typography $m={0}>
                                    Participate in OBS 21 Days Classic Challenge
                                    Course
                                </Typography>
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    display: 'block',
                                }}
                            >
                                <Typography
                                    $bold
                                    $textAlign="left"
                                    $width="100%"
                                    $m={0}
                                >
                                    Technical Activity and Environmental Skills
                                    Training
                                </Typography>
                                <Typography $m={0}>
                                    <Typography
                                        as="span"
                                        $bold
                                        $textDecoration="underline"
                                    >
                                        Land Activities Training
                                    </Typography>
                                    <br />
                                    Leave No Trace, Trainer Course
                                    <br />
                                    Outward Bound Singapore, Campcraft and
                                    Navigation Training
                                </Typography>
                            </div>
                            <Typography $m={0} $width="100%">
                                <Typography
                                    as="span"
                                    $bold
                                    $textDecoration="underline"
                                >
                                    Water Activities Training
                                </Typography>
                                <br />
                                Maritime & Port Authority of Singapore, Powered
                                Pleasure Craft Driving License
                                <br />
                                Singapore Canoe Federation, Kayak Proficiency 1,
                                2, 3 Star
                                <br />
                                Singapore Sailing Federation, Dinghy Sailing
                                Level 1
                                <br />
                                Singapore Life Saving Society, Life Saving Level
                                1, 2, 3 and Bronze Medallion
                                <br />
                                Outward Bound Singapore, Open Water Life Saving{' '}
                                <br />
                                Operations Familiarisation & Boat Handling (OBS
                                Area of Operations in Pulau Ubin) <br />
                                Outward Bound Singapore, Coastal Navigation
                                <br />
                            </Typography>
                            <Typography $m={0} $width="100%">
                                <Typography
                                    as="span"
                                    $bold
                                    $textDecoration="underline"
                                >
                                    Height Activities Training
                                </Typography>
                                <br />
                                Singapore Mountaineering Federation, Sports
                                Climbing Level 1 & 2<br />
                                Singapore Mountaineering Federation, Abseil
                                Proficiency Level 1 & 2<br />
                                Outward Bound Singapore, Abseil Dispatch and
                                Rescue
                                <br />
                                Outward Bound Singapore, Challenge Ropes Course
                                Familiarisation (Camp 1 and Camp 2 Height
                                Elements)
                                <br />
                                Outward Bound Singapore, Challenge Ropes Course
                                Basic (Camp 1 and Camp 2 Height Element
                                Troubleshooting and Aerial Rescue)
                                <br />
                            </Typography>
                            <Typography $m={0} $width="100%">
                                <Typography
                                    as="span"
                                    $bold
                                    $textDecoration="underline"
                                >
                                    Basic Instructor Training Summative
                                    Assessment
                                </Typography>
                                <br />
                                Training Safety Regulation Exam <br />
                                Skills Assessment (Trek, Life Saving and Kayak)
                                <br />
                                Course Observation (5 Days)
                                <br />
                                Course Co-instruction (10 Days)
                                <br />
                                Course Assessment (15 Days)
                                <br />
                            </Typography>
                        </FlexBox>
                    </A4>
                </Root>
            </ScalableDocument>
        </>
    )
}
