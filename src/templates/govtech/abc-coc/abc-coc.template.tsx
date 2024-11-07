import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { A4Landscape } from 'components/paper-size'
import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'
import { DateTime } from 'luxon'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import imagesMap from '../common/assets/__generated__/images-map'
import landscapeBg from '../common/assets/GTO-COC.png'
import { GtoFormattedDate } from '../common/utils'
import { GovtechAbcCocOaDoc } from './abc-coc.types'

export const GovtechAbcCocTemplate: FunctionComponent<
    TemplateProps<GovtechAbcCocOaDoc> & { className?: string }
> = ({ document }) => {
    const name = document.name.toUpperCase()
    const signeeName = document.signeeName.toUpperCase()
    const issueDate = DateTime.fromISO(document.issueDate)

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;700"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Questrial:wght@400"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700"
                ></link>
                <title>govtech - abc-coc</title>
            </Helmet>
            <ScalableDocumentV2>
                <A4Landscape $bgImg={landscapeBg} $padding="0">
                    <div className="absolute w-[760px] h-[91px] top-[185px] left-[86px] text-[70px] tracking-[0.08em] font-bold text-[#FFFFFF] font-['IBM_Plex_Serif']">
                        CERTIFICATE
                    </div>
                    <div className="absolute w-[760px] h-[28px] top-[275px] left-[89px] text-[27px] tracking-[0.17em] font-normal text-[#FFFFFF] font-['Questrial']">
                        OF COMPLETION
                    </div>
                    <div className="absolute w-[940px] h-[23.03px] top-[347px] left-[89px] text-[24px] tracking-[0.17em] font-normal text-[#FFFFFF] font-['Questrial']">
                        This is to certify that
                    </div>
                    <div className="absolute w-[940px] h-[55.06px] top-[408px] left-[89px] text-[43px] tracking-[0.12em] font-bold text-[#FFFFFF] font-['IBM_Plex_Serif']">
                        {name}
                    </div>
                    <div className="absolute w-[940px] h-[23.03px] top-[492px] left-[89px] text-[21px] tracking-[0.12em] font-normal text-[#FFFFFF] font-['Questrial']">
                        has successfully completed the
                    </div>
                    <div className="absolute w-[940px] h-[27px] top-[522px] left-[89px] text-[27px] tracking-[0.15em] font-normal text-[#FFFFFF] font-['Questrial']">
                        {document.programmeTitle}
                    </div>
                    <div className="absolute bottom-[98px] left-[89px] flex flex-row gap-[36px]">
                        <div className="w-[180px] flex flex-col items-center">
                            <div className="text-[21px] tracking-[0.12em] italic text-[#FFFFFF] text-center ordinal font-['Open_Sans']">
                                <GtoFormattedDate date={issueDate} />
                            </div>
                            <div className="h-[1px] w-[180px] mb-[7px] bg-[#FFFFFF]" />
                            <div className="text-[20px] tracking-[0.1em] font-bold text-[#FFFFFF] text-center font-['Open_Sans']">
                                DATE
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-[76px] left-[329px] flex flex-row gap-[36px]">
                        <div className="w-[242.76px] flex flex-col items-center">
                            <div className="w-[242.76px] h-[71px] mb-[4px] flex flex-col items-center justify-end translate-y-[16px]">
                                <img
                                    className="max-w-[242.76px] max-h-[71px]"
                                    src={`${
                                        imagesMap[document.signeeSignature]
                                    }`}
                                    alt="Signature of signee"
                                />
                            </div>
                            <div className="h-[1px] w-[242.76px] mb-[7px] bg-[#FFFFFF]" />
                            <div className="text-[20px] tracking-[0.1em] font-bold text-[#FFFFFF] text-center font-['Lato']">
                                {signeeName}
                            </div>
                            <div className="mt-[7px] text-[13px] tracking-[0.2em] text-[#FFFFFF] text-center font-['Open_Sans']">
                                {document.signeeDesignation}
                            </div>
                        </div>
                    </div>
                </A4Landscape>
            </ScalableDocumentV2>
        </>
    )
}
