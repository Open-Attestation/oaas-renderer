import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'

import { singaporeJudicialCollegeCertificateOfCompletionTemplates } from './certificate-of-completion'
import { singaporeJudicialCollegeLetterOfAppreciationTemplates } from './letter-of-appreciation'

export const registry: TemplateRegistry<any> = {
    'singapore-judicial-college/letter-of-appreciation':
        singaporeJudicialCollegeLetterOfAppreciationTemplates,
    'singapore-judicial-college/certificate-of-completion':
        singaporeJudicialCollegeCertificateOfCompletionTemplates,
}
