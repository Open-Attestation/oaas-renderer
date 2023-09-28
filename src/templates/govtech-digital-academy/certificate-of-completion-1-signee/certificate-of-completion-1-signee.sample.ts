import { v2 } from '@govtechsg/open-attestation'
import { GovtechDigitalAcademyCertificateOfCompletion_1SigneeOaDoc } from './certificate-of-completion-1-signee.types'

export const sample: GovtechDigitalAcademyCertificateOfCompletion_1SigneeOaDoc =
    {
        $template: {
            name: 'govtech-digital-academy/certificate-of-completion-1-signee',
            type: v2.TemplateType.EmbeddedRenderer,
            url: 'http://localhost:3000',
        },
        name: 'THONG YONG JIE ANDRE',
        programmeTitle:
            'Certified ScrumMaster (CSM) + Certified LeSS Basics (CLB) Workshop',
        issueDate: '2022-05-10',
        signeeName: 'Sahas Sankaran',
        signeeDesignation: 'Director',
        signeeDivision: 'GovTech Digital Academy',
        signeeOrganisation: 'Government Technology Agency',
        signeeSignature:
            'sahas-sankaran-signature&d83beb8b8fe3c9a7efba8b80a693c4d58d33e4e94f1f4b556f13769742f861b9.svg',
        issuers: [
            {
                name: 'institute of blockchain',
            },
        ],
    }
