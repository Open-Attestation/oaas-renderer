import { v2 } from '@govtechsg/open-attestation'
import { ForTestingOpenattestationDemoCertificateOaDoc } from './openattestation-demo-certificate.types'

export const sample: ForTestingOpenattestationDemoCertificateOaDoc = {
    $template: {
        name: 'for-testing/openattestation-demo-certificate',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    courseTitle: 'OpenAttestation Demo',
    courseStartDate: '2023-01-15',
    issuers: [
        {
            name: 'OPENATTESTATION DEMO ISSUER',
        },
    ],
}
