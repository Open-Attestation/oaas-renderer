import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilBclsAedOaDoc } from './bcls-aed.types'

export const sample: NationalYouthCouncilBclsAedOaDoc = {
    $template: {
        name: 'national-youth-council/bcls-aed',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
    ciSignature:
        'jaffar-ali-signature&3d805f88bf49b640f6498c0e5335806289c24ee9533c7b79b08f3a5e454f1be4.png',
    issueDate: '2020-12-31',
    certificateNumber: 'OBSBCLS-2024-001',
    ciName: `Jaffar Ali`,
}
