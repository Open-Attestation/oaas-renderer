import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { FlexBox } from 'components/flexbox'
import { A4, A4HeightPx2Pages, A4WidthPx } from 'components/paper-size'
import { DateTime } from 'luxon'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import commonImagesMap from '../common/assets/__generated__/images-map'
import { Typography } from '../common/components'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import {
    BrickWallModel,
    Root,
    RowHeader,
    Table,
    UnorderedList,
} from './bit-soft-skills.component'
import { NationalYouthCouncilBitSoftSkillsOaDoc } from './bit-soft-skills.types'
import brickWallModelImg from './brick-wall-model.png'
import descriptionBg from '../common/assets/description-watermark.png'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'

const documentWidth = A4WidthPx
const documentHeight = A4HeightPx2Pages

export const NationalYouthCouncilBitSoftSkillsTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilBitSoftSkillsOaDoc> & {
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
                <title>national-youth-council - bit-soft-skills</title>
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
                                Certificate of Successful
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
                        <FlexBox $vertical>
                            <Typography $size={'medium'} $mt={0}>
                                is awarded to
                            </Typography>
                            <Typography $size={'xlarge'} $mt={0} $bold>
                                {name}
                            </Typography>
                            <Typography $size={'medium'} $mt={0}>
                                For successfully completing the
                            </Typography>
                            <Typography
                                $textAlign="center"
                                $size="xlarge"
                                $mt={0}
                                $bold
                            >
                                Outward Bound Singapore:
                                <br />
                                Soft Skills Programme
                            </Typography>
                            <Typography $size={'medium'} $mt={0}>
                                On the date of
                            </Typography>
                            <Typography $size={'large'} $mt={0} $bold>
                                {issueDate}
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
                            <Typography $size={'xlarge'} $bold $m={0}>
                                Soft Skills Modules
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
                                            Program Development and Introduction
                                        </td>
                                    </tr>
                                    <tr>
                                        <RowHeader>Soft Skills 4</RowHeader>
                                        <td>
                                            Facilitation Skills, Organizational
                                            Skills, Instructional Skills,
                                            Communication and Conditional
                                            Leadership
                                        </td>
                                    </tr>
                                    <tr>
                                        <RowHeader>Soft Skills 5a&5b</RowHeader>
                                        <td>
                                            Games Familiarisation and Leadership
                                        </td>
                                    </tr>
                                    <tr>
                                        <RowHeader>Soft Skills 6&7 </RowHeader>
                                        <td>
                                            Problem Solving, Decision Making &
                                            Sound Judgement Social Psychology
                                            and Group Management
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <FlexBox $vertical $spacing={1}>
                                <Typography $m={0}>
                                    The Soft Skills Programme is one of the
                                    trainings that is required for Trainee
                                    Instructors to turn operational. The modules
                                    covered in the programme allows the staff to
                                    gain knowledge, skills and attitude required
                                    to conduct a safe and quality Outward Bound
                                    Singapore Course.
                                </Typography>
                                <div>
                                    <Typography $textAlign="left" $width="100%">
                                        Programme materials and content is
                                        largely referenced from the following
                                        sources:
                                    </Typography>
                                    <UnorderedList>
                                        <Typography
                                            as="li"
                                            $italic
                                            $size={'medium'}
                                            $my={2}
                                        >
                                            Priest, S. & Gass, M. (2018).
                                            Effective Leadership in Adventure
                                            Programming (3rd ed.). Human
                                            Kinetics
                                        </Typography>
                                        <Typography
                                            as="li"
                                            $italic
                                            $size={'medium'}
                                            $my={2}
                                        >
                                            Jacobson, M. & Ruddy, M. (2004).
                                            Open to Outcome: A Practical Guide
                                            for Facilitating & Teaching
                                            Experiential Reflection. Wood ‘N’
                                            Barnes Publishing
                                        </Typography>
                                        <Typography
                                            as="li"
                                            $italic
                                            $size={'medium'}
                                            $my={2}
                                        >
                                            Mark Collard (2014). Serious Fun:
                                            Your Step-by-Step Guide to Learning
                                            Remarkably Fun Programs That Make A
                                            Difference. playmeo
                                        </Typography>
                                    </UnorderedList>
                                </div>
                            </FlexBox>
                        </FlexBox>
                    </A4>
                </Root>
            </ScalableDocument>
        </>
    )
}
