/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface NationalYouthCouncilCciLevel_1 {
    name: string
    /**
     * Issuance date of the certificate
     */
    courseEndDate: string
    /**
     * Course start date
     */
    courseStartDate: string
    /**
     * Name of the duty programme officer
     */
    dutyProgrammeOfficerName: string
    /**
     * Title of the duty programme officer
     */
    dutyProgrammeOfficerTitle: string
    /**
     * SHA256 hash of the duty programme officer's signature
     */
    dutyProgrammeOfficerSignature: 'sample-signature&a2693ac50a6b39568d13114834a66c9568dc4b51ede88592ef4516b46960c204.png'
    /**
     * Certificate number
     */
    serialNumber: string
    /**
     * Name of the organisation representation
     */
    organisationRepName: string
    /**
     * Title of the organisation representation
     */
    organisationRepTitle: string
    /**
     * SHA256 hash of the organisation representation's signature
     */
    organisationRepSignature: 'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png'
}
