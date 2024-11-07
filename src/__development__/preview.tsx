/* eslint-disable jsx-a11y/anchor-is-valid */
// DO NOT TOUCH! This is only used during development!
import useUrlState from '@ahooksjs/use-url-state'
import {
    FrameActions,
    FrameConnector,
    HostActionsHandler,
} from '@govtechsg/decentralized-renderer-react-components'
import { useFuzzySearchList, Highlight } from '@nozbe/microfuzz/react'
import { capitalCase } from 'change-case'
import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
    button:hover {
        background-color: #2b6cb0;
    }
`

const FrameContainer = styled.div`
    display: grid;
    grid-template-columns: 300px auto;

    &.collapsed {
        grid-template-columns: auto;
    }
`
const DocumentsContainer = styled.div`
    position: relative;
    padding: 8px;

    &.collapsed {
        display: none;
    }

    .document {
        cursor: pointer;
        padding: 0.5rem;
        background-color: #ebf8ff;
        border-top: 4px solid #4299e2;
        margin-bottom: 0.5rem;
        box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
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
    const [document, setDocument] = useUrlState<{
        selectedSampleName: string
        selectedIssuerId: string
    }>()
    const [isSearchOpened, setSearchOpened] = useState(false)

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

    // @ts-ignore$
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
        if (
            toFrame &&
            document.selectedIssuerId &&
            document.selectedSampleName
        ) {
            toFrame({
                type: 'RENDER_DOCUMENT',
                payload: {
                    document:
                        issuerDocuments[document.selectedIssuerId][
                            document.selectedSampleName
                        ],
                },
            })
        }
    }, [
        toFrame,
        issuerDocuments,
        document.selectedIssuerId,
        document.selectedSampleName,
    ])
    useEffect(() => {
        if (toFrame && selectedTemplate) {
            toFrame({
                type: 'SELECT_TEMPLATE',
                payload: selectedTemplate,
            })
        }
    }, [selectedTemplate, toFrame])

    const [menuState, setMenuState] = useUrlState({
        isMenuOpened: 'true',
    })
    const isMenuOpened = menuState.isMenuOpened === 'true'

    const issuerIds = Object.keys(issuerDocuments)
    const searchItems = React.useMemo(() => {
        const items: {
            label: string
            issuerId: string
            documentType: string
        }[] = []

        Object.entries(issuerDocuments).forEach(([issuerId, documents]) => {
            Object.keys(documents).forEach((documentType) => {
                items.push({
                    issuerId,
                    documentType,
                    label:
                        capitalCase(issuerId) +
                        ' - ' +
                        capitalCase(documentType),
                })
            })
        })

        return items
    }, [issuerDocuments])

    const documentMenu = issuerIds.map((issuerId) => {
        return (
            <div key={issuerId}>
                <h3>{capitalCase(issuerId)}</h3>
                {Object.keys(issuerDocuments[issuerId]).map((sampleName) => {
                    return (
                        <div
                            key={sampleName}
                            className={`document ${
                                document?.selectedIssuerId === issuerId &&
                                document.selectedSampleName === sampleName
                                    ? 'active'
                                    : ''
                            }`}
                            onClick={() => {
                                setDocument({
                                    selectedIssuerId: issuerId,
                                    selectedSampleName: sampleName,
                                })
                                window.scrollTo(0, 0)
                            }}
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
            <div
                style={{
                    position: 'fixed',
                    zIndex: 999,
                    top: 0,
                }}
            >
                <button
                    style={{
                        width: 'auto',
                        padding: '8px',
                    }}
                    onClick={() => {
                        setMenuState((prev) => ({
                            isMenuOpened: !(prev.isMenuOpened === 'true'),
                        }))
                    }}
                >
                    {menuState ? 'Open menu' : 'Close menu'}
                </button>
                <button
                    style={{
                        width: 'auto',
                        padding: '8px',
                    }}
                    onClick={() => {
                        setSearchOpened((v) => !v)
                    }}
                >
                    Search
                </button>
            </div>
            <FrameContainer className={!isMenuOpened ? 'collapsed' : ''}>
                <DocumentsContainer
                    className={!isMenuOpened ? 'collapsed' : ''}
                >
                    <section
                        style={{
                            overflow: 'scroll',
                            height: 'calc(100vh - 100px)',
                            position: 'fixed',
                            width: '270px',
                            paddingBottom: '50px',
                        }}
                    >
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
                    </section>
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
            {isSearchOpened && (
                <SearchComponent
                    searchItems={searchItems}
                    onSelected={({ issuerId, documentType }) => {
                        setDocument({
                            selectedIssuerId: issuerId,
                            selectedSampleName: documentType,
                        })
                    }}
                    onClose={() => setSearchOpened(false)}
                />
            )}
        </div>
    )
}

type SearchItem = { issuerId: string; documentType: string; label: string }
function SearchComponent({
    searchItems,
    onSelected,
    onClose,
}: {
    searchItems: SearchItem[]
    onSelected: (item: SearchItem) => void
    onClose: () => void
}) {
    const [queryText, setQueryText] = useState('')
    const [selectedOnEnter, setSelectedOnEnter] = useState<number>(0)

    const filteredList = useFuzzySearchList({
        list: searchItems,
        // If `queryText` is blank, `list` is returned in whole
        queryText,
        getText: (item) => [item.label],
        mapResultItem: ({ item, matches: [highlightRanges] }) => ({
            item,
            highlightRanges,
        }),
    })

    const renderedFilteredListItems = filteredList.map(
        ({ item, highlightRanges }) => (
            <button
                key={item.label}
                onClick={() => {
                    onSelected(item)
                    onClose()
                }}
                style={{
                    cursor: 'pointer',
                    display: 'block',
                    padding: 16,
                    background:
                        item.label === filteredList[selectedOnEnter]?.item.label
                            ? 'yellow'
                            : 'none',
                }}
            >
                <Highlight text={item.label} ranges={highlightRanges} />
            </button>
        )
    )

    return (
        <div
            onClick={() => onClose()}
            onKeyUp={(e) => {
                if (!filteredList.length) return

                const selectedItem = filteredList[selectedOnEnter]['item']
                if (e.key === 'Enter') {
                    onSelected(selectedItem)
                    onClose()
                    return
                }

                if (e.key === 'ArrowDown') {
                    setSelectedOnEnter((i) => {
                        return (i + 1) % filteredList.length
                    })
                    return
                }

                if (e.key === 'ArrowUp') {
                    setSelectedOnEnter((i) => {
                        const nextI = i - 1
                        return nextI < 0 ? filteredList.length - 1 : nextI
                    })
                    return
                }
                if (e.key === 'Escape') {
                    onClose()
                    return
                }
            }}
            style={{
                position: 'fixed',
                left: '0',
                top: '0',
                width: '100vw',
                height: '100vh',
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    position: 'fixed',
                    left: '50%',
                    top: '20%',
                    transform: 'translateX(-50%)',
                    background: 'white',
                    padding: 16,
                }}
            >
                <input
                    autoFocus
                    type="text"
                    value={queryText}
                    style={{
                        fontSize: 28,
                        width: '100%',
                    }}
                    onChange={(e) => {
                        setSelectedOnEnter(0)
                        setQueryText(e.target.value)
                    }}
                />
                <div
                    style={{
                        maxHeight: 400,
                        overflow: 'scroll',
                    }}
                >
                    {renderedFilteredListItems}
                </div>
            </div>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App issuerDocuments={samples} />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
