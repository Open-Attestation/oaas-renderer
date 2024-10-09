import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import {
    A4Landscape,
    A4LandscapeHeightPx,
    A4LandscapeWidthPx,
} from 'components/paper-size/a4-landscape'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import imagesMap from '../common/assets/__generated__/images-map'
import landscapeBg from '../common/assets/COA_150dpi.png'
import { formatCourseDatefor } from '../common/utils'
import {
    OfParticipation,
    Typography,
} from './certificate-of-achievement-1-signee.components'
import { GovtechDigitalAcademyCertificateOfAchievement_1SigneeOaDoc } from './certificate-of-achievement-1-signee.types'

const documentWidth = A4LandscapeWidthPx
const documentHeight = A4LandscapeHeightPx

export const GovtechDigitalAcademyCertificateOfAchievement_1SigneeTemplate: FunctionComponent<
    TemplateProps<GovtechDigitalAcademyCertificateOfAchievement_1SigneeOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const name = document.name.toUpperCase()
    const issueDate = formatCourseDatefor(
        document.issueDate,
        document.issueDate
    )
    const programmeTitle = decodeURIComponent(document.programmeTitle).replace(
        /\\n/g,
        '\n'
    )

    const transformScale = useShrinkToViewport(documentWidth)

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700"
                ></link>
                <title>
                    govtech-digital-academy -
                    certificate-of-achievement-1-signee
                </title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <Typography>
                    <A4Landscape $bgImg={landscapeBg} $padding="0">
                        <div className="absolute w-[568px] h-[77px] top-[192px] left-[475px] text-[64px] leading-[76.8px] tracking-[0.04em] font-bold text-[#2B2C2B] text-center">
                            CERTIFICATE
                        </div>
                        <OfParticipation className="absolute w-[568px] h-[49px] top-[257px] left-[475px] text-[41px] leading-[49.2px] tracking-[0.11em] font-bold text-[#99753E] text-center">
                            OF ACHIEVEMENT
                        </OfParticipation>
                        <div className="absolute w-[568px] h-[24px] top-[327px] left-[475px] text-[20px] leading-[24px] font-normal text-[#A4A3A3] text-center">
                            PROUDLY PRESENTED TO
                        </div>
                        <div className="absolute w-[568px] top-[375px] left-[475px] flex flex-col items-center">
                            <div className="text-[27px] leading-[32.4px] font-bold text-[#000000] text-center">
                                {name}
                            </div>
                            <div className="h-[1px] w-[568px] mt-[10px] bg-[#99753E]" />
                            <div className="h-[20px] mt-[16px] text-[17px] leading-[20.4px] font-normal text-[#000000] text-center">
                                for your active participation in
                            </div>
                            <div className="mt-[10px] text-[21px] leading-[25.2px] tracking-[0.01em] font-bold text-[#000000] text-center whitespace-pre-line">
                                {programmeTitle}
                            </div>
                        </div>
                        <div className="absolute bottom-[68px] right-[80px] flex flex-row gap-[36px]">
                            <div className="w-[568px] flex flex-col items-center">
                                <div className="w-[265px] h-[71px] mb-[4px] flex flex-col items-center justify-end">
                                    <img
                                        className="max-w-[265px] max-h-[71px]"
                                        src={`${
                                            imagesMap[
                                                document.signeeOneSignature
                                            ]
                                        }`}
                                        alt="Signature of signee one"
                                    />
                                </div>
                                <div className="h-[1px] w-[265px] mb-[7px] bg-[#99753E]" />
                                <div className="text-[17px] leading-[17.34px] tracking-[0.01em] font-normal text-[#000000] text-center">
                                    <span className="inline-block whitespace-pre-wrap">
                                        {document.signeeOneName},{' '}
                                    </span>
                                    <span className="inline-block">
                                        {document.signeeOneDesignation},
                                    </span>
                                    <br />
                                    {document.signeeOneDivision}
                                    <br />
                                    {document.signeeOneOrganisation}
                                </div>
                            </div>
                        </div>

                        <div className="absolute h-[19px] bottom-[27px] left-[43px] text-[16px] leading-[19.2px] font-normal text-[#FFFFFF]">
                            Date of Issue: {issueDate}
                        </div>
                    </A4Landscape>
                </Typography>
            </ScalableDocument>
        </>
    )
}
