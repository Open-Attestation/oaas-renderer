import { fireEvent, render } from '@testing-library/react'
import { FlippableCard } from '../flippable-card'

describe('FlippableCard', () => {
    test('Clicking on the card should rotate it 180deg by adding flip to the classname', () => {
        const { container } = render(
            <FlippableCard
                front="i am the front of the card"
                back="i am the back of the card"
                widthInPx={500}
                heightInPx={500}
            />
        )

        // eslint-disable-next-line testing-library/no-node-access
        const flippableCardRootElement = container.firstChild

        if (!flippableCardRootElement)
            throw new Error('Cannot find root element on screen')

        fireEvent(
            flippableCardRootElement,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        )

        expect(flippableCardRootElement).toHaveClass('flip')
    })
})
