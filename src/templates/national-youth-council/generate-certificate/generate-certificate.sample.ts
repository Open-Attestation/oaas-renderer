import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilGenerateCertificateOaDoc } from './generate-certificate.types'

export const sample: NationalYouthCouncilGenerateCertificateOaDoc = {
    $template: {
        name: 'national-youth-council/generate-certificate',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    courseTitle: ' CSA Milestone Programme',
    courseStartDate: '2022-05-10',
    courseEndDate: '2022-06-10',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
