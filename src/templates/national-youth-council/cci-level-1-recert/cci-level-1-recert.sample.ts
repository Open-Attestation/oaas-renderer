import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilCciLevel_1RecertOaDoc } from './cci-level-1-recert.types'

export const sample: NationalYouthCouncilCciLevel_1RecertOaDoc = {
    $template: {
        name: 'national-youth-council/cci-level-1-recert',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    courseEndDate: '2022-12-31',
    courseStartDate: '2022-11-30',
    serialNumber: '1',
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