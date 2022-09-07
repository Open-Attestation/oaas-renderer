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
            }

            .c2 > *:first-child {
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

            .c3 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: 352px;
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

            .c14 {
              position: relative;
              width: 100%;
            }

            .c16 {
              font-size: 0.75em;
              font-style: normal;
              font-weight: 400;
              margin-left: 8px;
              text-align: center;
            }

            .c17 {
              font-family: Libre Franklin;
            }

            .c4 {
              background: white;
              position: relative;
              width: 352px;
              height: 230px;
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

            .c5 {
              max-width: 100%;
              height: auto;
              position: absolute;
              z-index: -1;
              border-radius: 16px;
              border: 1px solid #ccc;
            }

            .c6 {
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

            .c7 {
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

            .c8 {
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

            .c9 {
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

            .c10 {
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

            .c11 {
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

            .c12 {
              display: block;
              max-width: 162px;
              max-height: 89px;
              width: auto;
              height: auto;
            }

            .c13 {
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
                -webkit-transform: rotateY(0deg);
                -ms-transform: rotateY(0deg);
                transform: rotateY(0deg);
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

              .c2 > *:last-child {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                -webkit-transform: scaleX(-1) translateZ(-1px);
                -ms-transform: scaleX(-1) translateZ(-1px);
                transform: scaleX(-1) translateZ(-1px);
              }
            }

            @media print {
              .c14 {
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
                <div>
                  <div
                    className="c3 c4"
                  >
                    <img
                      className="c5"
                      src="obs-wmfr-front-bg.png"
                    />
                    <div
                      className="c6"
                    >
                      John Doe
                    </div>
                    <div
                      className="c7"
                    >
                      Successfully completed
                      <br />
                      Wilderness Medical First Responder
                      <br />
                      (WMFR)
                    </div>
                    <div
                      className="c8"
                    >
                      S/N: 
                      OBSWMFR20XX/XXX
                    </div>
                    <div
                      className="c9"
                    >
                      DATE OF ISSUE: 
                      10/05/2022
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="c3 c4"
                  >
                    <img
                      className="c5"
                      src="obs-wmfr-back-bg.png"
                    />
                    <div
                      className="c10"
                    >
                      Valid till 
                      10 May 2024
                    </div>
                    <div
                      className="c11"
                    >
                      <img
                        className="c12"
                        src="1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                      />
                    </div>
                    <div
                      className="c13"
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
                className="c14"
              >
                <div
                  className="c15"
                >
                  <img
                    alt="card flip icon"
                    src="icon-cardflip.svg"
                    width="20"
                  />
                  <p
                    className="c16 c17"
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
