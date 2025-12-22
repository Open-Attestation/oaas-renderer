import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { A4 } from 'components/paper-size'
import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'
import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import imagesMap from '../common/assets/__generated__/images-map'
import backgroundImg from '../common/assets/SN_COA.png'
import { formatCourseDatefor } from '../common/utils'
import { GovtechDigitalAcademyCertificateOfAchievementSmartnationOaDoc } from './certificate-of-achievement-smartnation.types'
export const GovtechDigitalAcademyCertificateOfAchievementSmartnationTemplate: FunctionComponent<
    TemplateProps<GovtechDigitalAcademyCertificateOfAchievementSmartnationOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const issueDate = formatCourseDatefor(
        document.programmeStartDate,
        document.programmeEndDate,
        'to'
    )

    return (
        <>
            <Helmet>
                <title>
                    govtech-digital-academy -
                    certificate-of-achievement-smartnation
                </title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700"
                ></link>
            </Helmet>
            <div id="govtech-digital-academy-certificate-of-achievement-smartnation">
                <ScalableDocumentV2>
                    <div className="relative mx-auto my-0 min-h-[29.7cm] max-w-[21cm] border border-solid border-slate-200 bg-white print:border-none font-['Lato']">
                        <A4 $padding="0" $bgImg={backgroundImg}>
                            <div className="absolute w-[541px] h-[43px] top-[225px] left-[128px] text-[36px] font-bold text-black text-center">
                                CERTIFICATE OF ACHIEVEMENT
                            </div>
                            <div className="absolute w-[412px] h-[27px] top-[400px] left-[190px] text-[21px] text-black text-center">
                                This certificate of achievement is awarded to
                            </div>
                            <div className="absolute top-[510px] left-[128px] right-[128px] flex flex-col gap-[106px] items-center">
                                <div className="text-[30px] font-bold text-black text-center">
                                    {document.name}
                                </div>
                                <div className="text-[21px] text-black text-center">
                                    for the successful completion of
                                    <br />
                                    {document.programmeTitle}
                                    <br />
                                    from {issueDate}
                                </div>
                            </div>
                            <div className="absolute w-[453px] h-[159px] top-[886px] left-[170px] flex flex-col items-center">
                                <div className="w-[217px] h-[51px] mb-[4px] flex flex-col items-center justify-end">
                                    <img
                                        className="max-w-[217px] max-h-[51px]"
                                        src={`${
                                            imagesMap[document.signeeSignature]
                                        }`}
                                        alt="Signature of signee"
                                    />
                                </div>
                                <div className="text-[21px] text-center">
                                    {document.signeeName},
                                    <br />
                                    {document.signeeDesignation},
                                    <br />
                                    {document.signeeOrganisation}
                                </div>
                            </div>
                        </A4>
                    </div>
                </ScalableDocumentV2>
            </div>
        </>
    )
}
