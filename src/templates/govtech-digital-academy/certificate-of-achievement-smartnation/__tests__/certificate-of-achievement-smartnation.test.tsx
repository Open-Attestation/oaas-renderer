import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../certificate-of-achievement-smartnation.sample'
import { GovtechDigitalAcademyCertificateOfAchievementSmartnationTemplate } from '../certificate-of-achievement-smartnation.template'

describe('GovtechDigitalAcademyCertificateOfAchievementSmartnationTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <GovtechDigitalAcademyCertificateOfAchievementSmartnationTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c1 {
              background: white;
              position: relative;
              width: 21cm;
              min-height: 29.7cm;
              padding: 0;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('SN_COA.png');
              z-index: initial;
            }

            .c0 {
              visibility: hidden;
              -webkit-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
              -webkit-transform-origin: top left;
              -ms-transform-origin: top left;
              transform-origin: top left;
              width: -webkit-fit-content;
              width: -moz-fit-content;
              width: fit-content;
              margin: auto;
              height: auto;
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
              id="govtech-digital-academy-certificate-of-achievement-smartnation"
            >
              <div
                className="c0"
              >
                <div
                  className="relative mx-auto my-0 min-h-[29.7cm] max-w-[21cm] border border-solid border-slate-200 bg-white print:border-none font-['Lato']"
                >
                  <div
                    className="c1"
                  >
                    <div
                      className="absolute w-[541px] h-[43px] top-[225px] left-[128px] text-[36px] font-bold text-black text-center"
                    >
                      CERTIFICATE OF ACHIEVEMENT
                    </div>
                    <div
                      className="absolute w-[412px] h-[27px] top-[400px] left-[190px] text-[21px] text-black text-center"
                    >
                      This certificate of achievement is awarded to
                    </div>
                    <div
                      className="absolute top-[510px] left-[128px] right-[128px] flex flex-col gap-[106px] items-center"
                    >
                      <div
                        className="text-[30px] font-bold text-black text-center"
                      >
                        Tan Chen Chen
                      </div>
                      <div
                        className="text-[21px] text-black text-center"
                      >
                        for the successful completion of
                        <br />
                        TechUp Run 3
                        <br />
                        from 
                        28 October to 22 November 2023
                      </div>
                    </div>
                    <div
                      className="absolute w-[453px] h-[159px] top-[886px] left-[170px] flex flex-col items-center"
                    >
                      <div
                        className="w-[217px] h-[51px] mb-[4px] flex flex-col items-center justify-end"
                      >
                        <img
                          alt="Signature of signee"
                          className="max-w-[217px] max-h-[51px]"
                          src="joseph-leong-coa-signature&3f58615390f610d16d0dfdfb330cad21194eb768780cec807924ce66a321f821.png"
                        />
                      </div>
                      <div
                        className="text-[21px] text-center"
                      >
                        Joseph Leong
                        ,
                        <br />
                        Permanent Secretary
                        ,
                        <br />
                        Ministry of Digital Development and Information, Smart Nation, and Cybersecurity
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `)
    })
})
