/* eslint-disable */
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
    ciName: 'Fazdli Jamal' | 'Jaffar Ali'
    /**
     * CI's signature
     */
    ciSignature:
        | 'jaffar-ali-signature&acd83f1fde2dd3fbddb93bcd870370fd3e273e0675019b4b42ada360e8cdfec4.jpg'
        | 'fazdli-jamal-signature&bd3a19338a826f4634b51ec9540cd6c044bda125bc6add929df6ef407b458bb2.png'
    /**
     * Certificate number
     */
    serialNumber: string
}
