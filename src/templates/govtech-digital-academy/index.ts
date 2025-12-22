import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'

import { govtechDigitalAcademyCertificateOfAchievement_1SigneeTemplates } from './certificate-of-achievement-1-signee'
import { govtechDigitalAcademyCertificateOfAchievement_1SigneeV2Templates } from './certificate-of-achievement-1-signee-v2'
import { govtechDigitalAcademyCertificateOfAchievement_2SigneesTemplates } from './certificate-of-achievement-2-signees'
import { govtechDigitalAcademyCertificateOfAchievement_2SigneesV2Templates } from './certificate-of-achievement-2-signees-v2'
import { govtechDigitalAcademyCertificateOfAchievementSmartnationTemplates } from './certificate-of-achievement-smartnation'
import { govtechDigitalAcademyCertificateOfCompletion_1SigneeTemplates } from './certificate-of-completion-1-signee'
import { govtechDigitalAcademyCertificateOfCompletion_1SigneeV2Templates } from './certificate-of-completion-1-signee-v2'
import { govtechDigitalAcademyCertificateOfCompletion_2SigneesTemplates } from './certificate-of-completion-2-signees'
import { govtechDigitalAcademyCertificateOfCompletion_2SigneesV2Templates } from './certificate-of-completion-2-signees-v2'
import { govtechDigitalAcademyCertificateOfCompletionSmartnationTemplates } from './certificate-of-completion-smartnation'
import { govtechDigitalAcademyCertificateOfParticipation_1SigneeTemplates } from './certificate-of-participation-1-signee'
import { govtechDigitalAcademyCertificateOfParticipation_2SigneesTemplates } from './certificate-of-participation-2-signees'
import { govtechDigitalAcademyCertificateOfParticipationV2_1SigneeTemplates } from './certificate-of-participation-v2-1-signee'
import { govtechDigitalAcademyCertificateOfParticipationV2_2SigneesTemplates } from './certificate-of-participation-v2-2-signees'
import { govtechDigitalAcademyCertificateOfParticipationV3_1SigneeTemplates } from './certificate-of-participation-v3-1-signee'
import { govtechDigitalAcademyCertificateOfParticipationV3_2SigneesTemplates } from './certificate-of-participation-v3-2-signees'

export const registry: TemplateRegistry<any> = {
    'govtech-digital-academy/certificate-of-completion-2-signees-v2':
        govtechDigitalAcademyCertificateOfCompletion_2SigneesV2Templates,
    'govtech-digital-academy/certificate-of-completion-1-signee-v2':
        govtechDigitalAcademyCertificateOfCompletion_1SigneeV2Templates,
    'govtech-digital-academy/certificate-of-achievement-2-signees-v2':
        govtechDigitalAcademyCertificateOfAchievement_2SigneesV2Templates,
    'govtech-digital-academy/certificate-of-achievement-1-signee-v2':
        govtechDigitalAcademyCertificateOfAchievement_1SigneeV2Templates,
    'govtech-digital-academy/certificate-of-participation-v3-2-signees':
        govtechDigitalAcademyCertificateOfParticipationV3_2SigneesTemplates,
    'govtech-digital-academy/certificate-of-participation-v3-1-signee':
        govtechDigitalAcademyCertificateOfParticipationV3_1SigneeTemplates,
    'govtech-digital-academy/certificate-of-achievement-smartnation':
        govtechDigitalAcademyCertificateOfAchievementSmartnationTemplates,
    'govtech-digital-academy/certificate-of-participation-v2-1-signee':
        govtechDigitalAcademyCertificateOfParticipationV2_1SigneeTemplates,
    'govtech-digital-academy/certificate-of-achievement-1-signee':
        govtechDigitalAcademyCertificateOfAchievement_1SigneeTemplates,
    'govtech-digital-academy/certificate-of-achievement-2-signees':
        govtechDigitalAcademyCertificateOfAchievement_2SigneesTemplates,
    'govtech-digital-academy/certificate-of-participation-v2-2-signees':
        govtechDigitalAcademyCertificateOfParticipationV2_2SigneesTemplates,
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
