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
        'jaffar-ali-signature&acd83f1fde2dd3fbddb93bcd870370fd3e273e0675019b4b42ada360e8cdfec4.jpg',
    issueDate: '2020-12-31',
    serialNumber: 'serial-number-1',
    ciName: `Jaffar Ali`,
}
