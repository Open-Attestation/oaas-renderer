import { v2 } from '@govtechsg/open-attestation'
import { HealthSciencesAuthorityFreeSaleOaDoc } from './free-sale.types'

const SAMPLE_IMAGE = `data:image/png;base64,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`

export const sample: HealthSciencesAuthorityFreeSaleOaDoc = {
    $template: {
        name: 'health-sciences-authority/free-sale',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    certNumber: 'MCEL2300000M',
    typeOfMedicinalProduct: 'Traditional Medicine',
    manufacturerName: 'Example Company A Pte Ltd',
    manufacturerAddress: '123 Canberra, 01-01 Office A, Singapore 123456',
    distributorName: 'Example Company B Pte Ltd',
    distributorAddress: '123 Canberra, 02-02 Office B, Singapore 123457',
    dateOfIssue: '2023-01-01',
    signature_image: SAMPLE_IMAGE,
    designationOfSignee: 'Regulatory Consultant',
    productName: 'Aloe balm body care',
    brandName: 'Aloe Balm Body Care',
    intendedUse: 'External use on skin',
    countries: ['SPAIN', 'INDIA'],
    ingredients: [
        {
            name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in.',
            strength: '500mg',
        },
        { name: 'Ingredient2', strength: '500mg' },
        { name: 'Ingredient3', strength: '500mg' },
        { name: 'Ingredient4', strength: '500mg' },
        { name: 'Ingredient5', strength: '500mg' },
        { name: 'Ingredient6', strength: '500mg' },
        { name: 'Ingredient7', strength: '500mg' },
        { name: 'Ingredient8', strength: '500mg' },
        { name: 'Ingredient9', strength: '500mg' },
        { name: 'Ingredient10', strength: '500mg' },
        { name: 'Ingredient11', strength: '500mg' },
        { name: 'Ingredient12', strength: '500mg' },
        { name: 'Ingredient13', strength: '500mg' },
        { name: 'Ingredient14', strength: '500mg' },
        { name: 'Ingredient15', strength: '500mg' },
        { name: 'Ingredient16', strength: '500mg' },
        { name: 'Ingredient17', strength: '500mg' },
        { name: 'Ingredient18', strength: '500mg' },
        { name: 'Ingredient19', strength: '500mg' },
        { name: 'Ingredient20', strength: '500mg' },
    ],
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
