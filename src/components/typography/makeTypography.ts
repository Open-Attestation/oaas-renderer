import { applyMarginAndPaddings, MarginAndPaddingProps } from 'components/utils'
import styled from 'styled-components'

const TYPOGRAPHY_FONT_SIZES = {
    small: '10px',
    medium: '12px',
    large: '16px',
    xlarge: '24px',
} as const

interface TypographyProps {
    $size?: keyof typeof TYPOGRAPHY_FONT_SIZES
    $bold?: boolean
    $italic?: boolean
    $width?: string
    $maxWidth?: string
    $textAlign?: 'center' | 'left' | 'right' | 'justify'
    $textDecoration?: 'overline' | 'line-through' | 'underline'
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
        ${({ $textDecoration }) =>
            $textDecoration ? `text-decoration: ${$textDecoration};` : ''}
    `
}
