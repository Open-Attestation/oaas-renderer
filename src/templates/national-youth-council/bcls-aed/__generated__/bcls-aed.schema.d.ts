/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface NationalYouthCouncilBclsAed {
    name: string
    /**
     * Issuance date of the certificate
     */
    issueDate: string
    /**
     * Name of trainer
     */
    trainerName: string
    /**
     * CI's signature
     */
    ciSignature:
        | 'ci-1-signature&bf8c6cd029b7d6775aee555a09a1bf87166f8440c8b8be7eadf3551d6e9fab6e.svg'
        | 'ci-1-signature-thick&682cb920fc8ee86c4b5e60ca908bd0dcd2fe1a5a4695edb9206c5a7e8edffaa2.svg'
    /**
     * Certificate number
     */
    serialNumber: string
}
