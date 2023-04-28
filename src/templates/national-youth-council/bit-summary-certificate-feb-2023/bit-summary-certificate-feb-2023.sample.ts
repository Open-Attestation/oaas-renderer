import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilBitSummaryCertificateFeb_2023OaDoc } from './bit-summary-certificate-feb-2023.types'

export const sample: NationalYouthCouncilBitSummaryCertificateFeb_2023OaDoc = {
    $template: {
        name: 'national-youth-council/bit-summary-certificate-feb-2023',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    issueDate: '2022-05-10',
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
