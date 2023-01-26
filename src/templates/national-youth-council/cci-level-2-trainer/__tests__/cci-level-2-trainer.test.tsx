import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilCciLevel_2TrainerTemplate } from '../cci-level-2-trainer.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../cci-level-2-trainer.sample'

describe('NationalYouthCouncilCciLevel_2TrainerTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilCciLevel_2TrainerTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c0 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: auto;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
            }

            .c18 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: auto;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
            }

            .c18 > *:not(:last-child) {
              margin-bottom: 8px;
            }

            .c1 {
              min-width: 500px;
            }

            .c20 {
              padding-left: 0px;
              margin-left: 18px;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c22 {
              list-style-type: none;
              padding-left: 0px;
              margin-left: 18px;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c22 li {
              text-indent: 5px;
              margin-top: 10px;
            }

            .c22 li:before {
              content: '-';
              text-indent: 5px;
            }

            .c22 li span {
              position: relative;
              left: 20px;
            }

            .c2 {
              background: white;
              position: relative;
              width: 21cm;
              min-height: 29.7cm;
              padding: 2cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('background.svg');
              z-index: initial;
            }

            .c17 {
              background: white;
              position: relative;
              width: 21cm;
              min-height: 29.7cm;
              padding: 2cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('undefined');
              z-index: initial;
            }

            .c13 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c4 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              text-align: center;
            }

            .c7 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c8 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c9 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: -8px;
            }

            .c10 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
            }

            .c15 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c16 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c19 {
              font-size: 12px;
              font-style: italic;
              font-weight: 700;
            }

            .c21 {
              font-size: 12px;
              font-style: italic;
              font-weight: 700;
              margin-top: 16px;
              margin-bottom: 16px;
            }

            .c5 {
              font-family: 'Libre Franklin';
            }

            .c12 {
              width: 100%;
              height: 100px;
              background: url('nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png');
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
            }

            .c14 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-box-flex: 1;
              -webkit-flex-grow: 1;
              -ms-flex-positive: 1;
              flex-grow: 1;
              color: #808041;
            }

            .c3 {
              position: relative;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              margin-top: 241px;
              height: 90px;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }

            .c6 {
              position: relative;
              display: block;
              height: 360px;
              padding-top: 16px;
              padding-bottom: 16px;
            }

            .c11 {
              position: relative;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              height: 214px;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
              -webkit-align-items: start;
              -webkit-box-align: start;
              -ms-flex-align: start;
              align-items: start;
            }

            @media print {
              .c2 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
              }
            }

            @media print {
              .c17 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
              }
            }

            <div
              className="c0 c1"
            >
              <div
                className="c2"
              >
                <div
                  className="c3"
                >
                  <div>
                    <p
                      className="c4 c5"
                    >
                      Certificate of Appointment
                    </p>
                  </div>
                </div>
                <div
                  className="c6"
                >
                  <div
                    className="c0"
                  >
                    <p
                      className="c7 c5"
                    >
                      This is to certify that
                    </p>
                    <p
                      className="c8 c5"
                    >
                      JOHN DOE
                    </p>
                    <p
                      className="c7 c5"
                    >
                      Has successfully fulfilled
                       
                      <span
                        style={
                          Object {
                            "fontWeight": "bold",
                          }
                        }
                      >
                        64
                      </span>
                       hours of qualification training and
                    </p>
                    <p
                      className="c9 c5"
                    >
                      is hereby appointed as a
                    </p>
                    <p
                      className="c8 c5"
                    >
                      CHALLENGE COURSE INSTRUCTOR (LEVEL 2) TRAINER
                    </p>
                    <p
                      className="c7 c5"
                    >
                      On the date of
                    </p>
                    <p
                      className="c8 c5"
                    >
                      31 December 2022
                    </p>
                    <p
                      className="c7 c5"
                    >
                      The training curriculum includes risk management, course delivery and rescue principles & techniques that
                    </p>
                    <p
                      className="c9 c5"
                    >
                      are relevant to the conduct of a safe and quality CCI Level 2 certification course.
                    </p>
                    <p
                      className="c9 c5"
                    >
                      The process includes supervised on-the-job training and assessment involving:
                    </p>
                    <ul>
                      <li>
                        <p
                          className="c9 c5"
                        >
                          Completing a 3-day Accelerated CCI Level 2 Certification Course (24 hours)
                        </p>
                      </li>
                      <li>
                        <p
                          className="c9 c5"
                        >
                          Co-instructing one (1) CCI Level 2 Certification course (40 hours)
                        </p>
                      </li>
                    </ul>
                    <p
                      className="c10 c5"
                    >
                      Certificate is valid till 
                      30 Dec 2025
                    </p>
                  </div>
                </div>
                <div
                  className="c11"
                >
                  <div />
                  <div
                    style={
                      Object {
                        "width": 250,
                      }
                    }
                  >
                    <div
                      className="c12"
                    />
                    <div
                      className="c13"
                    />
                    <div
                      className="c14"
                    >
                      <p
                        className="c15 c5"
                      >
                        <b>
                          Nicholas Conceicao
                        </b>
                         | Executive Director
                      </p>
                      <p
                        className="c16 c5"
                      >
                        Outward Bound Singapore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="c17"
              >
                <div
                  className="c18"
                >
                  <p
                    className="c19 c5"
                  >
                    This certificate does not grant the holder any form of license to operate at other premises unless otherwise accepted and endorsed by the premise owners
                  </p>
                  <p
                    className="c19 c5"
                  >
                    This certificate shall remain valid for a period of 3 years.
                  </p>
                  <p
                    className="c19 c5"
                  >
                    To revalidate at CCI (Level 2) Trainer, the Trainer shall hold a valid certificate and either:
                  </p>
                  <ul
                    className="c20"
                  >
                    <li
                      className="c21 c5"
                    >
                      Provide a portfolio within the preceding three (3) years documenting
                      <ul
                        className="c22"
                      >
                        <li>
                          <span
                            className="c19 c5"
                          >
                            five hundred (500) hours of experience delivering CCI Level 1 or Level 2 certification courses, with the last course delivered not more than one (1) year ago; and
                          </span>
                        </li>
                        <li>
                          <span
                            className="c19 c5"
                          >
                            forty (40) hours of related professional training
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p
                    className="c19 c5"
                  >
                    OR
                  </p>
                  <ul
                    className="c20"
                  >
                    <li
                      className="c21 c5"
                    >
                      Provide a portfolio within the preceding three (3) years documenting
                      <ul
                        className="c22"
                      >
                        <li>
                          <span
                            className="c19 c5"
                          >
                            hundred and fifty (150) hours of experience delivering CCI or ropes course-related training; and
                          </span>
                        </li>
                        <li>
                          <span
                            className="c19 c5"
                          >
                            forty (40) hours of related professional training; and
                          </span>
                        </li>
                        <li>
                          <span
                            className="c19 c5"
                          >
                            pass a practical revalidation assessment.
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilCciLevel_2TrainerTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
