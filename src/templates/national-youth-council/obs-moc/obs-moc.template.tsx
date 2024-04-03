import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { FlexBox } from 'components/flexbox'
import { A4, A4HeightPx2Pages, A4WidthPx } from 'components/paper-size'
import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import commonImagesMap from '../common/assets/__generated__/images-map'
import descriptionBg from '../common/assets/description-watermark.png'
import { Typography } from '../common/components'
import { ObsCertMainPage } from '../common/obs-cert-main-page/obs-cert-main-page'
import { descriptions } from './obs-moc.descriptions'
import { NationalYouthCouncilObsMocOaDoc } from './obs-moc.types'
import { formatCourseDatefor } from '../common/utils'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'

const documentWidth = A4WidthPx
const documentHeight = A4HeightPx2Pages

export const NationalYouthCouncilObsMocTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilObsMocOaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    const name = document.name.toUpperCase()
    const courseDate = formatCourseDatefor(
        document.courseStartDate,
        document.courseEndDate
    )

    const transformScale = useShrinkToViewport(documentWidth)
    return (
        <>
            <Helmet>
                <title>
                    national-youth-council - National Outdoor Adventure
                    Education Masterplan
                </title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <ObsCertMainPage
                    title={
                        <Typography $textAlign="center" $size={'xlarge'} $bold>
                            Certificate of <br />
                            Participation
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
                        <Typography $size={'large'} $mt={0}>
                            This is to certify that
                        </Typography>
                        <Typography $size={'xlarge'} $bold $mt={1}>
                            {name}
                        </Typography>
                        <Typography $size={'large'} $mt={1}>
                            has completed
                        </Typography>
                        <Typography
                            $size={'xlarge'}
                            $bold
                            $mt={1}
                            $textAlign={'center'}
                        >
                            A mentally and physically challenging expeditionary
                            Outward Bound Course as part of the National Outdoor
                            Adventure Education Masterplan
                        </Typography>
                        <Typography $size={'xlarge'} $bold $mt={1}>
                            {courseDate}
                        </Typography>
                    </FlexBox>
                </ObsCertMainPage>

                <A4 $bgImg={descriptionBg}>
                    <div>{descriptions['moc']}</div>
                </A4>
            </ScalableDocument>
        </>
    )
}
