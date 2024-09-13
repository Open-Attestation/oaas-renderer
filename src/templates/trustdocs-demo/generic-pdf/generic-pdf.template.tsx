import React, { FunctionComponent, ReactNode, useState } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { TrustdocsDemoGenericPdfOaDoc } from './generic-pdf.types'
import { Helmet } from 'react-helmet-async'
import 'react-pdf/dist/Page/TextLayer.css'

import 'pdfjs-dist/build/pdf.worker.entry'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import {
    ScaleToViewportPdfDocument,
    ScaleToViewportPage,
    DefaultPdfLoadingComponent,
} from 'components/scale-to-viewport-pdf'

// A4
const INITIAL_PAGE_WIDTH_INCHES = 8.3
const INITIAL_PAGE_HEIGHT_INCHES = 11.7
const PIXEL_PER_INCH = 120
export const TrustdocsDemoGenericPdfTemplate: FunctionComponent<
    TemplateProps<TrustdocsDemoGenericPdfOaDoc> & { className?: string }
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

    return (
        <>
            <Helmet>
                <title>trustdocs - generic-pdf</title>
            </Helmet>
            <div id="trustdocs-demo-generic-pdf">
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
                    file={document.input_pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {renderedPdfPages}
                </ScaleToViewportPdfDocument>
            </div>
        </>
    )
}
