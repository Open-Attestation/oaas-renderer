import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { govtechDigitalAcademyCertificateOfCompletion_1SigneeTemplates } from './certificate-of-completion-1-signee'
import { govtechDigitalAcademyCertificateOfCompletion_2SigneesTemplates } from './certificate-of-completion-2-signees'

export const registry: TemplateRegistry<any> = {
    'govtech-digital-academy/certificate-of-completion-1-signee':
        govtechDigitalAcademyCertificateOfCompletion_1SigneeTemplates,
    'govtech-digital-academy/certificate-of-completion-2-signees':
        govtechDigitalAcademyCertificateOfCompletion_2SigneesTemplates,
}
