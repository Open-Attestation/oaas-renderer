// DO NOT TOUCH! This is only used during development!
import {
    FrameActions,
    FrameConnector,
    HostActionsHandler,
} from '@govtechsg/decentralized-renderer-react-components'
import { capitalCase } from 'change-case'
import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'

// @ts-ignore
import { samples } from './samples'

interface AppProps {
    issuerDocuments: Record<string, any>
}

const TemplatesContainer = styled.div``

const ActionsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    button {
        color: #fff;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-weight: 700;
        border-radius: 0.25rem;
        background-color: #4299e1;
        cursor: pointer;
        border: 0;
    }
    button: hover {
        background-color: #2b6cb0;
    }
`

const FrameContainer = styled.div`
    display: flex;
`
const DocumentsContainer = styled.div`
    position: relative;

    width: 300px;
    padding: 8px;

    &.collapsed {
        position: absolute;
        width: 0;
        left: 100%;
    }

    .document {
        cursor: pointer;
        padding: 0.5rem;
        background-color: #ebf8ff;
        border-top: 4px solid #4299e2;
        margin-bottom: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .document.active {
        border-top-color: #38b2ac;
        background-color: #e6fffa;
    }
`

const ListContainer = styled.ul`
    display: flex;
    border-bottom: 1px solid #e2e8f0;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        margin-right: 0.25rem;
    }
    li.selected {
        margin-bottom: -1px;
    }
    a {
        text-decoration: none;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-weight: 600;
        display: inline-block;
        background-color: white;
        border-style: solid;
        border-color: #e2e8f0;
    }
    li.selected a {
        color: #2b6cb0;
        border-bottom: none;
        border-left-width: 1px;
        border-right-width: 1px;
        border-top-width: 1px;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    li a {
        color: #4299e1;
        border-width: 0px;
    }
`

export const App: React.FunctionComponent<AppProps> = ({
    issuerDocuments,
}): React.ReactElement => {
    const [toFrame, setToFrame] = useState<HostActionsHandler>()
    const [height, setHeight] = useState(50)
    const [templates, setTemplates] = useState<{ id: string; label: string }[]>(
        []
    )
    const [document, setDocument] = useState<{ name: string; document: any }>()

    const [selectedTemplate, setSelectedTemplate] = useState<string>('')
    const fn = useCallback((toFrame: HostActionsHandler) => {
        // wrap into a function otherwise toFrame function will be executed
        setToFrame(() => toFrame)
    }, [])

    const fromFrame = (action: FrameActions): void => {
        if (action.type === 'UPDATE_HEIGHT') {
            setHeight(action.payload)
        }
        if (action.type === 'UPDATE_TEMPLATES') {
            setTemplates(action.payload)
            setSelectedTemplate(action.payload[0].id)
        }
    }

    // @ts-ignore
    window.renderDocument = (document) => {
        if (toFrame && document) {
            toFrame({
                type: 'RENDER_DOCUMENT',
                payload: {
                    document,
                },
            })
        }
    }
    useEffect(() => {
        if (toFrame && document) {
            toFrame({
                type: 'RENDER_DOCUMENT',
                payload: {
                    document: document.document,
                },
            })
        }
    }, [toFrame, document])
    useEffect(() => {
        if (toFrame && selectedTemplate) {
            toFrame({
                type: 'SELECT_TEMPLATE',
                payload: selectedTemplate,
            })
        }
    }, [selectedTemplate, toFrame])

    const [collapsed, setCollapsed] = useState(false)

    const issuerIds = Object.keys(issuerDocuments)
    const documentMenu = issuerIds.map((issuerId) => {
        return (
            <div key={issuerId}>
                <h3>{capitalCase(issuerId)}</h3>
                {Object.keys(issuerDocuments[issuerId]).map((sampleName) => {
                    const d = issuerDocuments[issuerId][sampleName]
                    return (
                        <div
                            key={sampleName}
                            className={`document ${
                                document?.document === d ? 'active' : ''
                            }`}
                            onClick={() =>
                                setDocument({
                                    document: d,
                                    name: sampleName,
                                })
                            }
                        >
                            {sampleName}
                        </div>
                    )
                })}
            </div>
        )
    })

    return (
        <div>
            <ActionsContainer>
                <button
                    onClick={() => {
                        if (toFrame) {
                            toFrame({
                                type: 'PRINT',
                            })
                        }
                    }}
                >
                    Print
                </button>
            </ActionsContainer>
            <button
                onClick={() => {
                    setCollapsed((collapsed) => !collapsed)
                }}
            >
                {collapsed ? 'Open menu' : 'Close menu'}
            </button>
            <FrameContainer>
                <DocumentsContainer className={collapsed ? 'collapsed' : ''}>
                    <div
                        style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}
                    >
                        Documents
                    </div>
                    {Object.keys(issuerDocuments).length === 0 && (
                        <div>
                            Please configure the application and provide at
                            least one document
                        </div>
                    )}
                    {documentMenu}
                </DocumentsContainer>
                {!document && (
                    <div
                        style={{
                            textAlign: 'center',
                            flexGrow: 1,
                            alignSelf: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        Please select a document on the left bar
                    </div>
                )}
                <div
                    style={{
                        width: '100%',
                        display: `${document ? 'block' : 'none'}`,
                    }}
                >
                    <TemplatesContainer>
                        <ListContainer>
                            {templates.map((template) => (
                                <li
                                    key={template.id}
                                    className={`tab ${
                                        selectedTemplate === template.id
                                            ? 'selected'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        setSelectedTemplate(template.id)
                                    }
                                >
                                    <a href="#">{template.label}</a>
                                </li>
                            ))}
                        </ListContainer>
                    </TemplatesContainer>
                    <div
                        style={{
                            border: '1px solid #e2e8f0',
                            borderTop: 'none',
                            padding: '2rem',
                            marginRight: '0.5rem',
                        }}
                    >
                        <FrameConnector
                            source="http://localhost:3000"
                            dispatch={fromFrame}
                            onConnected={fn}
                            style={{
                                margin: 'auto',
                                border: '0',
                                width: '100%',
                                height: `${height}px`,
                                padding: '1rem',
                                paddingTop: '0.5rem',
                            }}
                        />
                    </div>
                </div>
            </FrameContainer>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <App issuerDocuments={samples} />
    </React.StrictMode>
)
