import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'

import { mindefMindefPdfTemplates } from './mindef-pdf'

export const registry: TemplateRegistry<any> = {
    'mindef/mindef-pdf': mindefMindefPdfTemplates,
}
