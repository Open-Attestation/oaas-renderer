import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilBclsAedOaDoc } from './bcls-aed.types'

export const sample: NationalYouthCouncilBclsAedOaDoc = {
    $template: {
        name: 'national-youth-council/bcls-aed',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
    ciSignature:
        'ci-1-signature-thick&682cb920fc8ee86c4b5e60ca908bd0dcd2fe1a5a4695edb9206c5a7e8edffaa2.svg',
    issueDate: '2020-12-31',
    serialNumber: 'serial-number-1',
    trainerName: 'trainer-1',
}
