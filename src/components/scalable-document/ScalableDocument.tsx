import styled from 'styled-components'

export const ScalableDocument = styled.div<{
    $scale: number
    $documentHeight: number
}>`
    transform: ${({ $scale }) => `scale(${$scale})` ?? 'scale(1)'};
    transform-origin: top left;
    height: ${({ $scale, $documentHeight }) =>
        `${Math.ceil($scale * $documentHeight)}px` ?? 'auto'};

    @media print {
        transform: scale(1);
        height: auto;
    }
`
