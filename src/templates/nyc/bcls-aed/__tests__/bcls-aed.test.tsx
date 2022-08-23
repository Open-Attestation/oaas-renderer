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
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }

            .c3 {
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

            .c3 > *:not(:last-child) {
              margin-right: 8px;
            }

            .c5 {
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

            .c5 > *:not(:last-child) {
              margin-bottom: 16px;
            }

            .c12 {
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
              margin-top: 16px;
            }

            .c15 > *:not(:last-child) {
              margin-bottom: 16px;
            }

            .c14 {
              display: block;
              border-bottom: 1px solid black;
              width: 100%;
              max-width: 162px;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c6 {
              font-size: 1.25em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c8 {
              font-size: 1.25em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              max-width: 312px;
              text-align: center;
            }

            .c10 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c11 {
              font-size: 1.25em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c13 {
              font-size: 1.25em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 8px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c16 {
              font-size: 0.75em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              width: 100%;
              text-align: left;
            }

            .c7 {
              font-family: 'Libre Franklin';
              font-weight: 700;
            }

            .c4 {
              width: auto;
              height: 90px;
            }

            .c2 {
              background: white;
              border: 1px black dotted;
              position: relative;
              width: calc(100% - 34px);
              height: 350px;
              padding: 16px;
            }

            .c9 {
              position: relative;
              width: 100%;
            }

            .c9 p {
              position: absolute;
            }

            .c9 img {
              width: 100%;
            }

            .c0 {
              position: relative;
              width: 500px;
            }

            .c0 > *:not(:last-child) {
              margin-bottom: 16px;
            }

            @media not print {
              .c0 {
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

              .c0.flip {
                -webkit-transform: rotateY(180deg);
                -ms-transform: rotateY(180deg);
                transform: rotateY(180deg);
              }

              .c0 > *:nth-child(2) {
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
              className="c0"
              onClick={[Function]}
            >
              <div>
                <div
                  className="c1 c2"
                >
                  <div
                    className="c3"
                  >
                    <img
                      alt="Outward Bound School Logo"
                      className="c4"
                      src="obs-logo.png"
                    />
                  </div>
                  <div
                    className="c5"
                  >
                    <p
                      className="c6 c7"
                    >
                      John Doe
                    </p>
                    <p
                      className="c8 c7"
                    >
                      Is certified as a BCLS + AED Provider Accredited by SRFAC
                    </p>
                  </div>
                  <div
                    className="c9"
                  >
                    <p
                      className="c10 c7"
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
                  className="c1 c2"
                >
                  <p
                    className="c11 c7"
                  >
                    The holder of this card has successfully completed
                    <br />
                    the
                    <br />
                    course requirements
                  </p>
                  <div
                    className="c12"
                  >
                    <p
                      className="c13 c7"
                    >
                      ci-signature-1
                    </p>
                    <div
                      className="c14"
                    />
                    <div
                      className="c15"
                    >
                      <p
                        className="c6 c7"
                      >
                        trainer-1
                      </p>
                      <p
                        className="c6 c7"
                      >
                        Chief Instructor
                      </p>
                      <p
                        className="c10 c7"
                      >
                        Certification is valid for 2 years from date of issue
                      </p>
                    </div>
                  </div>
                  <p
                    className="c16 c7"
                  >
                    S/N: 
                    serial-number-1
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
