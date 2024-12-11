import { v2 } from '@govtechsg/open-attestation'

import { NationalYouthCouncilStandardFirstAidOct_24OaDoc } from './standard-first-aid-oct-24.types'

export const sample: NationalYouthCouncilStandardFirstAidOct_24OaDoc = {
    $template: {
        name: 'national-youth-council/standard-first-aid-oct-24',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    partialNricOrPassport: '123A',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
    ciSignature:
        'darvin-bin-rozali-signature&88b24e2878675c1939b90322909ee5d40e1a36648fce0c29cb8ded459eb2d3b6.png',
    issueDate: '2024-12-31',
    courseDate: '01-02 September 2024',
    courseBatchNumber: 'MST-SFA-2024-01',
    certificateNumber: 'OBSSFA-2024-001 / OBSSFA-YYYY-Cert#',
    ciName: 'Darvin Bin Rozali',
}
