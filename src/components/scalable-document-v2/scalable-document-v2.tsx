import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export const calculateTransformScale = (
    viewportWidth: number,
    documentWidth: number
): number =>
    Math.min(viewportWidth * 0.951219881846154, documentWidth) / documentWidth

export const useViewportWidth = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleResize = debounce(() => {
            setWidth(window.innerWidth)
        }, 100)

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return width
}

function debounce<T extends (...args: unknown[]) => void>(fn: T, duration: number): T {
    let timeout: NodeJS.Timeout;
    return ((...args: unknown[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args)
        }, duration)
    }) as T
}

const Container = styled.div<{
    $invisible?: boolean
    $scale: number
    $documentHeight?: number
}>`
    ${({ $invisible }) => $invisible && 'visibility: hidden;'}
    transform: ${({ $scale }) => `scale(${$scale})`};
    transform-origin: top left;
    width: fit-content;
    margin: auto;
    height: ${({ $scale, $documentHeight }) =>
        $documentHeight ? `${Math.ceil($scale * $documentHeight)}px` : 'auto'};

    @media print {
        transform: scale(1);
        height: auto;
    }
`

// note: this is experimental
// building on the good work of the original ScalableDocument, this component aims to be easier to use:
// no props needed
export const ScalableDocumentV2: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [originalDimensions, setOriginalDimensions] = useState<
        | {
            width: number
            height: number
        }
        | undefined
    >()

    useEffect(() => {
        if (!originalDimensions) {
            if (ref.current) {
                const ro = new ResizeObserver((entries) => {
                    for (let entry of entries) {
                        const { width, height } = entry.contentRect

                        if (width && height) {
                            setOriginalDimensions({
                                width,
                                height,
                            })
                            ro.disconnect()
                        }
                    }
                })
                ro.observe(ref.current)

                return () => {
                    ro.disconnect()
                }
            }
        }
    }, [originalDimensions])

    // register the dimensions once and only once
    const viewportWidth = useViewportWidth()
    const scale = originalDimensions
        ? calculateTransformScale(viewportWidth, originalDimensions.width)
        : 1

    return (
        <Container
            ref={ref}
            $scale={scale}
            $documentHeight={originalDimensions?.height}
            $invisible={!originalDimensions}
        >
            {children}
        </Container>
    )
}
