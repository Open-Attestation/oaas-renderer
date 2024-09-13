import React, { createContext, useContext, useState } from 'react'

import {
    Document as PDFDocument,
    DocumentProps,
    Page,
    pdfjs,
    PageProps,
} from 'react-pdf'
import { DocumentCallback } from 'react-pdf/dist/cjs/shared/types'
import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'

import 'react-pdf/dist/Page/TextLayer.css'
import 'pdfjs-dist/build/pdf.worker.entry'
import styled from 'styled-components'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString()

// assumption that most browsers treat 1 inch as 96 pixels
// do correct if wrong
const PIXELS_PER_INCH = 96
const PDF_POINTS_PER_INCH = 72
const A4_DIMENSIONS_INCHES = {
    width: 8.3,
    height: 11.7,
} as const

export const DefaultPdfLoadingComponent: React.FC<{
    width?: number
    height?: number
}> = ({
    width = A4_DIMENSIONS_INCHES.width * PIXELS_PER_INCH,
    height = A4_DIMENSIONS_INCHES.height * PIXELS_PER_INCH,
}) => {
    return (
        <div
            style={{
                width,
                height,
            }}
            className={`!bg-gray-100 !border-gray-100 [&>*]:!invisible !pointer-events-none animate-pulse !text-transparent !select-none mx-auto`}
        />
    )
}

type ScaleToViewportPdfDocumentProps = Omit<DocumentProps, 'className'>

type DocumentState = {
    pages: {
        width: number
        height: number
    }[]
}

const context = createContext<DocumentState | undefined>(undefined)

export const ScaleToViewportPdfDocument: React.FC<
    ScaleToViewportPdfDocumentProps
> = ({ onLoadSuccess, loading = <DefaultPdfLoadingComponent />, ...props }) => {
    const [documentState, setDocumentState] = useState<DocumentState>()

    async function onDocumentLoadSuccess(documentCallback: DocumentCallback) {
        const promises: Promise<{ width: number; height: number }>[] = []

        for (let i = 0; i < documentCallback.numPages; i += 1) {
            promises.push(
                (async () => {
                    const page = await documentCallback.getPage(i + 1)
                    const { pageHeight: height, pageWidth: width } =
                        page.getViewport().rawDims as {
                            pageHeight: number
                            pageWidth: number
                        }

                    // page height and page width here should be in pdf points instead of pixels
                    // 1 point should equal to 1/72 inch
                    // here we convert the points into inch and then into pixels
                    return {
                        width: (width / PDF_POINTS_PER_INCH) * PIXELS_PER_INCH,
                        height:
                            (height / PDF_POINTS_PER_INCH) * PIXELS_PER_INCH,
                    }
                })()
            )
        }
        const pages = await Promise.all(promises)

        setDocumentState({
            pages,
        })

        if (onLoadSuccess) {
            onLoadSuccess(documentCallback)
        }
    }

    return (
        <PDFDocument
            {...props}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={loading}
        >
            <context.Provider value={documentState}>
                {props.children}
            </context.Provider>
        </PDFDocument>
    )
}

export const ScaleToViewportPage: React.FC<
    Omit<PageProps, 'loading' | 'width' | 'height'>
> = (props) => {
    const documentState = useContext(context)
    if (!documentState) return null

    if (!props.pageNumber) return null

    const pageInfo = documentState.pages[props.pageNumber - 1]
    if (!pageInfo) return null
    const { width, height } = pageInfo

    return (
        <ScalableDocumentV2>
            <StyledPage
                {...props}
                width={width}
                height={height}
                loading={<></>}
            >
                {' '}
                /
            </StyledPage>
        </ScalableDocumentV2>
    )
}

export const StyledPage = styled(Page)`
    @page {
        size: A4;
        margin: 0;
    }
    background: white;
    position: relative;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #ccc;
    overflow: clip;

    @media print {
        border: none;
        break-inside: avoid;
    }
`
