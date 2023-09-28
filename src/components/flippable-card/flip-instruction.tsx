import styled from 'styled-components'
import { FlexBox } from 'components/flexbox'
import { makeTypography } from 'components/typography/makeTypography'
import cardFlipIconSrc from './icon-cardflip.svg'

const InstructionContainer = styled.div`
    position: relative;
    width: 100%;

    @media print {
        display: none;
    }
`

const TYPOGRAPHY_FONT_SIZES = {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
} as const

export const Typography = styled(makeTypography(TYPOGRAPHY_FONT_SIZES))<{
    $fontFamily?: string
}>`
    font-family: ${({ $fontFamily }) => $fontFamily ?? 'Libre Franklin'};
`

export const FlipInstruction: React.FC = () => {
    return (
        <InstructionContainer>
            <FlexBox>
                <img src={cardFlipIconSrc} alt="card flip icon" width="20" />
                <Typography $size="small" $textAlign="center" $ml={1}>
                    Click on the card to reveal the other side
                </Typography>
            </FlexBox>
        </InstructionContainer>
    )
}
