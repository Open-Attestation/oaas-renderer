import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { TrustdocsDemoDaCoc_1sOaDoc } from './da-coc-1s.types'
import { Helmet } from 'react-helmet-async'
import { formatCourseDatefor } from '../common/utils'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import {
    A4Landscape,
    A4LandscapeHeightPx,
    A4LandscapeWidthPx,
} from 'components/paper-size'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'
import landscapeBg from '../common/assets/COC_1sign_150dpi.png'
import {
    CertificateComponent,
    DateOfIssueComponent,
    ForAchievingComponent,
    InfoContainer,
    NameComponent,
    OfCompletionComponent,
    ProgrammeComponent,
    ProudlyPresentedComponent,
    SigneeDetailsComponent,
    SigneeSignatureComponent,
    SigneeSignatureImg,
    YourCommitmentComponent,
} from './da-coc-1s.components'
import imagesMap from '../common/assets/__generated__/images-map'

const documentWidth = A4LandscapeWidthPx
const documentHeight = A4LandscapeHeightPx

export const TrustdocsDemoDaCoc_1sTemplate: FunctionComponent<
    TemplateProps<TrustdocsDemoDaCoc_1sOaDoc> & { className?: string }
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
                    certificate-of-completion-2-signees
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
