import { v2 } from '@govtechsg/open-attestation'
import { NationalYouthCouncilTechnicalSkillsOaDoc } from './technical-skills.types'

export const sample: NationalYouthCouncilTechnicalSkillsOaDoc = {
    $template: {
        name: 'national-youth-council/technical-skills',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'Yeo Yoyo',
    courseTitle: 'Challenge Rope Course',
    courseDate: '2022-09-28',
    trainerName: 'Abdul Haireel Bin Abdul Haleem',
    trainerTitle: 'Trainer',
    trainerSignature:
        'trainer-signature&a2693ac50a6b39568d13114834a66c9568dc4b51ede88592ef4516b46960c204.png',
    dutyProgrammeOfficerName: 'Nicholas Conceicao',
    dutyProgrammeOfficerTitle: 'Executive Director',
    dutyProgrammeOfficerSignature:
        'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
    courseDescription: 'challenge-rope-course',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
