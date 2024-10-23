import { v2 } from '@govtechsg/open-attestation'

import { GovtechAbcCocOaDoc } from './abc-coc.types'

export const sample: GovtechAbcCocOaDoc = {
    $template: {
        name: 'govtech/abc-coc',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'Johnathan Doe',
    programmeTitle: 'AI Champions Bootcamp',
    issueDate: '2024-11-15',
    signeeName: 'Chang Sau Sheong',
    signeeDesignation: 'DEPUTY CHIEF EXECUTIVE',
    signeeSignature:
        'chang-sau-sheong-signature&9b31b9f05b81bc64dfd2a9ecb412ed43297da93bf7c8708407954d1ac855ad96.png',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
