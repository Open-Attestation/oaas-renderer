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
import {
    BrickWallModel,
    MainOrderedList,
    OrderedList,
    Root,
} from './bit-campcraft-and-navigation.component'
import { NationalYouthCouncilBitCampcraftAndNavigationOaDoc } from './bit-campcraft-and-navigation.types'
import brickWallModelImg from './brick-wall-model.png'

export const NationalYouthCouncilBitCampcraftAndNavigationTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilBitCampcraftAndNavigationOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const issueDate = DateTime.fromISO(document.issueDate).toFormat(
        'dd MMMM yyyy'
    )
    return (
        <>
            <Helmet>
                <title>
                    national-youth-council - bit-campcraft-and-navigation
                </title>
            </Helmet>
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
                            {document.name}
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
                            Campcraft and Navigation Training
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
                        <div>
                            <Typography
                                $size={'xlarge'}
                                $bold
                                $m={0}
                                $mb={1}
                                $textAlign="center"
                            >
                                Campcraft & Navigation Modules
                            </Typography>
                            <FlexBox $vertical $spacing={1}>
                                <MainOrderedList style={{ padding: 0 }}>
                                    <li>
                                        <Typography
                                            $textDecoration="underline"
                                            $bold
                                            as="span"
                                            $m={0}
                                        >
                                            Navigation
                                        </Typography>
                                        <Typography $m={0} $mt={0.5}>
                                            Gain the knowledge and skill to
                                            conduct basic navigation lessons to
                                            OBS participants.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography
                                            $textDecoration="underline"
                                            $bold
                                            as="span"
                                            $m={0}
                                        >
                                            Risk Analysis and Management Systems
                                        </Typography>
                                        <Typography $m={0} $mt={0.5}>
                                            Develop proficiency in application
                                            of risk management to Land
                                            Expedition activities.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography
                                            $textDecoration="underline"
                                            $bold
                                            as="span"
                                            $m={0}
                                        >
                                            Knots and Lashings
                                        </Typography>
                                        <Typography $m={0} $mt={0.5}>
                                            Identify and be able to tie the
                                            following:
                                        </Typography>
                                        <OrderedList>
                                            <li>Overhand knots</li>
                                            <li>Figure 8 knots</li>
                                            <li>Reef knot</li>
                                            <li>Fisherman knots</li>
                                            <li>
                                                Hitches (Clove, Half, Mooring &
                                                Taut line)
                                            </li>
                                            <li>
                                                Lashings (Square, Tripod and
                                                Round)
                                            </li>
                                            <li>Bowline</li>
                                            <li>Alpine Butterfly</li>
                                            <li>Sheet bend</li>
                                            <li>Sheepshank</li>
                                        </OrderedList>
                                    </li>
                                    <li>
                                        <Typography
                                            $textDecoration="underline"
                                            $bold
                                            as="span"
                                            $m={0}
                                        >
                                            Campsite Selection & Shelter
                                            Building
                                        </Typography>
                                        <Typography $m={0} $mt={0.5}>
                                            Analyse campsite suitability and
                                            appropriate shelter with
                                            considerations of space, ground type
                                            and foliage density.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography
                                            $textDecoration="underline"
                                            $bold
                                            as="span"
                                            $m={0}
                                        >
                                            Field Hygiene
                                        </Typography>
                                        <Typography $m={0} $mt={0.5}>
                                            Gain knowledge on the advice needed
                                            for participants to be able to
                                            maintain proper personal and cooking
                                            hygiene in the field.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography
                                            $textDecoration="underline"
                                            $bold
                                            as="span"
                                            $m={0}
                                        >
                                            Expedition Management
                                        </Typography>
                                        <Typography $m={0} $mt={0.5}>
                                            Gain knowledge and skills to conduct
                                            a safe and quality land expedition.
                                        </Typography>
                                        <ul>
                                            <li>
                                                Group management during trekking
                                            </li>
                                            <li>
                                                Incident management for
                                                <ul>
                                                    <li>Inclement weather</li>
                                                    <li>
                                                        Animal attack
                                                        (Bee/Hornet/Boars/Dogs/Monkeys/Snakes)
                                                    </li>
                                                    <li>
                                                        Unable to locate current
                                                        location
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </MainOrderedList>
                            </FlexBox>
                        </div>
                        <Typography $m={0}>
                            The curriculum for Campcraft and Navigation aims to
                            provide a list of competency modules to be delivered
                            in the training. The skills and knowledge in the
                            modules will enable participants to conduct a safe
                            and quality OBS Courses (e.g. 5 Days MOE-OBS
                            programme, PSOEB programme, etc.) This include
                            competencies in map reading and basic orientation
                            skills, introduction to knots and lashings and how
                            to tie the respective knots and lashes as well as
                            its characteristics, camp-craftsmanship and managing
                            field hygiene, introducing to shelter building and
                            its application to different location/campsites and
                            application of risk assessment management.
                            Participants will also be exposed to an introduction
                            to the 7 principles of Leave No Trace (LNT) as well
                            as night navigation.
                        </Typography>
                    </FlexBox>
                </A4>
            </Root>
        </>
    )
}
