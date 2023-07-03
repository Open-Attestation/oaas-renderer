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
            .c2 {
              position: relative;
              width: 352px;
              height: 230px;
            }

            .c2 .card-face {
              width: 352px;
              height: 230px;
            }

            .c2 .card-face:first-child {
              page-break-after: always;
            }

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

            .c14 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: auto;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
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
              position: relative;
              width: 100%;
            }

            .c15 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-left: 8px;
              text-align: center;
            }

            .c16 {
              font-family: Libre Franklin;
            }

            .c3 {
              width: calc(100% - 1px);
              height: calc(100% - 1px);
              background: white;
              position: relative;
              padding: 16px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 16px;
              z-index: -2;
              -webkit-print-color-adjust: exact;
            }

            .c1 {
              min-width: 500px;
            }

            .c4 {
              max-width: 100%;
              height: auto;
              position: absolute;
              z-index: -1;
              border-radius: 16px;
              border: 1px solid #ccc;
            }

            .c5 {
              position: absolute;
              top: 16px;
              width: 320px;
              height: 68px;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
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
              font-family: 'Libre Franklin';
              font-style: normal;
              font-weight: 700;
              font-size: 18px;
              line-height: 22px;
              text-align: center;
              color: #ffffff;
            }

            .c6 {
              position: absolute;
              top: 108px;
              width: 314px;
              height: 66px;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
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
              font-family: 'Libre Franklin';
              font-style: normal;
              font-weight: 700;
              font-size: 18px;
              line-height: 22px;
              text-align: center;
              color: #ffffff;
            }

            .c7 {
              position: absolute;
              bottom: 31px;
              right: 10px;
              height: 13px;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              font-family: 'Libre Franklin';
              font-style: normal;
              font-weight: 700;
              font-size: 11px;
              line-height: 13px;
              text-align: right;
              color: #ffffff;
            }

            .c8 {
              position: absolute;
              bottom: 10px;
              right: 10px;
              height: 13px;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              font-family: 'Libre Franklin';
              font-style: normal;
              font-weight: 700;
              font-size: 11px;
              line-height: 13px;
              text-align: right;
              color: #ffffff;
            }

            .c9 {
              position: absolute;
              bottom: 8px;
              left: 8px;
              height: 13px;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              font-family: 'Libre Franklin';
              font-style: normal;
              font-weight: 700;
              font-size: 11px;
              line-height: 13px;
              text-align: left;
              color: #000000;
            }

            .c10 {
              position: absolute;
              width: 352px;
              height: 115px;
              top: 0px;
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

            .c11 {
              display: block;
              max-width: 162px;
              max-height: 89px;
              width: auto;
              height: auto;
            }

            .c12 {
              position: absolute;
              top: 117px;
              width: 336px;
              height: 51px;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              font-family: 'Libre Franklin';
              font-style: normal;
              font-weight: 700;
              font-size: 14px;
              line-height: 17px;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              text-align: center;
              color: #000000;
            }

            @media not print {
              .c2 {
                -webkit-transform-style: preserve-3d;
                -ms-transform-style: preserve-3d;
                transform-style: preserve-3d;
                -webkit-transition: -webkit-transform 0.5s ease-in-out 0s;
                -webkit-transition: transform 0.5s ease-in-out 0s;
                transition: transform 0.5s ease-in-out 0s;
                cursor: pointer;
              }

              .c2.flip {
                -webkit-transform: rotateY(180deg);
                -ms-transform: rotateY(180deg);
                transform: rotateY(180deg);
              }

              .c2 .card-face {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                -webkit-backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
              }

              .c2 .card-face:last-child {
                -webkit-transform: rotateY(180deg);
                -ms-transform: rotateY(180deg);
                transform: rotateY(180deg);
              }
            }

            @media print {
              .c13 {
                display: none;
              }
            }

            <div
              className="c0 c1"
            >
              <div
                className="c2"
                onClick={[Function]}
              >
                <div
                  className="card-face"
                >
                  <div
                    className="c0 c3"
                  >
                    <img
                      className="c4"
                      src="obs-wmfr-front-bg.jpg"
                    />
                    <div
                      className="c5"
                    >
                      John Doe
                    </div>
                    <div
                      className="c6"
                    >
                      Successfully completed
                      <br />
                      Wilderness Medical First Responder
                      <br />
                      (WMFR)
                    </div>
                    <div
                      className="c7"
                    >
                      S/N: 
                      OBSWMFR20XX/XXX
                    </div>
                    <div
                      className="c8"
                    >
                      DATE OF ISSUE: 
                      31/12/2022
                    </div>
                  </div>
                </div>
                <div
                  className="card-face"
                >
                  <div
                    className="c0 c3"
                  >
                    <img
                      className="c4"
                      src="obs-wmfr-back-bg.png"
                    />
                    <div
                      className="c9"
                    >
                      Valid till 
                      30 Dec 2024
                    </div>
                    <div
                      className="c10"
                    >
                      <img
                        alt="Issuing officer signature"
                        className="c11"
                        src="nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                      />
                    </div>
                    <div
                      className="c12"
                    >
                      Nicholas Conceicao
                      <br />
                      Executive Director
                      <br />
                      Outward Bound Singapore
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="c13"
              >
                <div
                  className="c14"
                >
                  <img
                    alt="card flip icon"
                    src="icon-cardflip.svg"
                    width="20"
                  />
                  <p
                    className="c15 c16"
                  >
                    Click on the card to reveal the other side
                  </p>
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
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
