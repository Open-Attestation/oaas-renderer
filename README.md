# OAAS Renderer

## How does this differ from https://github.com/Open-Attestation/decentralized-renderer-react-template?

-   Uses create react app so that we do not to have to maintain a bunch of react dependencies ourselves
-   Automatic conversion of json schemas to typescript interfaces
-   Streamlined dev setup
-   CSS reset out of the box
-   Absolute imports
-   Git hooks

## Getting started

### Install dependencies

```
yarn
```

### Start dev

Previously in https://github.com/Open-Attestation/decentralized-renderer-react-template, you have to run two processes to start development, it is now reduced into one command

```
yarn dev
```

### Files and organisation

#### Templates

Templates organisation have to follow such a format

```
src/templates/${issuerId}/{docTypeTemplate}

```

#### Main files

```
// Main issuer's registry
// the exported member HAS TO BE named 'registry'
src/templates/${issuerId}/index.ts

// Sample document that will appear in the preview app, critical for development
// the exported member HAS TO BE named 'sample'
src/templates/${issuerId}/{docTypeTemplate}/{docTypeTemplate}.sample.ts

// JSON schema that will be converted into typescript interfaces
src/templates/${issuerId}/{docTypeTemplate}/{docTypeTemplate}.schema.json

// Here lives the react component that describe how this particular template should render
src/templates/${issuerId}/{docTypeTemplate}/{docTypeTemplate}.template.json

// A sub registry, see example below
src/templates/${issuerId}/{docTypeTemplate}/{docTypeTemplate}.index.ts

import { Template } from './milestone.template'

export const templates = [
    {
        id: 'milestone',
        label: 'Milestone',
        template: Template,
    },
]

```

### Adding a new template

```
yarn new:template ${issuerId} ${docType} // for example: yarn new:template govtechSingapore softwareEngineerer
```
