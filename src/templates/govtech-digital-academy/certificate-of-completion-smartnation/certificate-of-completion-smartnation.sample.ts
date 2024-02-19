import { v2 } from '@govtechsg/open-attestation'
import { GovtechDigitalAcademyCertificateOfCompletionSmartnationOaDoc } from './certificate-of-completion-smartnation.types'

export const sample: GovtechDigitalAcademyCertificateOfCompletionSmartnationOaDoc =
    {
        $template: {
            name: 'govtech-digital-academy/certificate-of-completion-smartnation',
            type: v2.TemplateType.EmbeddedRenderer,
            url: 'http://localhost:3000',
        },
        name: 'THONG YONG JIE ANDRE',
        programmeTitle:
            'Information & Communications Technology & Smart Systems Sector Milestone Programme (ICTMP)',
        programmeStartDate: '2023-10-30',
        issueDate: '2024-02-21',
        signeeName: 'Joseph Leong',
        signeeDesignation: 'Permanent Secretary',
        signeeOrganisation: 'Smart Nation and Digital Government Group',
        signeeSignature:
            'joseph-leong-signature&6bb7c9981a0e17da0609cf3722b244af0006e585d7dc5a293f2383689303672d.png',
        issuers: [
            {
                name: 'institute of blockchain',
            },
        ],
    }
