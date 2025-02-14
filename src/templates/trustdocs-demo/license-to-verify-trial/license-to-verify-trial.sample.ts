import { v2 } from '@govtechsg/open-attestation'

import { TrustdocsDemoLicenseToVerifyTrialOaDoc } from './license-to-verify-trial.types'
import { sampleProfileImage } from './sample-profile-image'

export const sample: TrustdocsDemoLicenseToVerifyTrialOaDoc = {
    $template: {
        name: 'trustdocs-demo/license-to-verify-trial',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: '{Your Name}',
    profile_image: sampleProfileImage,
    issuedOnDate: '2024-11-20',
    validTillDate: '2024-12-21',
    assessorName: 'TrustDocs Demo',
    countryOfAssessment: 'Singapore',
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
}
