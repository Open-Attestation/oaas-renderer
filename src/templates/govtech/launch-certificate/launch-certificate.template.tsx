import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { A4Landscape } from 'components/paper-size'
import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'
import { DateTime } from 'luxon'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import landscapeBg from '../common/assets/launch-certificate-bg.png'
import { GovtechLaunchCertificateOaDoc } from './launch-certificate.types'

const ConvertToSuperscriptJSX = (input: string): JSX.Element => {
    const regex = /(\d+)(st|nd|rd|th)/gi
    const parts = input.split(regex) // Split the string by the regex.

    return (
        <span>
            {input.split(regex).map((part, index) => {
                if (index % 3 === 1) {
                    // This is the number part.
                    const number = part
                    const suffix = input.split(regex)[index + 1]
                    return (
                        <React.Fragment key={index}>
                            {number}
                            <sup>{suffix}</sup>
                        </React.Fragment>
                    )
                } else if (index % 3 === 2) {
                    // Skip the suffix part since it's handled with <sup>.
                    return null
                }
                // Return other parts as-is.
                return <React.Fragment key={index}>{part}</React.Fragment>
            })}
        </span>
    )
}

export const GovtechLaunchCertificateTemplate: FunctionComponent<
    TemplateProps<GovtechLaunchCertificateOaDoc> & { className?: string }
> = ({ document }) => {
    const issueDateTime = DateTime.fromISO(document.issueDate)
    const formattedIssueDate = issueDateTime.toFormat('dd/MM/yyyy')

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700"
                ></link>
                <title>govtech - launch-certificate</title>
            </Helmet>
            <ScalableDocumentV2>
                <A4Landscape $bgImg={landscapeBg} $padding="0">
                    <div className="absolute w-[944px] h-[59px] top-[170px] left-[90px] text-[48px] font-extrabold text-[#1E2A4C] font-['Poppins']">
                        {document.programmeTitle}
                    </div>
                    <div className="absolute w-[944px] h-[42px] top-[220px] left-[90px] text-[28px] text-[#1E2A4C] font-['Poppins']">
                        {document.programmeSubtitle}
                    </div>
                    <div className="absolute w-[944px] h-[78px] top-[252px] left-[90px] text-[52px] font-bold ordinal text-[#00A6E3] font-['Poppins']">
                        {ConvertToSuperscriptJSX(document.awardTitle)}
                    </div>
                    <div className="absolute w-[944px] h-[27px] top-[340px] left-[90px] text-[18px] tracking-[0.08em] text-[#676770] font-['Poppins']">
                        THIS CERTIFICATE IS PROUDLY PRESENTED TO
                    </div>
                    <div className="absolute w-[944px] h-[75px] top-[363px] left-[90px] text-[50px] font-bold text-[#303B79] font-['Poppins']">
                        {document.name}
                    </div>
                    <div className="absolute w-[450px] h-[72px] top-[447px] left-[90px] text-[16px] font-semibold text-[#676767] font-['Poppins']">
                        {document.awardDescription}
                    </div>
                    <div className="absolute w-[163px] h-[23px] top-[596px] left-[90px] text-[15px] text-center font-semibold text-[#676767] font-['Poppins']">
                        {formattedIssueDate}
                    </div>
                    <div className="absolute w-[163px] h-[1px] top-[619px] left-[90px] bg-[#676767]" />
                    <div className="absolute w-[163px] h-[23px] top-[621px] left-[90px] text-[15px] text-center font-semibold text-[#676767] font-['Poppins']">
                        Date
                    </div>
                    <div className="absolute w-[166px] h-[60px] top-[558px] left-[591px] text-center content-end">
                        <img
                            className="max-w-[166px] max-h-[60px]"
                            src={document.signeeSignature_image}
                            alt="signature"
                        />
                    </div>
                    <div className="absolute w-[166px] h-[1px] top-[620px] left-[591px] bg-[#676767]" />
                    <div className="absolute w-[400px] h-[23px] top-[621px] left-[472px] text-[15px] text-center font-bold text-[#676767] font-['Poppins']">
                        {document.signeeName}
                    </div>
                    <div className="absolute w-[400px] h-[21px] top-[643px] left-[472px] text-[14px] text-center text-[#676767] font-['Poppins']">
                        {document.signeeDesignation}
                    </div>
                    <div className="absolute w-[450px] h-[72px] top-[670px] left-[90px] content-end">
                        <img
                            className="max-w-[450px] max-h-[72px]"
                            src={document.partnershipLogo_image}
                            alt="signature"
                        />
                    </div>
                </A4Landscape>
            </ScalableDocumentV2>
        </>
    )
}
