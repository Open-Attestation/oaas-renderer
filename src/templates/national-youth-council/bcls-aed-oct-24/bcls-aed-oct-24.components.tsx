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

export const SRFACLogoImage = styled.img`
    max-height: 72px;
`

export const Root = styled(FlexBox)`
    min-width: 500px;
`
