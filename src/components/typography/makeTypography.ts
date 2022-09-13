import { applyMarginAndPaddings, MarginAndPaddingProps } from 'components/utils'
import styled from 'styled-components'

const TYPOGRAPHY_FONT_SIZES = {
    small: '0.5em',
    medium: '0.75em',
    large: '1.25em',
    xlarge: '1.5em',
} as const

interface TypographyProps {
    $size?: keyof typeof TYPOGRAPHY_FONT_SIZES
    $bold?: boolean
    $italic?: boolean
    $width?: string
    $maxWidth?: string
    $textAlign?: 'center' | 'left' | 'right' | 'justify'
    $color?: string
}

export const makeTypography = <
    T extends Record<keyof typeof TYPOGRAPHY_FONT_SIZES, string>
>(
    fontSizes?: T
) => {
    const fontSizesWithDefault = fontSizes ?? TYPOGRAPHY_FONT_SIZES

    return styled.p<TypographyProps & MarginAndPaddingProps>`
        font-size: ${({ $size }) =>
            $size ? fontSizesWithDefault[$size] : fontSizesWithDefault.medium};
        font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
        font-weight: ${({ $bold }) => ($bold ? '700' : '400')};
        ${applyMarginAndPaddings}
        ${({ $width }) => ($width ? `width: ${$width};` : '')}
        ${({ $maxWidth }) => ($maxWidth ? `max-width: ${$maxWidth};` : '')}
        ${({ $textAlign }) => ($textAlign ? `text-align: ${$textAlign};` : '')}
        ${({ $color }) => ($color ? `color: ${$color};` : '')}
    `
}
