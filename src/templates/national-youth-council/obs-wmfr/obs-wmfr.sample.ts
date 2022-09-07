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
    issueDate: '2022-05-10',
    issuingOfficerName: 'Nicholas Conceicao',
    issuingOfficerPosition: 'Executive Director',
    issuers: [
        {
            name: 'NATIONAL YOUTH COUNCIL',
        },
    ],
}
