import { v2 } from '@govtechsg/open-attestation'
import { ForTestingOpenattestationDemoCertificateA4OaDoc } from './openattestation-demo-certificate-a4.types'

export const sample: ForTestingOpenattestationDemoCertificateA4OaDoc = {
    $template: {
        name: 'for-testing/openattestation-demo-certificate-a4',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    courseTitle: 'OpenAttestation Demo',
    courseStartDate: '2023-01-16',
    issuers: [
        {
            name: 'OPENATTESTATION DEMO ISSUER',
        },
    ],
}
