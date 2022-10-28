import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilCciLevel_2RecertTemplate } from '../cci-level-2-recert.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../cci-level-2-recert.sample'

describe('NationalYouthCouncilCciLevel_2RecertTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilCciLevel_2RecertTemplate
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

            .c3 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: auto;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
            }

            .c6 {
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

            .c18 {
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

            .c18 > *:not(:last-child) {
              margin-bottom: 24px;
            }

            .c1 {
              min-width: 500px;
            }

            .c20 {
              width: 100%;
              border: 1px solid black;
              border-collapse: collapse;
              font-family: 'Libre Franklin';
              font-size: 0.8em;
              text-align: center;
            }

            .c21 {
              border: 1px solid black;
            }

            .c22 {
              border: 1px solid black;
              font-weight: bold;
            }

            .c23 {
              border: 1px solid black;
              font-style: italic;
              text-align: left;
            }

            .c24 {
              padding-left: 0px;
              margin-left: 18px;
              margin-top: 0px;
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

            .c14 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c4 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
              margin-top: 280px;
              text-align: center;
            }

            .c7 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c8 {
              font-size: 1em;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c9 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 400;
              margin-top: -8px;
            }

            .c10 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c11 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
            }

            .c15 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
              color: #808041;
            }

            .c16 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
              color: #808041;
            }

            .c19 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
            }

            .c25 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: 16px;
              margin-bottom: 16px;
            }

            .c5 {
              font-family: 'Libre Franklin';
            }

            .c12 {
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
              -webkit-flex-direction: row-reverse;
              -ms-flex-direction: row-reverse;
              flex-direction: row-reverse;
              left: 2cm;
              right: 2cm;
              bottom: 4.5cm;
            }

            .c13 {
              display: block;
              width: 200px;
              margin: 0 auto;
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
                  <p
                    className="c4 c5"
                  >
                    Certificate of Proficiency
                  </p>
                </div>
                <div
                  className="c6"
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
                    className="c8 c5"
                  >
                    Challenge Course Instructor (Level 2 Recertification)
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
                    All training and assessments are conducted in the Ministry of Education's Outdoor Adventure Learning
                  </p>
                  <p
                    className="c9 c5"
                  >
                    Centres (OALCs) and are based on their local operating systems, procedures and devices.
                  </p>
                  <p
                    className="c9 c5"
                  >
                    This certificate is “Site Specific”, and valid only for purposes of the Ministry of Education’s OALCs.
                  </p>
                  <p
                    className="c10 c5"
                  >
                    Course Date: 
                    30 November 2022
                  </p>
                  <p
                    className="c11 c5"
                  >
                    Certificate No.: 
                    1
                  </p>
                  <p
                    className="c11 c5"
                  >
                    Certificate is valid till 
                    30 Dec 2025
                  </p>
                </div>
                <div
                  className="c12"
                >
                  <div
                    style={
                      Object {
                        "width": 250,
                      }
                    }
                  >
                    <img
                      className="c13"
                      src="nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                    />
                    <div
                      className="c14"
                    />
                    <p
                      className="c15 c5"
                    >
                      <b>
                        Nicholas Conceicao
                      </b>
                       | 
                      Executive Director
                    </p>
                    <p
                      className="c16 c5"
                    >
                      Outward Bound Singapore
                    </p>
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
                    This table lists the operating systems and devices used in the MOE OALCs that this certificate holder has been trained to operate.
                  </p>
                  <table
                    className="c20"
                  >
                    <tbody>
                      <tr>
                        <th
                          className="c21"
                        />
                        <th
                          className="c21"
                        >
                          Labrador OALC
                        </th>
                        <th
                          className="c21"
                        >
                          Jalan Bahtera OALC
                        </th>
                        <th
                          className="c21"
                        >
                          Dairy Farm OALC
                        </th>
                        <th
                          className="c21"
                        >
                          Changi Coast OALC
                        </th>
                      </tr>
                      <tr>
                        <td
                          className="c22"
                        >
                          Tower Circuit
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Edelrid - Smart Belay
                            </li>
                            <li>
                              Roperoller®
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              ISC - SmartSnap
                              <span
                                style={
                                  Object {
                                    "fontSize": "0.5em",
                                    "verticalAlign": "super",
                                  }
                                }
                              >
                                TM
                              </span>
                            </li>
                            <li>
                              Saferoller®
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Edelrid - Smart Belay
                            </li>
                            <li>
                              Saferoller®
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              ISC - SmartSnap
                              <span
                                style={
                                  Object {
                                    "fontSize": "0.5em",
                                    "verticalAlign": "super",
                                  }
                                }
                              >
                                TM
                              </span>
                            </li>
                            <li>
                              Saferoller®
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="c22"
                        >
                          Zipline
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Mini-Zip with Roperoller®
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Traditional Zipline
                            </li>
                            <li>
                              Mini-Zip with Saferoller®
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Mini-Zip with Saferoller®
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Traditional Zipline
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="c22"
                        >
                          Belay
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Traditional top rope belay
                            </li>
                            <li>
                              M-Belay (by pole friction)
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Traditional top rope belay
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Traditional top rope belay
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Traditional top rope belay
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="c22"
                        >
                          Abseil
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Static abseil rig with back up belay set up
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Static abseil rig with back up belay set up
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              N.A
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c23"
                        >
                          <ul
                            className="c24"
                          >
                            <li>
                              Static abseil rig with back up belay set up
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <ul
                    className="c24"
                  >
                    <li
                      className="c25 c5"
                    >
                      This certificate is only valid for purposes of the abovementioned systems and devices at MOE OALCs and does not grant the holder any form of certification to operate or conduct activities at any other premises.
                    </li>
                    <li
                      className="c25 c5"
                    >
                      This certificate shall remain valid for a period of three (3) years from the date of this certificate.
                    </li>
                    <li
                      className="c25 c5"
                    >
                      An expired certificate shall be deemed invalid.
                    </li>
                    <li
                      className="c25 c5"
                    >
                      Any person holding an expired certificate shall be given three (3) months’ grace period from the date of expiry to complete the recertification process.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilCciLevel_2RecertTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
