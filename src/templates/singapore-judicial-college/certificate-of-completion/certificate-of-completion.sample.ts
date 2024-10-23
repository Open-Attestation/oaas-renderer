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
    issuanceDate: '2022-09-08',
    signeeName: 'Natalie Skead',
    signeeDesignation: 'Dean',
    signeeSignature:
        'natalie-skead-signature&195bd78f3c419e8ec21d3d364f50f703e85d43c401639a628d0119b7cbefd935.png',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
