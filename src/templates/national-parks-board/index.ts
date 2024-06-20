import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { nationalParksBoardQuarantineAndVaccinationCertificateTemplates } from './quarantine-and-vaccination-certificate'

export const registry: TemplateRegistry<any> = {
    'national-parks-board/quarantine-and-vaccination-certificate':
        nationalParksBoardQuarantineAndVaccinationCertificateTemplates,
}
