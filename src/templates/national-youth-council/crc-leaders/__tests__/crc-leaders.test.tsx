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
                        Challenge Ropes Course (Leader)
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
                        This course was conducted in Outward Bound Singapore and delivered by OBS CRC Trainers;
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
                      The curriculum for the OBS Challenge Ropes Course (Leader) level programme aims to provide experienced practitioners with a wider range of rope skills and knowledge on rescue equipment and techniques. Practitioners are trained to independently apply recovery and rescue techniques in situations where a casualty is in distress (either bringing the casualty back onto the activity tower or to the ground) while maintaining different anchor points for both self and the casualty. This includes executing set-ups for Horizontal and Vertical Rescues.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      1) Risk Analysis & Management System (RAMS)
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to explain and apply various RAMS processes to OBS Challenge Rope Courses activities.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      2) Equipment and Hardware
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to explain the usage, purpose, care and maintenance of different types of safety equipment, CRC hardware and Personal Protective Equipment.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      3) Rigging of Outward Bound Singapore Ropes Courses
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to set and rig up all OBS CRC activities independently.
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
                      5) Ascend and Descend Techniques (using prussic)
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to perform ascending and descending on ropes using prussic and tapes.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      6) Aerial Rescue (Vertical and Horizontal Rescues)
                    </p>
                    <p
                      className="c23 c6"
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
                      className="c24 c6"
                    >
                      7) Group Management and Supervision
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to lead safe and quality conduct of CRC activities in all OBS premises, including mood setting, safety briefing, group management, applying appropriate leadership skills, facilitating learning outcomes and continuously apply risk assessment in their supervision to ensure safety of participants when participating in any CRC activities.
                    </p>
                    <p
                      className="c24 c6"
                    >
                      8) CRC Operating Systems
                    </p>
                    <p
                      className="c23 c6"
                    >
                      Able to explain and apply various CRC operating systems.
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
            <NationalYouthCouncilCrcLeadersTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
