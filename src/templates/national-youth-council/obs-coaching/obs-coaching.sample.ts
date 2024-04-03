import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilObsCoachingOaDoc } from './obs-coaching.types'

export const sample: NationalYouthCouncilObsCoachingOaDoc = {
    $template: {
        name: 'national-youth-council/obs-coaching',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'Abdul Haireel Bin Abdul Haleem',
    courseTitle: 'Dinghy Sailing Coach',
    issueDate: '2022-01-01',
    validityDurationInYears: '2',
    certificateNumber: 'DSL1-2022-001',
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
