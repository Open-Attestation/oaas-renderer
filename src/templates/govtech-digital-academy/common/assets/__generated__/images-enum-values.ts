const enumValues = [
    'joseph-leong-coa-signature&3f58615390f610d16d0dfdfb330cad21194eb768780cec807924ce66a321f821.png',
    'joseph-leong-signature&6bb7c9981a0e17da0609cf3722b244af0006e585d7dc5a293f2383689303672d.png',
    'sahas-sankaran-signature&d83beb8b8fe3c9a7efba8b80a693c4d58d33e4e94f1f4b556f13769742f861b9.svg',
] as const
type EnumValue = (typeof enumValues)[number]

/**
 * Gets the possible image hash values that can be used as enum values
 * @param pick subset of the images hash values that will be returned out
 * @returns image hash values to be used in schema.ts
 */
export function getEnumValues(pick?: EnumValue[]) {
    return pick ?? enumValues
}
