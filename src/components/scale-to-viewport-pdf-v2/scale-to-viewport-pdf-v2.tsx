import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'
import React, { useEffect, useRef, useState } from 'react'
import { Document as PDFDocument, DocumentProps, Page, pdfjs } from 'react-pdf'
import { DocumentCallback } from 'react-pdf/dist/cjs/shared/types'
import styled from 'styled-components'

import 'react-pdf/dist/Page/TextLayer.css'
import 'pdfjs-dist/build/pdf.worker.entry'

// turn this to true to for is ios to true, print out visible page and page index of each page on the screen
let IS_DEBUG = false

const IS_IOS_DEVICE =
    IS_DEBUG ||
    /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)

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

type ScaleToViewportPdfDocumentProps = Omit<
    DocumentProps,
    'className' | 'children'
>

type DocumentState = {
    pages: {
        width: number
        height: number
    }[]
    pagesTotalHeight: number
    maxPageHeight: number
    yCoordinateToPage: YcoordinateToPage
}

type YcoordinateToPage = (yCoordinate: number) => number[]

// assuming the document is a series of the pdf pages laid out vertically one after
// the other with no extra y margins/paddings, this fn returns a fn that takes in a y coordinate
// of such a doument and map it to the pdf pages that it touches.
// since having each index of the map represent a single y coordinate is a waste of memory,
// each index is instead a range of y coordinates determined by the BUCKET_SIZE_IN_PIXELS
const BUCKET_SIZE_IN_PIXELS = 100
function getYCoordinateToPageFn(
    pages: { height: number }[]
): YcoordinateToPage {
    const yCoordinateToPageMap: number[][] = []
    let startYCoordinate = 0
    // for each page we place the index into a y coordinate bucket
    for (let pageIndex = 0; pageIndex < pages.length; pageIndex += 1) {
        const { height } = pages[pageIndex]
        const endYcoordinate = height + startYCoordinate

        // map start and end y coordinates to their corresponding bucket index
        const startBucketIndex = Math.floor(
            startYCoordinate / BUCKET_SIZE_IN_PIXELS
        )
        const endBucketIndex = Math.floor(
            endYcoordinate / BUCKET_SIZE_IN_PIXELS
        )

        // page index has to go into the range of y coordinates buckets
        for (
            let bucketIndex = startBucketIndex;
            bucketIndex <= endBucketIndex;
            bucketIndex += 1
        ) {
            yCoordinateToPageMap[bucketIndex] = !yCoordinateToPageMap[
                bucketIndex
            ]
                ? [pageIndex]
                : // it is possible for the bucket to already consist a previous page
                  [...yCoordinateToPageMap[bucketIndex], pageIndex]
        }
        startYCoordinate = endYcoordinate + 1
    }

    return (yCoordinate) => {
        let bucketIndex = Math.floor(yCoordinate / BUCKET_SIZE_IN_PIXELS)
        if (bucketIndex < 0) bucketIndex = 0
        if (bucketIndex >= yCoordinateToPageMap.length)
            bucketIndex = yCoordinateToPageMap.length - 1
        return yCoordinateToPageMap[bucketIndex]
    }
}

export const ScaleToViewportPdfDocumentV2: React.FC<
    ScaleToViewportPdfDocumentProps
> = ({ onLoadSuccess, loading = <DefaultPdfLoadingComponent />, ...props }) => {
    const [documentState, setDocumentState] = useState<DocumentState>()
    const [visiblePages, setVisiblePages] = useState<
        [number, number] | undefined
    >()
    const [viewingWindowHeight, setViewingWindowMaxHeight] = useState(0)
    const pdfDocumentContainerRef = useRef<HTMLDivElement>(null)
    const documentScaleRef = useRef(1)

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

        let pagesTotalHeight = 0
        let maxPageHeight = 0
        pages.forEach((page) => {
            pagesTotalHeight += page.height
            maxPageHeight = Math.max(maxPageHeight, page.height)
        })

        setDocumentState({
            pages,
            pagesTotalHeight,
            maxPageHeight,
            yCoordinateToPage: getYCoordinateToPageFn(pages),
        })

        if (onLoadSuccess) {
            onLoadSuccess(documentCallback)
        }
    }

    useEffect(() => {
        if (IS_IOS_DEVICE) {
            const printFn = window.print
            window.print = () => {
                alert('Printing is not supported on IOS devices for now.')
            }

            return () => {
                window.print = printFn
            }
        }
    }, [])

    useEffect(() => {
        if (!IS_IOS_DEVICE) return
        if (!documentState) return

        const handleResize = debounce(() => {
            if (!pdfDocumentContainerRef.current) return

            // calc how much the document has been scaled down
            const { height } =
                pdfDocumentContainerRef.current.getBoundingClientRect()
            documentScaleRef.current = height / documentState.pagesTotalHeight
            setViewingWindowMaxHeight(
                documentState.maxPageHeight * documentScaleRef.current
            )
        }, 150)

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [documentState])

    useEffect(() => {
        if (!IS_IOS_DEVICE) return
        if (!documentState) return

        const updateVisiblePage = debounce(() => {
            const { yCoordinateToPage } = documentState
            // normalise
            const startY = window.scrollY / documentScaleRef.current
            const viewingWindowHeight =
                documentState.maxPageHeight / documentScaleRef.current
            const endY = startY + viewingWindowHeight

            const startPageIndexes = yCoordinateToPage(startY)
            const endPageIndexes = yCoordinateToPage(endY)

            setVisiblePages([
                // we want the pages right outside the viewing window too
                startPageIndexes[0] - 1 < 0 ? 0 : startPageIndexes[0] - 1,
                endPageIndexes[endPageIndexes.length - 1] >=
                // we want the pages right outside the viewing window too
                documentState.pages.length
                    ? documentState.pages.length - 1
                    : endPageIndexes[endPageIndexes.length - 1],
            ])
        }, 50)

        updateVisiblePage()

        window.addEventListener('scroll', updateVisiblePage)
        window.addEventListener('resize', updateVisiblePage)

        return () => {
            window.removeEventListener('scroll', updateVisiblePage)
            window.removeEventListener('resize', updateVisiblePage)
        }
    }, [documentState])

    let renderedPages: React.ReactNode[] = []

    if (documentState) {
        renderedPages = documentState.pages.map(
            ({ width, height }, pageIndex) => {
                const isVisible =
                    !IS_IOS_DEVICE ||
                    (visiblePages !== undefined &&
                        pageIndex >= visiblePages[0] &&
                        pageIndex <= visiblePages[1])

                return (
                    <div
                        className={
                            'relative mx-auto' +
                            (!isVisible
                                ? ' !bg-gray-100 !border-gray-100 [&>*]:!invisible !pointer-events-none animate-pulse !text-transparent !select-none'
                                : '')
                        }
                        key={pageIndex}
                        style={{
                            width,
                            height,
                        }}
                    >
                        {isVisible ? (
                            <StyledPage
                                pageNumber={pageIndex + 1}
                                width={width}
                                height={height}
                                loading={
                                    <div
                                        className="!bg-gray-100 !border-gray-100 [&>*]:!invisible !pointer-events-none animate-pulse !text-transparent !select-none"
                                        style={{
                                            width,
                                            height,
                                        }}
                                    ></div>
                                }
                            />
                        ) : null}
                        {IS_DEBUG && (
                            <div className="absolute bottom-0 right-0">
                                page: {pageIndex}
                            </div>
                        )}
                    </div>
                )
            }
        )
    }

    return (
        <div
            style={{
                height: IS_IOS_DEVICE ? viewingWindowHeight : undefined,
            }}
        >
            {IS_DEBUG && (
                <div className="fixed right-0 top-0 z-40 bg-white">
                    visible pages: {JSON.stringify(visiblePages)}
                </div>
            )}
            <PDFDocument
                {...props}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={loading}
            >
                <div ref={pdfDocumentContainerRef}>
                    <ScalableDocumentV2>{renderedPages}</ScalableDocumentV2>
                </div>
            </PDFDocument>
        </div>
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
    box-sizing: border-box;
    border: 1px solid #ccc;
    overflow: clip;
    margin: 0;
    @media print {
        border: none;
        break-inside: avoid;
    }
`

function debounce<T extends (...args: unknown[]) => void>(
    fn: T,
    duration: number
): T {
    let timeout: NodeJS.Timeout
    return ((...args: unknown[]) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn(...args)
        }, duration)
    }) as T
}
