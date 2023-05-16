/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface GovtechDigitalAcademyCertificateOfCompletion_2Signees {
    /**
     * Name of participant
     */
    name: string
    /**
     * Title of the programme
     */
    programmeTitle: string
    /**
     * Date of issue
     */
    issueDate: string
    signeeOne: {
        /**
         * Name of signee one
         */
        name: string
        /**
         * Designation of signee one
         */
        designation: string
        /**
         * Division of signee one
         */
        division: string
        /**
         * Organisation of signee one
         */
        organisation: string
        /**
         * Signature of signee one
         */
        signature_image: string
    }
    signeeTwo: {
        /**
         * Name of signee two
         */
        name: 'Sahas Sankaran'
        /**
         * Designation of signee two
         */
        designation: 'Director'
        /**
         * Division of signee two
         */
        division: 'GovTech Digital Academy'
        /**
         * Organisation of signee two
         */
        organisation: 'Government Technology Agency'
        /**
         * SHA256 hash of the signee two's signature
         */
        signature: 'sahas-sankaran-signature&d83beb8b8fe3c9a7efba8b80a693c4d58d33e4e94f1f4b556f13769742f861b9.svg'
    }
}
