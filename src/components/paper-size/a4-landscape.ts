import styled from 'styled-components'

export const A4Landscape = styled.div<{ $bgImg?: string; $zIndex?: number }>`
    background: white;
    position: relative;
    width: 29cm;
    height: 20.6cm;
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
    }
`
