import { v2 } from '@govtechsg/open-attestation'

import { NationalYouthCouncilBclsAedOct_24OaDoc } from './bcls-aed-oct-24.types'

export const sample: NationalYouthCouncilBclsAedOct_24OaDoc = {
    $template: {
        name: 'national-youth-council/bcls-aed-oct-24',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    partialNricOrPassport: '123A',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
    ciSignature:
        'jaffar-ali-signature&3d805f88bf49b640f6498c0e5335806289c24ee9533c7b79b08f3a5e454f1be4.png',
    issueDate: '2020-12-31',
    courseBatchNumber: 'MST-SFA-2024-01',
    certificateNumber: 'OBSBCLS-2024-001',
    ciName: `Jaffar Ali`,
}
