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
                data: 'aHR0cHM6Ly9kZXYudmVyaWZ5Lmdvdi5zZy92ZXJpZnk/cT0lN0IlMjJ0eXBlJTIyJTNBJTIyRE9DVU1FTlQlMjIlMkMlMjJwYXlsb2FkJTIyJTNBJTdCJTIydXJpJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZkb2N1bWVudC1zdG9yYWdlLm9hLmdvdi5zZyUyRm5hdGlvbmFsLXBhcmtzLWJvYXJkX3F1YXJhbnRpbmUtYW5kLXZhY2NpbmF0aW9uLWNlcnRpZmljYXRlLm9hJTIyJTJDJTIycGVybWl0dGVkQWN0aW9ucyUyMiUzQSU1QiUyMlZJRVclMjIlMkMlMjJTVE9SRSUyMiU1RCUyQyUyMnJlZGlyZWN0JTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZkZXYub3BlbmNlcnRzLmlvJTIyJTdEJTdE',
            },
        ],
    }
