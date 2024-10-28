import { v2 } from '@govtechsg/open-attestation'

import { GovtechDatCoaOaDoc } from './dat-coa.types'

export const sample: GovtechDatCoaOaDoc = {
    $template: {
        name: 'govtech/dat-coa',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'Johnathan Doe',
    awardPlacement: 'Champion',
    awardType: 'VIZtory Award',
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
