import styled from 'styled-components'

export const A4R = styled.div<{
    $bgImg?: string
    $zIndex?: number
    $minWidth: string
}>`
    background: white;
    position: relative;
    max-width: 21cm;
    min-width: ${({ $minWidth }) => $minWidth};
    min-height: 29.7cm;
    padding: 2cm;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-size: cover;
    background-image: ${({ $bgImg }) => `url('${$bgImg}')` ?? 'initial'};
    z-index: ${({ $zIndex }) => $zIndex ?? 'initial'};

    @media print {
        border: none;
        break-inside: avoid;
        break-before: always;
        width: 21cm;
        min-height: 29.7cm;
    }
`
