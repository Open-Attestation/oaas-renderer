import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilGeneralCertificateTemplate } from '../general-certificate.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../general-certificate.sample'

describe('NationalYouthCouncilGeneralCertificateTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilGeneralCertificateTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot()
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilGeneralCertificateTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
