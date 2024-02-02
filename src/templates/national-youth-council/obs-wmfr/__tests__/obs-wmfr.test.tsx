import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilObsWmfrTemplate } from '../obs-wmfr.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../obs-wmfr.sample'

describe('NationalYouthCouncilObsWmfrTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilObsWmfrTemplate
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

            .c2 {
              min-width: 500px;
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

            .c15 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
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
              font-size: 10px;
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
              font-size: 10px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
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

            .c6 {
              font-family: 'Libre Franklin';
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
                        WILDERNESS MEDICAL FIRST RESPONDER
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
                        Is Certified as a
                      </p>
                      <p
                        className="c10 c6"
                      >
                        WILDERNESS MEDICAL FIRST RESPONDER (WMFR)
                      </p>
                      <p
                        className="c9 c6"
                      >
                        On
                      </p>
                      <p
                        className="c8 c6"
                      >
                        31 December 2022
                      </p>
                      <p
                        className="c9 c6"
                      >
                        Conducted by
                      </p>
                      <p
                        className="c10 c6"
                      >
                        OUTWARD BOUND SINGAPORE
                      </p>
                      <p
                        className="c10 c6"
                      >
                        MEDICAL SERVICES & TRAINING
                      </p>
                      <p
                        className="c11 c6"
                      >
                        <br />
                        Certificate No.: 
                        OBSWMFR-2024-001
                      </p>
                      <p
                        className="c11 c6"
                      >
                        Certificate is valid till 
                        30 December 2024
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
                          className="c17 c6"
                        >
                          <b>
                            Nicholas Conceicao
                          </b>
                           | Executive Director
                        </p>
                        <p
                          className="c18 c6"
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
            <NationalYouthCouncilObsWmfrTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
