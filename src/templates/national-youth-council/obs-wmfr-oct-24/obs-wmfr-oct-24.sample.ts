import { v2 } from '@govtechsg/open-attestation'

import { NationalYouthCouncilObsWmfrOct_24OaDoc } from './obs-wmfr-oct-24.types'

export const sample: NationalYouthCouncilObsWmfrOct_24OaDoc = {
    $template: {
        name: 'national-youth-council/obs-wmfr-oct-24',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    certificateNumber: 'OBSWMFR-2024-001',
    issueDate: '2022-12-31',
    courseDate: '01-05 September 2024',
    courseCode: 'MST-WMFR-2024-001',
    ExecDirName: 'Dr Ng Yih Yng',
    ExecDirSignature:
        'dr-yih-yng-signature&87961f1e6b1874d14eb157e78a680108cef21cfba862592973d5445b9d4d7495.png',
    issuers: [
        {
            name: 'NATIONAL YOUTH COUNCIL',
        },
    ],
}
