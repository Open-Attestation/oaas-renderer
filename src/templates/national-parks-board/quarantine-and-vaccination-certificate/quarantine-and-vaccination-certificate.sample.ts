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
        birthDate: '2021-10-14',
        species: 'Dog',
        breed: 'Shiba Inu',
        colour: 'White',
        exportCountry: 'China',
        microchipNumber: '900 111 881 990 863',
        ownerName: 'CHAN ZI ANG',
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
                data: 'aHR0cHM6Ly9hY3Rpb24ub3BlbmF0dGVzdGF0aW9uLmNvbS8/cT0lN0IlMjJ0eXBlJTIyOiUyMkRPQ1VNRU5UJTIyLCUyMnBheWxvYWQlMjI6JTdCJTIydXJpJTIyOiUyMmh0dHBzOi8vdHJhbnNpZW50LXN0b3JhZ2Uub2EuZ292LnNnL25hdGlvbmFsLXBhcmtzLWJvYXJkL3F1YXJhbnRpbmUtYW5kLXZhY2NpbmF0aW9uLWNlcnRpZmljYXRlLzY5NzcwN2YzLWM3NjYtNDYwZS1hYWNjLWI3NDdhYzBmNGU3NiUyMiwlMjJwZXJtaXR0ZWRBY3Rpb25zJTIyOiU1QiUyMlZJRVclMjIlNUQsJTIycmVkaXJlY3QlMjI6JTIyaHR0cHM6Ly9kZXYudmVyaWZ5Lmdvdi5zZy92ZXJpZnklMjIlN0QlN0QjJTdCJTIya2V5JTIyOiUyMjBjZTM5MzUxN2JjMzFmZTk1MjBhNjIzZDY1NDk1NGM5NjViNTkyNzc1ZmNhYmU5MmE1NTRlYzk4NzNiMmM2ZDYlMjIlN0Q=',
            },
        ],
    }
