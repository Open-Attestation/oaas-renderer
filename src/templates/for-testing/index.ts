import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { forTestingSimpleCertTemplates } from './simple-cert'

export const registry: TemplateRegistry<any> = {
    'for-testing/simple-cert': forTestingSimpleCertTemplates,
}
