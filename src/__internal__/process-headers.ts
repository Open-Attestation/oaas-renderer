import { writeFileSync } from 'fs'
import path from 'path'

import { csp } from '../content-security-policies'

const PROJECT_DIR = process.env.PWD

if (!PROJECT_DIR)
    throw new Error(
        'Unable to get project directory, pls only run command via yarn'
    )

const PUBLIC_DIR = path.join(PROJECT_DIR, 'public')

const headersContent = [
    `/*`,
    `    X-XSS-Protection: 1; mode=block`,
    `    Content-Security-Policy: ${csp}`,
].join('\n')

writeFileSync(path.join(PUBLIC_DIR, '__headers'), headersContent)
