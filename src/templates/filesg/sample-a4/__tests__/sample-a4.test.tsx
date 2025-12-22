import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../sample-a4.sample'
import { FilesgSampleA4Template } from '../sample-a4.template'

describe('FilesgSampleA4Template', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <FilesgSampleA4Template
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

            .c3 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              text-align: center;
            }

            .c7 {
              font-size: 20px;
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
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
            }

            .c4 {
              font-family: Libre Franklin;
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

            .c0 {
              -webkit-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
              -webkit-transform-origin: top left;
              -ms-transform-origin: top left;
              transform-origin: top left;
              height: 1152px;
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
                      Certificate of 
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
                      This is to certify that
                    </p>
                    <p
                      className="c8 c4"
                    >
                      John Doe
                    </p>
                    <p
                      className="c9 c4"
                    >
                      has completed
                    </p>
                    <p
                      className="c8 c4"
                    >
                       CSA Milestone Programme
                    </p>
                    <p
                      className="c8 c4"
                    >
                      10 May 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
        `)
    })
})
