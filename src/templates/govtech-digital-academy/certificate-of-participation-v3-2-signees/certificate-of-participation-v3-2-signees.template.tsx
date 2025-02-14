import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import {
    A4LandscapeWidthPx,
    A4LandscapeHeightPx,
    A4Landscape,
} from 'components/paper-size'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import imagesMap from '../common/assets/__generated__/images-map'
import landscapeBg from '../common/assets/COP-BGv2.png'
import { formatCourseDatefor } from '../common/utils'
import {
    Typography,
    OfParticipation,
} from './certificate-of-participation-v3-2-signees.components'
import { GovtechDigitalAcademyCertificateOfParticipationV3_2SigneesOaDoc } from './certificate-of-participation-v3-2-signees.types'

const documentWidth = A4LandscapeWidthPx
const documentHeight = A4LandscapeHeightPx

export const GovtechDigitalAcademyCertificateOfParticipationV3_2SigneesTemplate: FunctionComponent<
    TemplateProps<GovtechDigitalAcademyCertificateOfParticipationV3_2SigneesOaDoc> & {
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
                    certificate-of-participation-v3-2-signees
                </title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <Typography>
                    <A4Landscape $bgImg={landscapeBg} $padding="0">
                        <div className="absolute w-[568px] h-[77px] top-[192px] left-[475px] text-[64px] leading-[76.8px] tracking-[0.03em] font-bold text-[#2B2C2B] text-center">
                            CERTIFICATE
                        </div>
                        <OfParticipation className="absolute w-[568px] h-[46px] top-[257px] left-[475px] text-[38px] leading-[45.6px] tracking-[0.11em] font-bold text-[#99753E] text-center">
                            OF PARTICIPATION
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
                        <div className="absolute bottom-[68px] right-[73px] flex flex-row gap-[36px]">
                            <div className="w-[256px] flex flex-col items-center">
                                <div className="w-[265px] h-[71px] mb-[4px] flex flex-col items-center justify-end">
                                    <img
                                        className="max-w-[265px] max-h-[71px]"
                                        src={document.signeeOneSignature_image}
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
                            <div className="w-[256px] flex flex-col items-center">
                                <div className="w-[265px] h-[71px] mb-[4px] flex flex-col items-center justify-end">
                                    <img
                                        className="max-w-[265px] max-h-[71px]"
                                        src={`${
                                            imagesMap[
                                                document.signeeTwoSignature
                                            ]
                                        }`}
                                        alt="Signature of signee two"
                                    />
                                </div>
                                <div className="h-[1px] w-[265px] mb-[7px] bg-[#99753E]" />
                                <div className="text-[17px] leading-[17.34px] tracking-[0.01em] font-normal text-[#000000] text-center">
                                    <span className="inline-block whitespace-pre-wrap">
                                        {document.signeeTwoName},{' '}
                                    </span>
                                    <span className="inline-block">
                                        {document.signeeTwoDesignation},
                                    </span>
                                    <br />
                                    {document.signeeTwoDivision}
                                    <br />
                                    {document.signeeTwoOrganisation}
                                </div>
                            </div>
                        </div>
                        {document.partnerLogo_image && (
                            <div className="absolute top-[589px] left-[48px] flex flex-col items-start">
                                <div className="text-[19px] leading-[22.8px] font-normal text-[#FFFFFF]">
                                    Partner:
                                </div>
                                <div className="w-[280px] h-[100px] mt-[6px] flex flex-col justify-end">
                                    <img
                                        className="max-w-[280px] max-h-[100px] object-scale-down"
                                        src={document.partnerLogo_image}
                                        alt="Signature of signee one"
                                    />
                                </div>
                            </div>
                        )}
                        <div className="absolute h-[19px] bottom-[27px] left-[43px] text-[16px] leading-[19.2px] font-normal text-[#FFFFFF]">
                            Date of Issue: {issueDate}
                        </div>
                    </A4Landscape>
                </Typography>
            </ScalableDocument>
        </>
    )
}
