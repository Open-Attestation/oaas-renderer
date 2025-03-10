import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import {
    A4LandscapeWidthPx,
    A4LandscapeHeightPx,
    A4Landscape,
} from 'components/paper-size'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import imagesMap from '../common/assets/__generated__/images-map'
import landscapeBg from '../common/assets/COC-BGv2.png'
import { formatCourseDatefor } from '../common/utils'
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
} from './certificate-of-completion-1-signee-v2.components'
import { GovtechDigitalAcademyCertificateOfCompletion_1SigneeV2OaDoc } from './certificate-of-completion-1-signee-v2.types'

const documentWidth = A4LandscapeWidthPx
const documentHeight = A4LandscapeHeightPx

export const GovtechDigitalAcademyCertificateOfCompletion_1SigneeV2Template: FunctionComponent<
    TemplateProps<GovtechDigitalAcademyCertificateOfCompletion_1SigneeV2OaDoc> & {
        className?: string
    }
> = ({ document }) => {
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
                    certificate-of-completion-1-signee-v2
                </title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <A4Landscape $bgImg={landscapeBg}>
                    <CertificateComponent>CERTIFICATE</CertificateComponent>
                    <OfCompletionComponent>OF COMPLETION</OfCompletionComponent>
                    <ProudlyPresentedComponent>
                        PROUDLY PRESENTED TO
                    </ProudlyPresentedComponent>
                    <NameComponent>{name}</NameComponent>
                    <div className="absolute top-[420px] left-[472px] h-[1px] w-[568px] bg-[#99753E]" />
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
                            helped advance digital transformation across and
                            beyond the
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
                        <div className="h-[1px] w-[265px] mb-[7px] bg-[#99753E]" />
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
            </ScalableDocument>
        </>
    )
}
