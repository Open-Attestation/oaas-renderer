import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilTechnicalSkillsTemplate } from '../technical-skills.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../technical-skills.sample'

describe('NationalYouthCouncilTechnicalSkillsTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilTechnicalSkillsTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            Array [
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
              margin-top: 236px;
            }

            .c4 {
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
              margin-top: 16px;
            }

            .c0 {
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

            .c10 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c2 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
              text-align: center;
            }

            .c5 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c6 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
            }

            .c7 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
            }

            .c11 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
              color: #808041;
            }

            .c12 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
              color: #808041;
            }

            .c3 {
              font-family: 'Libre Franklin';
            }

            .c8 {
              position: absolute;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-align-items: flex-end;
              -webkit-box-align: flex-end;
              -ms-flex-align: flex-end;
              align-items: flex-end;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
              left: 2cm;
              right: 2cm;
              bottom: 4.5cm;
            }

            .c9 {
              display: block;
              width: 200px;
              margin: 0 auto;
            }

            @media print {
              .c0 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
              }
            }

            @media print {

            }

            <div
                className="c0"
              >
                <div
                  className="c1"
                >
                  <p
                    className="c2 c3"
                  >
                    Certificate of 
                    <br />
                    Completion
                  </p>
                </div>
                <div
                  className="c4"
                >
                  <p
                    className="c5 c3"
                  >
                    This is to certify that
                  </p>
                  <p
                    className="c6 c3"
                  >
                    Yeo Yoyo
                  </p>
                  <p
                    className="c7 c3"
                  >
                    has successfully completed the
                  </p>
                  <p
                    className="c6 c3"
                  >
                    Challenge Rope Course
                  </p>
                  <p
                    className="c6 c3"
                  >
                    28 Sep 2022
                  </p>
                </div>
                <div
                  className="c8"
                >
                  <div
                    style={
                      Object {
                        "width": 250,
                      }
                    }
                  >
                    <img
                      className="c9"
                      src="trainer-signature&a2693ac50a6b39568d13114834a66c9568dc4b51ede88592ef4516b46960c204.png"
                    />
                    <div
                      className="c10"
                    />
                    <p
                      className="c11 c3"
                    >
                      <b>
                        Abdul Haireel Bin Abdul Haleem
                      </b>
                       | 
                      Trainer
                    </p>
                    <p
                      className="c12 c3"
                    >
                      Outward Bound Singapore
                    </p>
                  </div>
                  <div
                    style={
                      Object {
                        "width": 250,
                      }
                    }
                  >
                    <img
                      className="c9"
                      src="nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                    />
                    <div
                      className="c10"
                    />
                    <p
                      className="c11 c3"
                    >
                      <b>
                        Nicholas Conceicao
                      </b>
                       | 
                      Executive Director
                    </p>
                    <p
                      className="c12 c3"
                    >
                      Outward Bound Singapore
                    </p>
                  </div>
                </div>
              </div>,
              .c0 {
              background: white;
              position: relative;
              width: 21cm;
              min-height: 29.7cm;
              padding: 2cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('description-watermark.png');
              z-index: initial;
            }

            .c1 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c3 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 400;
            }

            .c2 {
              font-family: 'Libre Franklin';
            }

            .c4 {
              font-size: 0.8em;
              font-family: 'Libre Franklin';
            }

            @media print {

            }

            @media print {
              .c0 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
              }
            }

            <div
                className="c0"
              >
                <p
                  className="c1 c2"
                >
                  Challenge Rope Course
                </p>
                <p
                  className="c1 c2"
                >
                  Course Modules – 40 Training hours
                </p>
                <p
                  className="c3 c2"
                >
                  The curriculum for the Challenge Ropes Course (CRC) Basic level programme aims to equip novice practitioners with the essential skills and knowledge to conduct safe and quality challenge ropes course activities in OBS. This includes familiarisation to all OBS CRC elements, competencies in RAMS for CRC, Activity Checks, Rigging of OBS Ropes Courses, Ropes Course Activity Management and Facilitation.
                </p>
                <p
                  className="c3 c2"
                >
                  Practitioners are also trained and assessed in executing basic recovery and troubleshooting skills to allow them to resolve simple participant situations that do not require the removal of the participant’s safety systems while it is being used, and also the minor rectification of belay systems on both Horizontal and Vertical elements.
                </p>
                <ol
                  className="c4"
                >
                  <li>
                    <b>
                      <u>
                        Risk Analysis & Management System (RAMS) and Familiarisation to OBS CRC Related elements
                      </u>
                    </b>
                    <br />
                    Able to apply risk analysis and management processes to OBS Challenge Ropes Course activities. Complete the process of negotiating all OBS CRC activities at Camp 1 and 2.
                  </li>
                  <li>
                    <b>
                      <u>
                        Activity Checks
                      </u>
                    </b>
                    <br />
                    Able to execute the following tasks:
                    <ul>
                      <li>
                        Pre Activity checks involving Environment, Equipment and Element.
                      </li>
                      <li>
                        Pre Dispatch checks involving Anchor, Belay, Climber and Devices.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>
                      <u>
                        Rigging of Outward Bound Singapore Ropes Course
                      </u>
                    </b>
                    <br />
                    Able to independently set up an OBS CRC activity with the correct rigging method and ensuring that CRC is ready for loading via a load test.
                  </li>
                  <li>
                    <b>
                      <u>
                        Identification of Parts of a Ropes Course and their Critical Application
                      </u>
                    </b>
                    <br />
                    Able to identify components of a ropes course and select correct applications for safe loading of a person on a dynamic or static belay.
                  </li>
                  <li>
                    <b>
                      <u>
                        Escalation Model application for Recovery
                      </u>
                    </b>
                    <br />
                    Able to apply concept of Escalation Model (Verbal Assist, Self/Buddy Assist, Recovery & Rescue) for recovery of participants with the principles of:
                    <ul>
                      <li>
                        Assess, Access, Execute and Exit.
                      </li>
                      <li>
                        Safe, Simple and Speedy.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>
                      <u>
                        Troubleshooting of Ropes Course
                      </u>
                    </b>
                    <br />
                    Able to rectify both Horizontal and Vertical anchor systems using concept and principles of Escalation Model.
                  </li>
                  <li>
                    <b>
                      <u>
                        Ropes Course Activity Management
                      </u>
                    </b>
                    <br />
                    Able to articulate knowledge and execute skills to conduct a safe and quality ropes course activity.
                    <ul>
                      <li>
                        Comprehensive briefing to highlight the safety information as stated in the OBS Training Safety Regulations,
                      </li>
                      <li>
                        Participant group management during ropes course activity,
                      </li>
                      <li>
                        Effective supervision of the activity to ensure safety,
                      </li>
                      <li>
                        Facilitate the review of ropes course activity using Experiential Learning Cycle,
                      </li>
                      <li>
                        Use of High and Low elements, and
                      </li>
                      <li>
                        Able to operate in OBS Camp 1 and Camp 2.
                      </li>
                    </ul>
                  </li>
                </ol>
                <p
                  className="c3 c2"
                >
                  This certificate does not grant the holder any form of license to operate at other premises unless otherwise accepted and endorsed by the premise owners.
                </p>
                <p
                  className="c3 c2"
                >
                  This certificate shall remain valid for the period that the holder is an Operational instructional staff of OBS.
                </p>
              </div>,
            ]
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilTechnicalSkillsTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('Yeo Yoyo')).toBeTruthy()
    })
})
