import * as React from 'react'
import renderer from 'react-test-renderer'
import { SingaporeJudicialCollegeLetterOfAppreciationTemplate } from '../letter-of-appreciation.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../letter-of-appreciation.sample'

describe('SingaporeJudicialCollegeLetterOfAppreciationTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <SingaporeJudicialCollegeLetterOfAppreciationTemplate
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
              padding: 162px 96px 0px 96px;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('letter-bg.jpg');
              z-index: initial;
            }

            .c2 {
              font-family: 'Italianno';
              font-style: normal;
              font-weight: 400;
              font-size: 64px;
              line-height: 150%;
              text-align: center;
            }

            .c1 {
              font-family: Arial;
              font-size: 16px;
              font-weight: 400;
              line-height: 20px;
              text-align: left;
            }

            @media print {
              .c0 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
              }
            }

            <div
              className="c0"
            >
              <div
                className="c1"
              >
                <div
                  className="flex flex-row justify-center"
                >
                  <div
                    className="flex flex-col items-center"
                  >
                    <div
                      className="c2"
                    >
                      <b>
                        Letter of Appreciation
                      </b>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col mt-9 gap-16"
                >
                  <div>
                    31 December 2022
                  </div>
                  <div>
                    Dear 
                    Goh Yihan
                    <br />
                    <br />
                    On behalf of the Singapore Judicial College, I extend our heartfelt appreciation for your excellent contribution to the 
                    Courtroom Communication
                     
                    programme on
                     
                    <span
                      style={
                        Object {
                          "display": "inline-block",
                        }
                      }
                    >
                      31 December 2022
                    </span>
                    .
                    <br />
                    <br />
                    The College relies on the invaluable specialist expertise of members of the
                     judiciary 
                     to fulfil our aim of delivering exceptional judicial education that equips judicial officers with the relevant competencies to function as administrators of justice in service of the Judiciary's values of fairness, accessibility, integrity and respect.
                    <br />
                    <br />
                    The knowledge and insights you have shared have undoubtedly made a lasting impression and have significantly enriched the learning experience of our participants.
                    <br />
                    <br />
                    Thank you for supporting the College in this important way.
                  </div>
                  <div>
                    <img
                      alt="Signature of signee"
                      className="max-w-[171px] max-h-[85px]"
                      src="natalie-skead-signature.hash.png"
                    />
                    <br />
                    Natalie Skead
                    <br />
                    Dean
                    <br />
                    Singapore Judicial College
                  </div>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <SingaporeJudicialCollegeLetterOfAppreciationTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
    })
})
