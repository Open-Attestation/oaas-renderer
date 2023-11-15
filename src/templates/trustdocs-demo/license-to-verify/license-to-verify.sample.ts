import { v2 } from '@govtechsg/open-attestation'
import { TrustdocsDemoLicenseToVerifyOaDoc } from './license-to-verify.types'
import { sampleProfileImage } from './sample-profile-image'

export const sample: TrustdocsDemoLicenseToVerifyOaDoc = {
    $template: {
        name: 'trustdocs-demo/license-to-verify',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: '{Your Name}',
    profile_image: sampleProfileImage,
    issuedOn: '2023-11-23',
    validTill: '2023-11-24',
    accessedBy: 'John Demo',
    countryOfAccessment: 'Singapore',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
    qrCodeValue:
        'https://www.trustdocs.gov.sg/verify?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fstorage.demo.trustdocs.gov.sg%2Fdemo.trustdoc%22%7D%7D',
}
