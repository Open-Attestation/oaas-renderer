import { v2 } from '@govtechsg/open-attestation'

import { GovtechCrisprCopOaDoc } from './crispr-cop.types'

export const sample: GovtechCrisprCopOaDoc = {
    $template: {
        name: 'govtech/crispr-cop',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    programmeTitle: 'CRISPr Workshop',
    issueDate: '2025-03-26',
    signeeName: 'Yap Ghim Eng',
    signeeDesignation: 'Director of Data Engineering Practice',
    signeeSignature:
        'yap-ghim-eng-signature&d5385b8a7e5a66e9be2b8e942ead4c23d9392c196d77b93a1be24d5c94324986.png',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
