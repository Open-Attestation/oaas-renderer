import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { govtechDigitalAcademyCertificateOfCompletionSmartnationTemplates } from './certificate-of-completion-smartnation'
import { govtechDigitalAcademyCertificateOfParticipation_1SigneeTemplates } from './certificate-of-participation-1-signee'
import { govtechDigitalAcademyCertificateOfParticipation_2SigneesTemplates } from './certificate-of-participation-2-signees'
import { govtechDigitalAcademyCertificateOfCompletion_1SigneeTemplates } from './certificate-of-completion-1-signee'
import { govtechDigitalAcademyCertificateOfCompletion_2SigneesTemplates } from './certificate-of-completion-2-signees'

export const registry: TemplateRegistry<any> = {
    'govtech-digital-academy/certificate-of-completion-smartnation':
        govtechDigitalAcademyCertificateOfCompletionSmartnationTemplates,
    'govtech-digital-academy/certificate-of-participation-1-signee':
        govtechDigitalAcademyCertificateOfParticipation_1SigneeTemplates,
    'govtech-digital-academy/certificate-of-participation-2-signees':
        govtechDigitalAcademyCertificateOfParticipation_2SigneesTemplates,
    'govtech-digital-academy/certificate-of-completion-1-signee':
        govtechDigitalAcademyCertificateOfCompletion_1SigneeTemplates,
    'govtech-digital-academy/certificate-of-completion-2-signees':
        govtechDigitalAcademyCertificateOfCompletion_2SigneesTemplates,
}
