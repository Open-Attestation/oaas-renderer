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
    height: 15cm;
    width: auto;
`

export const WatchNameComponent = styled.div`
    position: absolute;
    bottom: 36px;
    left: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    text-align: left;
    color: #000000;
`

export const ObsLogoImg = styled.img`
    position: absolute;
    bottom: 36px;
    right: 80px;
    display: block;
    width: 9.5cm;
    height: auto;
`
