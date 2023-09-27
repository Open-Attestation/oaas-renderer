import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { GovtechDigitalAcademyCertificateOfCompletion_1SigneeOaDoc } from './certificate-of-completion-1-signee.types'
import { Helmet } from 'react-helmet-async'
import { A4Landscape } from 'components/paper-size/a4-landscape'
import landscapeBg from '../common/assets/COC_1sign_150dpi.png'
import {
    CertificateComponent,
    DateOfIssueComponent,
    InfoContainer,
    ForAchievingComponent,
    NameComponent,
    OfCompletionComponent,
    ProgrammeComponent,
    ProudlyPresentedComponent,
    SigneeDetailsComponent,
    SigneeSignatureComponent,
    SigneeSignatureImg,
    YourCommitmentComponent,
} from './certificate-of-completion-1-signee.components'
import imagesMap from '../common/assets/__generated__/images-map'
import { formatCourseDatefor } from '../common/utils'

export const GovtechDigitalAcademyCertificateOfCompletion_1SigneeTemplate: FunctionComponent<
    TemplateProps<GovtechDigitalAcademyCertificateOfCompletion_1SigneeOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const name = document.name.toUpperCase()
    const issueDate = formatCourseDatefor(
        document.issueDate,
        document.issueDate
    )
    const programmeTitle = decodeURIComponent(document.programmeTitle).replace(
        /\\n/g,
        '\n'
    )
    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700"
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
                <InfoContainer>
                    <ForAchievingComponent>
                        for achieving the requirements and learnings of
                    </ForAchievingComponent>
                    <ProgrammeComponent>{programmeTitle}</ProgrammeComponent>
                    <YourCommitmentComponent>
                        Your commitment to continuing professional development
                        has
                        <br />
                        helped advance digital transformation across and beyond
                        the
                        <br />
                        Public Service.
                    </YourCommitmentComponent>
                </InfoContainer>
                <SigneeSignatureComponent>
                    <SigneeSignatureImg
                        src={`${imagesMap[document.signeeSignature]}`}
                        alt="Signature of signee"
                    />
                </SigneeSignatureComponent>
                <SigneeDetailsComponent>
                    {document.signeeName}, {document.signeeDesignation}
                    <br />
                    {document.signeeDivision}
                    <br />
                    {document.signeeOrganisation}
                </SigneeDetailsComponent>
                <DateOfIssueComponent>
                    Date of Issue: {issueDate}
                </DateOfIssueComponent>
            </A4Landscape>
        </>
    )
}
