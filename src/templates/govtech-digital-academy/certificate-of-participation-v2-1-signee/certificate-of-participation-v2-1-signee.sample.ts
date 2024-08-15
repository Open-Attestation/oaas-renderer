import { v2 } from '@govtechsg/open-attestation'
import { GovtechDigitalAcademyCertificateOfParticipationV2_1SigneeOaDoc } from './certificate-of-participation-v2-1-signee.types'

export const sample: GovtechDigitalAcademyCertificateOfParticipationV2_1SigneeOaDoc =
    {
        $template: {
            name: 'govtech-digital-academy/certificate-of-participation-v2-1-signee',
            type: v2.TemplateType.EmbeddedRenderer,
            url: 'http://localhost:3000',
        },
        name: 'THONG YONG JIE ANDRE',
        programmeTitle: 'Google AI Bootcamp \n 22 June 2023',
        issueDate: '2022-05-10',
        signeeOneName: 'Sahas Sankaran',
        signeeOneDesignation: 'Director',
        signeeOneDivision: 'GovTech Digital Academy',
        signeeOneOrganisation: 'Government Technology Agency',
        signeeOneSignature:
            'sahas-sankaran-signature&d83beb8b8fe3c9a7efba8b80a693c4d58d33e4e94f1f4b556f13769742f861b9.svg',
        issuers: [
            {
                name: 'institute of blockchain',
            },
        ],
    }
