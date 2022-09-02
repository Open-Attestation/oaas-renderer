import { FlexBox } from 'components/flexbox'
import { makeTypography } from 'components/typography/makeTypography'
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

export const Root = styled(FlexBox)`
    min-width: 500px;
`

export const BackgroundImg = styled.img`
    max-width: 100%;
    height: auto;
    position: absolute;
    z-index: -1; // above CardFace but -1 to stay below Typography
    border-radius: 16px;
    border: 1px solid #ccc;
`

export const SignatureComponent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 50px;
    bottom: 128px;
`

export const Table = styled.table`
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
    font-family: 'Libre Franklin';
    font-size: 0.7em;
    text-align: center;
`

export const Header = styled.th`
    border: 1px solid black;
`

export const RowHeader = styled.td`
    border: 1px solid black;
    font-weight: bold;
`

export const TableData = styled.td`
    border: 1px solid black;
    font-style: italic;
    text-align: left;
`

export const UnorderedList = styled.ul`
    padding-left: 0px;
    margin-left: 18px;
    margin-top: 0px;
    margin-bottom: 0px;
`
