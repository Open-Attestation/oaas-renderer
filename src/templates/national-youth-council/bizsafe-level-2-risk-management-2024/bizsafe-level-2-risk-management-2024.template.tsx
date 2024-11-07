import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { FlexBox } from 'components/flexbox'
import { A4HeightPx, A4WidthPx } from 'components/paper-size'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import { DateTime } from 'luxon'
import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import commonImagesMap from '../common/assets/__generated__/images-map'
import { Typography } from '../common/components'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import { NationalYouthCouncilBizsafeLevel_2RiskManagement_2024OaDoc } from './bizsafe-level-2-risk-management-2024.types'

const documentWidth = A4WidthPx
const documentHeight = A4HeightPx

export const NationalYouthCouncilBizsafeLevel_2RiskManagement_2024Template: FunctionComponent<
    TemplateProps<NationalYouthCouncilBizsafeLevel_2RiskManagement_2024OaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const name = document.name.toUpperCase()
    const issueDate = DateTime.fromISO(document.issueDate).toFormat(
        'dd MMM yyyy'
    )
    const nric = `${document.nricFirstCharacter}XXXX${document.nricLast4Characters}`

    const transformScale = useShrinkToViewport(documentWidth)
    return (
        <>
            <Helmet>
                <title>national-youth-council - successful-completion</title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
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
                                commonImagesMap[
                                    document.organisationRepSignature
                                ],
                            name: document.organisationRepName,
                            title: document.organisationRepTitle,
                            date: issueDate,
                        },
                    ]}
                >
                    <FlexBox $vertical>
                        <Typography $size={'medium'} $mt={0}>
                            is awarded to
                        </Typography>
                        <Typography
                            $size={'xlarge'}
                            $bold
                            $mt={1}
                            $italic
                            $textAlign={'center'}
                        >
                            {name}
                            <br />
                            {nric}
                        </Typography>
                        <Typography $size={'medium'} $mt={0}>
                            for successful completion of the
                        </Typography>
                        <Typography
                            $size={'xlarge'}
                            $bold
                            $mt={2}
                            $textAlign="center"
                        >
                            bizSAFE Level 2 (Risk Management) Course <br></br>
                            Outdoor & Adventure Education
                        </Typography>
                        <Typography $size={'large'} $mt={1}>
                            Recognised by the Workplace Safety and Health
                            Council
                        </Typography>
                    </FlexBox>
                </ObsCertMainPage>
            </ScalableDocument>
        </>
    )
}
