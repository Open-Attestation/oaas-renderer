import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilTechnicalSkillsOaDoc } from './technical-skills.types'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'
import { A4 } from 'components/paper-size'
import {
    Typography,
    AbsoluteBottom,
    SignatureComponent,
} from './technical-skills.components'

import { DateTime } from 'luxon'

import mainBg from '../common-assets/background.svg'
import descriptionBg from '../common-assets/description-watermark.png'
import imagesMap from './__generated__/images-map'
import commonImagesMap from '../common-assets/__generated__/images-map'

import { descriptions } from './technical-skills.descriptions'

export const NationalYouthCouncilTechnicalSkillsTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilTechnicalSkillsOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const courseDate = DateTime.fromISO(document.courseDate).toFormat(
        'dd MMM yyyy'
    )
    return (
        <>
            <Helmet>
                <title>national-youth-council - technical-skills</title>
            </Helmet>

            {/* Page 1: Certificate */}
            <A4 $bgImg={mainBg}>
                {/* Course title */}
                <FlexBox $mt={29.5} $vertical>
                    <Typography $textAlign="center" $size={'xlarge'} $bold>
                        Certificate of <br />
                        Completion
                    </Typography>
                </FlexBox>
                {/* Course Details */}
                <FlexBox $mt={2} $vertical>
                    <Typography $size={'large'} $mt={0}>
                        This is to certify that
                    </Typography>
                    <Typography $size={'xlarge'} $bold $mt={1}>
                        {document.name}
                    </Typography>
                    <Typography $size={'large'} $mt={1}>
                        has successfully completed the
                    </Typography>
                    <Typography $size={'xlarge'} $bold $mt={1}>
                        {document.courseTitle}
                    </Typography>
                    <Typography $size={'xlarge'} $bold $mt={1}>
                        {courseDate}
                    </Typography>
                </FlexBox>
                <AbsoluteBottom>
                    <SignatureComponent
                        signatureSrc={imagesMap[document.trainerSignature]}
                        name={document.trainerName}
                        title={document.trainerTitle}
                    />
                    <SignatureComponent
                        signatureSrc={
                            commonImagesMap[
                                document.dutyProgrammeOfficerSignature
                            ]
                        }
                        name={document.dutyProgrammeOfficerName}
                        title={document.dutyProgrammeOfficerTitle}
                    />
                </AbsoluteBottom>
            </A4>

            {/* Page 2: Course Description */}
            <A4 $bgImg={descriptionBg}>
                {descriptions[document.courseDescription]}
            </A4>
        </>
    )
}
