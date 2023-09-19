import { FlexBox } from 'components/flexbox'
import styled from 'styled-components'

export const Root = styled(FlexBox)`
    min-width: 500px;
`

export const Table = styled.table`
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
    font-family: 'Libre Franklin';
    font-size: 0.8em;
    text-align: center;
    table-layout: fixed;
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
