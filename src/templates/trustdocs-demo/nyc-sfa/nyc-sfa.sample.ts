import { v2 } from '@govtechsg/open-attestation'

import { TrustdocsDemoNycSfaOaDoc } from './nyc-sfa.types'

export const sample: TrustdocsDemoNycSfaOaDoc = {
    $template: {
        name: 'trustdocs-demo/nyc-sfa',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'SAMPLE_NAME1',
    ciSignature:
        'demo_signature&73dc9d9d6712302c945fbb91d91cc65ef20f6b0d60a0665defbf7d418a506d33.png',
    issueDate: '2020-12-31',
    certificateNumber: 'XXXXX-0000-000',
    ciName: 'Sample_name2',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
