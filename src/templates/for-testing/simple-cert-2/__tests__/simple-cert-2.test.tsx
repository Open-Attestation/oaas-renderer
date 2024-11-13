import { render, screen } from '@testing-library/react'
import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../simple-cert-2.sample'
import { ForTestingSimpleCert_2Template } from '../simple-cert-2.template'

describe('ForTestingSimpleCert_2Template', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <ForTestingSimpleCert_2Template
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            <div
              className=""
              id="for-testing-simple-cert"
            >
              <div
                className="border border-solid border-black rounded-lg p-2 flex flex-col items-center"
              >
                <h1>
                  OAAS VAPT course completion
                </h1>
                <p
                  style={
                    Object {
                      "textAlign": "center",
                    }
                  }
                >
                  To reward
                </p>
                <h2>
                  John Doe
                </h2>
                <p>
                  for completion of course
                </p>
                <h2>
                  2022-05-10
                   - 
                  2022-06-10
                </h2>
                <p>
                  serial number: 
                  1
                </p>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <ForTestingSimpleCert_2Template
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
