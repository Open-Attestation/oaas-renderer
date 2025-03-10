import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'

import { govtechAbcCocTemplates } from './abc-coc'
import { govtechCrisprCopTemplates } from './crispr-cop'
import { govtechDatCoaTemplates } from './dat-coa'
import { govtechDatCopTemplates } from './dat-cop'
import { govtechLaunchCertificateTemplates } from './launch-certificate'
import { govtechLaunchHackathonTemplates } from './launch-hackathon'
import { govtechStack_2024CertificateOfCompletionTemplates } from './stack-2024-certificate-of-completion'

export const registry: TemplateRegistry<any> = {
    'govtech/crispr-cop': govtechCrisprCopTemplates,
    'govtech/launch-certificate': govtechLaunchCertificateTemplates,
    'govtech/launch-hackathon': govtechLaunchHackathonTemplates,
    'govtech/dat-coa': govtechDatCoaTemplates,
    'govtech/dat-cop': govtechDatCopTemplates,
    'govtech/abc-coc': govtechAbcCocTemplates,
    'govtech/stack-2024-certificate-of-completion':
        govtechStack_2024CertificateOfCompletionTemplates,
}
