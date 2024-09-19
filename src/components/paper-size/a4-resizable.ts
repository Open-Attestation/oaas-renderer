import styled from 'styled-components'

export const size = {
    mobile: '320px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px',
}

export const A4R = styled.div<{
    $bgImg?: string
    $zIndex?: number
    $padding?: string
}>`
    background: white;
    position: relative;
    max-width: 21cm;
    min-width: ${size.mobile};
    padding: ${({ $padding }) => $padding ?? '2cm'};
    min-height: 29.7cm;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-size: cover;
    background-image: ${({ $bgImg }) => `url('${$bgImg}')` ?? 'initial'};
    z-index: ${({ $zIndex }) => $zIndex ?? 'initial'};

    @media only screen and (max-width: ${size.tablet}) {
        min-height: 1894px;
        padding: 24px;
    }

    @media print {
        border: none;
        break-inside: avoid;
        width: 21cm;
        min-height: 29.7cm;
        padding: 2cm;
    }
`
