import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import {
    ScaleToViewportPage,
    ScaleToViewportPdfDocument,
} from 'components/scale-to-viewport-pdf'
import { FunctionComponent, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { addLetterhead } from './add-letterhead'
import { letterHeadPngBase64 } from './letterhead'
import { ForTestingPdfLetterheadOaDoc } from './pdf-letterhead.types'

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
            <div className={className} id="for-testing-pdf-letterhead">
                {pdf && (
                    <>
                        <ScaleToViewportPdfDocument
                            file={pdf}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {new Array(numPages).fill(1).map((_, i) => (
                                <ScaleToViewportPage
                                    key={i}
                                    pageNumber={i + 1}
                                />
                            ))}
                        </ScaleToViewportPdfDocument>
                    </>
                )}
            </div>
        </>
    )
}
