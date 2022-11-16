import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilBitSummaryCertificateOaDoc } from './bit-summary-certificate.types'

export const sample: NationalYouthCouncilBitSummaryCertificateOaDoc = {
    $template: {
        name: 'national-youth-council/bit-summary-certificate',
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
