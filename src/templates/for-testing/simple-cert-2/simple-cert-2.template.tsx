import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import { ForTestingSimpleCert_2OaDoc } from './simple-cert-2.types'

export const ForTestingSimpleCert_2Template: FunctionComponent<
    TemplateProps<ForTestingSimpleCert_2OaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    return (
        <>
            <Helmet>
                <title>for-testing - simple-cert</title>
            </Helmet>
            <div className={className} id="for-testing-simple-cert">
                <div className="border border-solid border-black rounded-lg p-2 flex flex-col items-center">
                    <h1>{document.courseTitle}</h1>
                    <p style={{ textAlign: 'center' }}>To reward</p>
                    <h2>{document.name}</h2>
                    <p>for completion of course</p>
                    <h2>
                        {document.courseStartDate} - {document.courseEndDate}
                    </h2>
                    <p>serial number: {document.serialNumber}</p>
                </div>
            </div>
        </>
    )
}
