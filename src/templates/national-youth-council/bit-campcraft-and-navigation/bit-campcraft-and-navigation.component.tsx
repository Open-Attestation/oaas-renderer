import { FlexBox } from 'components/flexbox'
import styled from 'styled-components'
import { TYPOGRAPHY_FONT_SIZES } from '../common/components'

export const Root = styled(FlexBox)`
    min-width: 500px;
    font-family: 'Libre Franklin';
    font-size: ${TYPOGRAPHY_FONT_SIZES['medium']};
`

export const MainOrderedList = styled.ol`
    list-style-type: none;

    > li:before {
        content: counter(list-item) ')';
        display: inline-block;
        min-width: 12px;
        margin-right: 8px;
        vertical-align: middle;
        text-align: left;
        font-weight: 800;
    }

    > li {
        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }
`

export const OrderedList = styled.ol`
    list-style-type: none;
    margin: 0;
    padding-left: 16px;

    > li:before {
        content: counter(list-item) ')';
        display: inline-block;
        min-width: 20px;
        margin-right: 8px;
        vertical-align: middle;
        text-align: right;
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
