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
        'fazdli-jamal-signature&09fc5bfca94f8c519f9433c611b4fb9ff8cfed316343125469a8addee67c6b06.png',
    issueDate: '2020-12-31',
    certificateNumber: 'OBSSFA-2024-001',
    ciName: 'Fazdli Jamal',
}
