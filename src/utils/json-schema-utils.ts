/** YYYY-MM-DD date type **/
export function makeDateType(description: string, example = '2023-12-31') {
    return {
        type: 'string',
        description,
        examples: [example],
        format: 'date',
    }
}

export function makeRequiredString(description: string, example: string) {
    return {
        type: 'string',
        description,
        examples: [example],
        minLength: 1,
    }
}

export function makeEnumString<T extends readonly string[]>(
    description: string,
    possibleValues: T,
    example: T[number]
) {
    return {
        type: 'string',
        description,
        enum: [...possibleValues],
        examples: [example],
    }
}
