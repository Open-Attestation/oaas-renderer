import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilBizsafeLevel_2RiskManagementOutdoorAdventureEducationTemplate } from '../bizsafe-level-2-risk-management-outdoor-adventure-education.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../bizsafe-level-2-risk-management-outdoor-adventure-education.sample'

describe('NationalYouthCouncilBizsafeLevel_2RiskManagementOutdoorAdventureEducationTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilBizsafeLevel_2RiskManagementOutdoorAdventureEducationTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
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

            .c15 {
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
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c8 {
              font-size: 24px;
              font-style: italic;
              font-weight: 700;
              margin-top: 8px;
            }

            .c9 {
              font-size: 12px;
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
            }

            .c17 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c18 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c4 {
              font-family: 'Libre Franklin';
            }

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

            .c16 {
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

            .c13 {
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

            .c14 {
              display: block;
              max-width: 100%;
              max-height: 100%;
              width: auto;
              height: auto;
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

            .c0 {
              -webkit-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
              -webkit-transform-origin: top left;
              -ms-transform-origin: top left;
              transform-origin: top left;
              height: 1152px;
            }

            @media print {
              .c1 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
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
                  <div>
                    <p
                      className="c3 c4"
                    >
                      Certificate of Successful
                      <br />
                      Completion
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
                      is awarded to
                    </p>
                    <p
                      className="c8 c4"
                    >
                      JOHN DOE
                    </p>
                    <p
                      className="c9 c4"
                    >
                      for successful completion of the
                    </p>
                    <p
                      className="c10 c4"
                    >
                      bizSAFE Level 2 (Risk Management) Course 
                      <br />
                      Outdoor & Adventure Education
                    </p>
                    <p
                      className="c11 c4"
                    >
                      (Recognised by the Workplace Safety and Health Council)
                    </p>
                    <p
                      className="c11 c4"
                    >
                      Course Date: 
                      30 November - 31 December 2022
                    </p>
                    <p
                      className="c7 c4"
                    >
                      Serial No: 
                      serial-number-1
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
                    >
                      <img
                        alt="Signature of signee"
                        className="c14"
                        src="nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                      />
                    </div>
                    <div
                      className="c15"
                    />
                    <div
                      className="c16"
                    >
                      <p
                        className="c17 c4"
                      >
                        <b>
                          Nicholas Conceicao
                        </b>
                         | Executive Director
                      </p>
                      <p
                        className="c18 c4"
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
            <NationalYouthCouncilBizsafeLevel_2RiskManagementOutdoorAdventureEducationTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
