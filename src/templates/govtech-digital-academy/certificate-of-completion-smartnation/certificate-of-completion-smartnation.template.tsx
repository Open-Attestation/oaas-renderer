import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { GovtechDigitalAcademyCertificateOfCompletionSmartnationOaDoc } from './certificate-of-completion-smartnation.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import {
    A4Landscape,
    A4LandscapeHeightPx,
    A4LandscapeWidthPx,
} from 'components/paper-size'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import imagesMap from '../common/assets/__generated__/images-map'
import { formatCourseDatefor } from '../common/utils'
import landscapeBg from '../common/assets/COC_1sign_150dpi_no-logo.png'
import smartNationLogo from '../common/assets/smart-nation-logo.svg'
import {
    CertificateComponent,
    OfCompletionComponent,
    ProudlyPresentedComponent,
    NameComponent,
    InfoContainer,
    ForAchievingComponent,
    ProgrammeComponent,
    YourCommitmentComponent,
    SigneeSignatureComponent,
    SigneeSignatureImg,
    SigneeDetailsComponent,
    DateOfIssueComponent,
    SmartNationLogoComponent,
    SmartNationLogoImg,
} from './certificate-of-completion-smartnation.components'

const TemplateContainer = styled.div`
    pre {
        background-color: lightgray;
        overflow-wrap: anywhere;
        white-space: break-spaces;
    }
`

const documentWidth = A4LandscapeWidthPx
const documentHeight = A4LandscapeHeightPx

export const GovtechDigitalAcademyCertificateOfCompletionSmartnationTemplate: FunctionComponent<
    TemplateProps<GovtechDigitalAcademyCertificateOfCompletionSmartnationOaDoc> & {
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
    const transformScale = useShrinkToViewport(documentWidth)
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
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <A4Landscape $bgImg={landscapeBg}>
                    <SmartNationLogoComponent>
                        <SmartNationLogoImg
                            src={smartNationLogo}
                            alt="Smart Nation Logo"
                        />
                    </SmartNationLogoComponent>
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
                        <ProgrammeComponent>
                            {programmeTitle}
                        </ProgrammeComponent>
                        <YourCommitmentComponent>
                            Your commitment to continuing professional
                            development has
                            <br />
                            helped advance digital transformation in the Public
                            Service.
                        </YourCommitmentComponent>
                    </InfoContainer>
                    <SigneeSignatureComponent>
                        <SigneeSignatureImg
                            src={`${imagesMap[document.signeeSignature]}`}
                            alt="Signature of signee"
                        />
                    </SigneeSignatureComponent>
                    <SigneeDetailsComponent>
                        {document.signeeName},
                        <br />
                        {document.signeeDesignation},
                        <br />
                        {document.signeeOrganisation}
                    </SigneeDetailsComponent>
                    <DateOfIssueComponent>
                        Date of Issue: {issueDate}
                    </DateOfIssueComponent>
                </A4Landscape>
            </ScalableDocument>
        </>
    )
}
