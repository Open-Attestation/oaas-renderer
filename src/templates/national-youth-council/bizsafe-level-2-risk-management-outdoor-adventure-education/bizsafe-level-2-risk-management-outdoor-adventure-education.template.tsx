import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilBizsafeLevel_2RiskManagementOutdoorAdventureEducationOaDoc } from './bizsafe-level-2-risk-management-outdoor-adventure-education.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'

import { Typography } from '../common/components'
import commonImagesMap from '../common/assets/__generated__/images-map'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import { formatCourseDatefor } from '../common/utils'

export const NationalYouthCouncilBizsafeLevel_2RiskManagementOutdoorAdventureEducationTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilBizsafeLevel_2RiskManagementOutdoorAdventureEducationOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const name = document.name.toUpperCase()
    const courseDate = formatCourseDatefor(
        document.courseStartDate,
        document.courseEndDate
    )
    return (
        <>
            <Helmet>
                <title>national-youth-council - successful-completion</title>
            </Helmet>
            <ObsCertMainPage
                title={
                    <Typography $textAlign="center" $size={'xlarge'} $bold>
                        Certificate of Successful
                        <br />
                        Completion
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
                    <Typography $size={'medium'} $mt={0}>
                        is awarded to
                    </Typography>
                    <Typography $size={'xlarge'} $bold $mt={1} $italic>
                        {name}
                    </Typography>
                    <Typography $size={'medium'} $mt={1}>
                        for successful completion of the
                    </Typography>
                    <Typography
                        $size={'xlarge'}
                        $bold
                        $mt={1}
                        $textAlign="center"
                    >
                        bizSAFE Level 2 (Risk Management) Course <br></br>
                        Outdoor & Adventure Education
                    </Typography>
                    <Typography $size={'large'} $mt={1}>
                        (Recognised by the Workplace Safety and Health Council)
                    </Typography>
                    <Typography $size={'large'} $mt={1}>
                        Course Date: {courseDate}
                    </Typography>
                    <Typography $size={'medium'} $mt={0}>
                        Serial No: {document.serialNumber}
                    </Typography>
                </FlexBox>
            </ObsCertMainPage>
        </>
    )
}
