import * as React from 'react'
import renderer from 'react-test-renderer'
import { GovtechDigitalAcademyCertificateOfParticipationV2_1SigneeTemplate } from '../certificate-of-participation-v2-1-signee.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../certificate-of-participation-v2-1-signee.sample'

describe('GovtechDigitalAcademyCertificateOfParticipationV2_1SigneeTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <GovtechDigitalAcademyCertificateOfParticipationV2_1SigneeTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c2 {
              background: white;
              position: relative;
              width: 29.7cm;
              height: 21cm;
              padding: 0;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('COPv2_2sign_150dpi.png');
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

            .c1 {
              font-family: 'Lato',sans-serif;
            }

            .c3 {
              -webkit-text-stroke: 0.5px #99753e;
            }

            @media print {
              .c2 {
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
                  <div
                    className="absolute w-[568px] h-[77px] top-[192px] left-[475px] text-[64px] leading-[76.8px] tracking-[0.03em] font-bold text-[#2B2C2B] text-center"
                  >
                    CERTIFICATE
                  </div>
                  <div
                    className="c3 absolute w-[568px] h-[46px] top-[257px] left-[475px] text-[38px] leading-[45.6px] tracking-[0.11em] font-bold text-[#99753E] text-center"
                  >
                    OF PARTICIPATION
                  </div>
                  <div
                    className="absolute w-[568px] h-[24px] top-[327px] left-[475px] text-[20px] leading-[24px] font-normal text-[#A4A3A3] text-center"
                  >
                    PROUDLY PRESENTED TO
                  </div>
                  <div
                    className="absolute w-[568px] top-[375px] left-[475px] flex flex-col items-center"
                  >
                    <div
                      className="text-[27px] leading-[32.4px] font-bold text-[#000000] text-center"
                    >
                      THONG YONG JIE ANDRE
                    </div>
                    <div
                      className="h-[1px] w-[568px] mt-[10px] bg-[#99753E]"
                    />
                    <div
                      className="h-[20px] mt-[16px] text-[17px] leading-[20.4px] font-normal text-[#000000] text-center"
                    >
                      for your active participation in
                    </div>
                    <div
                      className="mt-[10px] text-[21px] leading-[25.2px] tracking-[0.01em] font-bold text-[#000000] text-center whitespace-pre-line"
                    >
                      Google AI Bootcamp 
             22 June 2023
                    </div>
                  </div>
                  <div
                    className="absolute bottom-[68px] right-[80px] flex flex-row gap-[36px]"
                  >
                    <div
                      className="w-[568px] flex flex-col items-center"
                    >
                      <div
                        className="w-[265px] h-[71px] mb-[4px] flex flex-col items-center justify-end"
                      >
                        <img
                          alt="Signature of signee one"
                          className="max-w-[265px] max-h-[71px]"
                          src="svg-stub"
                        />
                      </div>
                      <div
                        className="h-[1px] w-[265px] mb-[7px] bg-[#99753E]"
                      />
                      <div
                        className="text-[17px] leading-[17.34px] tracking-[0.01em] font-normal text-[#000000] text-center"
                      >
                        <span
                          className="inline-block whitespace-pre-wrap"
                        >
                          Sahas Sankaran
                          ,
                           
                        </span>
                        <span
                          className="inline-block"
                        >
                          Director
                          ,
                        </span>
                        <br />
                        GovTech Digital Academy
                        <br />
                        Government Technology Agency
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute h-[19px] bottom-[27px] left-[43px] text-[16px] leading-[19.2px] font-normal text-[#FFFFFF]"
                  >
                    Dates of Issue: 
                    10 May 2022
                  </div>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <GovtechDigitalAcademyCertificateOfParticipationV2_1SigneeTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('THONG YONG JIE ANDRE')).toBeTruthy()
    })
})
