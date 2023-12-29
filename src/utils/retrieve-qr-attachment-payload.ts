import { v2 } from '@govtechsg/open-attestation'
import { Buffer } from 'buffer'

export function retrieveQrAttachmentPayload(
    document: v2.OpenAttestationDocument
): string {
    if (document.attachments) {
        for (const attachment of document.attachments) {
            if (attachment.filename === 'qrpayload.txt') {
                return Buffer.from(attachment.data, 'base64').toString()
            }
        }
    }
    return ''
}
