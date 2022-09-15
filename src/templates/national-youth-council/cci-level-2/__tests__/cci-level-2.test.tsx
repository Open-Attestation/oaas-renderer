import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilCciLevel_2Template } from '../cci-level-2.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../cci-level-2.sample'

describe('NationalYouthCouncilCciLevel_2Template', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilCciLevel_2Template
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

            .c4 {
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
              margin-top: 16px;
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

            .c2 {
              position: relative;
              width: 793.7px;
            }

            .c2 > *:first-child {
              page-break-after: always;
            }

            .c27 {
              position: relative;
              width: 100%;
            }

            .c28 {
              font-size: 0.75em;
              font-style: normal;
              font-weight: 400;
              margin-left: 8px;
              text-align: center;
            }

            .c29 {
              font-family: Libre Franklin;
            }

            .c1 {
              min-width: 500px;
            }

            .c21 {
              width: 100%;
              border: 1px solid black;
              border-collapse: collapse;
              font-family: 'Libre Franklin';
              font-size: 0.8em;
              text-align: center;
            }

            .c22 {
              border: 1px solid black;
            }

            .c23 {
              border: 1px solid black;
              font-weight: bold;
            }

            .c24 {
              border: 1px solid black;
              font-style: italic;
              text-align: left;
            }

            .c25 {
              padding-left: 0px;
              margin-left: 18px;
              margin-top: 0px;
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

            .c15 {
              display: block;
              border-bottom: 1px solid #808041;
              width: 100%;
              max-width: 100%;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c5 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
              margin-top: 280px;
              text-align: center;
            }

            .c8 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c9 {
              font-size: 1em;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c10 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 400;
              margin-top: -8px;
            }

            .c11 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c12 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
            }

            .c16 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
              color: #808041;
            }

            .c17 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
              text-align: center;
              color: #808041;
            }

            .c20 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
            }

            .c26 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: 16px;
              margin-bottom: 16px;
            }

            .c6 {
              font-family: 'Libre Franklin';
            }

            .c13 {
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
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
              left: 2cm;
              right: 2cm;
              bottom: 4.5cm;
            }

            .c14 {
              display: block;
              width: 200px;
              margin: 0 auto;
            }

            @media not print {
              .c2 {
                -webkit-transform-style: preserve-3d;
                -ms-transform-style: preserve-3d;
                transform-style: preserve-3d;
                -webkit-transform: rotateY(0deg);
                -ms-transform: rotateY(0deg);
                transform: rotateY(0deg);
                -webkit-transition: -webkit-transform 0.5s ease-in-out 0s;
                -webkit-transition: transform 0.5s ease-in-out 0s;
                transition: transform 0.5s ease-in-out 0s;
                cursor: pointer;
              }

              .c2.flip {
                -webkit-transform: rotateY(180deg);
                -ms-transform: rotateY(180deg);
                transform: rotateY(180deg);
              }

              .c2 > *:last-child {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                -webkit-transform: scaleX(-1) translateZ(-1px);
                -ms-transform: scaleX(-1) translateZ(-1px);
                transform: scaleX(-1) translateZ(-1px);
              }
            }

            @media print {
              .c27 {
                display: none;
              }
            }

            @media print {
              .c3 {
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
                onClick={[Function]}
              >
                <div>
                  <div
                    className="c3"
                  >
                    <div
                      className="c4"
                    >
                      <p
                        className="c5 c6"
                      >
                        Certificate of Proficiency
                      </p>
                    </div>
                    <div
                      className="c7"
                    >
                      <p
                        className="c8 c6"
                      >
                        This is to certify that
                      </p>
                      <p
                        className="c9 c6"
                      >
                        John Doe
                      </p>
                      <p
                        className="c8 c6"
                      >
                        has been tested and found proficient to qualify for the following award
                      </p>
                      <p
                        className="c9 c6"
                      >
                        Challenge Course Instructor (Level 2)
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
                        All training and assessments are conducted in the Ministry of Education's Outdoor Adventure Learning
                      </p>
                      <p
                        className="c10 c6"
                      >
                        Centres (OALCs) and are based on their local operating systems, procedures and devices.
                      </p>
                      <p
                        className="c10 c6"
                      >
                        This certificate is “Site Specific”, and valid only for purposes of the Ministry of Education’s OALCs.
                      </p>
                      <p
                        className="c11 c6"
                      >
                        Course Date: 
                        30 November 2022
                      </p>
                      <p
                        className="c12 c6"
                      >
                        Certificate No.: 
                        1
                      </p>
                      <p
                        className="c12 c6"
                      >
                        Validity is for three (3) year from the above date.
                      </p>
                    </div>
                    <div
                      className="c13"
                    >
                      <div
                        style={
                          Object {
                            "width": 250,
                          }
                        }
                      >
                        <img
                          className="c14"
                          src="sample-signature&a2693ac50a6b39568d13114834a66c9568dc4b51ede88592ef4516b46960c204.png"
                        />
                        <div
                          className="c15"
                        />
                        <p
                          className="c16 c6"
                        >
                          <b>
                            Jane Doe
                          </b>
                           | 
                          Trainer
                        </p>
                        <p
                          className="c17 c6"
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
                          className="c14"
                          src="nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png"
                        />
                        <div
                          className="c15"
                        />
                        <p
                          className="c16 c6"
                        >
                          <b>
                            Nicholas Conceicao
                          </b>
                           | 
                          Executive Director
                        </p>
                        <p
                          className="c17 c6"
                        >
                          Outward Bound Singapore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="c18"
                  >
                    <div
                      className="c19"
                    >
                      <p
                        className="c20 c6"
                      >
                        This table lists the operating systems and devices used in the MOE OALCs that this certificate holder has been trained to operate.
                      </p>
                      <table
                        className="c21"
                      >
                        <tbody>
                          <tr>
                            <th
                              className="c22"
                            />
                            <th
                              className="c22"
                            >
                              Labrador OALC
                            </th>
                            <th
                              className="c22"
                            >
                              Jalan Bahtera OALC
                            </th>
                            <th
                              className="c22"
                            >
                              Dairy Farm OALC
                            </th>
                            <th
                              className="c22"
                            >
                              Changi Coast OALC
                            </th>
                          </tr>
                          <tr>
                            <td
                              className="c23"
                            >
                              Tower Circuit
                            </td>
                            <td
                              className="c24"
                            >
                              <ul
                                className="c25"
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
                              className="c24"
                            >
                              <ul
                                className="c25"
                              >
                                <li>
                                  ISC - SmartSnapTM
                                </li>
                                <li>
                                  Saferoller®
                                </li>
                              </ul>
                            </td>
                            <td
                              className="c24"
                            >
                              <ul
                                className="c25"
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
                              className="c24"
                            >
                              <ul
                                className="c25"
                              >
                                <li>
                                  ISC - SmartSnapTM
                                </li>
                                <li>
                                  Saferoller®
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="c23"
                            >
                              Zipline
                            </td>
                            <td
                              className="c24"
                            >
                              <ul
                                className="c25"
                              >
                                <li>
                                  Mini-Zip with Roperoller®
                                </li>
                              </ul>
                            </td>
                            <td
                              className="c24"
                            >
                              <ul
                                className="c25"
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
                              className="c24"
                            >
                              <ul
                                className="c25"
                              >
                                <li>
                                  Mini-Zip with Saferoller®
                                </li>
                              </ul>
                            </td>
                            <td
                              className="c24"
                            >
                              <ul
                                className="c25"
                              >
                                <li>
                                  Traditional Zipline
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="c23"
                            >
                              Belay
                            </td>
                            <td
                              className="c24"
                            >
                              <ul
                                className="c25"
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
                              className="c24"
                            >
                              <ul
                                className="c25"
                              >
                                <li>
                                  Traditional top rope belay
                                </li>
                              </ul>
                            </td>
                            <td
                              className="c24"
                            >
                              <ul
                                className="c25"
                              >
                                <li>
                                  Traditional top rope belay
                                </li>
                              </ul>
                            </td>
                            <td
                              className="c24"
                            >
                              <ul
                                className="c25"
                              >
                                <li>
                                  Traditional top rope belay
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <ul
                        className="c25"
                      >
                        <li
                          className="c26 c6"
                        >
                          This certificate is only valid for purposes of the abovementioned systems and devices at MOE OALCs and does not grant the holder any form of certification to operate or conduct activities at any other premises.
                        </li>
                        <li
                          className="c26 c6"
                        >
                          This certificate shall remain valid for a period of three (3) years from the date of this certificate.
                        </li>
                        <li
                          className="c26 c6"
                        >
                          An expired certificate shall be deemed invalid.
                        </li>
                        <li
                          className="c26 c6"
                        >
                          Any person holding an expired certificate shall be given three (3) months’ grace period from the date of expiry to complete the recertification process.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="c27"
              >
                <div
                  className="c4"
                >
                  <img
                    alt="card flip icon"
                    src="icon-cardflip.svg"
                    width="20"
                  />
                  <p
                    className="c28 c29"
                  >
                    Click on the card to reveal the other side
                  </p>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilCciLevel_2Template
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
