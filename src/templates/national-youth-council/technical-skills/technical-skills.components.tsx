import { makeTypography } from 'components/typography/makeTypography'
import { Line } from 'components/line'
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

export const OrderedList = styled.ol<{
    $size?: keyof typeof TYPOGRAPHY_FONT_SIZES
}>`
    font-size: ${({ $size }) =>
        $size ? TYPOGRAPHY_FONT_SIZES[$size] : TYPOGRAPHY_FONT_SIZES.medium};
    font-family: 'Libre Franklin';
`

export const AbsoluteBottom = styled.div`
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    left: 2cm;
    right: 2cm;
    bottom: 4.5cm;
`

const SignatureImg = styled.img`
    display: block;
    width: 200px;
    margin: 0 auto;
`

export const SignatureComponent = ({
    signatureSrc,
    name,
    title,
}: {
    signatureSrc: string
    name: string
    title: string
}) => (
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
