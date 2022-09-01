import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilCciLevel_1Template } from '../cci-level-1.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../cci-level-1.sample'

describe('NationalYouthCouncilCciLevel_1Template', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilCciLevel_1Template
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
              width: 633px;
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

            .c6 {
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

            .c9 {
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
              margin-top: 8px;
            }

            .c19 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: 633px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: start;
              -webkit-justify-content: flex-start;
              -ms-flex-pack: start;
              justify-content: flex-start;
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

            .c16 {
              display: block;
              border-bottom: 1px solid black;
              width: 100%;
              max-width: 250px;
              margin-top: 0px;
              margin-bottom: 0px;
            }

            .c2 {
              position: relative;
              width: 633px;
            }

            .c2 > *:not(:last-child) {
              margin-bottom: 16px;
            }

            .c29 {
              position: relative;
              width: 100%;
            }

            .c30 {
              font-size: 0.75em;
              font-style: normal;
              font-weight: 400;
              margin-left: 8px;
              text-align: center;
            }

            .c31 {
              font-family: Libre Franklin;
            }

            .c4 {
              background: white;
              position: relative;
              width: 633px;
              height: 882px;
              padding: 16px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 16px;
              z-index: -2;
            }

            .c20 {
              background: white;
              position: relative;
              width: 633px;
              height: 882px;
              padding: 24px 24px 8px 24px;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 16px;
              z-index: -2;
            }

            .c7 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c10 {
              font-size: 0.65em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c11 {
              font-size: 1em;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c12 {
              font-size: 0.65em;
              font-style: normal;
              font-weight: 400;
              margin-top: -8px;
            }

            .c13 {
              font-size: 0.65em;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c14 {
              font-size: 0.65em;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
            }

            .c17 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
            }

            .c18 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: -12px;
            }

            .c22 {
              font-size: 0.65em;
              font-style: normal;
              font-weight: 700;
            }

            .c28 {
              font-size: 0.8em;
              font-style: normal;
              font-weight: 700;
              margin-top: 16px;
              margin-bottom: 16px;
            }

            .c8 {
              font-family: 'Libre Franklin';
            }

            .c1 {
              min-width: 500px;
            }

            .c5 {
              max-width: 100%;
              height: auto;
              position: absolute;
              z-index: -1;
              border-radius: 16px;
              border: 1px solid #ccc;
            }

            .c15 {
              position: absolute;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              left: 50px;
              bottom: 128px;
            }

            .c23 {
              width: 100%;
              border: 1px solid black;
              border-collapse: collapse;
              font-family: 'Libre Franklin';
              font-size: 0.7em;
              text-align: center;
            }

            .c24 {
              border: 1px solid black;
            }

            .c25 {
              border: 1px solid black;
              font-weight: bold;
            }

            .c26 {
              border: 1px solid black;
              font-style: italic;
              text-align: left;
            }

            .c27 {
              padding-left: 0px;
              margin-left: 18px;
              margin-top: 0px;
              margin-bottom: 0px;
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

              .c2 > *:nth-child(2) {
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
              .c29 {
                display: none;
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
                    className="c3 c4"
                  >
                    <img
                      className="c5"
                      src="background.png"
                    />
                    <div
                      className="c6"
                    >
                      <p
                        className="c7 c8"
                      >
                        Certificate of Proficiency
                      </p>
                    </div>
                    <div
                      className="c9"
                    >
                      <p
                        className="c10 c8"
                      >
                        This is to certify that
                      </p>
                      <p
                        className="c11 c8"
                      >
                        John Doe
                      </p>
                      <p
                        className="c10 c8"
                      >
                        has been tested and found proficient to qualify for the following award
                      </p>
                      <p
                        className="c11 c8"
                      >
                        Challenge Course Instructor (Level 1)
                      </p>
                      <p
                        className="c10 c8"
                      >
                        On the date of
                      </p>
                      <p
                        className="c11 c8"
                      >
                        2022-08-10
                      </p>
                      <p
                        className="c10 c8"
                      >
                        All training and assessments are conducted in the Ministry of Education's Outdoor Adventure Learning
                      </p>
                      <p
                        className="c12 c8"
                      >
                        Centres (OALCs) and are based on their local operating systems, procedures and devices.
                      </p>
                      <p
                        className="c12 c8"
                      >
                        This certificate is “Site Specific”, and valid only for purposes of the Ministry of Education’s OALCs.
                      </p>
                      <p
                        className="c13 c8"
                      >
                        Course Date: 
                        2022-06-10
                      </p>
                      <p
                        className="c14 c8"
                      >
                        Certificate No.: 
                        1
                      </p>
                      <p
                        className="c14 c8"
                      >
                        Validity is for one (1) year from the above date.
                      </p>
                    </div>
                    <div
                      className="c15"
                    >
                      <div
                        className="c16"
                      />
                      <p
                        className="c17 c8"
                      >
                        Jane Doe
                      </p>
                      <p
                        className="c18 c8"
                      >
                        Outward Bound Singapore
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="c19 c20"
                  >
                    <div
                      className="c21"
                    >
                      <p
                        className="c22 c8"
                      >
                        This table lists the operating systems and devices used in the MOE OALCs that this certificate holder has been trained to operate.
                      </p>
                      <table
                        className="c23"
                      >
                        <tbody>
                          <tr>
                            <th
                              className="c24"
                            />
                            <th
                              className="c24"
                            >
                              Labrador OALC
                            </th>
                            <th
                              className="c24"
                            >
                              Jalan Bahtera OALC
                            </th>
                            <th
                              className="c24"
                            >
                              Dairy Farm OALC
                            </th>
                            <th
                              className="c24"
                            >
                              Changi Coast OALC
                            </th>
                          </tr>
                          <tr>
                            <td
                              className="c25"
                            >
                              Tower Circuit
                            </td>
                            <td
                              className="c26"
                            >
                              <ul
                                className="c27"
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
                              className="c26"
                            >
                              <ul
                                className="c27"
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
                              className="c26"
                            >
                              <ul
                                className="c27"
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
                              className="c26"
                            >
                              <ul
                                className="c27"
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
                              className="c25"
                            >
                              Zipline
                            </td>
                            <td
                              className="c26"
                            >
                              <ul
                                className="c27"
                              >
                                <li>
                                  Mini-Zip with Roperoller®
                                </li>
                              </ul>
                            </td>
                            <td
                              className="c26"
                            >
                              <ul
                                className="c27"
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
                              className="c26"
                            >
                              <ul
                                className="c27"
                              >
                                <li>
                                  Mini-Zip with Saferoller®
                                </li>
                              </ul>
                            </td>
                            <td
                              className="c26"
                            >
                              <ul
                                className="c27"
                              >
                                <li>
                                  Traditional Zipline
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="c25"
                            >
                              Belay
                            </td>
                            <td
                              className="c26"
                            >
                              <ul
                                className="c27"
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
                              className="c26"
                            >
                              <ul
                                className="c27"
                              >
                                <li>
                                  Traditional top rope belay
                                </li>
                              </ul>
                            </td>
                            <td
                              className="c26"
                            >
                              <ul
                                className="c27"
                              >
                                <li>
                                  Traditional top rope belay
                                </li>
                              </ul>
                            </td>
                            <td
                              className="c26"
                            >
                              <ul
                                className="c27"
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
                        className="c27"
                      >
                        <li
                          className="c28 c8"
                        >
                          This certificate is only valid for purposes of the abovementioned systems and devices at MOE OALCs and does not grant the holder any form of certification to operate or conduct activities at any other premises.
                        </li>
                        <li
                          className="c28 c8"
                        >
                          This certificate shall remain valid for a period of one (1) year from the date of this certificate.
                           
                        </li>
                        <li
                          className="c28 c8"
                        >
                          An expired certificate shall be deemed invalid.
                        </li>
                        <li
                          className="c28 c8"
                        >
                          Any person holding an expired certificate shall be given three (3) months’ grace period from the date of expiry to complete the recertification process.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="c29"
              >
                <div
                  className="c6"
                >
                  <img
                    alt="card flip icon"
                    src="icon-cardflip.svg"
                    width="20"
                  />
                  <p
                    className="c30 c31"
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
            <NationalYouthCouncilCciLevel_1Template
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
