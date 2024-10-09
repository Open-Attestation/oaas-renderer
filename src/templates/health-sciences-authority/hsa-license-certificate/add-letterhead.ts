import { PDFDocument } from 'pdf-lib'

export async function addLetterhead(
    pdfBase64: string,
    letterHeadPngBase64: string
) {
    const originalPdf = await PDFDocument.load(pdfBase64)
    const newPdf = await PDFDocument.create()

    const originalPages = originalPdf.getPages()
    // embedding the entire document at the start as opposed
    // to embedding page by page in the loop reduces
    // the resultant size by ALOT
    const embeddedOriginalPages = await newPdf.embedPdf(
        originalPdf,
        originalPages.map((_, i) => i) // page indices we want embedded
    )

    const letterheadImage = await newPdf.embedPng(letterHeadPngBase64)

    for (let i = 0; i < embeddedOriginalPages.length; i++) {
        const originalPage = embeddedOriginalPages[i]
        const newPage = newPdf.addPage([
            originalPage.width,
            originalPage.height,
        ])

        // draw letterhead as base background

        newPage.drawImage(letterheadImage, {
            x: 0,
            y: 0,
            width: originalPage.width,
            height: originalPage.height,
        })

        // draw original content on letterhead
        newPage.drawPage(originalPage)
    }

    return newPdf.save()
}
