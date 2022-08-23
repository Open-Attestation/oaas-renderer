import { v2 } from '@govtechsg/open-attestation'
import { NycBclsAedOaDoc } from './bcls-aed.types'

export const sample: NycBclsAedOaDoc = {
    $template: {
        name: 'nycBclsAed',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
    ciSignature: 'ci-signature-1',
    issueDate: '2020-03-01',
    nric: 'nric-1',
    serialNumber: 'serial-number-1',
    trainerName: 'trainer-1',
}
