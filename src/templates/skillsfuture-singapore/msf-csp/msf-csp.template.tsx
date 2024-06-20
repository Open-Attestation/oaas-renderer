import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { SkillsfutureSingaporeMsfCspOaDoc } from './msf-csp.types'
import { Helmet } from 'react-helmet-async'

export const SkillsfutureSingaporeMsfCspTemplate: FunctionComponent<
    TemplateProps<SkillsfutureSingaporeMsfCspOaDoc> & { className?: string }
> = ({ document }) => {
    return (
        <>
            <Helmet>
                <title>skillsfuture-singapore - msf-csp</title>
            </Helmet>
            <div
                id="skillsfuture-singapore-msf-csp"
                className="bg-gray-200 overflow-wrap-anywhere whitespace-pre-wrap"
            >
                <div>
                    <h1>{document?.name ?? 'Default title'}</h1>
                    <pre>{JSON.stringify(document, null, 2)}</pre>
                </div>
            </div>
        </>
    )
}
