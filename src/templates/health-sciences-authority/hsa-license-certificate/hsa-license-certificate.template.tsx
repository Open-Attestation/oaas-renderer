import React, { FunctionComponent, useEffect, useState } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { HealthSciencesAuthorityHsaLicenseCertificateOaDoc } from './hsa-license-certificate.types'
import { Helmet } from 'react-helmet-async'

import { addLetterhead } from './add-letterhead'
import { letterHeadPngBase64 } from './letterhead'

import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { A4 } from 'components/paper-size'
import { QRCodeSVG } from 'qrcode.react'
import { retrieveQrAttachmentPayload } from 'utils/retrieve-qr-attachment-payload'
import mainBg from '../common/assets/license-certificate-a4-bg.png'
import hsaStamp from '../common/assets/hsa-stamp.svg'
import { Typography } from './hsa-license-certificate.components'

import 'pdfjs-dist/build/pdf.worker.entry'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

export const HealthSciencesAuthorityHsaLicenseCertificateTemplate: FunctionComponent<
    TemplateProps<HealthSciencesAuthorityHsaLicenseCertificateOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const qrPayload = retrieveQrAttachmentPayload(document)

    const [pdf, setPdf] = useState<{ data: Uint8Array } | undefined>(undefined)
    const [numPagesContent, setNumPagesContent] = useState<number>()
    const [numPagesProductInfo, setNumPagesProductInfo] = useState<number>()

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPagesContent(numPages)
    }

    function onProductDocumentLoadSuccess({
        numPages,
    }: {
        numPages: number
    }): void {
        setNumPagesProductInfo(numPages)
    }

    useEffect(() => {
        let isUnmounted = false
        ;(async () => {
            if (isUnmounted) return

            setPdf({
                data: await addLetterhead(
                    document.certContent_pdf,
                    letterHeadPngBase64
                ),
            })
        })()

        return () => {
            isUnmounted = true
        }
    }, [document])

    const isPdfsLoaded =
        pdf &&
        numPagesContent &&
        (document.productInfo_pdf ? numPagesProductInfo : true)

    return (
        <>
            <Helmet>
                <title>
                    health-sciences-authority - hsa-license-certificate
                </title>
            </Helmet>
            {!isPdfsLoaded && <>Rendering...</>}
            <div
                id="health-sciences-authority - hsa-license-certificate"
                className={isPdfsLoaded ? 'block' : 'invisible'}
            >
                {pdf && (
                    <>
                        <Document
                            file={pdf}
                            loading={<></>}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {new Array(numPagesContent).fill(1).map((_, i) => (
                                <A4
                                    $padding="0px"
                                    className="overflow-clip"
                                    key={`content-${i}`}
                                >
                                    <Page
                                        key={i}
                                        pageNumber={i + 1}
                                        width={794}
                                    />
                                    <img
                                        style={{
                                            position: 'absolute',
                                            top: '977px',
                                            left: '459px',
                                            height: '94.27px',
                                            width: '95.29px',
                                        }}
                                        className="opacity-60"
                                        src={hsaStamp}
                                        alt="HSA stamp"
                                    ></img>
                                </A4>
                            ))}
                        </Document>

                        <A4 $bgImg={mainBg} $padding="252px 0px 0px 0px">
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col items-center">
                                    <QRCodeSVG
                                        value={qrPayload}
                                        size={215}
                                        className="p-3.5 bg-white rounded-md"
                                    />
                                    <Typography>
                                        <div className="mt-2 ">
                                            <b>Scan to verify</b>
                                            <br />
                                            This QR code is valid for 5 years
                                            from the issuance date.
                                        </div>
                                    </Typography>
                                </div>
                            </div>
                            <img
                                style={{
                                    position: 'absolute',
                                    top: '977px',
                                    left: '459px',
                                    height: '94.27px',
                                    width: '95.29px',
                                }}
                                className="opacity-60"
                                src={hsaStamp}
                                alt="HSA stamp"
                            ></img>
                        </A4>
                        {document.productInfo_pdf && (
                            <Document
                                file={document.productInfo_pdf}
                                loading={<></>}
                                onLoadSuccess={onProductDocumentLoadSuccess}
                            >
                                {new Array(numPagesProductInfo)
                                    .fill(1)
                                    .map((_, i) => (
                                        <A4
                                            $padding="0px"
                                            className="overflow-clip"
                                            key={`product-info-${i}`}
                                        >
                                            <Page
                                                pageNumber={i + 1}
                                                width={794}
                                            />
                                            <img
                                                style={{
                                                    position: 'absolute',
                                                    top: '977px',
                                                    left: '459px',
                                                    height: '94.27px',
                                                    width: '95.29px',
                                                }}
                                                className="opacity-60"
                                                src={hsaStamp}
                                                alt="HSA stamp"
                                            ></img>
                                        </A4>
                                    ))}
                            </Document>
                        )}
                    </>
                )}
            </div>
        </>
    )
}
