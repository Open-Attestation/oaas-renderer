import { Line } from 'components/line'
import styled from 'styled-components'

import { Typography } from '../components'

const SignatureImg = styled.div<{ $src: string }>`
    width: 100%;
    height: 100px;

    background: url('${({ $src }) => $src}');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`

const SignatureWordingContainer = styled.div<{
    $color?: string
}>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: ${({ $color }) => $color ?? '#808041'};
`

export interface SignatureComponentProps {
    signatureSrc: string
    name: string
    title: string
    color?: string
    isSecondary?: boolean
}
export const SignatureComponent = ({
    signatureSrc,
    name,
    title,
    color,
    isSecondary,
}: SignatureComponentProps) => (
    <div style={{ width: 250 }}>
        <SignatureImg $src={signatureSrc} />
        <Line $color={color ?? '#808041'} />
        <SignatureWordingContainer $color={color ?? '#808041'}>
            <Typography $size={'medium'} $textAlign={'center'} $mt={1}>
                <b>{name}</b>
                {!isSecondary ? ` | ${title}` : ''}
            </Typography>
            {isSecondary ? (
                <Typography $size={'medium'} $textAlign={'center'} $mt={-1.5}>
                    {title}
                </Typography>
            ) : undefined}
            <Typography $size={'medium'} $textAlign={'center'} $mt={-1.5} $bold>
                Outward Bound Singapore
            </Typography>
        </SignatureWordingContainer>
    </div>
)
