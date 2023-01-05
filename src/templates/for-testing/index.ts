import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { forTestingOpenattestationDemoCertificateTemplates } from './openattestation-demo-certificate'
import { forTestingSimpleCert_2Templates } from './simple-cert-2'
import { forTestingSimpleCertTemplates } from './simple-cert'

export const registry: TemplateRegistry<any> = {
    'for-testing/openattestation-demo-certificate':
        forTestingOpenattestationDemoCertificateTemplates,
    'for-testing/simple-cert-2': forTestingSimpleCert_2Templates,
    'for-testing/simple-cert': forTestingSimpleCertTemplates,
}
