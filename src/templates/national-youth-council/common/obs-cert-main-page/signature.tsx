import { Line } from 'components/line'
import styled from 'styled-components'

import { Typography } from '../components'

const SignatureWordingContainer = styled.div<{
    $color?: string
}>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: ${({ $color }) => $color ?? '#808041'};
`

export const SignatureContainer = styled.div`
    width: 250px;
    height: 100px;
    text-align: center;
    align-items: flex-end;
    justify-content: center;
    display: flex;
`

export const SignatureImg = styled.img`
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
`

export interface SignatureComponentProps {
    signatureSrc: string
    name: string
    title: string
    color?: string
    isSecondary?: boolean
    location?: string
}
export const SignatureComponent = ({
    signatureSrc,
    name,
    title,
    color,
    isSecondary,
    location,
}: SignatureComponentProps) => {
    if (location) {
        return (
            <div style={{ width: 250 }}>
                <SignatureContainer>
                    <SignatureImg
                        src={signatureSrc}
                        alt="Signature of signee"
                    ></SignatureImg>
                </SignatureContainer>
                <Line $color={color ?? '#808041'} />
                <SignatureWordingContainer $color={color ?? '#808041'}>
                    <Typography $size={'medium'} $textAlign={'center'} $mt={1}>
                        <b>{name}</b>
                    </Typography>
                    <Typography
                        $size={'medium'}
                        $textAlign={'center'}
                        $mt={-1.5}
                    >
                        {title}
                    </Typography>
                    <Typography
                        $size={'medium'}
                        $textAlign={'center'}
                        $mt={-1.5}
                    >
                        <b>{location}</b>
                    </Typography>
                    <Typography
                        $size={'medium'}
                        $textAlign={'center'}
                        $mt={-1.5}
                        $bold
                    >
                        Outward Bound Singapore
                    </Typography>
                </SignatureWordingContainer>
            </div>
        )
    }

    return (
        <div style={{ width: 250 }}>
            <SignatureContainer>
                <SignatureImg
                    src={signatureSrc}
                    alt="Signature of signee"
                ></SignatureImg>
            </SignatureContainer>
            <Line $color={color ?? '#808041'} />
            <SignatureWordingContainer $color={color ?? '#808041'}>
                <Typography $size={'medium'} $textAlign={'center'} $mt={1}>
                    <b>{name}</b>
                    {!isSecondary ? ` | ${title}` : ''}
                </Typography>
                {isSecondary ? (
                    <Typography
                        $size={'medium'}
                        $textAlign={'center'}
                        $mt={-1.5}
                    >
                        {title}
                    </Typography>
                ) : undefined}
                <Typography
                    $size={'medium'}
                    $textAlign={'center'}
                    $mt={-1.5}
                    $bold
                >
                    Outward Bound Singapore
                </Typography>
            </SignatureWordingContainer>
        </div>
    )
}
