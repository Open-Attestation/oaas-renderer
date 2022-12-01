import { FlexBox } from 'components/flexbox'
import styled from 'styled-components'

export const CardFace = styled(FlexBox)<{
    $width: string
    $height: string
    $zIndex?: number
    $padding?: string
    $borderRadius?: string
}>`
    background: white;
    position: relative;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    padding: ${({ $padding }) => $padding ?? '16px'};
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: ${({ $borderRadius }) => $borderRadius ?? '16px'};
    z-index: ${({ $zIndex }) => $zIndex ?? 0};
    -webkit-print-color-adjust: exact;
`
