import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilCciLevel_2OaDoc } from './cci-level-2.types'

export const sample: NationalYouthCouncilCciLevel_2OaDoc = {
    $template: {
        name: 'national-youth-council/cci-level-2',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    issueDate: '2022-08-10',
    courseDate: '2022-06-10',
    dutyProgrammeOfficerName: 'Jane Doe',
    dutyProgrammeOfficerSignature:
        '7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab',
    serialNumber: '1',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
