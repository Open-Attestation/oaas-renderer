import styled from 'styled-components'
import { TYPOGRAPHY_FONT_SIZES } from '../common/components'

export const OrderedList = styled.ol<{
    $size?: keyof typeof TYPOGRAPHY_FONT_SIZES
}>`
    font-size: ${({ $size }) =>
        $size ? TYPOGRAPHY_FONT_SIZES[$size] : TYPOGRAPHY_FONT_SIZES.medium};
    font-family: 'Libre Franklin';
`
