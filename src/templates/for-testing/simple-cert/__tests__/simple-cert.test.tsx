import * as React from 'react'
import renderer from 'react-test-renderer'
import { ForTestingSimpleCertTemplate } from '../simple-cert.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../simple-cert.sample'

describe('ForTestingSimpleCertTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <ForTestingSimpleCertTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c0 pre {
              background-color: lightgray;
              overflow-wrap: anywhere;
              white-space: break-spaces;
            }

            <div
              className="c0"
              id="for-testing-simple-cert"
            >
              <div
                style={
                  Object {
                    "alignItems": "center",
                    "border": "1px solid black",
                    "borderRadius": "10px",
                    "display": "flex",
                    "flexDirection": "column",
                    "padding": "10px",
                  }
                }
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
            <ForTestingSimpleCertTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
