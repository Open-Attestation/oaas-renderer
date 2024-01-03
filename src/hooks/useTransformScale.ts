import { useCallback, useEffect, useState } from 'react'

export const calculateTransformScale = (
    viewportWidth: number,
    documentWidth: number
): number => Math.min(viewportWidth * 0.9426, documentWidth) / documentWidth

export const useTransformScale = (documentWidth: number) => {
    const [transformScale, setTransformScale] = useState<number>(
        calculateTransformScale(window.innerWidth, documentWidth)
    )

    const handleResize = useCallback(() => {
        setTransformScale(
            calculateTransformScale(window.innerWidth, documentWidth)
        )
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [handleResize])

    return transformScale
}