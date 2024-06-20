// DO NOT TOUCH! This is only used during development!

const webpack = require('webpack')
module.exports = function override(config) {
    if (process.env.NODE_ENV === 'production') {
        const issuerId = process.env.ISSUER_ID
        if (!issuerId) throw new Error('Please provide issuerId')

        config.plugins = [
            ...config.plugins,
            new webpack.NormalModuleReplacementPlugin(
                /__development__\/combined-registry/,
                `templates/${issuerId}`
            ),
        ]

        return config
    }

    if (process.env.IS_PREVIEW_APP === 'true') {
        const fallback = config.resolve.fallback || {}
        Object.assign(fallback, {
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
        })

        config.resolve.fallback = fallback
        config.entry = './src/__development__/preview.tsx'

        return config
    }

    return config
}
