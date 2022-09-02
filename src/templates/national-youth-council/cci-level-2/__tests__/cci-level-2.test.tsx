import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilCciLevel_2Template } from '../cci-level-2.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../cci-level-2.sample'

describe('NationalYouthCouncilCciLevel_2Template', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilCciLevel_2Template
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot()
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilCciLevel_2Template
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
