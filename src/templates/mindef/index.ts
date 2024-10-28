import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'

import { mindefCertificateOfServiceTemplates } from './certificate-of-service'
import { mindefMindefPdfTemplates } from './mindef-pdf'

export const registry: TemplateRegistry<any> = {
    'mindef/certificate-of-service': mindefCertificateOfServiceTemplates,
    'mindef/mindef-pdf': mindefMindefPdfTemplates,
}
