const cspList = [
    "default-src 'none'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    'font-src fonts.gstatic.com',
    "img-src 'self' data:",
    "script-src-elem 'self'",
    'frame-ancestors *.verify.gov verify.gov',
]

// so that hot reloading works
if (process.env.NODE_ENV === 'development') {
    cspList.push("connect-src 'self'")
}

export const csp = cspList.join('; ')
