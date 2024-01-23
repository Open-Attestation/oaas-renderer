import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilStandardFirstAidTemplate } from '../standard-first-aid.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../standard-first-aid.sample'

describe('NationalYouthCouncilStandardFirstAidTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilStandardFirstAidTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c0 {
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
              min-width: 500px;
            }

            .c4 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              text-align: center;
            }

            .c6 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              text-align: center;
            }

            .c8 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c9 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: -8px;
            }

            .c10 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              text-align: center;
            }

            .c11 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
              text-align: center;
            }

            .c12 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c13 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
            }

            .c14 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c5 {
              font-family: 'Libre Franklin';
            }

            .c15 {
              max-height: 72px;
            }

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

            .c19 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c21 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c23 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: -12px;
              text-align: center;
            }

            .c24 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c22 {
              font-family: 'Libre Franklin';
            }

            .c20 {
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

            .c17 {
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

            .c18 {
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

            .c7 {
              position: relative;
              display: block;
              height: 360px;
              padding-top: 16px;
              padding-bottom: 16px;
            }

            .c16 {
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
              .c2 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
              }
            }

            <div
              className="c0 c1"
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
                      STANDARD FIRST AID
                    </p>
                    <p
                      className="c6 c5"
                    >
                      With CPR (Hands Only) and AED Provider
                    </p>
                  </div>
                </div>
                <div
                  className="c7"
                >
                  <div
                    className="c0"
                  >
                    <p
                      className="c8 c5"
                    >
                      <br />
                      JOHN DOE
                    </p>
                    <p
                      className="c9 c5"
                    >
                      Is Certified as a Provider of
                    </p>
                    <p
                      className="c10 c5"
                    >
                      STANDARD FIRST AID (SFA), and
                    </p>
                    <p
                      className="c11 c5"
                    >
                      With CARDIOPULMONARY RESUSCITATION (CPR) – HANDS ONLY, and
                    </p>
                    <p
                      className="c11 c5"
                    >
                      AUTOMATED EXTERNAL DEFIBRILLATION (AED)
                    </p>
                    <p
                      className="c11 c5"
                    >
                      PROVIDER
                    </p>
                    <p
                      className="c12 c5"
                    >
                      On
                    </p>
                    <p
                      className="c8 c5"
                    >
                      31 December 2020
                    </p>
                    <p
                      className="c13 c5"
                    >
                      Certificate No.: 
                      OBSSFA-2024-001
                    </p>
                    <p
                      className="c14 c5"
                    >
                      Certificate is valid till 
                      30 December 2022
                    </p>
                    <p
                      className="c12 c5"
                    >
                      <br />
                      Accredited by
                    </p>
                    <img
                      alt="SRFAC Logo"
                      className="c15"
                      src="srfac-logo.png"
                    />
                  </div>
                </div>
                <div
                  className="c16"
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
                      className="c17"
                    >
                      <img
                        alt="Signature of signee"
                        className="c18"
                        src="fazdli-jamal-signature&bd3a19338a826f4634b51ec9540cd6c044bda125bc6add929df6ef407b458bb2.png"
                      />
                    </div>
                    <div
                      className="c19"
                    />
                    <div
                      className="c20"
                    >
                      <p
                        className="c21 c22"
                      >
                        <b>
                          Fazdli Jamal
                        </b>
                      </p>
                      <p
                        className="c23 c22"
                      >
                        Chief Instructor
                      </p>
                      <p
                        className="c23 c22"
                      >
                        <b>
                          Life Support Training Centre
                        </b>
                      </p>
                      <p
                        className="c24 c22"
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
            <NationalYouthCouncilStandardFirstAidTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
