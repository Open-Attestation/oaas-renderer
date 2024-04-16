module.exports = {
    '*.{js,jsx,ts,tsx}': 'npm run lint:fix',
    '*.{js,jsx,ts,tsx,json,css,scss,md}': ['prettier --write'],
}
