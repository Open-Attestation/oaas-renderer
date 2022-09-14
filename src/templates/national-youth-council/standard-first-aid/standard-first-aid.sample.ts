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
        'ci-1-signature&bf8c6cd029b7d6775aee555a09a1bf87166f8440c8b8be7eadf3551d6e9fab6e.svg',
    issueDate: '2020-12-31',
    nric: 'nric-1',
    serialNumber: 'serial-number-1',
    trainerName: 'trainer-1',
}
