import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { FramedDocumentRenderer } from '@govtechsg/decentralized-renderer-react-components'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { csp } from 'content-security-policies'

// @ts-ignore
import { registry } from '__development__/combined-registry'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <Helmet>
                <meta http-equiv="Content-Security-Policy" content={csp} />
            </Helmet>
            <FramedDocumentRenderer templateRegistry={registry} />
        </HelmetProvider>
    </React.StrictMode>
)
