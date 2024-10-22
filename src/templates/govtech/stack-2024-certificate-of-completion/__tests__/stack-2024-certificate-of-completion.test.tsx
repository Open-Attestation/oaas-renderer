import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../stack-2024-certificate-of-completion.sample'
import { GovtechStack_2024CertificateOfCompletionTemplate } from '../stack-2024-certificate-of-completion.template'

describe('GovtechStack_2024CertificateOfCompletionTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <GovtechStack_2024CertificateOfCompletionTemplate
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
              padding: 0px;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('stack-bg.png');
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
                className="text-[#414042]"
                id="govtech-stack-2024-certificate-of-completion"
              >
                <div
                  className="c1"
                >
                  <div
                    className="pt-[258.36px] font-[\\"Lato\\"]"
                  >
                    <div
                      className="relative m-auto flex h-[467px] w-[853.35px] flex-col items-center justify-between"
                    >
                      <div
                        className="flex flex-col items-center text-center"
                      >
                        <div
                          className="mb-[24px] text-[35px] font-bold leading-[42px]"
                        >
                          CERTIFICATE OF COMPLETION
                        </div>
                        <div
                          className="text-wrap text-[43px] font-bold leading-[51.6px]"
                        >
                          VICTORIA-GRACE PENELOPE WESTMINSTER-HUNTINGTON III
                        </div>
                        <div
                          className="mb-[18.72px] mt-[14.28px] w-[800px] border-b-[0.67px] border-t-0 border-solid border-[#231F20]"
                        />
                        <div
                          className="leading=[22.8px] flex flex-col gap-[5px] text-[19px]"
                        >
                          <div>
                            has successfully completed the
                          </div>
                          <div
                            className="text-wrap text-[30px] font-bold leading-[36px]"
                          >
                            Methods in Cognitive Psychology: Understanding Human Behavior Through Machine Learning Analytics
                          </div>
                          <div>
                            technical workshop at STACK Developer Conference
                          </div>
                          <div>
                            organised by Government Technology Agency of Singapore ​(GovTech)
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute bottom-[0px] flex w-full flex-row items-end justify-between text-nowrap text-[16px] leading-[19.2px]"
                      >
                        <div
                          className="relative flex items-end"
                        >
                          <div
                            className="w-[144.81px]"
                          >
                            <img
                              alt="signature"
                              className="max-w-full"
                              src="data:image/png;base64,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"
                            />
                          </div>
                          <div>
                            <div
                              className="font-bold"
                            >
                              Christopher Tan
                            </div>
                            <div>
                              Ministry of Magic
                            </div>
                          </div>
                        </div>
                        <div
                          className="w-[204px]"
                        >
                          <div
                            className="font-bold"
                          >
                            Date
                          </div>
                          <div
                            className="text-[19px] leading-[22.8px]"
                          >
                            5 November 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `)
    })
})
