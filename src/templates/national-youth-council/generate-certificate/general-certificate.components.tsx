import { FlexBox } from 'components/flexbox'
import { makeTypography } from 'components/typography/makeTypography'
import styled from 'styled-components'

const TYPOGRAPHY_FONT_SIZES = {
    small: '0.65em',
    medium: '0.8em',
    large: '1em',
    xlarge: '1.5em',
} as const
export const Typography = styled(makeTypography(TYPOGRAPHY_FONT_SIZES))`
    font-family: 'Libre Franklin';
`

export const Root = styled(FlexBox)`
    min-width: 500px;
`

export const BackgroundImg = styled.img`
    max-width: 100%;
    height: auto;
    position: absolute;
    z-index: -1; // above CardFace but -1 to stay below Typography
    border-radius: 16px;
    border: 1px solid #ccc;
`
