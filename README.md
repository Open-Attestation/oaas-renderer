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
# for example: yarn new:template govtechSingapore softwareEngineere
yarn new:template ${issuerId} ${docType}
```

### `_.schema.ts -> __generated__/*.schema.json + __generated__/*.schema.d.ts`

```
yarn process:schemas
```

Defining json schemas are done in typescript to benefit not only from type protection, but also the ability to import values from our ts codebase.
The command above does 2 things:

1. convert the schema into JSON format
2. generate typescript interfaces from the schema

You should find the generated files in `__generated__`, which can is where the original `.schema.ts` file is.

### Hashing (SHA256) of images

To hash an image:

1. rename your image to `${filename}.hash.{png,jpg,jpeg}`
2. run

```
yarn process:images
```

This would generate a few files and can be found in `__generated__`, again, this folder should be where your original source image is.
In the generated folder you should see:

1. the same image, but renamed to this format:

```
${filename}&{hashOfFile}.{png,jpg,jpeg} // you shouldnt need to directly reference this file
```

2. `images-map.ts`
   This has a default export that maps `${filename}&{hashOfFile}.{png,jpg,jpeg}` to the image source provided by CRA.
   This should be use in your `.template.tsx` where the document should have a field that can be passed directly into the map
   to render the corresponding image.

3. `image-enum-values.ts`
   This file exports
    - `getEnumValues` to be used in `schema.ts`, accepts an optional param `pick` to narrow down the possible enumValues

below illustrates the above usage in a `schema.ts` file

```
// sample json.schema.ts
import {
    getEnumValues,
} from '../common-assets/__generated__/images-enum-values'
...
        ciSignature: {
            type: 'string',
            description: "CI's signature",
            enum: getEnumValues([
                'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
            ]),
            examples: getEnumValues([
                'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
            ]),
        },
...
```
