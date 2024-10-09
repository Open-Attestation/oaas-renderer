import { v2 } from '@govtechsg/open-attestation'

import { TrustdocsDemoNparksQvacOaDoc } from './nparks-qvac.types'

export const sample: TrustdocsDemoNparksQvacOaDoc = {
    $template: {
        name: 'trustdocs-demo/nparks-qvac',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    animalName: 'SAMPLE_NAME1',
    monthYearOfBirth: '12-2023',
    species: 'CANINE',
    breed: 'Toy Poodle',
    colour: 'White',
    exportCountry: 'Malaysia',
    microchipNumber: '000 000 000 000 000',
    name: 'SAMPLE_NAME2',
    quarantine: {
        endDate: '2023-12-31',
        startDate: '2023-12-20',
        numOfDays: 11,
    },
    sex: 'MALE',
    rabiesVaccination: {
        manufacturer: 'SAMPLE_NAME3',
        batch: {
            expiry: '2023-12-02',
            number: 'X000000',
        },
        date: '2022-09-13',
        validityDuration: '1 Year',
        veterinarian: 'SAMPLE_NAME4',
    },
    attachments: [
        {
            filename: 'qrpayload.txt',
            type: 'text/plain',
            data: 'U0FNUExF',
        },
    ],
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
