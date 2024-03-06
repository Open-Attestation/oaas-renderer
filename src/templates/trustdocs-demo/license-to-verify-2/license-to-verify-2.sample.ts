import { v2 } from '@govtechsg/open-attestation'
import { TrustdocsDemoLicenseToVerify_2OaDoc } from './license-to-verify-2.types'

export const sample: TrustdocsDemoLicenseToVerify_2OaDoc = {
    $template: {
        name: 'trustdocs-demo/license-to-verify-2',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    name: 'Tan Chen Chen',
    issuedOn: '2023-11-23',
    validTill: '2023-11-24',
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
    attachments: [
        {
            filename: 'qrpayload.txt',
            type: 'text/plain',
            data: 'aHR0cHM6Ly9hY3Rpb24ub3BlbmF0dGVzdGF0aW9uLmNvbS8/cT0lN0IlMjJ0eXBlJTIyOiUyMkRPQ1VNRU5UJTIyLCUyMnBheWxvYWQlMjI6JTdCJTIydXJpJTIyOiUyMmh0dHBzOi8vdHJhbnNpZW50LXN0b3JhZ2UtZGV2Lm9hLmdvdi5zZy9uYXRpb25hbC1wYXJrcy1ib2FyZC9xdWFyYW50aW5lLWFuZC12YWNjaW5hdGlvbi1jZXJ0aWZpY2F0ZS81Y2VkNjZiYi0wZjYyLTQ1YTMtOTgyYy0xNGY1MzE1NmFjOTQlMjIsJTIycGVybWl0dGVkQWN0aW9ucyUyMjolNUIlMjJWSUVXJTIyJTVELCUyMnJlZGlyZWN0JTIyOiUyMmh0dHBzOi8vZGV2LnZlcmlmeS5nb3Yuc2cvdmVyaWZ5JTIyJTdEJTdEIyU3QiUyMmtleSUyMjolMjJhYzdlNjRhOTMzZmM0MTRhNTViNjRjMzFkNzRkOGRjYWQzNDIzZmU0M2FkM2E3ODg2MWU3NzgzYTU3M2YxYzUzJTIyJTdE',
        },
    ],
}
