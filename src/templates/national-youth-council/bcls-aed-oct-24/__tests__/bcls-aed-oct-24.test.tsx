import { render, screen } from '@testing-library/react'
import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../bcls-aed-oct-24.sample'
import { NationalYouthCouncilBclsAedOct_24Template } from '../bcls-aed-oct-24.template'

describe('NycBclsAedTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilBclsAedOct_24Template
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
            }

            .c3 {
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

            .c0 {
              -webkit-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
              -webkit-transform-origin: top left;
              -ms-transform-origin: top left;
              transform-origin: top left;
              height: 1152px;
            }

            .c20 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c22 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c24 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: -12px;
              text-align: center;
            }

            .c25 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c23 {
              font-family: 'Libre Franklin';
            }

            .c21 {
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

            .c18 {
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

            .c19 {
              display: block;
              max-width: 100%;
              max-height: 100%;
              width: auto;
              height: auto;
            }

            .c4 {
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

            .c17 {
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

            .c5 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
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
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
            }

            .c10 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: -8px;
            }

            .c11 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              text-align: center;
            }

            .c12 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
              text-align: center;
            }

            .c13 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c14 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
            }

            .c15 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c6 {
              font-family: 'Libre Franklin';
            }

            .c16 {
              max-height: 72px;
            }

            .c2 {
              min-width: 500px;
            }

            @media print {
              .c3 {
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
                className="c1 c2"
              >
                <div
                  className="c3"
                >
                  <div
                    className="c4"
                  >
                    <div>
                      <p
                        className="c5 c6"
                      >
                        BCLS & AED
                      </p>
                    </div>
                  </div>
                  <div
                    className="c7"
                  >
                    <div
                      className="c1"
                    >
                      <p
                        className="c8 c6"
                      >
                        <br />
                        JOHN DOE
                      </p>
                      <p
                        className="c9 c6"
                      >
                        123A
                      </p>
                      <p
                        className="c10 c6"
                      >
                        Is Certified as a Provider of
                      </p>
                      <p
                        className="c11 c6"
                      >
                        BASIC CARDIAC LIFE SUPPORT +
                      </p>
                      <p
                        className="c12 c6"
                      >
                        AUTOMATED EXTERNAL DEFIBRILLATION
                      </p>
                      <p
                        className="c13 c6"
                      >
                        On
                      </p>
                      <p
                        className="c8 c6"
                      >
                        31 December 2020
                      </p>
                      <p
                        className="c14 c6"
                      >
                        Course Batch No.: 
                        MST-SFA-2024-01
                      </p>
                      <p
                        className="c14 c6"
                      >
                        Certificate No.: 
                        OBSBCLS-2024-001
                      </p>
                      <p
                        className="c15 c6"
                      >
                        Certificate is valid till 
                        30 December 2022
                      </p>
                      <p
                        className="c13 c6"
                      >
                        <br />
                        Accredited by
                      </p>
                      <img
                        alt="SRFAC Logo"
                        className="c16"
                        src="srfac-logo.png"
                      />
                    </div>
                  </div>
                  <div
                    className="c17"
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
                        className="c18"
                      >
                        <img
                          alt="Signature of signee"
                          className="c19"
                          src="jaffar-ali-signature&3d805f88bf49b640f6498c0e5335806289c24ee9533c7b79b08f3a5e454f1be4.png"
                        />
                      </div>
                      <div
                        className="c20"
                      />
                      <div
                        className="c21"
                      >
                        <p
                          className="c22 c23"
                        >
                          <b>
                            Jaffar Ali
                          </b>
                        </p>
                        <p
                          className="c24 c23"
                        >
                          Chief Instructor
                        </p>
                        <p
                          className="c24 c23"
                        >
                          <b>
                            Life Support Training Centre
                          </b>
                        </p>
                        <p
                          className="c25 c23"
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
            <NationalYouthCouncilBclsAedOct_24Template
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })

    test('Should format issuer date to dd MMMM yyyy', () => {
        render(
            <NationalYouthCouncilBclsAedOct_24Template
                document={{
                    ...sample,
                    issueDate: '2020-03-01',
                }}
                handleObfuscation={() => void 0}
            />
        )

        expect(screen.getByText('01 March 2020')).toBeTruthy()
    })
})
