import styled from 'styled-components'

export const A4LandscapeWidthPx = 1122.52
export const A4LandscapeHeightPx = 795

export const A4Landscape = styled.div<{
    $bgImg?: string
    $zIndex?: number
    $padding?: string
}>`
    background: white;
    position: relative;
    width: 29.7cm;
    height: 21cm;
    padding: ${({ $padding }) => $padding ?? '2cm'};
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-size: cover;
    background-image: ${({ $bgImg }) => `url('${$bgImg}')` ?? 'initial'};
    z-index: ${({ $zIndex }) => $zIndex ?? 'initial'};

    @media print {
        border: none;
        break-inside: avoid;
    }
`
