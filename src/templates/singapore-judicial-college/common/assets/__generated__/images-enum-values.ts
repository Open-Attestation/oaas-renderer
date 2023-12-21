const enumValues = [
    'sample-signature&cacfb1e1c1af263245b1925f10eab6cb6bf675111478bb91e54ecd250482ce7c.png',
] as const
type EnumValue = typeof enumValues[number]

/**
 * Gets the possible image hash values that can be used as enum values
 * @param pick subset of the images hash values that will be returned out
 * @returns image hash values to be used in schema.ts
 */
export function getEnumValues(pick?: EnumValue[]) {
    return pick ?? enumValues
}
