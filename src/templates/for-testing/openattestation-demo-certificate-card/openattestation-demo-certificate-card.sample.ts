import { v2 } from '@govtechsg/open-attestation'
import { ForTestingOpenattestationDemoCertificateCardOaDoc } from './openattestation-demo-certificate-card.types'

export const sample: ForTestingOpenattestationDemoCertificateCardOaDoc = {
    $template: {
        name: 'for-testing/openattestation-demo-certificate-card',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    issueDate: '2023-01-16',
    serialNumber: 'OADC2023/01',
    issuers: [
        {
            name: 'OPENATTESTATION DEMO ISSUER',
        },
    ],
}
