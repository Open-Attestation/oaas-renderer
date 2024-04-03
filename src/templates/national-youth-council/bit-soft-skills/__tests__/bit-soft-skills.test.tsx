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
              margin-bottom: 24px;
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
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
            }

            .c21 > *:not(:last-child) {
              margin-bottom: 8px;
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
              margin-bottom: 0px;
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
              background-image: url('description-watermark.png');
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
              margin-top: 0px;
              margin-bottom: 0px;
              text-align: center;
            }

            .c8 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c9 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c10 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              text-align: center;
            }

            .c11 {
              font-size: 16px;
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

            .c22 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }

            .c25 {
              font-size: 10px;
              font-style: italic;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c26 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c29 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c30 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              width: 100%;
              text-align: left;
            }

            .c32 {
              font-size: 12px;
              font-style: italic;
              font-weight: 400;
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

            .c2 {
              min-width: 500px;
            }

            .c27 {
              width: 100%;
              border: none;
              border-collapse: collapse;
              font-family: 'Libre Franklin';
              font-size: 12px;
              text-align: start;
            }

            .c27 td {
              vertical-align: top;
            }

            .c28 {
              white-space: nowrap;
              padding-right: 24px;
            }

            .c31 {
              padding-left: 0px;
              margin-left: 18px;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c24 {
              width: auto;
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
                        Certificate of Successful
                        <br />
                        Completion
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
                        is awarded to
                      </p>
                      <p
                        className="c9 c6"
                      >
                        JOHN DOE
                      </p>
                      <p
                        className="c8 c6"
                      >
                        For successfully completing the
                      </p>
                      <p
                        className="c10 c6"
                      >
                        Outward Bound Singapore:
                        <br />
                        Soft Skills Programme
                      </p>
                      <p
                        className="c8 c6"
                      >
                        On the date of
                      </p>
                      <p
                        className="c11 c6"
                      >
                        10 May 2022
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
                    <div
                      className="c21"
                    >
                      <p
                        className="c22 c6"
                      >
                        Brick Wall Model of Core Competencies for Effective Outdoor Leadership
                      </p>
                      <div
                        className="c23"
                      >
                        <img
                          alt="brick wall model"
                          className="c24"
                          src="brick-wall-model.png"
                        />
                        <p
                          className="c25 c6"
                        >
                          Priest, S. & Gass, M. (2018). Effective Leadership in Adventure Programming (3rd ed.). Human Kinetics
                        </p>
                      </div>
                    </div>
                    <p
                      className="c26 c6"
                    >
                      Soft Skills Modules
                    </p>
                    <table
                      className="c27"
                    >
                      <tbody>
                        <tr>
                          <td
                            className="c28"
                          >
                            Soft Skills 1a&1b
                             
                          </td>
                          <td>
                            Evidence, Philosophy, History, Professional Ethics, Trends and Issues
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="c28"
                          >
                            Soft Skills 2
                          </td>
                          <td>
                            OBS Learning Methodology
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="c28"
                          >
                            Soft Skills 3
                          </td>
                          <td>
                            Program Development and Introduction
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="c28"
                          >
                            Soft Skills 4
                          </td>
                          <td>
                            Facilitation Skills, Organizational Skills, Instructional Skills, Communication and Conditional Leadership
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="c28"
                          >
                            Soft Skills 5a&5b
                          </td>
                          <td>
                            Games Familiarisation and Leadership
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="c28"
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
                      className="c21"
                    >
                      <p
                        className="c29 c6"
                      >
                        The Soft Skills Programme is one of the trainings that is required for Trainee Instructors to turn operational. The modules covered in the programme allows the staff to gain knowledge, skills and attitude required to conduct a safe and quality Outward Bound Singapore Course.
                      </p>
                      <div>
                        <p
                          className="c30 c6"
                        >
                          Programme materials and content is largely referenced from the following sources:
                        </p>
                        <ol
                          className="c31"
                        >
                          <li
                            className="c32 c6"
                          >
                            Priest, S. & Gass, M. (2018). Effective Leadership in Adventure Programming (3rd ed.). Human Kinetics
                          </li>
                          <li
                            className="c32 c6"
                          >
                            Jacobson, M. & Ruddy, M. (2004). Open to Outcome: A Practical Guide for Facilitating & Teaching Experiential Reflection. Wood ‘N’ Barnes Publishing
                          </li>
                          <li
                            className="c32 c6"
                          >
                            Mark Collard (2014). Serious Fun: Your Step-by-Step Guide to Learning Remarkably Fun Programs That Make A Difference. playmeo
                          </li>
                        </ol>
                      </div>
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
