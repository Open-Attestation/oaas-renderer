import { render, screen } from '@testing-library/react'
import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../bcls-aed.sample'
import { NycBclsAedTemplate } from '../bcls-aed.template'

describe('NycBclsAedTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NycBclsAedTemplate
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

            .c19 {
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

            .c19 > *:not(:last-child) {
              margin-bottom: 16px;
            }

            .c25 {
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

            .c18 {
              display: block;
              border-bottom: 1px solid black;
              width: 100%;
              max-width: 162px;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c8 {
              font-size: 1.25em;
              font-style: normal;
              font-weight: 700;
              margin-top: 16px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c10 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c11 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              max-width: 312px;
              text-align: center;
            }

            .c13 {
              font-size: 0.75em;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c15 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c16 {
              font-size: 1.25em;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 8px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c20 {
              font-size: 0.75em;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c21 {
              font-size: 0.75em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c22 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c23 {
              font-size: 0.75em;
              font-style: normal;
              font-weight: 400;
              width: 100%;
              text-align: left;
            }

            .c26 {
              font-size: 0.75em;
              font-style: normal;
              font-weight: 400;
              margin-left: 8px;
              text-align: center;
            }

            .c9 {
              font-family: 'Libre Franklin';
            }

            .c6 {
              width: auto;
              height: 70px;
              margin: 0;
            }

            .c4 {
              background: white;
              border: 1px solid #ccc;
              position: relative;
              width: 500px;
              height: 350px;
              box-sizing: border-box;
              padding: 24px 24px 8px 24px;
              border-radius: 16px;
            }

            .c14 {
              background: white;
              border: 1px solid #ccc;
              position: relative;
              width: 500px;
              height: 350px;
              box-sizing: border-box;
              padding: 56px 24px 4px 24px;
              border-radius: 16px;
            }

            .c12 {
              position: relative;
              width: 100%;
            }

            .c12 img {
              width: 100%;
            }

            .c17 {
              max-height: 72px;
            }

            .c24 {
              position: relative;
              width: 100%;
            }

            .c1 {
              min-width: 500px;
            }

            .c2 {
              position: relative;
              width: 500px;
            }

            .c2 > *:not(:last-child) {
              margin-bottom: 16px;
            }

            @media print {
              .c24 {
                display: none;
              }
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

              .c2 > *:nth-child(2) {
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
                    <div
                      className="c5"
                    >
                      <img
                        alt="Outward Bound School Logo"
                        className="c6"
                        src="obs-logo.png"
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
                        <p
                          className="c10 c9"
                        >
                          nric-1
                        </p>
                      </div>
                      <p
                        className="c11 c9"
                      >
                        Is certified as a BCLS + AED Provider Accredited by SRFAC
                      </p>
                    </div>
                    <div
                      className="c12"
                    >
                      <p
                        className="c13 c9"
                      >
                        Date issued: 
                        01/03/2020
                      </p>
                      <img
                        alt="OUTWARD BOUND SINGAPORE LIFE SUPPORTING TRAINING CENTRE"
                        src="obstc-logo.png"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="c3 c14"
                  >
                    <p
                      className="c15 c9"
                    >
                      The holder of this card has successfully completed the course requirements
                    </p>
                    <div
                      className="c0"
                    >
                      <p
                        className="c16 c9"
                      >
                        <img
                          alt="ci signature"
                          className="c17"
                          src="1e4008a9529d7f62affa65d71ca40f9e92fe15041b9e77d331ec5a839217fdfc.png"
                        />
                      </p>
                      <div
                        className="c18"
                      />
                      <div
                        className="c19"
                      >
                        <div
                          className="c0"
                        >
                          <p
                            className="c20 c9"
                          >
                            trainer-1
                          </p>
                          <p
                            className="c21 c9"
                          >
                            Chief Instructor
                          </p>
                        </div>
                        <p
                          className="c22 c9"
                        >
                          Certification is valid for 2 years from date of issue
                        </p>
                      </div>
                    </div>
                    <p
                      className="c23 c9"
                    >
                      S/N: 
                      serial-number-1
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="c24"
              >
                <div
                  className="c25"
                >
                  <img
                    alt="card flip icon"
                    src="icon-cardflip.svg"
                    width="20"
                  />
                  <p
                    className="c26 c9"
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
            <NycBclsAedTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })

    test('Should format issuer date to DD/MM/YYYY', () => {
        render(
            <NycBclsAedTemplate
                document={{
                    ...sample,
                    issueDate: '2020-03-01',
                }}
                handleObfuscation={() => void 0}
            />
        )

        expect(screen.getByText(/01\/03\/2020/)).toBeTruthy()
    })
})
