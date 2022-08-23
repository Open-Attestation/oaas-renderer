import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { FramedDocumentRenderer } from '@govtechsg/decentralized-renderer-react-components'
import { HelmetProvider } from 'react-helmet-async'

// @ts-ignore
import { registry } from '__development__/combined-registry'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <FramedDocumentRenderer templateRegistry={registry} />
        </HelmetProvider>
    </React.StrictMode>
)
