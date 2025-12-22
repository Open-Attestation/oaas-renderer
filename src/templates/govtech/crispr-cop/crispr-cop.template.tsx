import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { A4Landscape } from 'components/paper-size'
import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'
import { DateTime } from 'luxon'
import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import imagesMap from '../common/assets/__generated__/images-map'
import landscapeBg from '../common/assets/crispr-cop-bg.png'
import { GtoCrisprFormattedDate } from '../common/utils'
import { GovtechCrisprCopOaDoc } from './crispr-cop.types'

export const GovtechCrisprCopTemplate: FunctionComponent<
    TemplateProps<GovtechCrisprCopOaDoc> & { className?: string }
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
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700"
                ></link>
                <title>govtech - crispr-cop</title>
            </Helmet>
            <ScalableDocumentV2>
                <A4Landscape $bgImg={landscapeBg} $padding="0">
                    <div className="absolute w-[348px] h-[66px] top-[228.94px] left-[81.94px] text-[51px] font-bold text-[#000000] font-['IBM_Plex_Serif']">
                        CERTIFICATE
                    </div>
                    <div className="absolute w-[258px] h-[36px] top-[296.94px] left-[83.94px] text-[28px] font-normal text-[#000000] font-['IBM_Plex_Serif']">
                        OF PARTICIPATION
                    </div>
                    <div className="absolute w-[299px] h-[27px] top-[361.54px] left-[83.94px] text-[21px] font-normal text-[#000000] font-['IBM_Plex_Serif']">
                        This certificate is presented to
                    </div>
                    <div className="absolute h-[48px] top-[416.94px] left-[83.94px] right-[83.94px] text-[37px] font-bold text-[#000000] font-['IBM_Plex_Serif']">
                        {name}
                    </div>
                    <div className="absolute w-[432px] h-[60px] top-[492.94px] left-[83.94px] text-[21px] font-normal text-[#000000] leading-[1.45] font-['IBM_Plex_Serif']">
                        in recognition for your valued participation in the{' '}
                        {document.programmeTitle}
                    </div>
                    <div className="absolute bottom-[67px] left-[75.94px] flex flex-row gap-[36px]">
                        <div className="w-[194px] flex flex-col items-center">
                            <div className="text-[23px] italic text-[#000000] text-center ordinal font-bold font-['DM_Sans']">
                                <GtoCrisprFormattedDate date={issueDate} />
                            </div>
                            <div className="h-[2px] w-[180px] mt-[10px] mb-[13px] bg-[#000000]" />
                            <div className="text-[16px] font-bold text-[#000000] text-center font-['Inter']">
                                DATE
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-[45.44px] left-[335.39px] flex flex-row gap-[36px]">
                        <div className="w-[249.68px] flex flex-col items-center">
                            <div className="w-[249.68px] h-[84.1px] mb-[4px] flex flex-col items-center justify-end translate-y-[22px] z-10">
                                <img
                                    className="max-w-[242.76px] max-h-[71px]"
                                    src={`${
                                        imagesMap[document.signeeSignature]
                                    }`}
                                    alt="Signature of signee"
                                />
                            </div>
                            <div className="h-[2px] w-[242.76px] mb-[13px] bg-[#000000] z-20" />
                            <div className="text-[16px] font-bold text-[#000000] text-center font-['Inter'] z-20">
                                {signeeName}
                            </div>
                            <div className="mt-[3.56px] text-[13.5px] text-[#000000] text-center font-['DM_Sans'] z-20">
                                {document.signeeDesignation}
                            </div>
                        </div>
                    </div>
                </A4Landscape>
            </ScalableDocumentV2>
        </>
    )
}
