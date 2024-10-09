import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'

import { healthSciencesAuthorityCertificateForExporterTemplates } from './certificate-for-exporter'
import { healthSciencesAuthorityFreeSaleTemplates } from './free-sale'
import { healthSciencesAuthorityFreeSaleMedicalDevicesTemplates } from './free-sale-medical-devices'
import { healthSciencesAuthorityHsaLetterTemplates } from './hsa-letter'
import { healthSciencesAuthorityHsaLicenseCertificateTemplates } from './hsa-license-certificate'
import { healthSciencesAuthorityMethodValidationForChemicalTestingTemplates } from './method-validation-for-chemical-testing'

export const registry: TemplateRegistry<any> = {
    'health-sciences-authority/certificate-for-exporter':
        healthSciencesAuthorityCertificateForExporterTemplates,
    'health-sciences-authority/hsa-letter':
        healthSciencesAuthorityHsaLetterTemplates,
    'health-sciences-authority/hsa-license-certificate':
        healthSciencesAuthorityHsaLicenseCertificateTemplates,
    'health-sciences-authority/free-sale-medical-devices':
        healthSciencesAuthorityFreeSaleMedicalDevicesTemplates,
    'health-sciences-authority/free-sale':
        healthSciencesAuthorityFreeSaleTemplates,
    'health-sciences-authority/method-validation-for-chemical-testing':
        healthSciencesAuthorityMethodValidationForChemicalTestingTemplates,
}
