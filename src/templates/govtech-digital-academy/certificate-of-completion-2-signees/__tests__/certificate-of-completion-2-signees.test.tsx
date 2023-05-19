import * as React from 'react'
import renderer from 'react-test-renderer'
import { GovtechDigitalAcademyCertificateOfCompletion_2SigneesTemplate } from '../certificate-of-completion-2-signees.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../certificate-of-completion-2-signees.sample'

describe('GovtechDigitalAcademyCertificateOfCompletion_2SigneesTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <GovtechDigitalAcademyCertificateOfCompletion_2SigneesTemplate
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
              background-image: url('COC_2sign_150dpi.png');
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
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              text-align: center;
              color: #000000;
            }

            .c9 {
              position: absolute;
              width: 259px;
              height: 59px;
              top: 677.36px;
              right: 367px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 500;
              font-size: 12px;
              line-height: 110%;
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
              text-align: center;
              -webkit-letter-spacing: -0.01em;
              -moz-letter-spacing: -0.01em;
              -ms-letter-spacing: -0.01em;
              letter-spacing: -0.01em;
            }

            .c12 {
              position: absolute;
              width: 259px;
              height: 51px;
              left: 771.84px;
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
              right: 367px;
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
              width: 259px;
              height: 85px;
              top: 588px;
              right: 64px;
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
                  for achieving the assesment requirements and learnings of
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
                  alt="Signature of signee one"
                  className="c8"
                  src="data:image/png;base64,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OC02Mjc2NzFlODg0NjMiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTAzYTVkZjUtN2FjZS00NjlhLWI3NmItNmIxZTEwZDhiODE1IgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDJhZWRiODgtZGQzNy00OGQwLWJiOGQtNmI3OWM0NWNmY2ZjIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iTWFjIE9TIgogICBHSU1QOlRpbWVTdGFtcD0iMTY4Mzg3Nzk3OTIyMTk3MyIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjMyIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMzowNToxMlQxNTo1Mjo1MyswODowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjM6MDU6MTJUMTU6NTI6NTMrMDg6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NDkyY2Q3Yi02MTM5LTRiMjYtYjc2ZC0zZjQ5ZDg1NjQ2NzEiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTWFjIE9TKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMy0wNS0xMlQxNTo1Mjo1OSswODowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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"
                />
              </div>
              <div
                className="c9"
              >
                Betsie Chacko
                , 
                Associate Director
                <br />
                GovTech Digital Academy
                <br />
                Government Technology Agency
              </div>
              <div
                className="c10"
              >
                <img
                  alt="Signature of signee two"
                  className="c11"
                  src="svg-stub"
                />
              </div>
              <div
                className="c12"
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
            <GovtechDigitalAcademyCertificateOfCompletion_2SigneesTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('THONG YONG JIE ANDRE')).toBeTruthy()
    })
})
