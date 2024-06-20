import { FlexBox } from 'components/flexbox'
import styled from 'styled-components'

export const CardFace = styled(FlexBox)<{
    $zIndex?: number
    $padding?: string
    $borderRadius?: string
}>`
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    background: white;
    position: relative;
    padding: ${({ $padding }) => $padding ?? '16px'};
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: ${({ $borderRadius }) => $borderRadius ?? '16px'};
    z-index: ${({ $zIndex }) => $zIndex ?? 0};
    -webkit-print-color-adjust: exact;
`
