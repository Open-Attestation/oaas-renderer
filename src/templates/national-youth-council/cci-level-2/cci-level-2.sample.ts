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
        'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
    serialNumber: '1',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
