import * as React from 'react'
import renderer from 'react-test-renderer'
import { GovtechDigitalAcademyCertificateOfParticipation_1SigneeTemplate } from '../certificate-of-participation-1-signee.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../certificate-of-participation-1-signee.sample'

describe('GovtechDigitalAcademyCertificateOfParticipation_1SigneeTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <GovtechDigitalAcademyCertificateOfParticipation_1SigneeTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c0 {
              background: white;
              position: relative;
              width: 29cm;
              height: 20.6cm;
              padding: 2cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('COC_1sign_150dpi.png');
              z-index: initial;
            }

            .c1 {
              position: absolute;
              width: 372px;
              height: 66px;
              left: 552.39px;
              top: 185.43px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 700;
              font-size: 54px;
              line-height: 66px;
              -webkit-letter-spacing: 0.01em;
              -moz-letter-spacing: 0.01em;
              -ms-letter-spacing: 0.01em;
              letter-spacing: 0.01em;
              text-align: center;
              color: #2b2c2b;
            }

            .c2 {
              position: absolute;
              width: 409px;
              height: 50px;
              left: 556.32px;
              top: 235.21px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 700;
              font-size: 41px;
              line-height: 50px;
              text-align: center;
              color: #9d7a45;
            }

            .c3 {
              position: absolute;
              width: 244px;
              height: 22px;
              left: 617.78px;
              top: 317.19px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 700;
              font-size: 18px;
              line-height: 22px;
              color: #a9a8a8;
            }

            .c4 {
              position: absolute;
              width: 558px;
              height: 54px;
              top: 357px;
              right: 73px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 700;
              font-size: 24px;
              line-height: 110%;
              text-align: center;
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
              -webkit-box-pack: end;
              -webkit-justify-content: end;
              -ms-flex-pack: end;
              justify-content: end;
              color: #000000;
            }

            .c5 {
              position: absolute;
              width: 558px;
              left: 463px;
              top: 420px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 400;
              font-size: 17px;
              line-height: 125%;
              text-align: center;
              -webkit-letter-spacing: -0.01em;
              -moz-letter-spacing: -0.01em;
              -ms-letter-spacing: -0.01em;
              letter-spacing: -0.01em;
              color: #2b2c2b;
            }

            .c6 {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 600;
              padding: 14px 0;
              display: block;
              text-align: center;
              color: #000000;
              white-space: pre-line;
            }

            .c9 {
              position: absolute;
              width: 259px;
              height: 51px;
              left: 610.84px;
              top: 677.36px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 500;
              font-size: 12px;
              line-height: 110%;
              text-align: center;
              -webkit-letter-spacing: -0.01em;
              -moz-letter-spacing: -0.01em;
              -ms-letter-spacing: -0.01em;
              letter-spacing: -0.01em;
              color: #000000;
            }

            .c7 {
              position: absolute;
              width: 259px;
              height: 85px;
              top: 588px;
              right: 224px;
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

            .c8 {
              display: block;
              max-width: 259px;
              max-height: 85px;
            }

            .c11 {
              position: absolute;
              width: 320px;
              height: 135px;
              bottom: 43px;
              left: 8px;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              background-color: lightblue;
            }

            .c12 {
              display: block;
              max-width: 259px;
              max-height: 85px;
            }

            .c13 {
              position: absolute;
              bottom: 8px;
              left: 8px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              text-align: left;
              color: #ffffff;
            }

            .c10 {
              position: absolute;
              bottom: 184px;
              left: 8px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              text-align: left;
              color: #ffffff;
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
              </div>
              <div
                className="c2"
              >
                OF PARTICIPATION
              </div>
              <div
                className="c3"
              >
                PROUDLY PRESENTED TO
              </div>
              <div
                className="c4"
              >
                THONG YONG JIE ANDRE
              </div>
              <div
                className="c5"
              >
                <div
                  className=""
                >
                  for your active participation in
                </div>
                <div
                  className="c6"
                >
                  Google AI Bootcamp 
             22 June 2023
                </div>
              </div>
              <div
                className="c7"
              >
                <img
                  alt="Signature of signee"
                  className="c8"
                  src="svg-stub"
                />
              </div>
              <div
                className="c9"
              >
                Sahas Sankaran
                , 
                Director
                <br />
                GovTech Digital Academy
                <br />
                Government Technology Agency
              </div>
              <div
                className="c10"
              >
                Partner:
              </div>
              <div
                className="c11"
              >
                <img
                  alt="Partner Logo"
                  className="c12"
                  src="data:image/png;base64,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"
                />
              </div>
              <div
                className="c13"
              >
                Date of Issue: 
                10 May 2022
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <GovtechDigitalAcademyCertificateOfParticipation_1SigneeTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('THONG YONG JIE ANDRE')).toBeTruthy()
    })
})
