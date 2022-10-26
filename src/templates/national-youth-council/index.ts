import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { nationalYouthCouncilObsMocTemplates } from './obs-moc'
import { nationalYouthCouncilTechnicalSkillsTemplates } from './technical-skills'
import { nationalYouthCouncilGeneralCertificateTemplates } from './general-certificate'
import { nationalYouthCouncilObsWmfrTemplates } from './obs-wmfr'
import { nationalYouthCouncilCciLevel_2Templates } from './cci-level-2'
import { nationalYouthCouncilCciLevel_1Templates } from './cci-level-1'
import { nationalYouthCouncilStandardFirstAidTemplates } from './standard-first-aid'
import { nationalYouthCouncilBclsAedTemplates } from './bcls-aed'

export const registry: TemplateRegistry<any> = {
    'national-youth-council/obs-moc': nationalYouthCouncilObsMocTemplates,
    'national-youth-council/technical-skills':
        nationalYouthCouncilTechnicalSkillsTemplates,
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
