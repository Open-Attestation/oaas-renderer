import { v2 } from '@govtechsg/open-attestation'
import { CsaMilestoneOaDoc } from './milestone.types'

export const sample: CsaMilestoneOaDoc = {
    $template: {
        name: 'csaMilestone',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    courseTitle: ' CSA Milestone Programme',
    courseStartDate: '2022-05-10',
    courseEndDate: '2022-06-10',
    presentedBy: ['Cyber Security Agency of Singapore (CSA)'],
    signatureOne: {
        name: 'Betsie Chacko',
        title: 'Associate Director',
        organization: 'CISA International',
        signatureHash:
            '7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab',
    },
    signatureTwo: {
        name: 'Betsie Chacko',
        title: 'Associate Director',
        organization: 'CISA International',
        signatureHash:
            '7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab',
    },
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
