import { v2 } from '@govtechsg/open-attestation'

import { GovtechDigitalAcademyCertificateOfParticipationV3_1SigneeOaDoc } from './certificate-of-participation-v3-1-signee.types'

export const sample: GovtechDigitalAcademyCertificateOfParticipationV3_1SigneeOaDoc =
    {
        $template: {
            name: 'govtech-digital-academy/certificate-of-participation-v3-1-signee',
            type: v2.TemplateType.EmbeddedRenderer,
            url: 'http://localhost:3000',
        },
        name: 'THONG YONG JIE ANDRE',
        programmeTitle: 'Google AI Bootcamp \n 22 June 2023',
        issueDate: '2022-05-10',
        signeeOneName: 'Patrick Pang',
        signeeOneDesignation: 'Director',
        signeeOneDivision: 'GovTech Digital Academy',
        signeeOneOrganisation: 'Government Technology Agency',
        signeeOneSignature:
            'patrick-pang-signature&39573e7f99ce6836b3fc4785dc6d2071b037fe9926fc9133b08aaabab40451a4.png',
        issuers: [
            {
                name: 'institute of blockchain',
            },
        ],
    }
