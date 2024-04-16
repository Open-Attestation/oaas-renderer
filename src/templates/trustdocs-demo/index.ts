import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { trustdocsDemoLicenseToVerify_2Templates } from './license-to-verify-2'
import { trustdocsDemoLicenseToVerifyTemplates } from './license-to-verify'

export const registry: TemplateRegistry<any> = {
    'trustdocs-demo/license-to-verify-2':
        trustdocsDemoLicenseToVerify_2Templates,
    'trustdocs-demo/license-to-verify': trustdocsDemoLicenseToVerifyTemplates,
}
