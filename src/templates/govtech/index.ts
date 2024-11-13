import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'

import { govtechAbcCocTemplates } from './abc-coc'
import { govtechDatCoaTemplates } from './dat-coa'
import { govtechDatCopTemplates } from './dat-cop'
import { govtechStack_2024CertificateOfCompletionTemplates } from './stack-2024-certificate-of-completion'

export const registry: TemplateRegistry<any> = {
    'govtech/dat-coa': govtechDatCoaTemplates,
    'govtech/dat-cop': govtechDatCopTemplates,
    'govtech/abc-coc': govtechAbcCocTemplates,
    'govtech/stack-2024-certificate-of-completion':
        govtechStack_2024CertificateOfCompletionTemplates,
}
