import { v2 } from '@govtechsg/open-attestation'

import { GovtechLaunchCertificate } from './__generated__/launch-certificate.schema'

export type GovtechLaunchCertificateOaDoc = GovtechLaunchCertificate &
    v2.OpenAttestationDocument
