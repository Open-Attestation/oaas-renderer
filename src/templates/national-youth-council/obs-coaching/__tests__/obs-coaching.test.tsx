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
            .c2 {
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

            .c16 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c4 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              text-align: center;
            }

            .c8 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c9 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
            }

            .c10 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
            }

            .c11 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
              text-align: center;
            }

            .c12 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c18 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c19 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c5 {
              font-family: 'Libre Franklin';
            }

            .c17 {
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

            .c14 {
              margin-bottom: 2px;
              width: 250px;
              height: 100px;
              text-align: center;
              -webkit-align-items: flex-end;
              -webkit-box-align: flex-end;
              -ms-flex-align: flex-end;
              align-items: flex-end;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
            }

            .c15 {
              display: block;
              max-width: 100%;
              max-height: 100%;
              width: auto;
              height: auto;
            }

            .c3 {
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

            .c6 {
              position: relative;
              display: block;
              height: 360px;
              padding-top: 16px;
              padding-bottom: 16px;
            }

            .c13 {
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

            .c7 {
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

            .c1 {
              -webkit-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
              -webkit-transform-origin: top left;
              -ms-transform-origin: top left;
              transform-origin: top left;
              height: 1152px;
            }

            .c0 pre {
              background-color: lightgray;
              overflow-wrap: anywhere;
              white-space: break-spaces;
            }

            @media print {
              .c2 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
              }
            }

            @media print {
              .c1 {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
                height: auto;
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
                  <div
                    className="c3"
                  >
                    <div>
                      <p
                        className="c4 c5"
                      >
                        Certificate of Appointment
                      </p>
                    </div>
                  </div>
                  <div
                    className="c6"
                  >
                    <div
                      className="c7"
                    >
                      <p
                        className="c8 c5"
                      >
                        This is to certify that
                      </p>
                      <p
                        className="c9 c5"
                      >
                        ABDUL HAIREEL BIN ABDUL HALEEM
                      </p>
                      <p
                        className="c10 c5"
                      >
                        is appointed as a
                      </p>
                      <p
                        className="c11 c5"
                      >
                        Outward Bound Singapore:
                        <br />
                        Dinghy Sailing Coach
                      </p>
                      <p
                        className="c10 c5"
                      >
                        On the date of
                      </p>
                      <p
                        className="c11 c5"
                      >
                        01 January 2022
                      </p>
                      <p
                        className="c12 c5"
                      >
                        Certificate is valid till 
                        <b>
                          31 December 2023
                        </b>
                        <br />
                        Certificate #: 
                        DSL1-2022-001
                      </p>
                    </div>
                  </div>
                  <div
                    className="c13"
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
                        className="c14"
                      >
                        <img
                          alt="Signature of signee"
                          className="c15"
                          src="nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                        />
                      </div>
                      <div
                        className="c16"
                      />
                      <div
                        className="c17"
                      >
                        <p
                          className="c18 c5"
                        >
                          <b>
                            Nicholas Conceicao
                          </b>
                           | Executive Director
                        </p>
                        <p
                          className="c19 c5"
                        >
                          Outward Bound Singapore
                        </p>
                      </div>
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
        expect(screen.getByText('ABDUL HAIREEL BIN ABDUL HALEEM')).toBeTruthy()
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

        expect(element.textContent).toContain('31 December 2023')
    })
})
