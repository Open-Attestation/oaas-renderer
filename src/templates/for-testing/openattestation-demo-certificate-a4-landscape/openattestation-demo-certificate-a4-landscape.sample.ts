import { v2 } from '@govtechsg/open-attestation'
import { ForTestingOpenattestationDemoCertificateA4LandscapeOaDoc } from './openattestation-demo-certificate-a4-landscape.types'

export const sample: ForTestingOpenattestationDemoCertificateA4LandscapeOaDoc =
    {
        $template: {
            name: 'for-testing/openattestation-demo-certificate-a4-landscape',
            type: v2.TemplateType.EmbeddedRenderer,
            url: 'http://localhost:3000',
        },
        name: 'John Doe',
        courseTitle: 'OpenAttestation Demo',
        courseStartDate: '2023-01-16',
        issuers: [
            {
                name: 'institute of blockchain',
            },
        ],
    }
