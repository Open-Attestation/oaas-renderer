const cspList = [
    "default-src 'none'",
    "style-src 'unsafe-inline' fonts.googleapis.com",
    'font-src fonts.gstatic.com',
    "img-src 'self' data:",
    'frame-ancestors *.verify.gov verify.gov',
]

// so that hot reloading works
if (process.env.NODE_ENV === 'development') {
    cspList.push("connect-src 'self'")
    cspList.push("script-src-elem 'self'")
}

export const csp = cspList.join('; ')
