import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { GovtechDigitalAcademyCertificateOfParticipation_1SigneeOaDoc } from './certificate-of-participation-1-signee.types'
import { Helmet } from 'react-helmet-async'
import {
    A4Landscape,
    A4LandscapeHeightPx,
    A4LandscapeWidthPx,
} from 'components/paper-size/a4-landscape'
import landscapeBg from '../common/assets/COP_1sign_150dpi.png'
import {
    CertificateComponent,
    DateOfIssueComponent,
    InfoContainer,
    ForAchievingComponent,
    NameComponent,
    OfParticipationComponent,
    ProgrammeComponent,
    ProudlyPresentedComponent,
    SigneeDetailsComponent,
    SigneeSignatureComponent,
    SigneeSignatureImg,
    PartnerLogoComponent,
    PartnerLogoImg,
} from './certificate-of-participation-1-signee.components'
import imagesMap from '../common/assets/__generated__/images-map'
import { formatCourseDatefor } from '../common/utils'
import { PartnerComponent } from '../certificate-of-participation-2-signees/certificate-of-participation-2-signees.components'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'

const documentWidth = A4LandscapeWidthPx
const documentHeight = A4LandscapeHeightPx

export const GovtechDigitalAcademyCertificateOfParticipation_1SigneeTemplate: FunctionComponent<
    TemplateProps<GovtechDigitalAcademyCertificateOfParticipation_1SigneeOaDoc> & {
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
                    <CertificateComponent>CERTIFICATE</CertificateComponent>
                    <OfParticipationComponent>
                        OF PARTICIPATION
                    </OfParticipationComponent>
                    <ProudlyPresentedComponent>
                        PROUDLY PRESENTED TO
                    </ProudlyPresentedComponent>
                    <NameComponent>{name}</NameComponent>
                    <InfoContainer>
                        <ForAchievingComponent>
                            for your active participation in
                        </ForAchievingComponent>
                        <ProgrammeComponent>
                            {programmeTitle}
                        </ProgrammeComponent>
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
                    <PartnerComponent>Partner:</PartnerComponent>
                    <PartnerLogoComponent>
                        <PartnerLogoImg
                            src={document.partnerLogo_image}
                            alt="Partner Logo"
                        />
                    </PartnerLogoComponent>
                    <DateOfIssueComponent>
                        Date of Issue: {issueDate}
                    </DateOfIssueComponent>
                </A4Landscape>
            </ScalableDocument>
        </>
    )
}
