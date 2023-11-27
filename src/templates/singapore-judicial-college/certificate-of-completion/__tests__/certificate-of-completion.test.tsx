import * as React from 'react'
import renderer from 'react-test-renderer'
import { SingaporeJudicialCollegeCertificateOfCompletionTemplate } from '../certificate-of-completion.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../certificate-of-completion.sample'

describe('SingaporeJudicialCollegeCertificateOfCompletionTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <SingaporeJudicialCollegeCertificateOfCompletionTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c0 {
              background: white;
              position: relative;
              width: 21cm;
              min-height: 29.7cm;
              padding: 2cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('sjc_bg.png');
              z-index: initial;
            }

            .c1 {
              position: absolute;
              top: 307px;
              left: 0px;
              right: 0px;
              padding-left: 2cm;
              padding-right: 2cm;
              color: #145080;
              text-align: center;
              font-family: 'Nunito',sans-serif;
              font-size: 43px;
              font-style: normal;
              font-weight: 750;
              line-height: 132%;
            }

            .c2 {
              position: absolute;
              top: 444px;
              left: 0px;
              right: 0px;
              padding-left: 2cm;
              padding-right: 2cm;
              color: #5dbab2;
              text-align: center;
              font-family: Nunito;
              font-size: 18px;
              font-style: normal;
              font-weight: 760;
              line-height: 132%;
            }

            .c3 {
              position: absolute;
              top: 475px;
              left: 0px;
              right: 0px;
              padding-left: 2cm;
              padding-right: 2cm;
              color: #145080;
              text-align: center;
              font-family: Italianno;
              font-size: 62px;
              font-style: normal;
              font-weight: 400;
              line-height: 132%;
              -webkit-letter-spacing: 1.24px;
              -moz-letter-spacing: 1.24px;
              -ms-letter-spacing: 1.24px;
              letter-spacing: 1.24px;
            }

            .c4 {
              position: absolute;
              top: 611px;
              left: 0px;
              right: 0px;
              padding-left: 2cm;
              padding-right: 2cm;
              color: #5dbab2;
              text-align: center;
              font-family: Nunito;
              font-size: 18px;
              font-style: normal;
              font-weight: 760;
              line-height: 132%;
            }

            .c5 {
              position: absolute;
              top: 659px;
              left: 0px;
              right: 0px;
              padding-left: 2cm;
              padding-right: 2cm;
              color: #145080;
              text-align: center;
              font-family: Nunito;
              font-size: 20px;
              font-style: normal;
              font-weight: 760;
              line-height: 140%;
            }

            .c6 {
              position: absolute;
              top: 780px;
              left: 0px;
              right: 0px;
              padding-left: 2cm;
              padding-right: 2cm;
              color: #5dbab2;
              text-align: center;
              font-family: Nunito;
              font-size: 18px;
              font-style: normal;
              font-weight: 760;
              line-height: 132%;
            }

            .c7 {
              position: absolute;
              top: 823px;
              left: 0px;
              right: 0px;
              padding-left: 2cm;
              padding-right: 2cm;
              color: #145080;
              text-align: center;
              font-family: Nunito;
              font-size: 22px;
              font-style: normal;
              font-weight: 850;
              line-height: 140%;
            }

            .c8 {
              position: absolute;
              top: 854px;
              left: 0px;
              right: 0px;
              padding-left: 2cm;
              padding-right: 2cm;
              color: #145080;
              text-align: center;
              font-family: Nunito;
              font-size: 18px;
              font-style: normal;
              font-weight: 760;
              line-height: 140%;
            }

            .c9 {
              position: absolute;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
              left: 0px;
              right: 0px;
              bottom: 66px;
              padding-left: 131px;
              padding-right: 131px;
            }

            .c10 {
              position: relative;
              color: #145080;
              text-align: center;
              font-family: Nunito;
              font-size: 16px;
              font-style: normal;
              font-weight: 750;
              line-height: 140%;
            }

            .c11 {
              position: relative;
              color: #145080;
              text-align: center;
              font-family: Nunito;
              font-size: 16px;
              font-style: normal;
              font-weight: 850;
              line-height: 125%;
            }

            @media print {
              .c0 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
              }
            }

            <div
              className="c0"
            >
              <div
                className="c1"
              >
                CERTIFICATE
                <br />
                OF COMPLETION
              </div>
              <div
                className="c2"
              >
                awarded to
              </div>
              <div
                className="c3"
              >
                <b>
                  Goh Yihan
                </b>
              </div>
              <div
                className="c4"
              >
                for successfully completing
              </div>
              <div
                className="c5"
              >
                COURTROOM COMMUNICATION
                <br />
                01 - 07 September 2022
              </div>
              <div
                className="c6"
              >
                conducted by
              </div>
              <div
                className="c7"
              >
                SINGAPORE JUDICIAL COLLEGE
              </div>
              <div
                className="c8"
              >
                SUPREME COURT OF SINGAPORE
              </div>
              <div
                className="c9"
              >
                <div
                  className="c10"
                >
                  07 SEPTEMBER 2022
                </div>
                <div
                  className="c11"
                >
                  Sundaresh Menon
                  <br />
                  Chief Justice
                  <br />
                  Republic of Singapore
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <SingaporeJudicialCollegeCertificateOfCompletionTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('Goh Yihan')).toBeTruthy()
    })
})
