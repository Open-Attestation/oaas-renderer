const buildProcessSchemaCommand = (filenames) => {
    const set = new Set()
    for (const filename of filenames) {
        const indexOfTemplatesFolder = filename.indexOf('/templates/') + 1
        let count = 0
        let indexOfThirdSlash = indexOfTemplatesFolder
        while (indexOfThirdSlash < filename.length) {
            if (filename[indexOfThirdSlash] === '/') {
                count += 1
                if (count === 3) {
                    break
                }
            }
            indexOfThirdSlash += 1
        }

        if (count === 3) {
            const templateFolder = filename.substring(
                filename.indexOf('/src/') + 1,
                indexOfThirdSlash
            )
            set.add(templateFolder)
        }
    }

    const directoryToProcessSchemas = Array.from(set.values())
    const prettierCommand =
        'npx prettier --write ' +
        directoryToProcessSchemas
            .map((dir) => dir + '/**/__generated__/*.{ts,json}')
            .join(' ')

    const finalCommand = [
        `npm run ci:process:schemas "${directoryToProcessSchemas.join(' ')}"`,
        prettierCommand,
    ]
    return finalCommand
}

module.exports = {
    '*.{js,jsx,ts,tsx}': 'npm run lint:fix',
    '**/src/templates/**/*.schema.*': [buildProcessSchemaCommand],
    '*.{js,jsx,ts,tsx,json,css,scss,md}': ['prettier --write'],
}
