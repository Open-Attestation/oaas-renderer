const enumValues = [
    'demo_signature&73dc9d9d6712302c945fbb91d91cc65ef20f6b0d60a0665defbf7d418a506d33.png',
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
