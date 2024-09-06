import { v2 } from '@govtechsg/open-attestation'
import { TrustdocsDemoDemoPermitOaDoc } from './demo-permit.types'
import { sfaLogo } from './sfa-logo'

export const sample: TrustdocsDemoDemoPermitOaDoc = {
    $template: {
        name: 'trustdocs-demo/demo-permit',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'Tan Chen Chen, Orange',
    addressLineOne: 'ECLIPSE,',
    addressLineTwo: '1 Fusionopolis View, Singapore, 138577',
    effectiveDate: '2024-08-20',
    expiryDate: '2030-04-20',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
    attachments: [
        {
            filename: 'qrpayload.txt',
            type: 'text/plain',
            data: 'VGhpcyBRUiBjb2RlIGlzIGEgc2FtcGxlLg==',
        },
    ],
    // comment out to fallback to default sample logo
    logo_image: sfaLogo,
}
