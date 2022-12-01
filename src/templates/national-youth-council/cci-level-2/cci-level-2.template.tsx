import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilCciLevel_2OaDoc } from './cci-level-2.types'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'

import { DateTime } from 'luxon'

import {
    Root,
    Table,
    Header,
    TableData,
    RowHeader,
    UnorderedList,
} from './cci-level-2.components'

import { A4 } from 'components/paper-size'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import { Typography } from '../common/components'
import commonImagesMap from '../common/assets/__generated__/images-map'

export const NationalYouthCouncilCciLevel_2Template: FunctionComponent<
    TemplateProps<NationalYouthCouncilCciLevel_2OaDoc> & { className?: string }
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
                <title>national-youth-council - cci-level-2</title>
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
                        <Typography $size={'large'} $mt={0} $bold>
                            Challenge Course Instructor (Level 2)
                        </Typography>
                        <Typography $size={'medium'} $mt={0}>
                            On the date of
                        </Typography>
                        <Typography $size={'large'} $mt={0} $bold>
                            {issueDate}
                        </Typography>
                        <Typography $size={'medium'} $mt={0}>
                            All training and assessments are conducted in the
                            Ministry of Education's Outdoor Adventure Learning
                        </Typography>
                        <Typography $size={'medium'} $mt={-1}>
                            Centres (OALCs) and are based on their local
                            operating systems, procedures and devices.
                        </Typography>
                        <Typography $size={'medium'} $mt={-1}>
                            This certificate is “Site Specific”, and valid only
                            for purposes of the Ministry of Education’s OALCs.
                        </Typography>
                        <Typography $size={'medium'} $mt={0} $bold>
                            Course Date: {courseDate}
                        </Typography>
                        <Typography $size={'medium'} $mt={-1} $bold>
                            Certificate No.: {document.serialNumber}
                        </Typography>
                        <Typography $size={'medium'} $mt={-1} $bold>
                            Certificate is valid till {validTillDateString}
                        </Typography>
                    </FlexBox>
                </ObsCertMainPage>
                <A4>
                    <FlexBox $vertical $spacing={3}>
                        <Typography $size={'medium'} $bold>
                            This table lists the operating systems and devices
                            used in the MOE OALCs that this certificate holder
                            has been trained to operate.
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
                                            <li>Edelrid - Smart Belay</li>
                                            <li>Roperoller®</li>
                                        </UnorderedList>
                                    </TableData>
                                    <TableData>
                                        <UnorderedList>
                                            <li>Saferoller®</li>
                                        </UnorderedList>
                                    </TableData>
                                    <TableData>
                                        <UnorderedList>
                                            <li>Edelrid - Smart Belay</li>
                                            <li>Saferoller®</li>
                                        </UnorderedList>
                                    </TableData>
                                    <TableData>
                                        <UnorderedList>
                                            <li>Saferoller®</li>
                                        </UnorderedList>
                                    </TableData>
                                </tr>
                                <tr>
                                    <RowHeader>Zipline</RowHeader>
                                    <TableData>
                                        <UnorderedList>
                                            <li>Mini-Zip with Roperoller®</li>
                                        </UnorderedList>
                                    </TableData>
                                    <TableData>
                                        <UnorderedList>
                                            <li>Traditional Zipline</li>
                                            <li>Mini-Zip with Saferoller®</li>
                                        </UnorderedList>
                                    </TableData>
                                    <TableData>
                                        <UnorderedList>
                                            <li>Mini-Zip with Saferoller®</li>
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
                                            <li>Traditional top rope belay</li>
                                            <li>M-Belay (by pole friction)</li>
                                        </UnorderedList>
                                    </TableData>
                                    <TableData>
                                        <UnorderedList>
                                            <li>Traditional top rope belay</li>
                                        </UnorderedList>
                                    </TableData>
                                    <TableData>
                                        <UnorderedList>
                                            <li>Traditional top rope belay</li>
                                        </UnorderedList>
                                    </TableData>
                                    <TableData>
                                        <UnorderedList>
                                            <li>Traditional top rope belay</li>
                                        </UnorderedList>
                                    </TableData>
                                </tr>
                                <tr>
                                    <RowHeader>Abseil</RowHeader>
                                    <TableData>
                                        <UnorderedList>
                                            <li>
                                                Static abseil rig with back up
                                                belay set up
                                            </li>
                                        </UnorderedList>
                                    </TableData>
                                    <TableData>
                                        <UnorderedList>
                                            <li>
                                                Static abseil rig with back up
                                                belay set up
                                            </li>
                                        </UnorderedList>
                                    </TableData>
                                    <TableData>
                                        <UnorderedList>
                                            <li>N.A</li>
                                        </UnorderedList>
                                    </TableData>
                                    <TableData>
                                        <UnorderedList>
                                            <li>
                                                Static abseil rig with back up
                                                belay set up
                                            </li>
                                        </UnorderedList>
                                    </TableData>
                                </tr>
                            </tbody>
                        </Table>
                        <UnorderedList>
                            <Typography as="li" $bold $size={'medium'} $my={2}>
                                This certificate is only valid for purposes of
                                the abovementioned systems and devices at MOE
                                OALCs and does not grant the holder any form of
                                certification to operate or conduct activities
                                at any other premises.
                            </Typography>
                            <Typography as="li" $bold $size={'medium'} $my={2}>
                                This certificate shall remain valid for a period
                                of three (3) years from the date of this
                                certificate.
                            </Typography>
                            <Typography as="li" $bold $size={'medium'} $my={2}>
                                An expired certificate shall be deemed invalid.
                            </Typography>
                            <Typography as="li" $bold $size={'medium'} $my={2}>
                                Any person holding an expired certificate shall
                                be given three (3) months’ grace period from the
                                date of expiry to complete the recertification
                                process.
                            </Typography>
                        </UnorderedList>
                    </FlexBox>
                </A4>
            </Root>
        </>
    )
}
