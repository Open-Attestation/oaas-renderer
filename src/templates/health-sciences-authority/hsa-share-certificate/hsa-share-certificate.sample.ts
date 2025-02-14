import { v2 } from '@govtechsg/open-attestation'

import { SAMPLE_HSA_PRODUCT_PDF } from '../common/pdf-samples'
import { HealthSciencesAuthorityHsaShareCertificateOaDoc } from './hsa-share-certificate.types'

export const sample: HealthSciencesAuthorityHsaShareCertificateOaDoc = {
    $template: {
        name: 'health-sciences-authority/hsa-share-certificate',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    organisationName: 'ABC PTE LTD',
    documentName: 'Free Sale Certificate',
    documentReference: 'MCELYY00xxx',
    signatoryName: 'Thong Yong Jie Andre',
    signatoryDesignation: 'Approving officer',
    agencyName: 'Health Sciences Authority',
    validUntil: '2030-04-20',
    pdfContent_pdf: SAMPLE_HSA_PRODUCT_PDF,
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
