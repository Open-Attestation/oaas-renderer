import { v2 } from '@govtechsg/open-attestation'

import { FilesgSampleA4OaDoc } from './sample-a4.types'

export const sample: FilesgSampleA4OaDoc = {
    $template: {
        name: 'filesg/sample-a4',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'John Doe',
    courseTitle: ' CSA Milestone Programme',
    courseStartDate: '2022-05-10',
    issuers: [
        {
            name: 'FILESG',
        },
    ],
}
