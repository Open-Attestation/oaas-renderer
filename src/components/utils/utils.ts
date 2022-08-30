export const BASE_PIXEL_UNIT = 8

const marginsAndPaddings = [
    '$m',
    '$mx',
    '$my',
    '$mt',
    '$mb',
    '$ml',
    '$mr',
    '$p',
    '$px',
    '$py',
    '$pt',
    '$pb',
    '$pl',
    '$pr',
] as const

export type MarginAndPaddingProps = {
    [key in typeof marginsAndPaddings[number]]?: number
}

const DIRECTIONS_MAP = {
    x: ['left', 'right'],
    y: ['top', 'bottom'],
    t: ['top'],
    b: ['bottom'],
    l: ['left'],
    r: ['right'],
}

export function applyMarginAndPaddings(props: MarginAndPaddingProps) {
    const styles: Record<string, number> = {}

    for (const key of marginsAndPaddings) {
        const value = props[key]

        if (value === undefined) continue

        const marginOrProp = key[1] === 'm' ? 'margin' : 'padding'
        const directions = DIRECTIONS_MAP[
            key[2] as keyof typeof DIRECTIONS_MAP
        ] ?? ['top', 'bottom', 'left', 'right']

        for (const direction of directions) {
            styles[`${marginOrProp}-${direction}`] = value * BASE_PIXEL_UNIT
        }
    }

    return Object.keys(styles).map(
        (cssProperty) => `${cssProperty}: ${styles[cssProperty]}px;`
    )
}
