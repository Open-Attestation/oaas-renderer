import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { singaporeFoodAgencyExportHealthCertificateTemplates } from './export-health-certificate'

export const registry: TemplateRegistry<any> = {
    'singapore-food-agency/export-health-certificate':
        singaporeFoodAgencyExportHealthCertificateTemplates,
}
