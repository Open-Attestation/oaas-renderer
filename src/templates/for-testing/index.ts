import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'

import { forTestingMultipleImagesCertificateTemplates } from './multiple-images-certificate'
import { forTestingOpenattestationDemoCertificateTemplates } from './openattestation-demo-certificate'
import { forTestingOpenattestationDemoCertificateA4Templates } from './openattestation-demo-certificate-a4'
import { forTestingOpenattestationDemoCertificateA4LandscapeTemplates } from './openattestation-demo-certificate-a4-landscape'
import { forTestingOpenattestationDemoCertificateCardTemplates } from './openattestation-demo-certificate-card'
import { forTestingPdfLetterheadTemplates } from './pdf-letterhead'
import { forTestingSimpleCertTemplates } from './simple-cert'
import { forTestingSimpleCert_2Templates } from './simple-cert-2'

export const registry: TemplateRegistry<any> = {
    'for-testing/pdf-letterhead': forTestingPdfLetterheadTemplates,
    'for-testing/openattestation-demo-certificate-a4-landscape':
        forTestingOpenattestationDemoCertificateA4LandscapeTemplates,
    'for-testing/multiple-images-certificate':
        forTestingMultipleImagesCertificateTemplates,
    'for-testing/openattestation-demo-certificate-a4':
        forTestingOpenattestationDemoCertificateA4Templates,
    'for-testing/openattestation-demo-certificate-card':
        forTestingOpenattestationDemoCertificateCardTemplates,
    'for-testing/openattestation-demo-certificate':
        forTestingOpenattestationDemoCertificateTemplates,
    'for-testing/simple-cert-2': forTestingSimpleCert_2Templates,
    'for-testing/simple-cert': forTestingSimpleCertTemplates,
}
