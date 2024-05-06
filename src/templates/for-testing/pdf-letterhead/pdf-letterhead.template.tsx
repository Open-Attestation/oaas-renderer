import { FunctionComponent, useEffect, useState } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { ForTestingPdfLetterheadOaDoc } from './pdf-letterhead.types'
import { Helmet } from 'react-helmet-async'
import { addLetterhead } from './add-letterhead'
import { letterHeadPngBase64 } from './letterhead'

import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

export const ForTestingPdfLetterheadTemplate: FunctionComponent<
    TemplateProps<ForTestingPdfLetterheadOaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    const [pdf, setPdf] = useState<{ data: Uint8Array } | undefined>(undefined)
    const [numPages, setNumPages] = useState<number>()

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages)
    }

    useEffect(() => {
        ;(async () => {
            setPdf({
                data: await addLetterhead(
                    document.document_pdf,
                    letterHeadPngBase64
                ),
            })
        })()
    }, [document])

    return (
        <>
            <Helmet>
                <title>for-testing - pdf-letterhead</title>
            </Helmet>
            {(!pdf || !numPages) && <>Rendering...</>}
            <div className={className} id="for-testing-pdf-letterhead">
                {pdf && (
                    <>
                        <Document
                            file={pdf}
                            loading={<></>}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {new Array(numPages).fill(1).map((_, i) => (
                                <Page key={i} pageNumber={i + 1} />
                            ))}
                        </Document>
                    </>
                )}
            </div>
        </>
    )
}
