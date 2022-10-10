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
        'farah-binte-ja-afar-signature&bcb9a2d20c8b72e7b5372df3e518a0528c15b4cdddc92025b06fd5fc986e1e20.png',
    issueDate: '2020-12-31',
    serialNumber: 'serial-number-1',
    ciName: `Farah Binte Ja'afar`,
}
