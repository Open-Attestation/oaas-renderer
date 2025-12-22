import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../dat-cop.sample'
import { GovtechDatCopTemplate } from '../dat-cop.template'

describe('GovtechDatCopTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <GovtechDatCopTemplate
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
              padding: 0;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('GTO-COP-silver.png');
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
              className="c0"
            >
              <div
                className="c1"
              >
                <div
                  className="absolute w-[760px] h-[91px] top-[185px] left-[86px] text-[70px] tracking-[0.08em] font-bold text-[#FFFFFF] font-['IBM_Plex_Serif']"
                >
                  CERTIFICATE
                </div>
                <div
                  className="absolute w-[760px] h-[28px] top-[275px] left-[89px] text-[27px] tracking-[0.19em] font-normal text-[#FFFFFF] font-['Questrial']"
                >
                  OF PARTICIPATION
                </div>
                <div
                  className="absolute w-[940px] h-[23.03px] top-[347px] left-[89px] text-[24px] tracking-[0.17em] font-normal text-[#FFFFFF] font-['Questrial']"
                >
                  This certificate is presented to
                </div>
                <div
                  className="absolute w-[940px] h-[55.06px] top-[408px] left-[89px] text-[43px] tracking-[0.12em] font-bold text-[#F37920] font-['IBM_Plex_Serif']"
                >
                  JOHNATHAN DOE
                </div>
                <div
                  className="absolute w-[940px] h-[23.03px] top-[490.46px] left-[89px] text-[21px] tracking-[0.12em] font-normal text-[#FFFFFF] font-['Questrial']"
                >
                  in recognition for your valued participation
                </div>
                <div
                  className="absolute w-[940px] h-[23.03px] top-[525px] left-[89px] text-[21px] tracking-[0.12em] font-normal text-[#FFFFFF] font-['Questrial']"
                >
                  in the 
                  Prompt Royale Award
                </div>
                <div
                  className="absolute bottom-[98px] left-[89px] flex flex-row gap-[36px]"
                >
                  <div
                    className="w-[180px] flex flex-col items-center"
                  >
                    <div
                      className="text-[21px] tracking-[0.12em] italic text-[#FFFFFF] text-center ordinal font-['Open_Sans']"
                    >
                      15
                      <sup>
                        th
                      </sup>
                       
                      NOV
                       
                      2024
                    </div>
                    <div
                      className="h-[1px] w-[180px] mb-[7px] bg-[#FFFFFF]"
                    />
                    <div
                      className="text-[20px] tracking-[0.1em] font-bold text-[#FFFFFF] text-center font-['Open_Sans']"
                    >
                      DATE
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bottom-[76px] left-[329px] flex flex-row gap-[36px]"
                >
                  <div
                    className="w-[242.76px] flex flex-col items-center"
                  >
                    <div
                      className="w-[242.76px] h-[71px] mb-[4px] flex flex-col items-center justify-end translate-y-[16px]"
                    >
                      <img
                        alt="Signature of signee"
                        className="max-w-[242.76px] max-h-[71px]"
                        src="chang-sau-sheong-signature&9b31b9f05b81bc64dfd2a9ecb412ed43297da93bf7c8708407954d1ac855ad96.png"
                      />
                    </div>
                    <div
                      className="h-[1px] w-[242.76px] mb-[7px] bg-[#FFFFFF]"
                    />
                    <div
                      className="text-[20px] tracking-[0.1em] font-bold text-[#FFFFFF] text-center font-['Lato']"
                    >
                      CHANG SAU SHEONG
                    </div>
                    <div
                      className="mt-[7px] text-[13px] tracking-[0.2em] text-[#FFFFFF] text-center font-['Open_Sans']"
                    >
                      DEPUTY CHIEF EXECUTIVE
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `)
    })
})
