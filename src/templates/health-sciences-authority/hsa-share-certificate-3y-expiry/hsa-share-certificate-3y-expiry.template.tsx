import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import {
    ScaleToViewportPage,
    ScaleToViewportPdfDocument,
    DefaultPdfLoadingComponent,
} from 'components/scale-to-viewport-pdf'
import { SoftExpiredBanner } from 'components/soft-expired-banner/soft-expired-banner'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import { DateTime } from 'luxon'
import { FunctionComponent, ReactNode, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { HealthSciencesAuthorityHsaShareCertificate_3yExpiryOaDoc } from './hsa-share-certificate-3y-expiry.types'

// A4
const INITIAL_PAGE_WIDTH_INCHES = 8.3
const PIXEL_PER_INCH = 120

export const HealthSciencesAuthorityHsaShareCertificate_3yExpiryTemplate: FunctionComponent<
    TemplateProps<HealthSciencesAuthorityHsaShareCertificate_3yExpiryOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const [numPages, setNumPages] = useState<number>()

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages)
    }

    const transformScale = useShrinkToViewport(
        INITIAL_PAGE_WIDTH_INCHES * PIXEL_PER_INCH
    )

    const renderedPdfPages: ReactNode[] = []

    for (let i = 0; i < (numPages ?? 0); i++) {
        renderedPdfPages.push(
            <ScaleToViewportPage
                key={i}
                className="mx-auto"
                pageNumber={i + 1}
            />
        )
    }

    const expiryDate = DateTime.fromISO(document.validUntil, {
        zone: 'Asia/Singapore',
    })
    const isExpired =
        DateTime.now().setZone('Asia/Singapore').startOf('day') >=
        expiryDate.startOf('day')

    return (
        <>
            <Helmet>
                <title>
                    health-sciences-authority - hsa-share-certificate-3y-expiry
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <div id="hsa-share-certificate-3y-expiry">
                {isExpired && <SoftExpiredBanner />}
                {!isExpired && (
                    <ScaleToViewportPdfDocument
                        loading={
                            <DefaultPdfLoadingComponent
                                width={
                                    INITIAL_PAGE_WIDTH_INCHES *
                                    PIXEL_PER_INCH *
                                    transformScale
                                }
                                height={11.7 * PIXEL_PER_INCH * transformScale}
                            />
                        }
                        file={document.pdfContent_pdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {renderedPdfPages}
                    </ScaleToViewportPdfDocument>
                )}
            </div>
        </>
    )
}
