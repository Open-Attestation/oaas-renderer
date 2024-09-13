import { FunctionComponent, useState } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { HealthSciencesAuthorityHsaLetterOaDoc } from './hsa-letter.types'
import { Helmet } from 'react-helmet-async'
import { ScaleToViewportPage, ScaleToViewportPdfDocument } from 'components/scale-to-viewport-pdf'

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
                    <ScaleToViewportPdfDocument
                        file={document.letter_pdf}
                        loading={<div>Loading...</div>}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array(numPages)
                            .fill(0)
                            .map((_, i) => (
                                <ScaleToViewportPage pageNumber={i + 1}/>
                            ))}
                    </ScaleToViewportPdfDocument>
                )}
            </div>
        </>
    )
}
