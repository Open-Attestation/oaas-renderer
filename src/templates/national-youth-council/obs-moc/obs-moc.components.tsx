import styled from 'styled-components'
import { TYPOGRAPHY_FONT_SIZES } from '../common/components'

export const OrderedList = styled.ol<{
    $size?: keyof typeof TYPOGRAPHY_FONT_SIZES
}>`
    font-size: ${({ $size }) =>
        $size ? TYPOGRAPHY_FONT_SIZES[$size] : TYPOGRAPHY_FONT_SIZES.medium};
    font-family: 'Libre Franklin';
`

export const DescriptionComponent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding-left: 2cm;
    padding-right: 2cm;
    align-items: center;
    justify-content: center;
    display: flex;
`
export const GroupImg = styled.img`
    display: block;
    max-width: 100%;
    max-height: 29.7cm;
    width: auto;
    height: auto;
`
