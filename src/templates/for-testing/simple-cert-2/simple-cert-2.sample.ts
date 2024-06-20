import { v2 } from '@govtechsg/open-attestation'
import { ForTestingSimpleCert_2OaDoc } from './simple-cert-2.types'

export const sample: ForTestingSimpleCert_2OaDoc = {
    $template: {
        name: 'for-testing/simple-cert-2',
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
