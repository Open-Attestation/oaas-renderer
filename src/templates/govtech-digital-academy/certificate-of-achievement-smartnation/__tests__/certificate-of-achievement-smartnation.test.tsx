import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../certificate-of-achievement-smartnation.sample'
import { GovtechDigitalAcademyCertificateOfAchievementSmartnationTemplate } from '../certificate-of-achievement-smartnation.template'

describe('GovtechDigitalAcademyCertificateOfAchievementSmartnationTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <GovtechDigitalAcademyCertificateOfAchievementSmartnationTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot()
    })
})
