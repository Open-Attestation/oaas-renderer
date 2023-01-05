import * as React from 'react'
import renderer from 'react-test-renderer'
import { ForTestingOpenattestationDemoCertificateTemplate } from '../openattestation-demo-certificate.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../openattestation-demo-certificate.sample'

describe('ForTestingOpenattestationDemoCertificateTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <ForTestingOpenattestationDemoCertificateTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot()
    })

    test('should render recipient name', () => {
        render(
            <ForTestingOpenattestationDemoCertificateTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
