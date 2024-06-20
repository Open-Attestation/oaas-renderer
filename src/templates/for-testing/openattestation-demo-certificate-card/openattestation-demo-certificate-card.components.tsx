import { FlexBox } from 'components/flexbox'
import { makeTypography } from 'components/typography/makeTypography'
import styled from 'styled-components'

const TYPOGRAPHY_FONT_SIZES = {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
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

export const Root = styled(FlexBox)`
    min-width: 500px;
`
