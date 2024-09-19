import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'
import { QRCodeSVG } from 'qrcode.react'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'
import { retrieveQrAttachmentPayload } from 'utils/retrieve-qr-attachment-payload'

import { TrustdocsDemoDemoPermitOaDoc } from './demo-permit.types'
import logo from './logo.png'

export const TrustdocsDemoDemoPermitTemplate: FunctionComponent<
    TemplateProps<TrustdocsDemoDemoPermitOaDoc> & { className?: string }
> = ({ document }) => {
    const qrPayload = retrieveQrAttachmentPayload(document)

    const renderedQrSection = qrPayload ? (
        <div className="z-0 box-border h-[204px] w-[204px] rounded-[5.6px] border-[4px] border-solid border-[#D5F5F6] bg-white p-[8px]">
            <QRCodeSVG value={qrPayload} size={180} />
        </div>
    ) : (
        <div className="z-0 h-[204px] w-[204px]" />
    )

    return (
        <>
            <Helmet>
                <title>trustdocs-demo - demo-permit</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=PT+Sans:wght@400;700&display=block"
                    rel="stylesheet"
                />
            </Helmet>
            {/* A4 page */}
            <ScalableDocumentV2>
                <div className="relative box-border h-[1123px] w-[794px] border-b-[12px] border-l-0 border-r-0 border-t-[8px] border-solid border-[#346283] px-[80px] pb-[56px] pt-[72px]">
                    <div
                        className={`absolute left-0 z-10 flex w-full flex-col items-center gap-[72px] text-center font-['PT_Sans','sans-serif'] text-gray-700`}
                    >
                        <img
                            className="max-h-[59.5px]"
                            src={document.logo_image ?? logo}
                            alt="logo"
                        />
                        <div className="font-['Bebas_Neue','sans-serif'] text-[64px] leading-[64px] text-[#4588B8]">
                            OFFICIAL PERMIT
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-[22px] leading-[28.47px] text-[#4588B8]">
                                This permit is hereby granted to:
                            </div>
                            <div className="text-[40px] font-bold leading-[51.76px]">
                                {document.name}
                            </div>
                            <div className="text-[22px] leading-[28.47px] text-[#4588B8]">
                                for passing stringent tests to operate devices
                                in accordance
                                <br />
                                with protocol standards at the following
                                premises:
                            </div>
                            <div>
                                <div className="text-[22px] font-bold leading-[28.47px]">
                                    {document.addressLineOne}
                                </div>
                                <div className="text-[22px] font-bold leading-[28.47px]">
                                    {document.addressLineTwo}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[8px] text-[16px] leading-[24px]">
                            <div>
                                <span className="text-[#4588B8]">
                                    Effective date:{' '}
                                </span>
                                {formatDate(document.effectiveDate)}
                            </div>
                            <div>
                                <span className="text-[#4588B8]">
                                    Expiry date:{' '}
                                </span>
                                {formatDate(document.expiryDate)}
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[56px]">
                            {renderedQrSection}
                            <div className="leading=[15.53px] text-[12px] text-gray-700">
                                This document is a mock permit created for
                                demonstration purposes only. It does not
                                constitute a real permit of any kind.
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 z-0">
                        <svg
                            width="700"
                            height="840"
                            viewBox="0 0 700 840"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M877.748 702C882.046 665.655 884.3 629.098 884.5 592.5C884.5 290.134 753.757 45 592.5 45C431.243 45 300.5 290.134 300.5 592.5C300.5 894.866 431.243 1140 592.5 1140C669.15 1140 738.5 1084.34 790.549 994"
                                stroke="#346283"
                                strokeOpacity="0.04"
                                strokeWidth="88.22"
                                strokeMiterlimit="10"
                                strokeLinecap="square"
                            />
                            <path
                                d="M483 307.253C519.345 302.954 555.902 300.7 592.5 300.5C894.866 300.5 1140 431.243 1140 592.5C1140 753.757 894.866 884.5 592.5 884.5C290.134 884.5 45 753.757 45 592.5C45 515.85 100.663 446.5 191 394.451"
                                stroke="#346283"
                                strokeOpacity="0.04"
                                strokeWidth="88.22"
                                strokeMiterlimit="10"
                                strokeLinecap="square"
                            />
                            <path
                                d="M592.5 702C652.975 702 702 652.975 702 592.5C702 532.025 652.975 483 592.5 483C532.025 483 483 532.025 483 592.5C483 652.975 532.025 702 592.5 702Z"
                                stroke="#346283"
                                strokeOpacity="0.04"
                                strokeWidth="88.22"
                                strokeMiterlimit="10"
                                strokeLinecap="square"
                            />
                        </svg>
                    </div>
                </div>
            </ScalableDocumentV2>
        </>
    )
}

// format date from eg 2024-08-20 to 20 Aug 2024
const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })
}
