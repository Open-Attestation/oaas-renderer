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
import landscapeBg from '../common/assets/COA-BGv2.png'
import { formatCourseDatefor } from '../common/utils'
import {
    Typography,
    OfParticipation,
} from './certificate-of-achievement-2-signees-v2.components'
import { GovtechDigitalAcademyCertificateOfAchievement_2SigneesV2OaDoc } from './certificate-of-achievement-2-signees-v2.types'

const documentWidth = A4LandscapeWidthPx
const documentHeight = A4LandscapeHeightPx

export const GovtechDigitalAcademyCertificateOfAchievement_2SigneesV2Template: FunctionComponent<
    TemplateProps<GovtechDigitalAcademyCertificateOfAchievement_2SigneesV2OaDoc> & {
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
                    certificate-of-achievement-2-signees-v2
                </title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <Typography>
                    <A4Landscape $bgImg={landscapeBg} $padding="0">
                        <div className="absolute left-[475px] top-[192px] h-[77px] w-[568px] text-center text-[64px] font-bold leading-[76.8px] tracking-[0.04em] text-[#2B2C2B]">
                            CERTIFICATE
                        </div>
                        <OfParticipation className="absolute left-[475px] top-[257px] h-[49px] w-[568px] text-center text-[41px] font-bold leading-[49.2px] tracking-[0.11em] text-[#99753E]">
                            OF ACHIEVEMENT
                        </OfParticipation>
                        <div className="absolute left-[475px] top-[327px] h-[24px] w-[568px] text-center text-[20px] font-normal leading-[24px] text-[#A4A3A3]">
                            PROUDLY PRESENTED TO
                        </div>
                        <div className="absolute left-[475px] top-[375px] flex w-[568px] flex-col items-center">
                            <div className="text-center text-[27px] font-bold leading-[32.4px] text-[#000000]">
                                {name}
                            </div>
                            <div className="mt-[10px] h-[1px] w-[568px] bg-[#99753E]" />
                            <div className="mt-[16px] h-[20px] text-center text-[17px] font-normal leading-[20.4px] text-[#000000]">
                                for achieving the requirements and learnings of
                            </div>
                            <div className="mt-[10px] whitespace-pre-line text-center text-[21px] font-bold leading-[25.2px] tracking-[0.01em] text-[#000000]">
                                {programmeTitle}
                            </div>
                            <div className="mt-[12px] h-[20px] text-center text-[17px] font-normal leading-[20.4px] text-[#000000]">
                                Your commitment to continuing professional
                                development has
                                <br />
                                helped advance digital transformation across and
                                beyond the
                                <br />
                                Public Service.
                            </div>
                        </div>
                        <div className="absolute bottom-[48px] right-[73px] flex flex-row gap-[36px]">
                            <div className="flex w-[256px] flex-col items-center">
                                <div className="mb-[4px] flex h-[71px] w-[265px] flex-col items-center justify-end">
                                    <img
                                        className="max-h-[71px] max-w-[265px]"
                                        src={document.signeeOneSignature_image}
                                        alt="Signature of signee one"
                                    />
                                </div>
                                <div className="mb-[7px] h-[1px] w-[265px] bg-[#99753E]" />
                                <div className="text-center text-[17px] font-normal leading-[17.34px] tracking-[0.01em] text-[#000000]">
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
                            <div className="flex w-[256px] flex-col items-center">
                                <div className="mb-[4px] flex h-[71px] w-[265px] flex-col items-center justify-end">
                                    <img
                                        className="max-h-[71px] max-w-[265px]"
                                        src={`${
                                            imagesMap[
                                                document.signeeTwoSignature
                                            ]
                                        }`}
                                        alt="Signature of signee two"
                                    />
                                </div>
                                <div className="mb-[7px] h-[1px] w-[265px] bg-[#99753E]" />
                                <div className="text-center text-[17px] font-normal leading-[17.34px] tracking-[0.01em] text-[#000000]">
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
                            <div className="absolute left-[48px] top-[589px] flex flex-col items-start">
                                <div className="text-[19px] font-normal leading-[22.8px] text-[#FFFFFF]">
                                    Partner:
                                </div>
                                <div className="mt-[6px] flex h-[100px] w-[280px] flex-col justify-end">
                                    <img
                                        className="max-h-[100px] max-w-[280px] object-scale-down"
                                        src={document.partnerLogo_image}
                                        alt="Signature of signee one"
                                    />
                                </div>
                            </div>
                        )}
                        <div className="absolute bottom-[27px] left-[43px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#FFFFFF]">
                            Date of Issue: {issueDate}
                        </div>
                    </A4Landscape>
                </Typography>
            </ScalableDocument>
        </>
    )
}
