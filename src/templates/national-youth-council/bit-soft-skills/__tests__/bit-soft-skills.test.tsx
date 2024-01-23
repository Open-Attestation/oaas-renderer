import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilBitSoftSkillsTemplate } from '../bit-soft-skills.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../bit-soft-skills.sample'

describe('NationalYouthCouncilBitSoftSkillsTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilBitSoftSkillsTemplate
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
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
            }

            .c19 > *:not(:last-child) {
              margin-bottom: 24px;
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
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
            }

            .c20 > *:not(:last-child) {
              margin-bottom: 8px;
            }

            .c22 {
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

            .c22 > *:not(:last-child) {
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
              background-image: url('description-watermark.png');
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
              margin-top: 0px;
              margin-bottom: 0px;
              text-align: center;
            }

            .c7 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c8 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c9 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              text-align: center;
            }

            .c10 {
              font-size: 16px;
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

            .c21 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }

            .c24 {
              font-size: 10px;
              font-style: italic;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c25 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c28 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c29 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              width: 100%;
              text-align: left;
            }

            .c31 {
              font-size: 12px;
              font-style: italic;
              font-weight: 400;
              margin-top: 16px;
              margin-bottom: 16px;
            }

            .c5 {
              font-family: 'Libre Franklin';
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

            .c12 {
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

            .c13 {
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

            .c1 {
              min-width: 500px;
            }

            .c26 {
              width: 100%;
              border: none;
              border-collapse: collapse;
              font-family: 'Libre Franklin';
              font-size: 12px;
              text-align: start;
            }

            .c26 td {
              vertical-align: top;
            }

            .c27 {
              white-space: nowrap;
              padding-right: 24px;
            }

            .c30 {
              padding-left: 0px;
              margin-left: 18px;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c23 {
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
                      Certificate of Successful
                      <br />
                      Completion
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
                      is awarded to
                    </p>
                    <p
                      className="c8 c5"
                    >
                      JOHN DOE
                    </p>
                    <p
                      className="c7 c5"
                    >
                      For successfully completing the
                    </p>
                    <p
                      className="c9 c5"
                    >
                      Outward Bound Singapore:
                      <br />
                      Soft Skills Programme
                    </p>
                    <p
                      className="c7 c5"
                    >
                      On the date of
                    </p>
                    <p
                      className="c10 c5"
                    >
                      10 May 2022
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
                    >
                      <img
                        alt="Signature of signee"
                        className="c13"
                        src="nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                      />
                    </div>
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
                  <div
                    className="c20"
                  >
                    <p
                      className="c21 c5"
                    >
                      Brick Wall Model of Core Competencies for Effective Outdoor Leadership
                    </p>
                    <div
                      className="c22"
                    >
                      <img
                        alt="brick wall model"
                        className="c23"
                        src="brick-wall-model.png"
                      />
                      <p
                        className="c24 c5"
                      >
                        Priest, S. & Gass, M. (2018). Effective Leadership in Adventure Programming (3rd ed.). Human Kinetics
                      </p>
                    </div>
                  </div>
                  <p
                    className="c25 c5"
                  >
                    Soft Skills Modules
                  </p>
                  <table
                    className="c26"
                  >
                    <tbody>
                      <tr>
                        <td
                          className="c27"
                        >
                          Soft Skills 1a&1b 
                        </td>
                        <td>
                          Evidence, Philosophy, History, Professional Ethics, Trends and Issues
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="c27"
                        >
                          Soft Skills 2
                        </td>
                        <td>
                          OBS Learning Methodology
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="c27"
                        >
                          Soft Skills 3
                        </td>
                        <td>
                          Program Development and Introduction
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="c27"
                        >
                          Soft Skills 4
                        </td>
                        <td>
                          Facilitation Skills, Organizational Skills, Instructional Skills, Communication and Conditional Leadership
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="c27"
                        >
                          Soft Skills 5a&5b
                        </td>
                        <td>
                          Games Familiarisation and Leadership
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="c27"
                        >
                          Soft Skills 6&7 
                        </td>
                        <td>
                          Problem Solving, Decision Making & Sound Judgement Social Psychology and Group Management
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    className="c20"
                  >
                    <p
                      className="c28 c5"
                    >
                      The Soft Skills Programme is one of the trainings that is required for Trainee Instructors to turn operational. The modules covered in the programme allows the staff to gain knowledge, skills and attitude required to conduct a safe and quality Outward Bound Singapore Course.
                    </p>
                    <div>
                      <p
                        className="c29 c5"
                      >
                        Programme materials and content is largely referenced from the following sources:
                      </p>
                      <ol
                        className="c30"
                      >
                        <li
                          className="c31 c5"
                        >
                          Priest, S. & Gass, M. (2018). Effective Leadership in Adventure Programming (3rd ed.). Human Kinetics
                        </li>
                        <li
                          className="c31 c5"
                        >
                          Jacobson, M. & Ruddy, M. (2004). Open to Outcome: A Practical Guide for Facilitating & Teaching Experiential Reflection. Wood ‘N’ Barnes Publishing
                        </li>
                        <li
                          className="c31 c5"
                        >
                          Mark Collard (2014). Serious Fun: Your Step-by-Step Guide to Learning Remarkably Fun Programs That Make A Difference. playmeo
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilBitSoftSkillsTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
