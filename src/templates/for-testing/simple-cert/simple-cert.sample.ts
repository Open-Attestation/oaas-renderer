import { v2 } from '@govtechsg/open-attestation'
import { ForTestingSimpleCertOaDoc } from './simple-cert.types'

export const sample: ForTestingSimpleCertOaDoc = {
    $template: {
        name: 'for-testing/simple-cert',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    courseTitle: 'OAAS VAPT course completion',
    courseStartDate: '2022-05-10',
    courseEndDate: '2022-06-10',
    serialNumber: '1',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
