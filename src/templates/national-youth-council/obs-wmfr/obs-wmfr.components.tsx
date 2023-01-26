import { FlexBox } from 'components/flexbox'
import styled from 'styled-components'

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
export const NameComponent = styled.div`
    position: absolute;
    top: 16px;
    width: 320px;
    height: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
`

export const CourseComponent = styled.div`
    position: absolute;
    top: 108px;
    width: 314px;
    height: 66px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
`

export const SerialNumberComponent = styled.div`
    position: absolute;
    bottom: 31px;
    right: 10px;
    height: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    text-align: right;
    color: #ffffff;
`

export const DateOfIssueComponent = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    height: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    text-align: right;
    color: #ffffff;
`

export const DateOfExpiryComponent = styled.div`
    position: absolute;
    bottom: 8px;
    left: 8px;
    height: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    text-align: left;
    color: #000000;
`

export const SignatureComponent = styled.div`
    position: absolute;
    width: 352px;
    height: 115px;
    top: 0px;
    text-align: center;
    align-items: flex-end;
    justify-content: center;
    display: flex;
`

export const SignatureImg = styled.img`
    display: block;
    max-width: 162px;
    max-height: 89px;
    width: auto;
    height: auto;
`

export const SignatureProfileComponent = styled.div`
    position: absolute;
    top: 117px;
    width: 336px;
    height: 51px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
`
