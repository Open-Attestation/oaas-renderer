import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { healthSciencesAuthorityFreeSaleTemplates } from './free-sale'
import { healthSciencesAuthorityMethodValidationForChemicalTestingTemplates } from './method-validation-for-chemical-testing'

export const registry: TemplateRegistry<any> = {
    'health-sciences-authority/free-sale':
        healthSciencesAuthorityFreeSaleTemplates,
    'health-sciences-authority/method-validation-for-chemical-testing':
        healthSciencesAuthorityMethodValidationForChemicalTestingTemplates,
}
