const enumValues = [
    'ci-1-signature-thick&682cb920fc8ee86c4b5e60ca908bd0dcd2fe1a5a4695edb9206c5a7e8edffaa2.svg',
    'ci-1-signature&bf8c6cd029b7d6775aee555a09a1bf87166f8440c8b8be7eadf3551d6e9fab6e.svg',
    'farah-binte-ja-afar-signature&bcb9a2d20c8b72e7b5372df3e518a0528c15b4cdddc92025b06fd5fc986e1e20.png',
    'fazdli-jamal-signature&bd3a19338a826f4634b51ec9540cd6c044bda125bc6add929df6ef407b458bb2.png',
    'jaffar-ali-signature&acd83f1fde2dd3fbddb93bcd870370fd3e273e0675019b4b42ada360e8cdfec4.jpg',
    'nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png',
    'sample-signature&a2693ac50a6b39568d13114834a66c9568dc4b51ede88592ef4516b46960c204.png',
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
