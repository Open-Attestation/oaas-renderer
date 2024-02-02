import * as React from 'react'
import renderer from 'react-test-renderer'
import { ForTestingOpenattestationDemoCertificateA4LandscapeTemplate } from '../openattestation-demo-certificate-a4-landscape.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../openattestation-demo-certificate-a4-landscape.sample'

describe('ForTestingOpenattestationDemoCertificateA4LandscapeTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <ForTestingOpenattestationDemoCertificateA4LandscapeTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c1 {
              background: white;
              position: relative;
              width: 29cm;
              height: 20.6cm;
              padding: 2cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('background-landscape.png');
              z-index: initial;
            }

            .c2 {
              position: relative;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              margin-top: 160px;
              height: 90px;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }

            .c3 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              text-align: center;
            }

            .c6 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c7 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
            }

            .c8 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
            }

            .c4 {
              font-family: 'Libre Franklin';
            }

            .c5 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: auto;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
            }

            .c0 {
              -webkit-transform: scale(0.8886799016210397);
              -ms-transform: scale(0.8886799016210397);
              transform: scale(0.8886799016210397);
              -webkit-transform-origin: top left;
              -ms-transform-origin: top left;
              transform-origin: top left;
              height: 692px;
            }

            @media print {
              .c1 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
              }
            }

            @media print {
              .c0 {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
                height: auto;
              }
            }

            <div
              className="c0"
            >
              <div
                className="c1"
              >
                <div
                  className="c2"
                >
                  <p
                    className="c3 c4"
                  >
                    Certificate of Completion
                  </p>
                </div>
                <div
                  style={
                    Object {
                      "marginTop": "24px",
                    }
                  }
                >
                  <div
                    className="c5"
                  >
                    <p
                      className="c6 c4"
                    >
                      This is to certify that
                    </p>
                    <p
                      className="c7 c4"
                    >
                      John Doe
                    </p>
                    <p
                      className="c8 c4"
                    >
                      has completed
                    </p>
                    <p
                      className="c7 c4"
                    >
                      OpenAttestation Demo
                    </p>
                    <p
                      className="c7 c4"
                    >
                      16 Jan 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <ForTestingOpenattestationDemoCertificateA4LandscapeTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
