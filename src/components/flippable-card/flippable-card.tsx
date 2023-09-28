import * as React from 'react'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Root = styled.div<{
    $widthInPx: number
    $heightInPx: number
    $timeToFlipInSecs?: number
}>`
    position: relative;
    width: ${({ $widthInPx }) => $widthInPx}px;
    height: ${({ $heightInPx }) => $heightInPx}px;

    .card-face {
        :first-child {
            page-break-after: always;
        }

        width: ${({ $widthInPx }) => $widthInPx}px;
        height: ${({ $heightInPx }) => $heightInPx}px;
    }

    @media not print {
        transform-style: preserve-3d;

        transition: transform
            ${({ $timeToFlipInSecs }) => $timeToFlipInSecs ?? 0.5}s ease-in-out
            0s;

        cursor: pointer;

        &.flip {
            transform: rotateY(180deg);
        }

        .card-face {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            -webkit-backface-visibility: hidden; /* Safari */
            backface-visibility: hidden;

            :last-child {
                transform: rotateY(180deg);
            }
        }
    }
`

interface FlippableCardParams {
    widthInPx: number
    heightInPx: number
    front: ReactNode
    back: ReactNode
}
export const FlippableCard: React.FC<FlippableCardParams> = ({
    widthInPx,
    heightInPx,
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
            $heightInPx={heightInPx}
            className={flip ? 'flip' : ''}
            onClick={handleClick}
        >
            <div className="card-face">{front}</div>
            <div className="card-face">{back}</div>
        </Root>
    )
}
