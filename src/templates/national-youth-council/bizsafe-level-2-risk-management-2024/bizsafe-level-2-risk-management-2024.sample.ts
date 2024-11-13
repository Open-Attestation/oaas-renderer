import { v2 } from '@govtechsg/open-attestation'

import { NationalYouthCouncilBizsafeLevel_2RiskManagement_2024OaDoc } from './bizsafe-level-2-risk-management-2024.types'

export const sample: NationalYouthCouncilBizsafeLevel_2RiskManagement_2024OaDoc =
    {
        $template: {
            name: 'national-youth-council/bizsafe-level-2-risk-management-2024',
            type: v2.TemplateType.EmbeddedRenderer,
            url: 'http://localhost:3000',
        },
        name: 'Chao Siew Bao',
        nricFirstCharacter: 'S',
        nricLast4Characters: '888G',
        issueDate: '2024-12-31',
        organisationRepName: 'Nicholas Conceicao',
        organisationRepTitle: 'Executive Director',
        organisationRepSignature:
            'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
        issuers: [
            {
                name: 'institute of blockchain',
            },
        ],
    }
