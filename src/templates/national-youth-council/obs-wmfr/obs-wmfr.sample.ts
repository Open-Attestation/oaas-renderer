import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilObsWmfrOaDoc } from './obs-wmfr.types'

export const sample: NationalYouthCouncilObsWmfrOaDoc = {
    $template: {
        name: 'national-youth-council/obs-wmfr',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    serialNumber: 'OBSWMFR20XX/XXX',
    issueDate: '2022-12-31',
    issuingOfficerName: 'Nicholas Conceicao',
    issuingOfficerPosition: 'Executive Director',
    issuingOfficerSignature:
        'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
    issuers: [
        {
            name: 'NATIONAL YOUTH COUNCIL',
        },
    ],
}
