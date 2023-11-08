import { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { HealthSciencesAuthorityMethodValidationForChemicalTestingOaDoc } from './method-validation-for-chemical-testing.types'
import { Helmet } from 'react-helmet-async'
import { A4Landscape } from 'components/paper-size'
import {
    CertificateOfAttendanceComponent,
    TitleDivComponent,
    ThisIsToCertifyComponent,
    ContentDivComponent,
    RecipientDivComponent,
    RecipientNameComponent,
    HasSuccessfullyCompletedComponent,
    CourseTitleComponent,
    SigneeDivComponent,
    SigneeComponent,
    SigneeLineComponent,
    SigneeSignatureComponent,
    SigneeSignatureImg,
} from './method-validation-for-chemical-testing.components'
import landscapeBg from '../common/assets/HSA_bg_2X.png'
import { formatCourseDatefor } from '../common/utils'

export const HealthSciencesAuthorityMethodValidationForChemicalTestingTemplate: FunctionComponent<
    TemplateProps<HealthSciencesAuthorityMethodValidationForChemicalTestingOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const name = document.name.toUpperCase()
    const courseDate = formatCourseDatefor(
        document.courseEndDate,
        document.courseEndDate
    )
    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400"
                ></link>
                <title>
                    health-sciences-authority -
                    method-validation-for-chemical-testing
                </title>
            </Helmet>
            <A4Landscape $bgImg={landscapeBg} $padding="1px 32px 1px 39px">
                <ContentDivComponent>
                    <TitleDivComponent>
                        <CertificateOfAttendanceComponent>
                            CERTIFICATE OF ATTENDANCE
                        </CertificateOfAttendanceComponent>
                        <ThisIsToCertifyComponent>
                            This is to certify that
                        </ThisIsToCertifyComponent>
                    </TitleDivComponent>
                    <RecipientDivComponent>
                        <RecipientNameComponent>{name}</RecipientNameComponent>
                    </RecipientDivComponent>
                    <HasSuccessfullyCompletedComponent>
                        has successfully completed on {courseDate} the course on
                    </HasSuccessfullyCompletedComponent>
                    <CourseTitleComponent>
                        {document.courseTitle}
                    </CourseTitleComponent>
                </ContentDivComponent>
                <SigneeDivComponent>
                    <SigneeSignatureComponent>
                        <SigneeSignatureImg
                            src={document.signeeSignature_image}
                            alt="Signature of signee one"
                        ></SigneeSignatureImg>
                    </SigneeSignatureComponent>
                    <SigneeLineComponent></SigneeLineComponent>
                    <SigneeComponent>
                        {document.signeeName}
                        <br />
                        {document.signeeDesignation}
                        <br />
                        {document.signeeDivision}
                        <br />
                        {document.signeeGroup}
                        <br />
                        {document.signeeOrganisation}
                    </SigneeComponent>
                </SigneeDivComponent>
            </A4Landscape>
        </>
    )
}
