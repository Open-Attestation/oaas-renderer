import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilStandardFirstAidOaDoc } from './standard-first-aid.types'

export const sample: NationalYouthCouncilStandardFirstAidOaDoc = {
    $template: {
        name: 'national-youth-council/standard-first-aid',
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
        '1e4008a9529d7f62affa65d71ca40f9e92fe15041b9e77d331ec5a839217fdfc',
    issueDate: '2020-03-01',
    nric: 'nric-1',
    serialNumber: 'serial-number-1',
    trainerName: 'trainer-1',
}
