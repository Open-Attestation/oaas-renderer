import { A4 } from 'components/paper-size'
import React from 'react'
import styled from 'styled-components'

import mainBg from '../assets/background.svg'
import { SignatureComponent, SignatureComponentProps } from './signature'

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
const Footer = styled.div`
    position: relative;
    display: flex;
    height: 214px;
    justify-content: space-between;
    align-items: start;
`

export const ObsCertMainPage: React.FC<{
    title: React.ReactNode
    children: React.ReactNode
    signatures:
        | [SignatureComponentProps]
        | [SignatureComponentProps, SignatureComponentProps]
}> = ({ title, children, signatures }) => {
    let signatureComponents =
        signatures.length === 1
            ? [
                  <div key={0}></div>,
                  <SignatureComponent key={1} {...signatures[0]} />,
              ]
            : [
                  <SignatureComponent key={0} {...signatures[0]} />,
                  <SignatureComponent key={1} {...signatures[1]} />,
              ]
    return (
        <A4 $bgImg={mainBg}>
            <Header>
                {/* div here is to enforce a single child for the header */}
                <div>{title}</div>
            </Header>
            <Body>{children}</Body>
            <Footer>{signatureComponents}</Footer>
        </A4>
    )
}
