import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'

import { nationalYouthCouncilBclsAedTemplates } from './bcls-aed'
import { nationalYouthCouncilBclsAedOct_24Templates } from './bcls-aed-oct-24'
import { nationalYouthCouncilBitCampcraftAndNavigationTemplates } from './bit-campcraft-and-navigation'
import { nationalYouthCouncilBitSoftSkillsTemplates } from './bit-soft-skills'
import { nationalYouthCouncilBitSummaryCertificateTemplates } from './bit-summary-certificate'
import { nationalYouthCouncilBitSummaryCertificateFeb_2023Templates } from './bit-summary-certificate-feb-2023'
import { nationalYouthCouncilBizsafeLevel_2RiskManagement_2024Templates } from './bizsafe-level-2-risk-management-2024'
import { nationalYouthCouncilBizsafeLevel_2RiskManagementOutdoorAdventureEducationTemplates } from './bizsafe-level-2-risk-management-outdoor-adventure-education'
import { nationalYouthCouncilCciLevel_1Templates } from './cci-level-1'
import { nationalYouthCouncilCciLevel_1RecertTemplates } from './cci-level-1-recert'
import { nationalYouthCouncilCciLevel_1TrainerTemplates } from './cci-level-1-trainer'
import { nationalYouthCouncilCciLevel_2Templates } from './cci-level-2'
import { nationalYouthCouncilCciLevel_2RecertTemplates } from './cci-level-2-recert'
import { nationalYouthCouncilCciLevel_2TrainerTemplates } from './cci-level-2-trainer'
import { nationalYouthCouncilCrcBasicTemplates } from './crc-basic'
import { nationalYouthCouncilCrcEitTemplates } from './crc-eit'
import { nationalYouthCouncilCrcLeadersTemplates } from './crc-leaders'
import { nationalYouthCouncilGeneralCertificateTemplates } from './general-certificate'
import { nationalYouthCouncilObsCoachingTemplates } from './obs-coaching'
import { nationalYouthCouncilObsMocTemplates } from './obs-moc'
import { nationalYouthCouncilObsWmfrTemplates } from './obs-wmfr'
import { nationalYouthCouncilObsWmfrOct_24Templates } from './obs-wmfr-oct-24'
import { nationalYouthCouncilStandardFirstAidTemplates } from './standard-first-aid'
import { nationalYouthCouncilStandardFirstAidOct_24Templates } from './standard-first-aid-oct-24'

export const registry: TemplateRegistry<any> = {
    'national-youth-council/obs-wmfr-oct-24':
        nationalYouthCouncilObsWmfrOct_24Templates,
    'national-youth-council/bcls-aed-oct-24':
        nationalYouthCouncilBclsAedOct_24Templates,
    'national-youth-council/standard-first-aid-oct-24':
        nationalYouthCouncilStandardFirstAidOct_24Templates,
    'national-youth-council/bizsafe-level-2-risk-management-2024':
        nationalYouthCouncilBizsafeLevel_2RiskManagement_2024Templates,
    'national-youth-council/bit-summary-certificate-feb-2023':
        nationalYouthCouncilBitSummaryCertificateFeb_2023Templates,
    'national-youth-council/bizsafe-level-2-risk-management-outdoor-adventure-education':
        nationalYouthCouncilBizsafeLevel_2RiskManagementOutdoorAdventureEducationTemplates,
    'national-youth-council/obs-coaching':
        nationalYouthCouncilObsCoachingTemplates,
    'national-youth-council/bit-summary-certificate':
        nationalYouthCouncilBitSummaryCertificateTemplates,
    'national-youth-council/bit-campcraft-and-navigation':
        nationalYouthCouncilBitCampcraftAndNavigationTemplates,
    'national-youth-council/crc-leaders':
        nationalYouthCouncilCrcLeadersTemplates,
    'national-youth-council/crc-eit': nationalYouthCouncilCrcEitTemplates,
    'national-youth-council/crc-basic': nationalYouthCouncilCrcBasicTemplates,
    'national-youth-council/bit-soft-skills':
        nationalYouthCouncilBitSoftSkillsTemplates,
    'national-youth-council/cci-level-2-recert':
        nationalYouthCouncilCciLevel_2RecertTemplates,
    'national-youth-council/cci-level-1-recert':
        nationalYouthCouncilCciLevel_1RecertTemplates,
    'national-youth-council/cci-level-2-trainer':
        nationalYouthCouncilCciLevel_2TrainerTemplates,
    'national-youth-council/cci-level-1-trainer':
        nationalYouthCouncilCciLevel_1TrainerTemplates,
    'national-youth-council/obs-moc': nationalYouthCouncilObsMocTemplates,
    'national-youth-council/general-certificate':
        nationalYouthCouncilGeneralCertificateTemplates,
    'national-youth-council/obs-wmfr': nationalYouthCouncilObsWmfrTemplates,
    'national-youth-council/cci-level-2':
        nationalYouthCouncilCciLevel_2Templates,
    'national-youth-council/cci-level-1':
        nationalYouthCouncilCciLevel_1Templates,
    'national-youth-council/standard-first-aid':
        nationalYouthCouncilStandardFirstAidTemplates,
    'national-youth-council/bcls-aed': nationalYouthCouncilBclsAedTemplates,
}
