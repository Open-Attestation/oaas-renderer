const enumValues = [
    'chang-sau-sheong-signature&9b31b9f05b81bc64dfd2a9ecb412ed43297da93bf7c8708407954d1ac855ad96.png',
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
