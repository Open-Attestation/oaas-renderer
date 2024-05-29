import { FunctionComponent, useState } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { HealthSciencesAuthorityHsaLetterOaDoc } from './hsa-letter.types'
import { Helmet } from 'react-helmet-async'
import { A4 } from 'components/paper-size'
import { pdfjs, Document, Page } from 'react-pdf'

import 'pdfjs-dist/build/pdf.worker.entry'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

export const HealthSciencesAuthorityHsaLetterTemplate: FunctionComponent<
    TemplateProps<HealthSciencesAuthorityHsaLetterOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const [numPages, setNumPages] = useState<number | undefined>()

    function onDocumentLoadSuccess({
        numPages: pages,
    }: {
        numPages: number
    }): void {
        setNumPages(pages)
    }

    return (
        <>
            <Helmet>
                <title>{`health-sciences-authority - hsa-letter`}</title>
            </Helmet>
            <div id="health-sciences-authority - hsa-letter">
                {document.letter_pdf && (
                    <Document
                        file={`data:application/pdf;base64,${document.letter_pdf}`}
                        loading={<div>Loading...</div>}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array(numPages)
                            .fill(0)
                            .map((_, i) => (
                                <A4
                                    key={`content-${i}`}
                                    $padding="0px"
                                    className="overflow-clip"
                                >
                                    <Page pageNumber={i + 1} width={794} />
                                </A4>
                            ))}
                    </Document>
                )}
            </div>
        </>
    )
}
