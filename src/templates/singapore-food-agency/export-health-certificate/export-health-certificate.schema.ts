import { JSONSchema } from 'json-schema-to-typescript'
import { makeDateType, makeRequiredString } from 'utils/json-schema-utils'

export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'SingaporeFoodAgency/ExportHealthCertificate',
    type: 'object',
    required: [
        'certificateNumber',
        'exportingCountry',
        'products',
        'meansOfTransport',
        'vesselNameFlightNumber',
        'containerNo',
        'sealNo',
        'etd',
        'placeOfDispatch',
        'shippingMarks',
        'remarks',
        'originAndProvenence',
        'destination',
        'attestation',
        'issuedInSingaporeDate',
        'signeeName',
        'signeeSignature_image',
    ],
    properties: {
        certificateNumber: {
            type: 'string',
            description: 'Certificate Number',
            examples: [`EH2312287`],
            minLength: 1,
        },
        exportingCountry: {
            type: 'string',
            description: 'Exporting Country',
            examples: [`SINGAPORE`],
            enum: ['SINGAPORE'],
        },
        products: {
            type: 'array',
            maxItems: 5,
            minItems: 1,
            items: {
                type: 'object',
                additionalProperties: false,
                required: [
                    'description',
                    'brand',
                    'codeOrBatchNoOrLotNo',
                    'numberAndTypeOfPackages',
                    'netWeight',
                    'productionDate',
                    'expiryDate',
                ],
                properties: {
                    description: makeRequiredString(
                        'Product description',
                        'INSTANT FULL CREAM MILK POWDER'
                    ),
                    brand: makeRequiredString('Product brand', 'AMPEC'),
                    codeOrBatchNoOrLotNo: makeRequiredString(
                        'Product Code/Batch No./ Lot No.',
                        'NIL / REG9466'
                    ),
                    numberAndTypeOfPackages: makeRequiredString(
                        'Number & Type of Packages',
                        '25(KGM) X 999(BAG)'
                    ),
                    netWeight: makeRequiredString(
                        'Net weight(Gross Weight)',
                        '24975(KGM)'
                    ),
                    productionDate: makeDateType(
                        'Production date in YYYY-MM-DD',
                        '2023-10-19'
                    ),
                    expiryDate: makeDateType(
                        'Expiry date in YYYY-MM-DD',
                        '2025-10-19'
                    ),
                },
            },
        },
        meansOfTransport: makeRequiredString('Means of Transport', 'SEA'),
        vesselNameFlightNumber: makeRequiredString(
            'Vessel Name/Flight Number',
            'RITA V. 043N'
        ),
        containerNo: {
            type: 'string',
            description: 'Container No.',
        },
        sealNo: {
            type: 'string',
            description: 'Seal No.',
        },
        etd: makeDateType(
            'Estimated time of departure in YYYY-MM-DD',
            '2023-11-05'
        ),
        placeOfDispatch: makeRequiredString('Place of Dispatch', 'Singapore'),
        shippingMarks: {
            type: 'string',
            description: 'Shipping Marks',
        },
        remarks: {
            type: 'string',
            description: 'Shipping Marks',
        },
        originAndProvenence: {
            type: 'object',
            required: [
                'nameAddressOfManufacturer',
                'processingPremiseLicenseNo',
                'nameAddressOfConsignor',
                'dateOfInspection',
            ],
            properties: {
                nameAddressOfManufacturer: makeRequiredString(
                    'Name and Address of Manufacturer',
                    'PHILIPINES\nNO 21 TUAS AVE 12\nSINGAPORE 639040'
                ),
                processingPremiseLicenseNo: makeRequiredString(
                    'Processing Premise License No.',
                    'PL02G1661'
                ),
                nameAddressOfConsignor: makeRequiredString(
                    'Name and Address of Consignor',
                    'CONSIGNORXXX INDUSTRIES INTERNATIONAL PTE LTD\n1 PIONEER SECTOR WALK\nSINGAPORE 627896'
                ),
                dateOfInspection: makeDateType(
                    'Date of inspection in YYYY-MM-DD',
                    '2023-11-01'
                ),
            },
            additionalProperties: false,
        },
        destination: {
            type: 'object',
            required: [
                'countryRegionOfDestination',
                'nameAddressOfConsigee',
                'importPermitNo',
                'purpose',
            ],
            properties: {
                countryRegionOfDestination: makeRequiredString(
                    'Country/Region of Destination',
                    'PHILIPINES'
                ),
                nameAddressOfConsigee: makeRequiredString(
                    'Name and Address of Consignee',
                    'CONSIGNEEXXX TRADING CORPORATION\n711 ELCANO STREET, SAN NICOLAS MANILA 1006\nPHILIPPINES'
                ),
                importPermitNo: {
                    type: 'string',
                    description: 'Import Permit No.',
                },
                purpose: makeRequiredString('Purpose', 'HUMAN CONSUMPTION'),
            },
            additionalProperties: false,
        },
        attestation: {
            type: 'object',
            required: ['laboratoryResults'],
            properties: {
                laboratoryResults: makeRequiredString(
                    'Laboratory results',
                    '<Laboratory results>'
                ),
            },
            additionalProperties: false,
        },
        issuedInSingaporeDate: makeDateType(
            'Issued in Singapore date in YYYY-MM-DD',
            '2023-10-31'
        ),
        signeeName: makeRequiredString('Name of signee', 'Mr LIM TONG PENG'),
        signeeSignature_image: {
            type: 'string',
            description: 'Signature of signee',
            examples: ['signature.png'],
            minLength: 1,
        },
    },
    additionalProperties: false,
} as JSONSchema
