import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilObsCoachingTemplate } from '../obs-coaching.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../obs-coaching.sample'

describe('NationalYouthCouncilObsCoachingTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilObsCoachingTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c1 {
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

            .c14 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c3 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              text-align: center;
            }

            .c7 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c8 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
            }

            .c9 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
            }

            .c10 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
              text-align: center;
            }

            .c11 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c16 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c17 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c4 {
              font-family: 'Libre Franklin';
            }

            .c13 {
              width: 100%;
              height: 100px;
              background: url('nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png');
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
            }

            .c15 {
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

            .c2 {
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

            .c5 {
              position: relative;
              display: block;
              height: 360px;
              padding-top: 16px;
              padding-bottom: 16px;
            }

            .c12 {
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

            .c6 {
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

            .c0 pre {
              background-color: lightgray;
              overflow-wrap: anywhere;
              white-space: break-spaces;
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

            <div
              className="c0"
              id="national-youth-council-obs-coaching"
            >
              <div
                className="c1"
              >
                <div
                  className="c2"
                >
                  <div>
                    <p
                      className="c3 c4"
                    >
                      Certificate of Appointment
                    </p>
                  </div>
                </div>
                <div
                  className="c5"
                >
                  <div
                    className="c6"
                  >
                    <p
                      className="c7 c4"
                    >
                      This is to certify that
                    </p>
                    <p
                      className="c8 c4"
                    >
                      Abdul Haireel Bin Abdul Haleem
                    </p>
                    <p
                      className="c9 c4"
                    >
                      is appointed as a
                    </p>
                    <p
                      className="c10 c4"
                    >
                      Outward Bound Singapore:
                      <br />
                      Dinghy Sailing Coach
                    </p>
                    <p
                      className="c9 c4"
                    >
                      On the date of
                    </p>
                    <p
                      className="c10 c4"
                    >
                      01 Jan 2022
                    </p>
                    <p
                      className="c11 c4"
                    >
                      Certificate is valid till 
                      <b>
                        31 Dec 2023
                      </b>
                      <br />
                      Certificate #: 
                      DSL1-2022-001
                    </p>
                  </div>
                </div>
                <div
                  className="c12"
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
                      className="c13"
                    />
                    <div
                      className="c14"
                    />
                    <div
                      className="c15"
                    >
                      <p
                        className="c16 c4"
                      >
                        <b>
                          Nicholas Conceicao
                        </b>
                         | Executive Director
                      </p>
                      <p
                        className="c17 c4"
                      >
                        Outward Bound Singapore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilObsCoachingTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('Abdul Haireel Bin Abdul Haleem')).toBeTruthy()
    })

    test('given an issue date and validity duration(in years), should render expiry date by adding validity duration minus 1 day', () => {
        render(
            <NationalYouthCouncilObsCoachingTemplate
                document={{
                    ...sample,
                    issueDate: '2022-01-01',
                }}
                handleObfuscation={() => void 0}
            />
        )

        const element = screen.getByText('Certificate is valid till', {
            exact: false,
        })

        expect(element.textContent).toContain('31 Dec 2023')
    })
})
