import { v2 } from '@govtechsg/open-attestation'
import { NationalParksBoardQuarantineAndVaccinationCertificateOaDoc } from './quarantine-and-vaccination-certificate.types'

export const sample: NationalParksBoardQuarantineAndVaccinationCertificateOaDoc =
    {
        $template: {
            name: 'national-parks-board/quarantine-and-vaccination-certificate',
            type: v2.TemplateType.EmbeddedRenderer,
            url: 'http://localhost:3000',
        },
        animalName: 'KOBE',
        monthYearOfBirth: '12-2023',
        species: 'Dog',
        breed: 'Shiba Inu',
        colour: 'White',
        exportCountry: 'China',
        microchipNumber: '900 111 881 990 863',
        name: 'CHAN ZI ANG',
        quarantine: {
            endDate: '2023-12-31',
            startDate: '2023-12-20',
            numOfDays: 11,
        },
        sex: 'male',
        rabiesVaccination: {
            manufacturer: 'MERIAL RABISIN R',
            batch: {
                expiry: '2023-12-02',
                number: 'L489157',
            },
            date: '2022-09-13',
            validityDuration: '1 Year',
            veterinarian: 'Clarissa Frany Francisco, DVM',
        },
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
