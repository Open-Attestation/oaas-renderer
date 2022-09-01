import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilCciLevel_1OaDoc } from './cci-level-1.types'
// import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'
import { Line } from 'components/line'
import { FlippableCard } from 'components/flippable-card/flippable-card'
import { FlipInstruction } from 'components/flippable-card/flip-instruction'
import { CardFace } from 'components/card-face'

import backgroundImg from '../common-assets/background.png'
import {
    BackgroundImg,
    Root,
    Typography,
    SignatureComponent,
    Table,
    Header,
    TableData,
    RowHeader,
    UnorderedList,
} from './cci-level-1.components'

const CERT_WIDTH = 633
const CERT_HEIGHT = 882

export const NationalYouthCouncilCciLevel_1Template: FunctionComponent<
    TemplateProps<NationalYouthCouncilCciLevel_1OaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    return (
        <>
            <Helmet>
                <title>national-youth-council - cci-level-1</title>
            </Helmet>
            <Root $vertical>
                <FlippableCard
                    widthInPx={CERT_WIDTH}
                    front={
                        <CardFace
                            $width={`${CERT_WIDTH}px`}
                            $height={`${CERT_HEIGHT}px`}
                            $zIndex={-2}
                            $vertical
                        >
                            <BackgroundImg src={backgroundImg}></BackgroundImg>
                            {/* Course title */}
                            <FlexBox>
                                <Typography $mt={0} $size={'xlarge'} $bold>
                                    Certificate of Proficiency
                                </Typography>
                            </FlexBox>
                            {/* Course Details */}
                            <FlexBox $vertical $mt={1}>
                                <Typography $size={'small'} $mt={0}>
                                    This is to certify that
                                </Typography>
                                <Typography $size={'large'} $mt={0} $bold>
                                    {document.name}
                                </Typography>
                                <Typography $size={'small'} $mt={0}>
                                    has been tested and found proficient to
                                    qualify for the following award
                                </Typography>
                                <Typography $size={'large'} $mt={0} $bold>
                                    Challenge Course Instructor (Level 1)
                                </Typography>
                                <Typography $size={'small'} $mt={0}>
                                    On the date of
                                </Typography>
                                <Typography $size={'large'} $mt={0} $bold>
                                    {document.issueDate}
                                </Typography>
                                <Typography $size={'small'} $mt={0}>
                                    All training and assessments are conducted
                                    in the Ministry of Education's Outdoor
                                    Adventure Learning
                                </Typography>
                                <Typography $size={'small'} $mt={-1}>
                                    Centres (OALCs) and are based on their local
                                    operating systems, procedures and devices.
                                </Typography>
                                <Typography $size={'small'} $mt={-1}>
                                    This certificate is “Site Specific”, and
                                    valid only for purposes of the Ministry of
                                    Education’s OALCs.
                                </Typography>
                                <Typography $size={'small'} $mt={0} $bold>
                                    Course Date: {document.courseDate}
                                </Typography>
                                <Typography $size={'small'} $mt={-1} $bold>
                                    Certificate No.: {document.serialNumber}
                                </Typography>
                                <Typography $size={'small'} $mt={-1} $bold>
                                    Validity is for one (1) year from the above
                                    date.
                                </Typography>
                            </FlexBox>
                            <SignatureComponent>
                                <Line $maxWidth="250px" />
                                <Typography $size={'medium'} $mt={1} $bold>
                                    {document.dutyProgrammeOfficerName}
                                </Typography>
                                <Typography $size={'medium'} $mt={-1.5} $bold>
                                    Outward Bound Singapore
                                </Typography>
                            </SignatureComponent>
                        </CardFace>
                    }
                    back={
                        <CardFace
                            $width={`${CERT_WIDTH}px`}
                            $height={`${CERT_HEIGHT}px`}
                            $zIndex={-2}
                            $vertical
                            $padding="24px 24px 8px 24px"
                            $justifyContent="flex-start"
                        >
                            {/* Course title */}
                            <FlexBox $vertical $spacing={1}>
                                <Typography $size={'small'} $bold>
                                    This table lists the operating systems and
                                    devices used in the MOE OALCs that this
                                    certificate holder has been trained to
                                    operate.
                                </Typography>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <Header></Header>
                                            <Header>Labrador OALC</Header>
                                            <Header>Jalan Bahtera OALC</Header>
                                            <Header>Dairy Farm OALC</Header>
                                            <Header>Changi Coast OALC</Header>
                                        </tr>
                                        <tr>
                                            <RowHeader>Tower Circuit</RowHeader>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>
                                                        Edelrid - Smart Belay
                                                    </li>
                                                    <li>Roperoller®</li>
                                                </UnorderedList>
                                            </TableData>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>ISC - SmartSnapTM</li>
                                                    <li>Saferoller®</li>
                                                </UnorderedList>
                                            </TableData>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>
                                                        Edelrid - Smart Belay
                                                    </li>
                                                    <li>Saferoller®</li>
                                                </UnorderedList>
                                            </TableData>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>ISC - SmartSnapTM</li>
                                                    <li>Saferoller®</li>
                                                </UnorderedList>
                                            </TableData>
                                        </tr>
                                        <tr>
                                            <RowHeader>Zipline</RowHeader>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>
                                                        Mini-Zip with
                                                        Roperoller®
                                                    </li>
                                                </UnorderedList>
                                            </TableData>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>Traditional Zipline</li>
                                                    <li>
                                                        Mini-Zip with
                                                        Saferoller®
                                                    </li>
                                                </UnorderedList>
                                            </TableData>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>
                                                        Mini-Zip with
                                                        Saferoller®
                                                    </li>
                                                </UnorderedList>
                                            </TableData>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>Traditional Zipline</li>
                                                </UnorderedList>
                                            </TableData>
                                        </tr>
                                        <tr>
                                            <RowHeader>Belay</RowHeader>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>
                                                        Traditional top rope
                                                        belay
                                                    </li>
                                                    <li>
                                                        M-Belay (by pole
                                                        friction)
                                                    </li>
                                                </UnorderedList>
                                            </TableData>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>
                                                        Traditional top rope
                                                        belay
                                                    </li>
                                                </UnorderedList>
                                            </TableData>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>
                                                        Traditional top rope
                                                        belay
                                                    </li>
                                                </UnorderedList>
                                            </TableData>
                                            <TableData>
                                                <UnorderedList>
                                                    <li>
                                                        Traditional top rope
                                                        belay
                                                    </li>
                                                </UnorderedList>
                                            </TableData>
                                        </tr>
                                    </tbody>
                                </Table>
                                <UnorderedList>
                                    <Typography
                                        as="li"
                                        $bold
                                        $size={'medium'}
                                        $my={2}
                                    >
                                        This certificate is only valid for
                                        purposes of the abovementioned systems
                                        and devices at MOE OALCs and does not
                                        grant the holder any form of
                                        certification to operate or conduct
                                        activities at any other premises.
                                    </Typography>
                                    <Typography
                                        as="li"
                                        $bold
                                        $size={'medium'}
                                        $my={2}
                                    >
                                        This certificate shall remain valid for
                                        a period of one (1) year from the date
                                        of this certificate.{' '}
                                    </Typography>
                                    <Typography
                                        as="li"
                                        $bold
                                        $size={'medium'}
                                        $my={2}
                                    >
                                        An expired certificate shall be deemed
                                        invalid.
                                    </Typography>
                                    <Typography
                                        as="li"
                                        $bold
                                        $size={'medium'}
                                        $my={2}
                                    >
                                        Any person holding an expired
                                        certificate shall be given three (3)
                                        months’ grace period from the date of
                                        expiry to complete the recertification
                                        process.
                                    </Typography>
                                </UnorderedList>
                            </FlexBox>
                        </CardFace>
                    }
                />
                <FlipInstruction />
            </Root>
        </>
    )
}
