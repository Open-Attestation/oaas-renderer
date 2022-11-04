import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { nationalYouthCouncilSuccessfulCompletionTemplates } from './successful-completion'
import { nationalYouthCouncilBitCampcraftAndNavigationTemplates } from './bit-campcraft-and-navigation'
import { nationalYouthCouncilCrcLeadersTemplates } from './crc-leaders'
import { nationalYouthCouncilCrcEitTemplates } from './crc-eit'
import { nationalYouthCouncilCrcBasicTemplates } from './crc-basic'
import { nationalYouthCouncilBitSoftSkillsTemplates } from './bit-soft-skills'
import { nationalYouthCouncilCciLevel_2RecertTemplates } from './cci-level-2-recert'
import { nationalYouthCouncilCciLevel_1RecertTemplates } from './cci-level-1-recert'
import { nationalYouthCouncilCciLevel_2TrainerTemplates } from './cci-level-2-trainer'
import { nationalYouthCouncilCciLevel_1TrainerTemplates } from './cci-level-1-trainer'
import { nationalYouthCouncilObsMocTemplates } from './obs-moc'
import { nationalYouthCouncilGeneralCertificateTemplates } from './general-certificate'
import { nationalYouthCouncilObsWmfrTemplates } from './obs-wmfr'
import { nationalYouthCouncilCciLevel_2Templates } from './cci-level-2'
import { nationalYouthCouncilCciLevel_1Templates } from './cci-level-1'
import { nationalYouthCouncilStandardFirstAidTemplates } from './standard-first-aid'
import { nationalYouthCouncilBclsAedTemplates } from './bcls-aed'

export const registry: TemplateRegistry<any> = {
    'national-youth-council/successful-completion':
        nationalYouthCouncilSuccessfulCompletionTemplates,
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
