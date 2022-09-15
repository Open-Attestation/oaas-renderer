import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilGeneralCertificateOaDoc } from './general-certificate.types'

export const sample: NationalYouthCouncilGeneralCertificateOaDoc = {
    $template: {
        name: 'national-youth-council/general-certificate',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    courseTitle: ' CSA Milestone Programme',
    courseStartDate: '2021-12-31',
    courseEndDate: '2022-12-31',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
    organisationRepName: 'Nicholas Conceicao',
    organisationRepTitle: 'Executive Director',
    organisationRepSignature:
        'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
}
