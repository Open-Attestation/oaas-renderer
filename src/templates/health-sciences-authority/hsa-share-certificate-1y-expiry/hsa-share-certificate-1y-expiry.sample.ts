import { v2 } from '@govtechsg/open-attestation'

import { VARIED_SIZED_PAGES_PDF } from '../common/pdf-samples'
import { HealthSciencesAuthorityHsaShareCertificate_1yExpiryOaDoc } from './hsa-share-certificate-1y-expiry.types'

export const sample: HealthSciencesAuthorityHsaShareCertificate_1yExpiryOaDoc =
    {
        $template: {
            name: 'health-sciences-authority/hsa-share-certificate-1y-expiry',
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
        pdfContent_pdf: VARIED_SIZED_PAGES_PDF,
        issuers: [
            {
                name: 'institute of blockchain',
            },
        ],
    }
