import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import {
    ScaleToViewportPdfDocumentV2,
    DefaultPdfLoadingComponent,
} from 'components/scale-to-viewport-pdf-v2'
import { SoftExpiredBanner } from 'components/soft-expired-banner/soft-expired-banner'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import { DateTime } from 'luxon'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import { HealthSciencesAuthorityHsaShareCertificateOaDoc } from './hsa-share-certificate.types'

// A4
const INITIAL_PAGE_WIDTH_INCHES = 8.3
const PIXEL_PER_INCH = 120

export const HealthSciencesAuthorityHsaShareCertificateTemplate: FunctionComponent<
    TemplateProps<HealthSciencesAuthorityHsaShareCertificateOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const transformScale = useShrinkToViewport(
        INITIAL_PAGE_WIDTH_INCHES * PIXEL_PER_INCH
    )

    const expiryDate = DateTime.fromISO(document.expireOn, {
        zone: 'Asia/Singapore',
    })
    const isExpired =
        DateTime.now().setZone('Asia/Singapore').startOf('day') >=
        expiryDate.startOf('day')

    return (
        <>
            <Helmet>
                <title>health-sciences-authority - hsa-share-certificate</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <div id="health-sciences-authority-hsa-share-certificate">
                {isExpired && <SoftExpiredBanner />}
                {!isExpired && (
                    <ScaleToViewportPdfDocumentV2
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
                    ></ScaleToViewportPdfDocumentV2>
                )}
            </div>
        </>
    )
}
