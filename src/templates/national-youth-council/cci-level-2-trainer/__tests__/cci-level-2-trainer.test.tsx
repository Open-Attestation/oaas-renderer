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
            .c1 {
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

            .c20 {
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

            .c20 > *:not(:last-child) {
              margin-bottom: 8px;
            }

            .c2 {
              min-width: 500px;
            }

            .c22 {
              padding-left: 0px;
              margin-left: 18px;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c24 {
              list-style-type: none;
              padding-left: 0px;
              margin-left: 18px;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c24 li {
              text-indent: 5px;
              margin-top: 10px;
            }

            .c24 li:before {
              content: '-';
              text-indent: 5px;
            }

            .c24 li span {
              position: relative;
              left: 20px;
            }

            .c3 {
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

            .c19 {
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

            .c15 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c5 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              text-align: center;
            }

            .c8 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c9 {
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c10 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: -8px;
            }

            .c11 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
            }

            .c17 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c18 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c21 {
              font-size: 12px;
              font-style: italic;
              font-weight: 700;
            }

            .c23 {
              font-size: 12px;
              font-style: italic;
              font-weight: 700;
              margin-top: 16px;
              margin-bottom: 16px;
            }

            .c6 {
              font-family: 'Libre Franklin';
            }

            .c16 {
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

            .c13 {
              width: 250px;
              height: 100px;
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

            .c14 {
              display: block;
              max-width: 100%;
              max-height: 100%;
              width: auto;
              height: auto;
            }

            .c4 {
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

            .c7 {
              position: relative;
              display: block;
              height: 360px;
              padding-top: 16px;
              padding-bottom: 16px;
            }

            .c12 {
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

            .c0 {
              -webkit-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
              -webkit-transform-origin: top left;
              -ms-transform-origin: top left;
              transform-origin: top left;
              height: 2261px;
            }

            @media print {
              .c3 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
              }
            }

            @media print {
              .c19 {
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
                className="c1 c2"
              >
                <div
                  className="c3"
                >
                  <div
                    className="c4"
                  >
                    <div>
                      <p
                        className="c5 c6"
                      >
                        Certificate of Appointment
                      </p>
                    </div>
                  </div>
                  <div
                    className="c7"
                  >
                    <div
                      className="c1"
                    >
                      <p
                        className="c8 c6"
                      >
                        This is to certify that
                      </p>
                      <p
                        className="c9 c6"
                      >
                        JOHN DOE
                      </p>
                      <p
                        className="c8 c6"
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
                        className="c10 c6"
                      >
                        is hereby appointed as a
                      </p>
                      <p
                        className="c9 c6"
                      >
                        CHALLENGE COURSE INSTRUCTOR (LEVEL 2) TRAINER
                      </p>
                      <p
                        className="c8 c6"
                      >
                        On the date of
                      </p>
                      <p
                        className="c9 c6"
                      >
                        31 December 2022
                      </p>
                      <p
                        className="c8 c6"
                      >
                        The training curriculum includes risk management, course delivery and rescue principles & techniques that
                      </p>
                      <p
                        className="c10 c6"
                      >
                        are relevant to the conduct of a safe and quality CCI Level 2 certification course.
                      </p>
                      <p
                        className="c10 c6"
                      >
                        The process includes supervised on-the-job training and assessment involving:
                      </p>
                      <ul>
                        <li>
                          <p
                            className="c10 c6"
                          >
                            Completing a 3-day Accelerated CCI Level 2 Certification Course (24 hours)
                          </p>
                        </li>
                        <li>
                          <p
                            className="c10 c6"
                          >
                            Co-instructing one (1) CCI Level 2 Certification course (40 hours)
                          </p>
                        </li>
                      </ul>
                      <p
                        className="c11 c6"
                      >
                        Certificate is valid till 
                        30 December 2025
                      </p>
                    </div>
                  </div>
                  <div
                    className="c12"
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
                        className="c13"
                      >
                        <img
                          alt="Signature of signee"
                          className="c14"
                          src="nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                        />
                      </div>
                      <div
                        className="c15"
                      />
                      <div
                        className="c16"
                      >
                        <p
                          className="c17 c6"
                        >
                          <b>
                            Nicholas Conceicao
                          </b>
                           | Executive Director
                        </p>
                        <p
                          className="c18 c6"
                        >
                          Outward Bound Singapore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="c19"
                >
                  <div
                    className="c20"
                  >
                    <p
                      className="c21 c6"
                    >
                      This certificate does not grant the holder any form of license to operate at other premises unless otherwise accepted and endorsed by the premise owners
                    </p>
                    <p
                      className="c21 c6"
                    >
                      This certificate shall remain valid for a period of 3 years.
                    </p>
                    <p
                      className="c21 c6"
                    >
                      To revalidate at CCI (Level 2) Trainer, the Trainer shall hold a valid certificate and either:
                    </p>
                    <ul
                      className="c22"
                    >
                      <li
                        className="c23 c6"
                      >
                        Provide a portfolio within the preceding three (3) years documenting
                        <ul
                          className="c24"
                        >
                          <li>
                            <span
                              className="c21 c6"
                            >
                              five hundred (500) hours of experience delivering CCI Level 1 or Level 2 certification courses, with the last course delivered not more than one (1) year ago; and
                            </span>
                          </li>
                          <li>
                            <span
                              className="c21 c6"
                            >
                              forty (40) hours of related professional training
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <p
                      className="c21 c6"
                    >
                      OR
                    </p>
                    <ul
                      className="c22"
                    >
                      <li
                        className="c23 c6"
                      >
                        Provide a portfolio within the preceding three (3) years documenting
                        <ul
                          className="c24"
                        >
                          <li>
                            <span
                              className="c21 c6"
                            >
                              hundred and fifty (150) hours of experience delivering CCI or ropes course-related training; and
                            </span>
                          </li>
                          <li>
                            <span
                              className="c21 c6"
                            >
                              forty (40) hours of related professional training; and
                            </span>
                          </li>
                          <li>
                            <span
                              className="c21 c6"
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
