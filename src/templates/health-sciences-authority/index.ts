import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { healthSciencesAuthorityHsaLicenseCertificateTemplates } from './hsa-license-certificate'
import { healthSciencesAuthorityFreeSaleMedicalDevicesTemplates } from './free-sale-medical-devices'
import { healthSciencesAuthorityFreeSaleTemplates } from './free-sale'
import { healthSciencesAuthorityMethodValidationForChemicalTestingTemplates } from './method-validation-for-chemical-testing'

export const registry: TemplateRegistry<any> = {
    'health-sciences-authority/hsa-license-certificate':
        healthSciencesAuthorityHsaLicenseCertificateTemplates,
    'health-sciences-authority/free-sale-medical-devices':
        healthSciencesAuthorityFreeSaleMedicalDevicesTemplates,
    'health-sciences-authority/free-sale':
        healthSciencesAuthorityFreeSaleTemplates,
    'health-sciences-authority/method-validation-for-chemical-testing':
        healthSciencesAuthorityMethodValidationForChemicalTestingTemplates,
}
