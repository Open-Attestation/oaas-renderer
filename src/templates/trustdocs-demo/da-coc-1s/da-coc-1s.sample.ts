import { v2 } from '@govtechsg/open-attestation'
import { TrustdocsDemoDaCoc_1sOaDoc } from './da-coc-1s.types'

export const sample: TrustdocsDemoDaCoc_1sOaDoc = {
    $template: {
        name: 'trustdocs-demo/da-coc-1s',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'SAMPLE_NAME1',
    programmeTitle:
        'Certified ScrumMaster (CSM) + Certified LeSS Basics (CLB) Workshop',
    issueDate: '2022-05-10',
    signeeName: 'Sample_name2',
    signeeDesignation: 'Director',
    signeeDivision: 'GovTech Digital Academy',
    signeeOrganisation: 'Government Technology Agency',
    signeeSignature:
        'demo_signature&73dc9d9d6712302c945fbb91d91cc65ef20f6b0d60a0665defbf7d418a506d33.png',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
