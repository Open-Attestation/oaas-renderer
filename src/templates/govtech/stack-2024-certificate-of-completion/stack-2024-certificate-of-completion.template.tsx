import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { A4Landscape } from 'components/paper-size'
import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import { GovtechStack_2024CertificateOfCompletionOaDoc } from './stack-2024-certificate-of-completion.types'
import stackBg from './stack-bg.png'

export const GovtechStack_2024CertificateOfCompletionTemplate: FunctionComponent<
    TemplateProps<GovtechStack_2024CertificateOfCompletionOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const { name, workshopTitle, signature_image, organisation, trainerName } =
        document
    return (
        <>
            <Helmet>
                <title>govtech - stack-2024-certificate-of-completion</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700"
                ></link>
            </Helmet>
            <ScalableDocumentV2>
                <div
                    id="govtech-stack-2024-certificate-of-completion"
                    className="text-[#414042]"
                >
                    <A4Landscape $padding="0px" $bgImg={stackBg}>
                        <div className="pt-[282.36px]">
                            <div
                                className={`m-auto flex h-[443px] w-[853.35px] flex-col items-center justify-between font-["Lato"]`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-[24px] text-[35px] font-bold leading-[42px]">
                                        CERTIFICATE OF COMPLETION
                                    </div>
                                    <div className="text-nowrap text-[43px] font-bold leading-[51.6px]">
                                        {name.toUpperCase()}
                                    </div>
                                    <div className="mb-[18.72px] mt-[14.28px] w-[800px] border-b-[0.67px] border-t-0 border-solid border-[#231F20]"></div>
                                    <div className="leading=[22.8px] flex flex-col gap-[5px] text-[19px]">
                                        <div>
                                            has successfully completed the
                                        </div>
                                        <div className="text-nowrap text-[30px] font-bold leading-[36px]">
                                            {workshopTitle}
                                        </div>
                                        <div>
                                            technical workshop at STACK
                                            Developer Conference 2024
                                        </div>
                                        <div>
                                            organised by Government Technology
                                            Agency of Singapore ​(GovTech)
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-row items-end justify-between text-nowrap text-[16px] leading-[19.2px]">
                                    {/* left */}
                                    <div className="relative flex items-end">
                                        <div className="w-[144.81px]">
                                            <img
                                                className="max-w-full"
                                                src={signature_image}
                                                alt="signature"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {trainerName}
                                            </div>
                                            <div>{organisation}</div>
                                        </div>
                                    </div>
                                    {/* right */}
                                    <div className="w-[204px]">
                                        <div className="font-bold">Date</div>
                                        <div className="text-[19px] leading-[22.8px]">
                                            5 November 2024
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </A4Landscape>
                </div>
            </ScalableDocumentV2>
        </>
    )
}
