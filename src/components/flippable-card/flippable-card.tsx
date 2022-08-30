import * as React from 'react'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Root = styled.div<{
    $widthInPx: number
    $timeToFlipInSecs?: number
}>`
    position: relative;

    width: ${({ $widthInPx }) => $widthInPx}px;

    > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }

    @media not print {
        transform-style: preserve-3d;
        transform: rotateY(0deg);

        transition: transform
            ${({ $timeToFlipInSecs }) => $timeToFlipInSecs ?? 0.5}s ease-in-out
            0s;

        cursor: pointer;

        &.flip {
            transform: rotateY(180deg);
        }

        > * {
            :nth-child(2) {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                transform: scaleX(-1) translateZ(-1px);
            }
        }
    }
`

interface FlippableCardParams {
    widthInPx: number
    front: ReactNode
    back: ReactNode
}
export const FlippableCard: React.FC<FlippableCardParams> = ({
    widthInPx,
    front,
    back,
}) => {
    const [flip, setFlip] = React.useState<boolean>(false)

    const handleClick = () => {
        setFlip((prevValue) => !prevValue)
    }

    return (
        <Root
            $widthInPx={widthInPx}
            className={flip ? 'flip' : ''}
            onClick={handleClick}
        >
            <div>{front}</div>
            <div>{back}</div>
        </Root>
    )
}
