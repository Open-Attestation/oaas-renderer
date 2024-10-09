import { v2 } from '@govtechsg/open-attestation'

import { SingaporeJudicialCollegeLetterOfAppreciationOaDoc } from './letter-of-appreciation.types'

export const sample: SingaporeJudicialCollegeLetterOfAppreciationOaDoc = {
    $template: {
        name: 'singapore-judicial-college/letter-of-appreciation',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'Goh Yihan',
    issueDate: '2022-12-31',
    memberGroup: 'judiciary',
    programmeTitle: 'Courtroom Communication',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
