import { FlexBox } from 'components/flexbox'
import styled from 'styled-components'

import { TYPOGRAPHY_FONT_SIZES } from '../common/components'

export const Root = styled(FlexBox)`
    min-width: 500px;
`

export const Table = styled.table`
    width: 100%;
    border: none;
    border-collapse: collapse;
    font-family: 'Libre Franklin';
    font-size: ${TYPOGRAPHY_FONT_SIZES['medium']};
    text-align: start;

    td {
        vertical-align: top;
    }
`

export const RowHeader = styled.td`
    white-space: nowrap;
    padding-right: 24px;
`

export const UnorderedList = styled.ol`
    padding-left: 0px;
    margin-left: 18px;
    margin-top: 0px;
    margin-bottom: 0px;
`

export const BrickWallModel = styled.img`
    width: auto;
`
