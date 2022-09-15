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

        expect(tree).toMatchInlineSnapshot(`
            .c1 {
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
              margin-top: 236px;
            }

            .c4 {
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
              margin-top: 16px;
            }

            .c0 {
              background: white;
              position: relative;
              width: 21cm;
              min-height: 29.7cm;
              padding: 2cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('background.svg');
              z-index: initial;
            }

            .c10 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c2 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
              text-align: center;
            }

            .c5 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c6 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
            }

            .c7 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
            }

            .c11 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
              color: #808041;
            }

            .c12 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
              color: #808041;
            }

            .c3 {
              font-family: 'Libre Franklin';
            }

            .c8 {
              position: absolute;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-align-items: flex-end;
              -webkit-box-align: flex-end;
              -ms-flex-align: flex-end;
              align-items: flex-end;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
              -webkit-flex-direction: row-reverse;
              -ms-flex-direction: row-reverse;
              flex-direction: row-reverse;
              left: 2cm;
              right: 2cm;
              bottom: 4.5cm;
            }

            .c9 {
              display: block;
              width: 200px;
              margin: 0 auto;
            }

            @media print {
              .c0 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
              }
            }

            <div
              className="c0"
            >
              <div
                className="c1"
              >
                <p
                  className="c2 c3"
                >
                  Certificate of 
                  <br />
                  Completion
                </p>
              </div>
              <div
                className="c4"
              >
                <p
                  className="c5 c3"
                >
                  This is to certify that
                </p>
                <p
                  className="c6 c3"
                >
                  John Doe
                </p>
                <p
                  className="c7 c3"
                >
                  has completed
                </p>
                <p
                  className="c6 c3"
                >
                   CSA Milestone Programme
                </p>
                <p
                  className="c6 c3"
                >
                  31 Dec 2021
                   - 
                  31 Dec 2022
                </p>
              </div>
              <div
                className="c8"
              >
                <div
                  style={
                    Object {
                      "width": 250,
                    }
                  }
                >
                  <img
                    className="c9"
                    src="nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                  />
                  <div
                    className="c10"
                  />
                  <p
                    className="c11 c3"
                  >
                    <b>
                      Nicholas Conceicao
                    </b>
                     | 
                    Executive Director
                  </p>
                  <p
                    className="c12 c3"
                  >
                    Outward Bound Singapore
                  </p>
                </div>
              </div>
            </div>
        `)
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
