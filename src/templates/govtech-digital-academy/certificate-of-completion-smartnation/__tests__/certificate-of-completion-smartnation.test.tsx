import * as React from 'react'
import renderer from 'react-test-renderer'
import { GovtechDigitalAcademyCertificateOfCompletionSmartnationTemplate } from '../certificate-of-completion-smartnation.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../certificate-of-completion-smartnation.sample'

describe('GovtechDigitalAcademyCertificateOfCompletionSmartnationTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <GovtechDigitalAcademyCertificateOfCompletionSmartnationTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c1 {
              background: white;
              position: relative;
              width: 29.7cm;
              height: 21cm;
              padding: 2cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('COC_1sign_150dpi_no-logo.png');
              z-index: initial;
            }

            .c0 {
              -webkit-transform: scale(0.8677343468361025);
              -ms-transform: scale(0.8677343468361025);
              transform: scale(0.8677343468361025);
              -webkit-transform-origin: top left;
              -ms-transform-origin: top left;
              transform-origin: top left;
              height: 690px;
            }

            .c2 {
              position: absolute;
              width: 372px;
              height: 66.01px;
              top: 80px;
              left: 564.39px;
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

            .c3 {
              display: block;
              width: 292.96px;
              height: 66.01px;
            }

            .c4 {
              position: absolute;
              width: 372px;
              height: 66px;
              left: 564.39px;
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

            .c5 {
              position: absolute;
              width: 364px;
              height: 50px;
              left: 568.32px;
              top: 235.21px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 700;
              font-size: 41px;
              line-height: 50px;
              text-align: center;
              color: #9d7a45;
            }

            .c6 {
              position: absolute;
              width: 244px;
              height: 22px;
              left: 629.78px;
              top: 317.19px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 700;
              font-size: 18px;
              line-height: 22px;
              color: #a9a8a8;
            }

            .c7 {
              position: absolute;
              width: 558px;
              height: 54px;
              top: 365px;
              right: 85px;
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

            .c8 {
              position: absolute;
              width: 558px;
              left: 475px;
              top: 428px;
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

            .c9 {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 600;
              padding: 14px 0;
              display: block;
              text-align: center;
              color: #000000;
              white-space: pre-line;
            }

            .c12 {
              position: absolute;
              width: 272px;
              height: 51px;
              left: 618.84px;
              top: 692.36px;
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

            .c10 {
              position: absolute;
              width: 259px;
              height: 65px;
              top: 619px;
              right: 236px;
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
              width: auto;
              height: auto;
              max-width: 259px;
              max-height: 65px;
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
                  <img
                    alt="Smart Nation Logo"
                    className="c3"
                    src="smart-nation-logo.svg"
                  />
                </div>
                <div
                  className="c4"
                >
                  CERTIFICATE
                </div>
                <div
                  className="c5"
                >
                  OF COMPLETION
                </div>
                <div
                  className="c6"
                >
                  PROUDLY PRESENTED TO
                </div>
                <div
                  className="c7"
                >
                  THONG YONG JIE ANDRE
                </div>
                <div
                  className="c8"
                >
                  <div
                    className=""
                  >
                    for achieving the requirements and learnings of
                  </div>
                  <div
                    className="c9"
                  >
                    Information & Communications Technology & Smart Systems Sector Milestone Programme (ICTMP)
                    <br />
                    <br />
                    30 October 2023 - 21 February 2024
                  </div>
                  <div
                    className=""
                  >
                    Your commitment to continuing professional development has
                    <br />
                    helped advance digital transformation in the Public Service.
                  </div>
                </div>
                <div
                  className="c10"
                >
                  <img
                    alt="Signature of signee"
                    className="c11"
                    src="joseph-leong-signature&6bb7c9981a0e17da0609cf3722b244af0006e585d7dc5a293f2383689303672d.png"
                  />
                </div>
                <div
                  className="c12"
                >
                  Joseph Leong
                  ,
                  <br />
                  Permanent Secretary
                  ,
                  <br />
                  Smart Nation and Digital Government Group
                </div>
                <div
                  className="c13"
                >
                  Date of Issue: 
                  21 February 2024
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <GovtechDigitalAcademyCertificateOfCompletionSmartnationTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('THONG YONG JIE ANDRE')).toBeTruthy()
    })
})
