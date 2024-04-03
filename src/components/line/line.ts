import { BASE_PIXEL_UNIT } from 'components/utils'
import styled from 'styled-components'

interface LineProps {
    $color?: string
    $maxWidth?: string
    $mt?: number
    $mb?: number
}
export const Line = styled.div<LineProps>`
    display: block;
    border-bottom: 1px solid ${({ $color }) => $color ?? 'black'};
    width: 100%;
    max-width: ${({ $maxWidth }) => $maxWidth ?? '100%'};
    margin-top: ${({ $mt }) => ($mt ? $mt * BASE_PIXEL_UNIT : 0)}px;
    margin-bottom: ${({ $mb }) => ($mb ? $mb * BASE_PIXEL_UNIT : 0)}px;
`
