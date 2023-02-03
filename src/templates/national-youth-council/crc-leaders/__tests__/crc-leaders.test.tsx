import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilCrcLeadersTemplate } from '../crc-leaders.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../crc-leaders.sample'

describe('NationalYouthCouncilCrcLeadersTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilCrcLeadersTemplate
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

            .c19 {
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

            .c18 {
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

            .c14 {
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
              margin-top: 0px;
              text-align: center;
            }

            .c11 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c16 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c17 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c20 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }

            .c21 {
              font-size: 10px;
              font-style: normal;
              font-weight: 400;
            }

            .c22 {
              font-size: 10px;
              font-style: normal;
              font-weight: 700;
              -webkit-text-decoration: underline;
              text-decoration: underline;
            }

            .c23 {
              font-size: 10px;
              font-style: normal;
              font-weight: 700;
            }

            .c5 {
              font-family: 'Libre Franklin';
            }

            .c13 {
              width: 100%;
              height: 100px;
              background: url('nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png');
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
            }

            .c15 {
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
              .c18 {
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
                      John Doe
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
                      Challenge Ropes Course (Leader)
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
                      className="c10 c5"
                    >
                      This course was conducted in Outward Bound Singapore and delivered by OBS CRC Trainers;
                      <br />
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
                    />
                    <div
                      className="c14"
                    />
                    <div
                      className="c15"
                    >
                      <p
                        className="c16 c5"
                      >
                        <b>
                          Nicholas Conceicao
                        </b>
                         | Executive Director
                      </p>
                      <p
                        className="c17 c5"
                      >
                        Outward Bound Singapore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="c18"
              >
                <div
                  className="c19"
                >
                  <p
                    className="c20 c5"
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
                    className="c21 c5"
                  >
                    The curriculum for the OBS Challenge Ropes Course (Leader) level programme aims to provide experienced practitioners with a wider range of rope skills and knowledge on rescue equipment and techniques. Practitioners are trained to independently apply recovery and rescue techniques in situations where a casualty is in distress (either bringing the casualty back onto the activity tower or to the ground) while maintaining different anchor points for both self and the casualty. This includes executing set-ups for Horizontal and Vertical Rescues.
                  </p>
                  <p
                    className="c22 c5"
                  >
                    1) Risk Analysis & Management System (RAMS)
                  </p>
                  <p
                    className="c21 c5"
                  >
                    Able to explain and apply various RAMS processes to OBS Challenge Rope Courses activities.
                  </p>
                  <p
                    className="c22 c5"
                  >
                    2) Equipment and Hardware
                  </p>
                  <p
                    className="c21 c5"
                  >
                    Able to explain the usage, purpose, care and maintenance of different types of safety equipment, CRC hardware and Personal Protective Equipment.
                  </p>
                  <p
                    className="c22 c5"
                  >
                    3) Rigging of Outward Bound Singapore Ropes Courses
                  </p>
                  <p
                    className="c21 c5"
                  >
                    Able to set and rig up all OBS CRC activities independently.
                  </p>
                  <p
                    className="c22 c5"
                  >
                    4) Identification of Parts of a Ropes Course and their Critical Application
                  </p>
                  <p
                    className="c21 c5"
                  >
                    Able to identify components of a ropes course and select correct applications for safe loading of a person on a dynamic or static belay.
                  </p>
                  <p
                    className="c22 c5"
                  >
                    5) Ascend and Descend Techniques (using prussic)
                  </p>
                  <p
                    className="c21 c5"
                  >
                    Able to perform ascending and descending on ropes using prussic and tapes.
                  </p>
                  <p
                    className="c22 c5"
                  >
                    6) Aerial Rescue (Vertical and Horizontal Rescues)
                  </p>
                  <p
                    className="c21 c5"
                  >
                    Able to apply concept of Escalation Model and the principles of:
                    <br />
                    - Assess, Access, Execute and Exit.
                    <br />
                    - Safe, Simple and Speedy.
                    <br />
                    Able to independently execute safe and timely aerial rescue techniques to reduce any form of suspension trauma situations. Rescue includes self and others.
                  </p>
                  <p
                    className="c22 c5"
                  >
                    7) Group Management and Supervision
                  </p>
                  <p
                    className="c21 c5"
                  >
                    Able to lead safe and quality conduct of CRC activities in all OBS premises, including mood setting, safety briefing, group management, applying appropriate leadership skills, facilitating learning outcomes and continuously apply risk assessment in their supervision to ensure safety of participants when participating in any CRC activities.
                  </p>
                  <p
                    className="c22 c5"
                  >
                    8) CRC Operating Systems
                  </p>
                  <p
                    className="c21 c5"
                  >
                    Able to explain and apply various CRC operating systems.
                  </p>
                  <p
                    className="c23 c5"
                  >
                    This certificate does not grant the holder any form of license to operate at other premises unless otherwise accepted and endorsed by the premise owners.
                  </p>
                  <p
                    className="c23 c5"
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
            <NationalYouthCouncilCrcLeadersTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
