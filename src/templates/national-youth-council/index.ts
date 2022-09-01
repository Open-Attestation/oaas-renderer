import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { nationalYouthCouncilCciLevel_1Templates } from './cci-level-1'
import { nationalYouthCouncilStandardFirstAidTemplates } from './standard-first-aid'
import { nationalYouthCouncilBclsAedTemplates } from './bcls-aed'

export const registry: TemplateRegistry<any> = {
    'national-youth-council/cci-level-1':
        nationalYouthCouncilCciLevel_1Templates,
    'national-youth-council/standard-first-aid':
        nationalYouthCouncilStandardFirstAidTemplates,
    'national-youth-council/bcls-aed': nationalYouthCouncilBclsAedTemplates,
}
