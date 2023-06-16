import * as React from 'react'
import renderer from 'react-test-renderer'
import { ForTestingOpenattestationDemoCertificateCardTemplate } from '../openattestation-demo-certificate-card.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../openattestation-demo-certificate-card.sample'

describe('ForTestingOpenattestationDemoCertificateCardTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <ForTestingOpenattestationDemoCertificateCardTemplate
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

            .c3 {
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
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }

            .c5 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: 100%;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: start;
              -webkit-justify-content: flex-start;
              -ms-flex-pack: start;
              justify-content: flex-start;
            }

            .c5 > *:not(:last-child) {
              margin-right: 8px;
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

            .c7 > *:not(:last-child) {
              margin-bottom: 16px;
            }

            .c15 {
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
              margin-top: 0px;
            }

            .c15 > *:not(:last-child) {
              margin-bottom: 16px;
            }

            .c19 {
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

            .c4 {
              width: calc(100% - 1px);
              height: calc(100% - 1px);
              background: white;
              position: relative;
              padding: 24px 24px 8px 24px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 16px;
              z-index: 0;
              -webkit-print-color-adjust: exact;
            }

            .c13 {
              width: calc(100% - 1px);
              height: calc(100% - 1px);
              background: white;
              position: relative;
              padding: 56px 24px 4px 24px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 16px;
              z-index: 0;
              -webkit-print-color-adjust: exact;
            }

            .c18 {
              position: relative;
              width: 100%;
            }

            .c20 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-left: 8px;
              text-align: center;
            }

            .c21 {
              font-family: Libre Franklin;
            }

            .c2 {
              position: relative;
              width: 500px;
              height: 350px;
            }

            .c2 .card-face {
              width: 500px;
              height: 350px;
            }

            .c2 .card-face:first-child {
              page-break-after: always;
            }

            .c8 {
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              margin-top: 16px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c10 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              max-width: 312px;
              text-align: center;
            }

            .c12 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c14 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c16 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c17 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              width: 100%;
              text-align: left;
            }

            .c9 {
              font-family: 'Libre Franklin';
            }

            .c6 {
              width: auto;
              height: 70px;
              margin: 0;
            }

            .c11 {
              position: relative;
              width: 100%;
            }

            .c11 img {
              width: 100%;
            }

            .c1 {
              min-width: 500px;
            }

            @media print {
              .c18 {
                display: none;
              }
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
                    className="c3 c4"
                    style={
                      Object {
                        "overflow": "hidden",
                      }
                    }
                  >
                    <div
                      className="c5"
                    >
                      <img
                        alt="Outward Bound School Logo"
                        className="c6"
                        src="oa.svg"
                      />
                    </div>
                    <div
                      className="c7"
                    >
                      <div
                        className="c0"
                      >
                        <p
                          className="c8 c9"
                        >
                          John Doe
                        </p>
                      </div>
                      <p
                        className="c10 c9"
                      >
                        Is certified as a OpenAttestation user
                      </p>
                    </div>
                    <div
                      className="c11"
                    >
                      <p
                        className="c12 c9"
                      >
                        Date issued: 
                        16/01/2023
                      </p>
                      <img
                        alt="OUTWARD BOUND SINGAPORE LIFE SUPPORTING TRAINING CENTRE"
                        src="oa.svg"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="card-face"
                >
                  <div
                    className="c3 c13"
                  >
                    <p
                      className="c14 c9"
                    >
                      The holder of this card has successfully completed the demo
                    </p>
                    <div
                      className="c0"
                    >
                      <div
                        className="c15"
                      >
                        <p
                          className="c16 c9"
                        >
                          Certificate is valid till
                           
                          15 Jan 2025
                        </p>
                      </div>
                    </div>
                    <p
                      className="c17 c9"
                    >
                      S/N: 
                      OADC2023/01
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="c18"
              >
                <div
                  className="c19"
                >
                  <img
                    alt="card flip icon"
                    src="icon-cardflip.svg"
                    width="20"
                  />
                  <p
                    className="c20 c21"
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
            <ForTestingOpenattestationDemoCertificateCardTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
