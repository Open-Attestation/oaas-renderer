import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../standard-first-aid-oct-24.sample'
import { NationalYouthCouncilStandardFirstAidOct_24Template } from '../standard-first-aid-oct-24.template'

describe('NationalYouthCouncilStandardFirstAidOct_24Template', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilStandardFirstAidOct_24Template
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

            .c21 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c23 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c25 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: -12px;
              text-align: center;
            }

            .c26 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c24 {
              font-family: 'Libre Franklin';
            }

            .c22 {
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

            .c19 {
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

            .c20 {
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

            .c8 {
              position: relative;
              display: block;
              height: 360px;
              padding-top: 16px;
              padding-bottom: 16px;
            }

            .c18 {
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

            .c2 {
              min-width: 500px;
            }

            .c5 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              text-align: center;
            }

            .c7 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              text-align: center;
            }

            .c9 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c10 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
            }

            .c11 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: -8px;
            }

            .c12 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              text-align: center;
            }

            .c13 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
              text-align: center;
            }

            .c14 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c15 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
            }

            .c16 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c6 {
              font-family: 'Libre Franklin';
            }

            .c17 {
              max-height: 72px;
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
                        STANDARD FIRST AID
                      </p>
                      <p
                        className="c7 c6"
                      >
                        With CPR (Hands Only) and AED Provider
                      </p>
                    </div>
                  </div>
                  <div
                    className="c8"
                  >
                    <div
                      className="c1"
                    >
                      <p
                        className="c9 c6"
                      >
                        <br />
                        JOHN DOE
                      </p>
                      <p
                        className="c10 c6"
                      >
                        123A
                      </p>
                      <p
                        className="c11 c6"
                      >
                        Is Certified as a Provider of
                      </p>
                      <p
                        className="c12 c6"
                      >
                        STANDARD FIRST AID (SFA), and
                      </p>
                      <p
                        className="c13 c6"
                      >
                        With CARDIOPULMONARY RESUSCITATION (CPR) – HANDS ONLY, and
                      </p>
                      <p
                        className="c13 c6"
                      >
                        AUTOMATED EXTERNAL DEFIBRILLATION (AED) PROVIDER
                      </p>
                      <p
                        className="c14 c6"
                      >
                        On
                      </p>
                      <p
                        className="c9 c6"
                      >
                        31 December 2024
                      </p>
                      <p
                        className="c15 c6"
                      >
                        Course Date: 
                        01-02 September 2024
                      </p>
                      <p
                        className="c15 c6"
                      >
                        Course Batch No.: 
                        MST-SFA-2024-01
                      </p>
                      <p
                        className="c15 c6"
                      >
                        Certificate No.: 
                        OBSSFA-2024-001 / OBSSFA-YYYY-Cert#
                      </p>
                      <p
                        className="c16 c6"
                      >
                        Certificate is valid till 
                        30 December 2026
                      </p>
                      <p
                        className="c14 c6"
                      >
                        <br />
                        Accredited by
                      </p>
                      <img
                        alt="SRFAC Logo"
                        className="c17"
                        src="srfac-logo.png"
                      />
                    </div>
                  </div>
                  <div
                    className="c18"
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
                        className="c19"
                      >
                        <img
                          alt="Signature of signee"
                          className="c20"
                          src="darvin-bin-rozali-signature&88b24e2878675c1939b90322909ee5d40e1a36648fce0c29cb8ded459eb2d3b6.png"
                        />
                      </div>
                      <div
                        className="c21"
                      />
                      <div
                        className="c22"
                      >
                        <p
                          className="c23 c24"
                        >
                          <b>
                            Darvin Bin Rozali
                          </b>
                        </p>
                        <p
                          className="c25 c24"
                        >
                          Chief Instructor
                        </p>
                        <p
                          className="c25 c24"
                        >
                          <b>
                            Life Support Training Centre
                          </b>
                        </p>
                        <p
                          className="c26 c24"
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
})
