import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { GovtechDigitalAcademyCertificateOfCompletion_2SigneesOaDoc } from './certificate-of-completion-2-signees.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { A4Landscape } from 'components/paper-size/a4-landscape'
import landscapeBg from '../common/assets/COC_2sign_150dpi.png'
import {
    CertificateComponent,
    DateOfIssueComponent,
    DescriptionComponent,
    NameComponent,
    OfCompletionComponent,
    ProgrammeComponent,
    ProudlyPresentedComponent,
    SigneeOneDetailsComponent,
    SigneeOneSignatureComponent,
    SigneeOneSignatureImg,
    SigneeTwoDetailsComponent,
    SigneeTwoSignatureComponent,
    SigneeTwoSignatureImg,
} from './certificate-of-completion-2-signees.components'
import imagesMap from '../common/assets/__generated__/images-map'
import { formatCourseDatefor } from '../common/utils'

export const GovtechDigitalAcademyCertificateOfCompletion_2SigneesTemplate: FunctionComponent<
    TemplateProps<GovtechDigitalAcademyCertificateOfCompletion_2SigneesOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const name = document.name.toUpperCase()
    const issueDate = formatCourseDatefor(
        document.issueDate,
        document.issueDate
    )
    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700"
                ></link>
                <title>
                    govtech-digital-academy -
                    certificate-of-completion-2-signees
                </title>
            </Helmet>
            <A4Landscape $bgImg={landscapeBg}>
                <CertificateComponent>CERTIFICATE</CertificateComponent>
                <OfCompletionComponent>OF COMPLETION</OfCompletionComponent>
                <ProudlyPresentedComponent>
                    PROUDLY PRESENTED TO
                </ProudlyPresentedComponent>
                <NameComponent>{name}</NameComponent>
                <DescriptionComponent>
                    for achieving the assesment requirements and learnings of
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    Your commitment to continuing professional development has
                    <br />
                    helped advance digital transformation across and beyond the
                    <br />
                    Public Service.
                </DescriptionComponent>
                <ProgrammeComponent>
                    {document.programmeTitle}
                </ProgrammeComponent>
                <SigneeOneSignatureComponent>
                    <SigneeOneSignatureImg
                        src={document.signeeOneSignature_image}
                        alt="Signature of signee one"
                    />
                </SigneeOneSignatureComponent>
                <SigneeOneDetailsComponent>
                    {document.signeeOneName}, {document.signeeOneDesignation}
                    <br />
                    {document.signeeOneDivision}
                    <br />
                    {document.signeeOneOrganisation}
                </SigneeOneDetailsComponent>
                <SigneeTwoSignatureComponent>
                    <SigneeTwoSignatureImg
                        src={`${imagesMap[document.signeeTwoSignature]}`}
                        alt="Signature of signee two"
                    />
                </SigneeTwoSignatureComponent>
                <SigneeTwoDetailsComponent>
                    {document.signeeTwoName}, {document.signeeTwoDesignation}
                    <br />
                    {document.signeeTwoDivision}
                    <br />
                    {document.signeeTwoOrganisation}
                </SigneeTwoDetailsComponent>
                <DateOfIssueComponent>
                    Date of Issue: {issueDate}
                </DateOfIssueComponent>
            </A4Landscape>
        </>
    )
}
