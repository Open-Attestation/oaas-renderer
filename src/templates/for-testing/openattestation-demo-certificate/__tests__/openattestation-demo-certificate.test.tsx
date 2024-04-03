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

        expect(tree).toMatchInlineSnapshot(`
            .c0 pre {
              background-color: lightgray;
              overflow-wrap: anywhere;
              white-space: break-spaces;
            }

            <div
              className="c0"
              id="for-testing-openattestation-demo-certificate"
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
                <img
                  alt="Open Attestation logo"
                  src="oa.svg"
                  style={
                    Object {
                      "height": "100px",
                    }
                  }
                />
                <p>
                  This is to certify that 
                </p>
                <h2>
                  John Doe
                </h2>
                <p>
                  has completed the course
                </p>
                <h1>
                  OpenAttestation Demo
                </h1>
                <p>
                  on
                </p>
                <h2>
                  2023-01-15
                </h2>
              </div>
            </div>
        `)
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
