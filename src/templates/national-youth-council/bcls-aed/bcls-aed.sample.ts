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
        'jaffar-ali-signature&8b44a84d49ccd38fea996c652df243b8ab2b1debebdfc32049373e64c3d46807.png',
    issueDate: '2020-12-31',
    certificateNumber: 'OBSBCLS-2024-001',
    ciName: `Jaffar Ali`,
}
