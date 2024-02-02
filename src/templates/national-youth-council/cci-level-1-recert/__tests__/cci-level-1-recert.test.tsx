import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilCciLevel_1RecertTemplate } from '../cci-level-1-recert.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../cci-level-1-recert.sample'

describe('NationalYouthCouncilCciLevel_1RecertTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilCciLevel_1RecertTemplate
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
              margin-bottom: 24px;
            }

            .c2 {
              min-width: 500px;
            }

            .c23 {
              width: 100%;
              border: 1px solid black;
              border-collapse: collapse;
              font-family: 'Libre Franklin';
              font-size: 0.8em;
              text-align: center;
              table-layout: fixed;
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
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: -8px;
            }

            .c11 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c12 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
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

            .c28 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 16px;
              margin-bottom: 16px;
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
                        className="c9 c6"
                      >
                        CHALLENGE COURSE INSTRUCTOR (LEVEL 1 RECERTIFICATION)
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
                        Certificate No.: 
                        1
                      </p>
                      <p
                        className="c12 c6"
                      >
                        Certificate is valid till 
                        30 December 2023
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
                    >
                      This table lists the operating systems and devices used in the MOE OALCs that this certificate holder has been trained to operate.
                    </p>
                    <table
                      className="c23"
                    >
                      <colgroup>
                        <col
                          style={
                            Object {
                              "width": 58,
                            }
                          }
                        />
                        <col />
                        <col />
                        <col />
                        <col />
                      </colgroup>
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
                        <tr>
                          <td
                            className="c25"
                          >
                            Abseil
                          </td>
                          <td
                            className="c26"
                          >
                            <ul
                              className="c27"
                            >
                              <li>
                                Static abseil rig with back up belay set up
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
                                Static abseil rig with back up belay set up
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
                                Static abseil rig with back up belay set up
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
                                Static abseil rig with back up belay set up
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
                        className="c28 c6"
                      >
                        This certificate is only valid for purposes of the abovementioned systems and devices at MOE OALCs and does not grant the holder any form of certification to operate or conduct activities at any other premises.
                      </li>
                      <li
                        className="c28 c6"
                      >
                        This certificate shall remain valid for a period of one (1) year from the date of this certificate.
                         
                      </li>
                      <li
                        className="c28 c6"
                      >
                        An expired certificate shall be deemed invalid.
                      </li>
                      <li
                        className="c28 c6"
                      >
                        Any person holding an expired certificate shall be given three (3) months’ grace period from the date of expiry to complete the recertification process.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilCciLevel_1RecertTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
