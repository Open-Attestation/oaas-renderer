import * as React from 'react'
import renderer from 'react-test-renderer'
import { GovtechDigitalAcademyCertificateOfCompletion_1SigneeTemplate } from '../certificate-of-completion-1-signee.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../certificate-of-completion-1-signee.sample'

describe('GovtechDigitalAcademyCertificateOfCompletion_1SigneeTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <GovtechDigitalAcademyCertificateOfCompletion_1SigneeTemplate
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
              width: 364px;
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

            .c10 {
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
                OF COMPLETION
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
                  for achieving the requirements and learnings of
                </div>
                <div
                  className="c6"
                >
                  Certified ScrumMaster (CSM) + Certified LeSS Basics (CLB) Workshop
                </div>
                <div
                  className=""
                >
                  Your commitment to continuing professional development has
                  <br />
                  helped advance digital transformation across and beyond the
                  <br />
                  Public Service.
                </div>
              </div>
              <div
                className="c7"
              >
                <img
                  alt="Signature of signee two"
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
                Date of Issue: 
                10 May 2022
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <GovtechDigitalAcademyCertificateOfCompletion_1SigneeTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('THONG YONG JIE ANDRE')).toBeTruthy()
    })
})
