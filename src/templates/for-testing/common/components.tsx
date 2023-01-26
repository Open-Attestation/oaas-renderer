import { makeTypography } from 'components/typography/makeTypography'
import { Line } from 'components/line'
import styled from 'styled-components'

export const TYPOGRAPHY_FONT_SIZES = {
    small: '10px',
    medium: '12px',
    large: '16px',
    xlarge: '24px',
} as const
export const Typography = styled(makeTypography(TYPOGRAPHY_FONT_SIZES))`
    font-family: 'Libre Franklin';
`

export const AbsoluteBottom = styled.div<{
    $flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}>`
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: ${({ $flexDirection }) => $flexDirection ?? 'row'};
    left: 2cm;
    right: 2cm;
    bottom: 4.5cm;
`

const SignatureImg = styled.img`
    display: block;
    width: 200px;
    margin: 0 auto;
`

export interface SignatureComponentProps {
    signatureSrc: string
    name: string
    title: string
}
export const SignatureComponent = ({
    signatureSrc,
    name,
    title,
}: SignatureComponentProps) => (
    <div style={{ width: 250 }}>
        <SignatureImg src={signatureSrc} />
        <Line $color="#808041" />
        <Typography
            $size={'medium'}
            $color="#808041"
            $textAlign={'center'}
            $mt={1}
        >
            <b>{name}</b> | {title}
        </Typography>
        <Typography
            $size={'medium'}
            $color="#808041"
            $textAlign={'center'}
            $mt={-1.5}
            $bold
        >
            Outward Bound Singapore
        </Typography>
    </div>
)
