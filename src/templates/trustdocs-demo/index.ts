import { TemplateRegistry } from '@govtechsg/decentralized-renderer-react-components'
import { trustdocsDemoDemoPermitTemplates } from './demo-permit'
import { trustdocsDemoGenericPdfTemplates } from './generic-pdf'
import { trustdocsDemoNparksQvacTemplates } from './nparks-qvac'
import { trustdocsDemoNycSfaTemplates } from './nyc-sfa'
import { trustdocsDemoDaCoc_1sTemplates } from './da-coc-1s'
import { trustdocsDemoLicenseToVerify_2Templates } from './license-to-verify-2'
import { trustdocsDemoLicenseToVerifyTemplates } from './license-to-verify'

export const registry: TemplateRegistry<any> = {
    'trustdocs-demo/demo-permit': trustdocsDemoDemoPermitTemplates,
    'trustdocs-demo/generic-pdf': trustdocsDemoGenericPdfTemplates,
    'trustdocs-demo/nparks-qvac': trustdocsDemoNparksQvacTemplates,
    'trustdocs-demo/nyc-sfa': trustdocsDemoNycSfaTemplates,
    'trustdocs-demo/da-coc-1s': trustdocsDemoDaCoc_1sTemplates,
    'trustdocs-demo/license-to-verify-2':
        trustdocsDemoLicenseToVerify_2Templates,
    'trustdocs-demo/license-to-verify': trustdocsDemoLicenseToVerifyTemplates,
}
