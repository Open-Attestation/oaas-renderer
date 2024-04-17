import { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { SingaporeJudicialCollegeCertificateOfCompletionOaDoc } from './certificate-of-completion.types'
import { Helmet } from 'react-helmet-async'
import { formatCourseDatefor } from '../common/utils'
import { A4 } from 'components/paper-size'
import portraitBg from '../common/assets/sjc_bg.png'
import {
    AwardedToComponent,
    CertificateComponent,
    ConductedByComponent,
    CourseComponent,
    DateComponent,
    FooterComponent,
    ForSuccessfullyComponent,
    NameComponent,
    SigneeComponent,
    SigneeSignatureImg,
    SigneeSignatureComponent,
    SjcComponent,
    SupremeCourtComponent,
} from './certificate-of-completion.components'
import imagesMap from '../common/assets/__generated__/images-map'

export const SingaporeJudicialCollegeCertificateOfCompletionTemplate: FunctionComponent<
    TemplateProps<SingaporeJudicialCollegeCertificateOfCompletionOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const courseDate = formatCourseDatefor(
        document.courseStartDate,
        document.courseEndDate
    )
    const issueDate = formatCourseDatefor(document.issuanceDate).toUpperCase()
    const courseTitle = decodeURIComponent(document.courseTitle).replace(
        /\\n/g,
        '\n'
    )
    return (
        <>
            <Helmet>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                ></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Italianno&family=Nunito:wght@700;750;760;850&display=swap"
                    rel="stylesheet"
                ></link>
                <title>singapore-courts - certificate-of-completion</title>
            </Helmet>
            <A4 $bgImg={portraitBg}>
                <CertificateComponent>
                    CERTIFICATE
                    <br />
                    OF COMPLETION
                </CertificateComponent>
                <AwardedToComponent>awarded to</AwardedToComponent>
                <NameComponent>
                    <b>{document.name}</b>
                </NameComponent>
                <ForSuccessfullyComponent>
                    for successfully completing
                </ForSuccessfullyComponent>
                <CourseComponent>
                    {courseTitle}
                    <br />
                    {courseDate}
                </CourseComponent>
                <ConductedByComponent>conducted by</ConductedByComponent>
                <SjcComponent>SINGAPORE JUDICIAL COLLEGE</SjcComponent>
                <SupremeCourtComponent>
                    SUPREME COURT OF SINGAPORE
                </SupremeCourtComponent>
                <SigneeSignatureComponent>
                    <SigneeSignatureImg
                        src={`${imagesMap[document.signeeSignature]}`}
                        alt="Signature of signee"
                    />
                </SigneeSignatureComponent>
                <FooterComponent>
                    <DateComponent>{issueDate}</DateComponent>
                    <SigneeComponent>
                        {document.signeeName}
                        <br />
                        {document.signeeDesignation}
                        <br />
                        Republic of Singapore
                    </SigneeComponent>
                </FooterComponent>
            </A4>
        </>
    )
}
