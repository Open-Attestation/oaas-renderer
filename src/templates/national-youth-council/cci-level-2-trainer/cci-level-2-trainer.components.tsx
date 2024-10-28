import { FlexBox } from 'components/flexbox'
import styled from 'styled-components'

export const Root = styled(FlexBox)`
    min-width: 500px;
`

export const UnorderedList = styled.ul`
    padding-left: 0px;
    margin-left: 18px;
    margin-top: 0px;
    margin-bottom: 0px;
`

export const UnorderedDashList = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    margin-left: 18px;
    margin-top: 0px;
    margin-bottom: 0px;
    li {
        text-indent: 5px;
        margin-top: 10px;
        :before {
            content: '-';
            text-indent: 5px;
        }
        span {
            position: relative;
            left: 20px;
        }
    }
`
