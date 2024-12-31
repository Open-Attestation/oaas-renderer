import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { A4Landscape } from 'components/paper-size'
import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'
import { DateTime } from 'luxon'
import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import landscapeBg from '../common/assets/launch-hackathon-bg.png'
import { GovtechLaunchHackathonOaDoc } from './launch-hackathon.types'

export const GovtechLaunchHackathonTemplate: FunctionComponent<
    TemplateProps<GovtechLaunchHackathonOaDoc> & { className?: string }
> = ({ document }) => {
    const issueDateTime = DateTime.fromISO(document.issueDate)
    const formattedIssueDate = issueDateTime.toFormat('dd/MM/yyyy')

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Questrial:wght@400"
                ></link>
                <title>govtech - launch-hackathon</title>
            </Helmet>
            <ScalableDocumentV2>
                <A4Landscape $bgImg={landscapeBg} $padding="0">
                    <div className="absolute w-[854px] h-[86px] top-[173px] left-[118px] px-4 text-[37px] text-center content-center font-bold text-[#000000] font-['Montserrat']">
                        {document.programmeTitle}
                    </div>
                    <div className="absolute w-[886px] h-[42px] top-[275px] left-[118px] text-[42px] text-center content-center font-bold text-[#14BDEF] font-['Montserrat']">
                        {document.awardTitle}
                    </div>
                    <div className="absolute w-[886px] h-[16px] top-[352px] left-[118px] text-[16px] text-center content-center tracking-[0.16em] font-normal text-[#67677E] font-['Questrial']">
                        THIS CERTIFICATE IS PROUDLY PRESENTED TO
                    </div>
                    <div className="absolute w-[854px] h-[42px] top-[387px] left-[118px] px-4 text-[42px] text-center content-center font-bold text-[#A5167F] font-['Montserrat']">
                        {document.name}
                    </div>
                    <div className="absolute w-[570px] h-[54px] top-[449px] left-[280px] text-[15px] text-center font-medium text-[#000000] font-['Montserrat']">
                        {document.awardDescription}
                    </div>
                    <div className="absolute w-[166px] h-[20px] top-[549px] left-[212px] text-[16px] text-center font-bold text-[#000000] font-['Montserrat']">
                        {formattedIssueDate}
                    </div>
                    <div className="absolute w-[166px] h-[1px] top-[572px] left-[212px] bg-[#000000]" />
                    <div className="absolute w-[166px] h-[20px] top-[575px] left-[212px] text-[15px] text-center text-[#000000] font-['Montserrat']">
                        Date
                    </div>
                    <div className="absolute w-[166px] h-[60px] top-[510px] left-[723px] text-center content-end">
                        <img
                            className="max-w-[166px] max-h-[60px]"
                            src={document.signeeSignature_image}
                            alt="signature"
                        />
                    </div>
                    <div className="absolute w-[166px] h-[1px] top-[572px] left-[723px] bg-[#000000]" />
                    <div className="absolute w-[380px] h-[18px] top-[575px] left-[616px] text-[15px] text-center font-bold text-[#000000] font-['Montserrat']">
                        {document.signeeName}
                    </div>
                    <div className="absolute w-[380px] h-[16px] top-[596px] left-[616px] text-[13px] text-center text-[#000000] font-['Montserrat']">
                        {document.signeeDesignation}
                    </div>
                    <div className="absolute w-[185px] h-[22px] top-[664px] left-[470px] text-[18px] text-center text-[#FFFFFF] font-['Montserrat']">
                        Jointly organised by:
                    </div>
                    <div className="absolute w-[480px] h-[75px] top-[705px] left-[324px] text-center content-end">
                        <img
                            className="max-w-[480px] max-h-[75px]"
                            src={document.partnershipLogo_image}
                            alt="signature"
                        />
                    </div>
                </A4Landscape>
            </ScalableDocumentV2>
        </>
    )
}
