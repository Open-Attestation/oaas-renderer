import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilCciLevel_2OaDoc } from './cci-level-2.types'

export const sample: NationalYouthCouncilCciLevel_2OaDoc = {
    $template: {
        name: 'national-youth-council/cci-level-2',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    issueDate: '2022-12-31',
    courseDate: '2022-11-30',
    dutyProgrammeOfficerName: 'Jane Doe',
    dutyProgrammeOfficerSignature:
        'ci-signature&1e4008a9529d7f62affa65d71ca40f9e92fe15041b9e77d331ec5a839217fdfc.png',
    serialNumber: '1',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
