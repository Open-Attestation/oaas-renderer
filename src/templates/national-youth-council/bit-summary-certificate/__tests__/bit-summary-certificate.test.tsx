import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilBitSummaryCertificateTemplate } from '../bit-summary-certificate.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../bit-summary-certificate.sample'

describe('NationalYouthCouncilBitSummaryCertificateTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilBitSummaryCertificateTemplate
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

            .c7 {
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

            .c7 > *:not(:last-child) {
              margin-bottom: 24px;
            }

            .c8 {
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

            .c8 > *:not(:last-child) {
              margin-bottom: 16px;
            }

            .c23 {
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

            .c23 > *:not(:last-child) {
              margin-bottom: 8px;
            }

            .c25 {
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

            .c25 > *:not(:last-child) {
              margin-bottom: 0px;
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

            .c22 {
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

            .c18 {
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
              margin-top: 0px;
              margin-bottom: 0px;
              text-align: center;
            }

            .c9 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c10 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c11 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c12 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c13 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c14 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              width: 100%;
              text-align: left;
            }

            .c20 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c21 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
            }

            .c24 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }

            .c27 {
              font-size: 10px;
              font-style: italic;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c28 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c29 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              width: 100%;
              text-align: left;
            }

            .c32 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              -webkit-text-decoration: underline;
              text-decoration: underline;
            }

            .c33 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              width: 100%;
            }

            .c5 {
              font-family: 'Libre Franklin';
            }

            .c19 {
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

            .c16 {
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

            .c17 {
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

            .c15 {
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

            .c1 {
              min-width: 500px;
            }

            .c30 {
              width: 100%;
              border: none;
              border-collapse: collapse;
              font-family: 'Libre Franklin';
              font-size: 12px;
              text-align: start;
            }

            .c30 td {
              vertical-align: top;
            }

            .c31 {
              white-space: nowrap;
              padding-right: 24px;
            }

            .c26 {
              width: auto;
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
              .c22 {
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
                      Certificate of
                      <br />
                      Completion
                    </p>
                  </div>
                </div>
                <div
                  className="c6"
                >
                  <div
                    className="c7"
                  >
                    <div
                      className="c8"
                    >
                      <p
                        className="c9 c5"
                      >
                        This is to certify that
                      </p>
                      <p
                        className="c10 c5"
                      >
                        JOHN DOE
                      </p>
                      <p
                        className="c9 c5"
                      >
                        has successfully completed the
                      </p>
                      <p
                        className="c11 c5"
                      >
                        Outward Bound Singapore:
                        <br />
                        Basic Instructor Training Programme
                        <br />
                        (Professional Development)
                      </p>
                    </div>
                    <div
                      className="c0"
                    >
                      <p
                        className="c12 c5"
                      >
                        The Basic Instructor Training (BIT) is a core part of the requirement for an Instructor to be Operational (competent to lead and conduct OBS courses). The 6 months training programme incorporates the following outdoor skills and competencies: Facilitation skills; Organisational skills; Instructional skills; Technical Activity skills; Safety and Risk skills; Environmental skills; Field Deployment, History, Philosophy, Typology of OAE, Trends and Issues.
                      </p>
                      <p
                        className="c13 c5"
                      >
                        The Trainee Instructors are also assessed in the following areas: Skills Assessment (Trek, Life Saving and Kayak); OBS Training Safety Regulation; and OBS 5 days Expeditionary Course. Upon completion of the BIT programme, the Trainee Instructor will be deemed competent as OBS Instructor and be assigned to conduct OBS courses independently and any other operational duties.
                      </p>
                    </div>
                    <p
                      className="c14 c5"
                    >
                      Operational Date: 
                      10 May 2022
                    </p>
                  </div>
                </div>
                <div
                  className="c15"
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
                      className="c16"
                    >
                      <img
                        alt="Signature of signee"
                        className="c17"
                        src="nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                      />
                    </div>
                    <div
                      className="c18"
                    />
                    <div
                      className="c19"
                    >
                      <p
                        className="c20 c5"
                      >
                        <b>
                          Nicholas Conceicao
                        </b>
                         | Executive Director
                      </p>
                      <p
                        className="c21 c5"
                      >
                        Outward Bound Singapore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="c22"
              >
                <div
                  className="c7"
                >
                  <div
                    className="c23"
                  >
                    <p
                      className="c24 c5"
                    >
                      Brick Wall Model of Core Competencies for Effective Outdoor Leadership
                    </p>
                    <div
                      className="c25"
                    >
                      <img
                        alt="brick wall model"
                        className="c26"
                        src="brick-wall-model.png"
                      />
                      <p
                        className="c27 c5"
                      >
                        Priest, S. & Gass, M. (2018). Effective Leadership in Adventure Programming (3rd ed.). Human Kinetics
                      </p>
                    </div>
                  </div>
                  <div>
                    <p
                      className="c10 c5"
                    >
                      Basic Instructor Training Modules
                    </p>
                    <p
                      className="c28 c5"
                    >
                      Competencies and Assessments Required to be Operational
                    </p>
                  </div>
                  <div>
                    <p
                      className="c29 c5"
                    >
                      Facilitation, Organisational, Safety and Risk Skills Training
                    </p>
                    <table
                      className="c30"
                    >
                      <tbody>
                        <tr>
                          <td
                            className="c31"
                          >
                            Soft Skills 1a&1b
                             
                          </td>
                          <td>
                            Evidence, Philosophy, History, Professional Ethics, Trends and Issues
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="c31"
                          >
                            Soft Skills 2
                          </td>
                          <td>
                            OBS Learning Methodology
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="c31"
                          >
                            Soft Skills 3
                          </td>
                          <td>
                            Program Development and Introduction
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="c31"
                          >
                            Soft Skills 4
                          </td>
                          <td>
                            Facilitation Skills, Organizational Skills, Instructional Skills, Communication and Conditional Leadership
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="c31"
                          >
                            Soft Skills 5a&5b
                          </td>
                          <td>
                            Games Familiarisation and Leadership
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="c31"
                          >
                            Soft Skills 6&7 
                          </td>
                          <td>
                            Problem Solving, Decision Making & Sound Judgement Social Psychology and Group Management
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p
                      className="c9 c5"
                    >
                      OBS - WSHC, Risk Analysis and Management System and bizSAFE Level 2
                    </p>
                    <p
                      className="c9 c5"
                    >
                      Outward Bound Singapore, Wilderness Medical First Responder
                    </p>
                    <p
                      className="c9 c5"
                    >
                      Singapore Resuscitation & First Aid Council, Basic Cardiac Life Support and AED Certification
                    </p>
                    <p
                      className="c9 c5"
                    >
                      Participate in OBS 21 Days Classic Challenge Course
                    </p>
                  </div>
                  <div
                    style={
                      Object {
                        "display": "block",
                        "width": "100%",
                      }
                    }
                  >
                    <p
                      className="c29 c5"
                    >
                      Technical Activity and Environmental Skills Training
                    </p>
                    <p
                      className="c9 c5"
                    >
                      <span
                        className="c32 c5"
                      >
                        Land Activities Training
                      </span>
                      <br />
                      Leave No Trace, Trainer Course
                      <br />
                      Outward Bound Singapore, Campcraft and Navigation Training
                    </p>
                  </div>
                  <p
                    className="c33 c5"
                  >
                    <span
                      className="c32 c5"
                    >
                      Water Activities Training
                    </span>
                    <br />
                    Maritime & Port Authority of Singapore, Powered Pleasure Craft Driving License
                    <br />
                    Singapore Canoe Federation, Kayak Proficiency 1, 2, 3 Star
                    <br />
                    Singapore Sailing Federation, Dinghy Sailing Level 1
                    <br />
                    Singapore Life Saving Society, Life Saving Level 1, 2, 3 and Bronze Medallion
                    <br />
                    Outward Bound Singapore, Open Water Life Saving
                     
                    <br />
                    Operations Familiarisation & Boat Handling (OBS Area of Operations in Pulau Ubin) 
                    <br />
                    Outward Bound Singapore, Coastal Navigation
                    <br />
                  </p>
                  <p
                    className="c33 c5"
                  >
                    <span
                      className="c32 c5"
                    >
                      Height Activities Training
                    </span>
                    <br />
                    Singapore Mountaineering Federation, Sports Climbing Level 1 & 2
                    <br />
                    Singapore Mountaineering Federation, Abseil Proficiency Level 1 & 2
                    <br />
                    Outward Bound Singapore, Abseil Dispatch and Rescue
                    <br />
                    Outward Bound Singapore, Challenge Ropes Course Familiarisation (Camp 1 and Camp 2 Height Elements)
                    <br />
                    Outward Bound Singapore, Challenge Ropes Course Basic (Camp 1 and Camp 2 Height Element Troubleshooting and Aerial Rescue)
                    <br />
                  </p>
                  <p
                    className="c33 c5"
                  >
                    <span
                      className="c32 c5"
                    >
                      Basic Instructor Training Summative Assessment
                    </span>
                    <br />
                    Training Safety Regulation Exam 
                    <br />
                    Skills Assessment (Trek, Life Saving and Kayak)
                    <br />
                    Course Observation (5 Days)
                    <br />
                    Course Co-instruction (10 Days)
                    <br />
                    Course Assessment (15 Days)
                    <br />
                  </p>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilBitSummaryCertificateTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
