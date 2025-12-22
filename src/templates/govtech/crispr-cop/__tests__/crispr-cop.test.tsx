import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../crispr-cop.sample'
import { GovtechCrisprCopTemplate } from '../crispr-cop.template'

describe('GovtechCrisprCopTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <GovtechCrisprCopTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot()
    })
})
