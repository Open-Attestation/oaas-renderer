import React, { FunctionComponent, ReactNode, useState } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { TrustdocsDemoGenericPdfOaDoc } from './generic-pdf.types'
import { Helmet } from 'react-helmet-async'
import 'react-pdf/dist/Page/TextLayer.css'

import 'pdfjs-dist/build/pdf.worker.entry'
import { Document as PDFDocument, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

function LoadingComponent() {
    return (
        <div className="w-[21cm] h-[29.7cm] !bg-gray-100 !border-gray-100 [&>*]:!invisible !pointer-events-none animate-pulse !text-transparent !select-none" />
    )
}

export const TrustdocsDemoGenericPdfTemplate: FunctionComponent<
    TemplateProps<TrustdocsDemoGenericPdfOaDoc> & { className?: string }
> = ({ document }) => {
    const [numPages, setNumPages] = useState<number>()

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages)
    }

    const renderedPdfPages: ReactNode[] = []

    for (let i = 0; i < (numPages ?? 0); i++) {
        renderedPdfPages.push(
            <div className="border border-gray-200 w-[21cm] h-[29.7cm] overflow-clip">
                <Page
                    key={i}
                    loading={<LoadingComponent />}
                    pageNumber={i + 1}
                    width={794}
                />
            </div>
        )
    }

    return (
        <>
            <Helmet>
                <title>trustdocs - generic-pdf</title>
            </Helmet>
            <div id="trustdocs-demo-generic-pdf">
                <PDFDocument
                    loading={<LoadingComponent />}
                    file={document.input_pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {renderedPdfPages}
                </PDFDocument>
            </div>
        </>
    )
}
