import { FlexBox } from 'components/flexbox'
import { makeTypography } from 'components/typography/makeTypography'
import styled from 'styled-components'

const TYPOGRAPHY_FONT_SIZES = {
    small: '0.75em',
    medium: '1em',
    large: '1.25em',
    xlarge: '1.5em',
} as const
export const Typography = styled(makeTypography(TYPOGRAPHY_FONT_SIZES))`
    font-family: 'Libre Franklin';
    font-weight: 700;
`

export const LogoImage = styled.img`
    width: auto;
    height: 90px;
`

export const CardFace = styled(FlexBox)`
    background: white;
    border: 1px black dotted;
    position: relative;
    width: calc(100% - 34px);
    height: 350px;
    padding: 16px;
`

export const FooterContainer = styled.div`
    position: relative;
    width: 100%;

    p {
        position: absolute;
    }

    img {
        width: 100%;
    }
`
