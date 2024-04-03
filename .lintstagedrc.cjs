module.exports = {
    '*.{js,jsx,ts,tsx}': 'yarn lint:fix',
    '*.{js,jsx,ts,tsx,json,css,scss,md}': ['prettier --write'],
}
