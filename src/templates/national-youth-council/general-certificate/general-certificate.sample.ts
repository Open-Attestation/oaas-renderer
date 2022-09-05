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
    courseStartDate: '2022-05-10',
    courseEndDate: '2022-06-10',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
