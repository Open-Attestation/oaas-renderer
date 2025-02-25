import { v2 } from '@govtechsg/open-attestation'

import { GovtechDigitalAcademyCertificateOfCompletion_1SigneeV2OaDoc } from './certificate-of-completion-1-signee-v2.types'

export const sample: GovtechDigitalAcademyCertificateOfCompletion_1SigneeV2OaDoc =
    {
        $template: {
            name: 'govtech-digital-academy/certificate-of-completion-1-signee-v2',
            type: v2.TemplateType.EmbeddedRenderer,
            url: 'http://localhost:3000',
        },
        name: 'THONG YONG JIE ANDRE',
        programmeTitle:
            'Certified ScrumMaster (CSM) + Certified LeSS Basics (CLB) Workshop',
        issueDate: '2022-05-10',
        signeeName: 'Patrick Pang',
        signeeDesignation: 'Director',
        signeeDivision: 'GovTech Digital Academy',
        signeeOrganisation: 'Government Technology Agency',
        signeeSignature:
            'patrick-pang-signature&39573e7f99ce6836b3fc4785dc6d2071b037fe9926fc9133b08aaabab40451a4.png',
        issuers: [
            {
                name: 'institute of blockchain',
            },
        ],
    }
