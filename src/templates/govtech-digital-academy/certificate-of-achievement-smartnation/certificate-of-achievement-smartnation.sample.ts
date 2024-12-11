import { v2 } from '@govtechsg/open-attestation'

import { GovtechDigitalAcademyCertificateOfAchievementSmartnationOaDoc } from './certificate-of-achievement-smartnation.types'

export const sample: GovtechDigitalAcademyCertificateOfAchievementSmartnationOaDoc =
    {
        $template: {
            name: 'govtech-digital-academy/certificate-of-achievement-smartnation',
            type: v2.TemplateType.EmbeddedRenderer,
            url: 'http://localhost:3000',
        },
        name: 'Tan Chen Chen',
        programmeTitle: 'TechUp Run 3',
        programmeStartDate: '2023-10-28',
        programmeEndDate: '2023-11-22',
        signeeName: 'Joseph Leong',
        signeeDesignation: 'Permanent Secretary',
        signeeOrganisation:
            'Ministry of Digital Development and Information, Smart Nation, and Cybersecurity',
        signeeSignature:
            'joseph-leong-coa-signature&3f58615390f610d16d0dfdfb330cad21194eb768780cec807924ce66a321f821.png',
        issuers: [
            {
                name: 'institute of blockchain',
            },
        ],
    }
