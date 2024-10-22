import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'

import { singaporeFoodAgencyExportHealthCertificateTemplates } from './export-health-certificate'
import { singaporeFoodAgencySfaL1PdfPocTemplates } from './sfa-l1-pdf-poc'

export const registry: TemplateRegistry<any> = {
    'singapore-food-agency/sfa-l1-pdf-poc':
        singaporeFoodAgencySfaL1PdfPocTemplates,
    'singapore-food-agency/export-health-certificate':
        singaporeFoodAgencyExportHealthCertificateTemplates,
}
