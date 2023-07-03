import { A4 } from 'components/paper-size'
import React from 'react'
import styled from 'styled-components'

import mainBg from '../assets/background.svg'

const Header = styled.div`
    position: relative;
    display: flex;
    margin-top: 241px;
    height: 90px;

    justify-content: center;
    align-items: center;
`
const paddingBody = 16
const Body = styled.div`
    position: relative;
    display: block;
    height: ${392 - paddingBody * 2}px;
    padding-top: ${paddingBody}px;
    padding-bottom: ${paddingBody}px;
`

export const OaCertMainPage: React.FC<{
    title: React.ReactNode
    children: React.ReactNode
}> = ({ title, children }) => {
    return (
        <A4 $bgImg={mainBg}>
            <Header>
                {/* div here is to enforce a single child for the header */}
                <div>{title}</div>
            </Header>
            <Body>{children}</Body>
        </A4>
    )
}
