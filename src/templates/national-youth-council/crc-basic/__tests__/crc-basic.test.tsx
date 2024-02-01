import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilCrcBasicTemplate } from '../crc-basic.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../crc-basic.sample'

describe('NationalYouthCouncilCrcBasicTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilCrcBasicTemplate
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

            .c1 {
              min-width: 500px;
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
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              text-align: center;
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
              margin-top: 0px;
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
              font-style: normal;
              font-weight: 700;
            }

            .c22 {
              font-size: 10px;
              font-style: normal;
              font-weight: 400;
            }

            .c23 {
              font-size: 10px;
              font-style: normal;
              font-weight: 700;
              -webkit-text-decoration: underline;
              text-decoration: underline;
            }

            .c24 {
              font-size: 10px;
              font-style: normal;
              font-weight: 700;
            }

            .c5 {
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
              .c19 {
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
                      Certificate of Proficiency
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
                      has been tested and found proficient to qualify for the following award
                    </p>
                    <p
                      className="c9 c5"
                    >
                      Outward Bound Singapore:
                      <br />
                       Challenge Ropes Course (Basic)
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
                      This course was conducted in Outward Bound Singapore and delivered by OBS CRC Trainers;
                    </p>
                    <p
                      className="c10 c5"
                    >
                      trained and assessed to their exacting standards.
                    </p>
                    <p
                      className="c11 c5"
                    >
                      Course Date: 
                      30 November - 31 December 2022
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
                        className="c17 c5"
                      >
                        <b>
                          Nicholas Conceicao
                        </b>
                         | Executive Director
                      </p>
                      <p
                        className="c18 c5"
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
                    className="c21 c5"
                    style={
                      Object {
                        "left": "50%",
                        "position": "relative",
                        "transform": "translateX(-50%)",
                      }
                    }
                  >
                    Course Modules – 40 Training hours
                  </p>
                  <p
                    className="c22 c5"
                  >
                    The curriculum for the Challenge Ropes Course (CRC) Basic level programme aims to equip novice practitioners with the essential skills and knowledge to conduct safe and quality challenge ropes course activities in OBS. This includes familiarisation to all OBS CRC elements, competencies in RAMS for CRC, Activity Checks, Rigging of OBS Ropes Courses, Ropes Course Activity Management and Facilitation.
                  </p>
                  <p
                    className="c22 c5"
                  >
                    Practitioners are also trained and assessed in executing basic recovery and troubleshooting skills to allow them to resolve simple participant situations that do not require the removal of the participant’s safety systems while it is being used, and also the minor rectification of belay systems on both Horizontal and Vertical elements.
                  </p>
                  <p
                    className="c23 c5"
                  >
                    1) Risk Analysis & Management System (RAMS) and Familiarisation to OBS CRC Related elements
                  </p>
                  <p
                    className="c22 c5"
                  >
                    Able to apply risk analysis and management processes to OBS Challenge Ropes Course activities.
                    <br />
                    Complete the process of negotiating all OBS CRC activities at Camp 1 and 2.
                  </p>
                  <p
                    className="c23 c5"
                  >
                    2) Activity Checks
                  </p>
                  <p
                    className="c22 c5"
                  >
                    Able to execute the following tasks:
                    <br />
                    - Pre Activity checks involving Environment, Equipment and Element.
                    <br />
                    - Pre Dispatch checks involving Anchor, Belay, Climber and Devices.
                  </p>
                  <p
                    className="c23 c5"
                  >
                    3) Rigging of Outward Bound Singapore Ropes Course
                  </p>
                  <p
                    className="c22 c5"
                  >
                    Able to independently set up an OBS CRC activity with the correct rigging method and ensuring that CRC is ready for loading via a load test.
                  </p>
                  <p
                    className="c23 c5"
                  >
                    4) Identification of Parts of a Ropes Course and their Critical Application
                  </p>
                  <p
                    className="c22 c5"
                  >
                    Able to identify components of a ropes course and select correct applications for safe loading of a person on a dynamic or static belay.
                  </p>
                  <p
                    className="c23 c5"
                  >
                    5) Escalation Model application for Recovery
                  </p>
                  <p
                    className="c22 c5"
                  >
                    Able to apply concept of Escalation Model (Verbal Assist, Self/Buddy Assist, Recovery & Rescue) for recovery of participants with the principles of:
                    <br />
                    - Assess, Access, Execute and Exit.
                    <br />
                    - Safe, Simple and Speedy.
                  </p>
                  <p
                    className="c23 c5"
                  >
                    6) Troubleshooting of Ropes Course
                  </p>
                  <p
                    className="c22 c5"
                  >
                    Able to rectify both Horizontal and Vertical anchor systems using concept and principles of Escalation Model.
                  </p>
                  <p
                    className="c23 c5"
                  >
                    7) Ropes Course Activity Management
                  </p>
                  <p
                    className="c22 c5"
                  >
                    Able to articulate knowledge and execute skills to conduct a safe and quality ropes course activity.
                    <br />
                    - Comprehensive briefing to highlight the safety information as stated in the OBS Training Safety Regulations,
                    <br />
                    - Participant group management during ropes course activity,
                    <br />
                    - Effective supervision of the activity to ensure safety,
                    <br />
                    - Facilitate the review of ropes course activity using Experiential Learning Cycle,
                    <br />
                    - Use of High and Low elements, and 
                    <br />
                    - Able to operate in OBS Camp 1 and Camp 2.
                  </p>
                  <p
                    className="c24 c5"
                  >
                    This certificate does not grant the holder any form of license to operate at other premises unless otherwise accepted and endorsed by the premise owners.
                  </p>
                  <p
                    className="c24 c5"
                  >
                    This certificate shall remain valid for the period that the holder is an Operational instructional staff of OBS.
                  </p>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilCrcBasicTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
