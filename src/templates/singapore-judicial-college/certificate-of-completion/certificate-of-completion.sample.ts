import { v2 } from '@govtechsg/open-attestation'
import { SingaporeJudicialCollegeCertificateOfCompletionOaDoc } from './certificate-of-completion.types'

export const sample: SingaporeJudicialCollegeCertificateOfCompletionOaDoc = {
    $template: {
        name: 'singapore-judicial-college/certificate-of-completion',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'Goh Yihan',
    courseTitle: 'COURTROOM COMMUNICATION',
    courseStartDate: '2022-09-01',
    courseEndDate: '2022-09-07',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
