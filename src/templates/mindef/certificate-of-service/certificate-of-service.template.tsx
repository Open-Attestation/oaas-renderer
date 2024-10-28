import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { A4 } from 'components/paper-size'
import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import mainBg from '../common/assets/bg-cos.png'
import { formatCourseDatefor } from '../common/utils'
import { MindefCertificateOfServiceOaDoc } from './certificate-of-service.types'

export const MindefCertificateOfServiceTemplate: FunctionComponent<
    TemplateProps<MindefCertificateOfServiceOaDoc> & { className?: string }
> = ({ document }) => {
    const issueDate = formatCourseDatefor(
        document.issueDate,
        document.issueDate
    )

    return (
        <>
            <Helmet>
                <title>mindef - certificate-of-service</title>
            </Helmet>
            <div id="mindef-certificate-of-service">
                <ScalableDocumentV2>
                    <A4 $bgImg={mainBg}>
                        <div className="absolute left-[115px] top-[510px] flex w-[568px] flex-col items-center">
                            <div className="text-center text-[27px] font-bold leading-[32.4px] text-[#000000]">
                                {document.name}
                            </div>
                        </div>
                        <div className="absolute left-[318px] top-[683px] flex flex-col items-center">
                            <div className="text-center text-[21px] font-bold leading-[32.4px] text-[#000000]">
                                {issueDate}
                            </div>
                        </div>
                        <div className="absolute left-[125px] top-[900px] flex flex-col items-center">
                            <div className="text-center text-[21px] font-bold leading-[32.4px] text-[#000000]">
                                {issueDate}
                            </div>
                        </div>
                        <div className="absolute bottom-[128px] right-[105px] flex flex-row gap-[36px]">
                            <div className="flex w-[256px] flex-col items-center">
                                <div className="mb-[4px] flex h-[71px] w-[265px] flex-col items-center justify-end">
                                    <img
                                        className="max-h-[71px] max-w-[265px]"
                                        src={document.signeSignature_image}
                                        alt="Signature of signee one"
                                    />
                                </div>
                                <div className="mb-[7px] h-[1px] w-[265px] bg-[#000000]" />
                                <div className="text-center text-[17px] font-normal leading-[17.34px] tracking-[0.01em] text-[#000000]">
                                    <span className="inline-block whitespace-pre-wrap">
                                        {document.signeeName},{' '}
                                    </span>
                                    <span className="inline-block">
                                        {document.signeeDesignation},
                                    </span>
                                    <br />
                                    {document.signeeDepartment}
                                </div>
                            </div>
                        </div>
                    </A4>
                </ScalableDocumentV2>
            </div>
        </>
    )
}
