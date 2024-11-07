import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import {
    DefaultPdfLoadingComponent,
    ScaleToViewportPage,
    ScaleToViewportPdfDocument,
} from 'components/scale-to-viewport-pdf'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import React, { FunctionComponent, ReactNode, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { SingaporeFoodAgencySfaL1PdfPocOaDoc } from './sfa-l1-pdf-poc.types'

// A4
const INITIAL_PAGE_WIDTH_INCHES = 8.3
const PIXEL_PER_INCH = 120
export const SingaporeFoodAgencySfaL1PdfPocTemplate: FunctionComponent<
    TemplateProps<SingaporeFoodAgencySfaL1PdfPocOaDoc> & { className?: string }
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
                <title>singapore-food-agency - sfa-l1-pdf-poc</title>
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
