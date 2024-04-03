import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilCrcEitTemplate } from '../crc-eit.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../crc-eit.sample'

describe('NationalYouthCouncilCrcEitTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilCrcEitTemplate
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

            .c21 {
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

            .c2 {
              min-width: 500px;
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

            .c20 {
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

            .c16 {
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
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              text-align: center;
            }

            .c11 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              text-align: center;
            }

            .c12 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c18 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c19 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c22 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }

            .c23 {
              font-size: 10px;
              font-style: normal;
              font-weight: 400;
            }

            .c24 {
              font-size: 10px;
              font-style: normal;
              font-weight: 700;
              -webkit-text-decoration: underline;
              text-decoration: underline;
            }

            .c25 {
              font-size: 10px;
              font-style: normal;
              font-weight: 700;
            }

            .c6 {
              font-family: 'Libre Franklin';
            }

            .c17 {
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

            .c14 {
              margin-bottom: 2px;
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

            .c15 {
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

            .c13 {
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
              .c20 {
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
                        Certificate of Proficiency
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
                        has been tested and found proficient to qualify for the following award
                      </p>
                      <p
                        className="c10 c6"
                      >
                        Outward Bound Singapore:
                        <br />
                        East Coast Campus Instructor Training (EIT)
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
                        className="c11 c6"
                      >
                        This course was conducted in OBS East Coast Campus (ECC) and delivered by ECC Train the Trainers (ETT);
                        <br />
                        trained and assessed to their exacting standards.
                      </p>
                      <p
                        className="c12 c6"
                      >
                        Course Date: 
                        30 November - 31 December 2022
                      </p>
                    </div>
                  </div>
                  <div
                    className="c13"
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
                        className="c14"
                      >
                        <img
                          alt="Signature of signee"
                          className="c15"
                          src="nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                        />
                      </div>
                      <div
                        className="c16"
                      />
                      <div
                        className="c17"
                      >
                        <p
                          className="c18 c6"
                        >
                          <b>
                            Nicholas Conceicao
                          </b>
                           | Executive Director
                        </p>
                        <p
                          className="c19 c6"
                        >
                          Outward Bound Singapore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="c20"
                >
                  <div
                    className="c21"
                  >
                    <p
                      className="c22 c6"
                      style={
                        Object {
                          "left": "50%",
                          "position": "relative",
                          "transform": "translateX(-50%)",
                        }
                      }
                    >
                      Course Modules – 32 Training hours
                    </p>
                    <p
                      className="c23 c6"
                    >
                      The curriculum for the ECC Instructor Training programme aims to equip OBS practitioners with the essential skills and knowledge to conduct safe and quality Challenge Ropes Course (CRC) activities in OBS, East Coast Campus. This includes familiarisation to all ECC CRC, Tunnel Cave Maze (TCM) and Multi Element Tower (MET) elements, competencies in RAMS for CRC, Activity Checks, Rigging of ECC Ropes Courses, Ropes Course Activity Management and Facilitation.
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Practitioners are trained and assessed in executing basic recovery and troubleshooting skills to allow them to resolve simple participant situations using appropriate escalation model without the removal of the participant’s safety systems while it is being used.
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Practitioners are also trained and assessed in executing rescue skills on CRC element with additional rescuer as ground belayer and setting up top rope system on the rescue ladder or belay cable. Transfer to top rope system and to be belayed down safely.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      1) Risk Analysis & Management System (RAMS) and Familiarisation to ECC CRC Related elements
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to apply risk analysis and management processes to ECC Challenge Ropes Course activities.
                      <br />
                      Complete the process of negotiating all CRC, TCM and MET activities at ECC.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      2) Activity Checks
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to execute the following tasks:
                      <br />
                      - Pre Activity checks involving Environment, Equipment and Element.
                      <br />
                      - Pre Dispatch checks involving Anchor, Belay, Climber and Devices.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      3) Rigging of East Coast Campus Ropes Course
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to independently set up an ECC CRC activity with the correct rigging method and ensuring that CRC is ready for loading via a load test.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      4) Identification of Parts of a Ropes Course and their Critical Application
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to identify components of a ropes course and select correct applications for safe loading of a person on a dynamic or static belay.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      5) Escalation Model application for Recovery
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to apply concept of Escalation Model (Verbal Assist, Self/Buddy Assist, Recovery & Rescue) for recovery of participants with the principles of:
                      <br />
                      - Assess, Access, Execute and Exit.
                      <br />
                      - Safe, Simple and Speedy.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      6) Troubleshooting of Ropes Course
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to rectify both Horizontal and Vertical anchor systems using concept and principles of Escalation Model.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      7) Ropes Course Activity Management
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to articulate knowledge and execute skills to conduct a safe and quality ropes course activity.
                      <br />
                      - Comprehensive briefing to highlight the safety information as stated in the OBS, ECC Training Safety Regulations,
                      <br />
                      - Participant group management during ropes course activity,
                      <br />
                      - Effective supervision of the activity to ensure safety,
                      <br />
                      - Facilitate the review of ropes course activity using Experiential Learning Cycle,
                      <br />
                      - Use of High and Low elements, and
                       
                      <br />
                      - Able to operate in OBS East Coast Campus.
                    </p>
                    <p
                      className="c25 c6"
                    >
                      This certificate does not grant the holder any form of license to operate at other premises unless otherwise accepted and endorsed by the premise owners.
                    </p>
                    <p
                      className="c25 c6"
                    >
                      This certificate shall remain valid for the period that the holder is an Operational instructional staff of OBS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilCrcEitTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
