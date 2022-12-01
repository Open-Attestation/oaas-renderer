const cspList = [
    "default-src 'none'",
    "style-src 'unsafe-inline'",
    "img-src 'self' data:",
]

// so that hot reloading works
if (process.env.NODE_ENV === 'development') {
    cspList.push("connect-src 'self'")
    cspList.push("script-src-elem 'self'")
}

export const csp = cspList.join('; ')
