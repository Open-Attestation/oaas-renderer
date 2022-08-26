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
`

export const LogoImage = styled.img<{
    $imgHeight?: string
    $margin?: string
}>`
    width: auto;
    height: ${({ $imgHeight }) => $imgHeight ?? '90px'};
    margin: ${({ $margin }) => $margin ?? '0'};
`

export const CardFace = styled(FlexBox)<{
    $padding?: string
    $borderRadius?: string
}>`
    background: white;
    border: 1px solid #ccc;
    position: relative;
    width: 500px;
    height: 350px;
    box-sizing: border-box;
    padding: ${({ $padding }) => $padding ?? '16px'};
    border-radius: ${({ $borderRadius }) => $borderRadius ?? '16px'};
`

export const FooterContainer = styled.div`
    position: relative;
    width: 100%;

    img {
        width: 100%;
    }
`

export const SignatureImage = styled.img`
    max-height: 72px;
`

export const InstructionContainer = styled.div`
    position: relative;
    width: 100%;

    @media print {
        display: none;
    }
`
