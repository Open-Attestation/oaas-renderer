import './index.css'

import { FramedDocumentRenderer } from '@govtechsg/decentralized-renderer-react-components'
import { registry } from '__development__/combined-registry'
import { csp } from 'content-security-policies'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'

// @ts-ignore

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <HelmetProvider>
            {/* Only use meta headers in dev mode, prod mode will put csp content into headers */}
            {process.env.NODE_ENV === 'development' ? (
                <Helmet>
                    <meta http-equiv="Content-Security-Policy" content={csp} />
                </Helmet>
            ) : undefined}
            <FramedDocumentRenderer templateRegistry={registry} />
        </HelmetProvider>
    </React.StrictMode>
)
