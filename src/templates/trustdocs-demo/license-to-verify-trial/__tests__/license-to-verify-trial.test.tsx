import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../license-to-verify-trial.sample'
import { TrustdocsDemoLicenseToVerifyTrialTemplate } from '../license-to-verify-trial.template'

describe('TrustdocsDemoLicenseToVerifyTrialTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <TrustdocsDemoLicenseToVerifyTrialTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
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
                className="w-[1280px]"
              >
                <div
                  className="flex flex-row items-start justify-center gap-1 bg-[#FDF2F2] p-1 leading-5"
                >
                  <div
                    className="my-4 text-[18px] font-bold font-['Inter'] text-[#374151]"
                  >
                    This document has expired.
                  </div>
                </div>
                <div
                  className="h-[400px] flex flex-col gap-1 items-start justify-center items-center gap-1 bg-[#F3F4F6] p-1 leading-5"
                >
                  <img
                    alt="HSA stamp"
                    src="outline-ban.png"
                    style={
                      Object {
                        "height": "93px",
                        "width": "93px",
                      }
                    }
                  />
                  <div
                    className="my-4 text-[18px] font-bold font-['Inter'] text-[#6B7280]"
                  >
                    Issuer has disabled it from being displayed.
                  </div>
                </div>
              </div>
            </div>
        `)
    })
})
