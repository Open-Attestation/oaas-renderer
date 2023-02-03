import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilSuccessfulCompletionTemplate } from '../successful-completion.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../successful-completion.sample'

describe('NationalYouthCouncilSuccessfulCompletionTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilSuccessfulCompletionTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
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

            .c13 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c2 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              text-align: center;
            }

            .c6 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c7 {
              font-size: 24px;
              font-style: italic;
              font-weight: 700;
              margin-top: 8px;
            }

            .c8 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
            }

            .c9 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
              text-align: center;
            }

            .c10 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
            }

            .c15 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c16 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c3 {
              font-family: 'Libre Franklin';
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

            .c12 {
              width: 100%;
              height: 100px;
              background: url('nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png');
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
            }

            .c14 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-box-flex: 1;
              -webkit-flex-grow: 1;
              -ms-flex-positive: 1;
              flex-grow: 1;
              color: #808041;
            }

            .c1 {
              position: relative;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              margin-top: 241px;
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

            .c4 {
              position: relative;
              display: block;
              height: 360px;
              padding-top: 16px;
              padding-bottom: 16px;
            }

            .c11 {
              position: relative;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              height: 214px;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
              -webkit-align-items: start;
              -webkit-box-align: start;
              -ms-flex-align: start;
              align-items: start;
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
                <div>
                  <p
                    className="c2 c3"
                  >
                    Certificate of Successful
                    <br />
                    Completion
                  </p>
                </div>
              </div>
              <div
                className="c4"
              >
                <div
                  className="c5"
                >
                  <p
                    className="c6 c3"
                  >
                    is awarded to
                  </p>
                  <p
                    className="c7 c3"
                  >
                    John Doe
                  </p>
                  <p
                    className="c8 c3"
                  >
                    for successful completion of the
                  </p>
                  <p
                    className="c9 c3"
                  >
                    bizSAFE Level 2 (Risk Management) Course 
                    <br />
                    Outdoor & Adventure Education
                  </p>
                  <p
                    className="c10 c3"
                  >
                    (Recognised by the Workplace Safety and Health Council)
                  </p>
                  <p
                    className="c10 c3"
                  >
                    Course Date: 
                    30 November - 31 December 2022
                  </p>
                  <p
                    className="c6 c3"
                  >
                    Serial No: 
                    serial-number-1
                  </p>
                </div>
              </div>
              <div
                className="c11"
              >
                <div />
                <div
                  style={
                    Object {
                      "width": 250,
                    }
                  }
                >
                  <div
                    className="c12"
                  />
                  <div
                    className="c13"
                  />
                  <div
                    className="c14"
                  >
                    <p
                      className="c15 c3"
                    >
                      <b>
                        Nicholas Conceicao
                      </b>
                       | Executive Director
                    </p>
                    <p
                      className="c16 c3"
                    >
                      Outward Bound Singapore
                    </p>
                  </div>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilSuccessfulCompletionTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
