import { v2 } from '@govtechsg/open-attestation'
import { SingaporeFoodAgencyExportHealthCertificateOaDoc } from './export-health-certificate.types'

const signature =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAtCAMAAABS+V+kAAAA21BMVEX////9/f3////9/f34+Pj7+/v8/Pz29/bz8/PDw8M9PT319fXp6elXV1f6+vrn5+dFRUXk5OScnJySkpJPT0/f39/s7Oy+vr6WlpaFhYVcXFyampqOjo5kZGRMTEy6urqsrKympqZUVFTu7u7b29vX2NfNzc28vLy4uLiioqKfn59fX1+zs7Ovr6+pqqmjo6OKiopnZ2dJSUnQ0dDKysrFxcXAwMC1tbVzc3NxcXAsLCzHx8d+fn5ra2tCQkLw8PDr6+vU1NSBgoFtbW03NzewsLB4eHh1dXUzMzOL5qoYAAAAAnRSTlOAgKCo1lMAAAN3SURBVFjD3ZbnztowFIZpju3svRMS9t57882O+7+iQsLXQKu2P4Kp1FdE4ljID+8ZjgsFhoYAflm4XSpQAQOkoBtdh9TA588tCAhNxxkG41vHuNnWr0JKYAC25M0VyGIQw3WTvmNAvGyV2QzMoLpvPMLxfCN7L+jKsei+7ljqjkGfvHe5mxqzzZKOrxZygpO9U0D6JDuT3eG41+ECvvwEnfzfy3E2rxcqJHxS/7p9rSdL2fhm9u8ExkRR0Fns6VHImS6Nv0U2EHIhZUm5ExgIVpA6mzdblW6nYoSdYYlv1AC48nFaQqytpoOcHSZ3SDUAYFYtef74y+EQBVUrmAS9qiYIcvjsDLXpgJOGmxWqLV9YyJTjyMxSV+O7ezmW1/tiaJpGp9wf9Ct+vH1fV4qW1pHwwJJ51JYnIxsBJLXA93hJENWI48l4sLAlFiNECAHASOX7Zc/ayv2as6pW2+oi+KYdN23HHvm+X3FtkeQGI35qlRschosQYtV5t8iL+ngbLEWYRZOWyEea6b5qWiRrwcQ6akHYUHKDXWGiKxgTQjA+WXUHZdP/YtSlYVwtsQD2iBehWezquG5Y29hs7VbFr1bPRXnB0IiEtWcYo1HHDL3xRt4bndVCqo2EuCSeM8AhAE7igCGnZnCf4BSp/Geb5G0uEPm1Jq+/VOVesNmPfXOnP2EQP8taRYRURMEIp3VQLj19DnOA03lEdqvVnA/bLb5Zl57F877KIp5WHDi3mfSy6IfFsDP7mKZ0FO5zA0kySiAb7GUgFFUCADPva2AJ71Pr6NVuh/cu4FsHgHayYKiJr0bFM01z1C+bLsdQAF9f3+CpFAnj5/SVITqS3V4tV+VhA1EA32yJFrJQtD+qCYiPrF4sBC6ikerr+xQfpfW9ND1udEzD87v1lEoNLBmaEKoAH2AGCOIQy7HnmKJj7rNQ7UrZhSNV8iXl0gHDc7lntRJu6pjTHfIBTrhUwACqMZ1WWPjRcNh9bbNXPEpgLPnaW9/JuIzihk2WyUQHDHXv/e3lCa7PcUfngLZjsA/CZgZXHPj5QkkDDKjhbyNd+f25cn9w0rPs/CC8LYF5KBiAYdtVzdSVh4O5UjUeOr8tJzUw1+r1BrW/YCk0F1r23ngOHg4GZ1CciQD/wLHkkD9TKYFzmc3ANPTfOc7NZT4VCue//3gVvgPWp21JK5fMYQAAAABJRU5ErkJggg=='
export const sample: SingaporeFoodAgencyExportHealthCertificateOaDoc = {
    $template: {
        name: 'singapore-food-agency/export-health-certificate',
        type: v2.TemplateType.EmbeddedRenderer,
        url: 'http://localhost:3000',
    },
    certificateNumber: 'EH2312287',
    exportingCountry: 'SINGAPORE',
    products: [
        {
            description: 'INSTANT FULL CREAM MILK POWDER',
            brand: 'AMPEC',
            codeOrBatchNoOrLotNo: 'NIL / REG9466',
            numberAndTypeOfPackages: '25(KGM) X 999(BAG)',
            netWeight: '24975(KGM',
            productionDate: '2023-10-19',
            expiryDate: '2025-10-19',
        },
    ],
    meansOfTransport: 'SEA',
    vesselNameFlightNumber: 'RITA V. 043N',
    etd: '2023-11-05',
    placeOfDispatch: 'Singapore',
    shippingMarks: '',
    remarks: '',
    originAndProvenence: {
        nameAddressOfManufacturer:
            'PHILIPINES\nNO 21 TUAS AVE 12\nSINGAPORE 639040',
        processingPremiseLicenseNo: 'PL02G1661',
        nameAddressOfConsignor:
            'CONSIGNORXXX INDUSTRIES INTERNATIONAL PTE LTD\n1 PIONEER SECTOR WALK\nSINGAPORE 627896',
    },
    destination: {
        countryRegionOfDestination: 'PHILIPINES',
        nameAddressOfConsigee:
            'CONSIGNEEXXX TRADING CORPORATION\n711 ELCANO STREET, SAN NICOLAS MANILA 1006\nPHILIPPINES',
        purpose: 'HUMAN CONSUMPTION',
    },
    attestation: {
        laboratoryResults: '<Laboratory results>',
    },
    issuedInSingaporeDate: '2023-10-31',
    signeeName: 'Mr LIM TONG PENG',
    signeeSignature_image: signature,
    issuers: [
        {
            name: 'institute of blockchain',
        },
    ],
}
