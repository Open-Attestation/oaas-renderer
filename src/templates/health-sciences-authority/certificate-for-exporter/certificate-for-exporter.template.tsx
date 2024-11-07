import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { A4 } from 'components/paper-size'
import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'
import { QRCodeSVG } from 'qrcode.react'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { pdfjs, Document, Page } from 'react-pdf'
import { retrieveQrAttachmentPayload } from 'utils/retrieve-qr-attachment-payload'

import hsaStamp from '../common/assets/hsa-stamp.svg'
import mainBg from '../common/assets/license-certificate-a4-bg.png'
import { Typography } from './certificate-for-exporter.components'
import { HealthSciencesAuthorityCertificateForExporterOaDoc } from './certificate-for-exporter.types'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import 'pdfjs-dist/build/pdf.worker.entry'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

export const HealthSciencesAuthorityCertificateForExporterTemplate: FunctionComponent<
    TemplateProps<HealthSciencesAuthorityCertificateForExporterOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const qrPayload = retrieveQrAttachmentPayload(document)

    const [numPagesContent, setNumPagesContent] = useState<number>()

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPagesContent(numPages)
    }

    useEffect(() => {
        let isUnmounted = false
        ;(async () => {
            if (isUnmounted) return
        })()

        return () => {
            isUnmounted = true
        }
    }, [document])

    const isPdfsLoaded = document.certContent_pdf && numPagesContent

    return (
        <>
            <Helmet>
                <title>
                    health-sciences-authority - certificate-for-exporter
                </title>
            </Helmet>
            {!isPdfsLoaded && <>Rendering...</>}
            <div
                id="health-sciences-authority - certificate-for-exporter"
                className={isPdfsLoaded ? 'block' : 'invisible'}
            >
                {document.certContent_pdf && (
                    <>
                        <Document
                            file={document.certContent_pdf}
                            loading={<></>}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {new Array(numPagesContent).fill(1).map((_, i) => (
                                <ScalableDocumentV2>
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
                                    </A4>
                                </ScalableDocumentV2>
                            ))}
                        </Document>

                        <ScalableDocumentV2>
                            <A4 $bgImg={mainBg} $padding="252px 0px 0px 0px">
                                <div className="flex flex-row justify-center">
                                    <div className="flex flex-col items-center">
                                        <QRCodeSVG
                                            value={qrPayload}
                                            size={188}
                                            className="rounded-md bg-white p-2"
                                        />
                                        <Typography>
                                            <div className="mt-2">
                                                <b>
                                                    Scan this QR code to verify
                                                    a printed or PDF version of
                                                    this document.
                                                </b>
                                                <br />
                                                This QR code is valid for 5
                                                years from the issuance date.
                                            </div>
                                        </Typography>
                                    </div>
                                </div>
                                <img
                                    style={{
                                        position: 'absolute',
                                        top: '945px',
                                        left: '613px',
                                        height: '94.27px',
                                        width: '95.29px',
                                    }}
                                    className="opacity-60"
                                    src={hsaStamp}
                                    alt="HSA stamp"
                                ></img>
                                <Typography>
                                    <div className="absolute bottom-[88px] left-[88px] text-xs">
                                        {document.certificateNo}
                                    </div>
                                </Typography>
                            </A4>
                        </ScalableDocumentV2>
                    </>
                )}
            </div>
        </>
    )
}
