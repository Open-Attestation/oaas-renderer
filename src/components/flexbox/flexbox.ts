import {
    applyMarginAndPaddings,
    BASE_PIXEL_UNIT,
    MarginAndPaddingProps,
} from 'components/utils'
import styled from 'styled-components'

export const FlexBox = styled.div<
    {
        $width?: string
        $vertical?: boolean
        $spacing?: number
        $alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
        $justifyContent?:
            | 'center'
            | 'flex-start'
            | 'flex-end'
            | 'space-around'
            | 'space-between'
    } & MarginAndPaddingProps
>`
    display: flex;
    width: ${({ $width }) => $width ?? 'auto'};
    flex-direction: ${({ $vertical }) => ($vertical ? 'column' : 'row')};
    align-items: ${({ $alignItems }) => $alignItems ?? 'center'};
    justify-content: ${({ $justifyContent }) => $justifyContent ?? 'center'};
    ${applyMarginAndPaddings}

    > * {
        &:not(:last-child) {
            ${({ $vertical, $spacing }) => {
                if ($spacing === undefined) return ''
                const spacingInPx = BASE_PIXEL_UNIT * $spacing
                if ($vertical) return `margin-bottom: ${spacingInPx}px;`

                return `margin-right: ${spacingInPx}px;`
            }}
        }
    }
`
