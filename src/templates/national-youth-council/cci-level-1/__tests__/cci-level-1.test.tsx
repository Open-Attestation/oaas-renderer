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

            .c1 {
              min-width: 500px;
            }

            .c22 {
              width: 100%;
              border: 1px solid black;
              border-collapse: collapse;
              font-family: 'Libre Franklin';
              font-size: 0.8em;
              text-align: center;
              table-layout: fixed;
            }

            .c23 {
              border: 1px solid black;
            }

            .c24 {
              border: 1px solid black;
              font-weight: bold;
            }

            .c25 {
              border: 1px solid black;
              font-style: italic;
              text-align: left;
            }

            .c26 {
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
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: -8px;
            }

            .c10 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c11 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: -8px;
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

            .c21 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
            }

            .c27 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 16px;
              margin-bottom: 16px;
            }

            .c5 {
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
              .c19 {
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
                      JOHN DOE
                    </p>
                    <p
                      className="c7 c5"
                    >
                      has been tested and found proficient to qualify for the following award
                    </p>
                    <p
                      className="c8 c5"
                    >
                      CHALLENGE COURSE INSTRUCTOR (LEVEL 1)
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
                      Certificate No.: 
                      1
                    </p>
                    <p
                      className="c11 c5"
                    >
                      Certificate is valid till 
                      30 December 2023
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
                        className="c17 c5"
                      >
                        <b>
                          Nicholas Conceicao
                        </b>
                         | Executive Director
                      </p>
                      <p
                        className="c18 c5"
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
                  <p
                    className="c21 c5"
                  >
                    This table lists the operating systems and devices used in the MOE OALCs that this certificate holder has been trained to operate.
                  </p>
                  <table
                    className="c22"
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
                          className="c23"
                        />
                        <th
                          className="c23"
                        >
                          Labrador OALC
                        </th>
                        <th
                          className="c23"
                        >
                          Jalan Bahtera OALC
                        </th>
                        <th
                          className="c23"
                        >
                          Dairy Farm OALC
                        </th>
                        <th
                          className="c23"
                        >
                          Changi Coast OALC
                        </th>
                      </tr>
                      <tr>
                        <td
                          className="c24"
                        >
                          Tower Circuit
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
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
                          className="c25"
                        >
                          <ul
                            className="c26"
                          >
                            <li>
                              Saferoller®
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
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
                          className="c25"
                        >
                          <ul
                            className="c26"
                          >
                            <li>
                              Saferoller®
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="c24"
                        >
                          Zipline
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
                          >
                            <li>
                              Mini-Zip with Roperoller®
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
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
                          className="c25"
                        >
                          <ul
                            className="c26"
                          >
                            <li>
                              Mini-Zip with Saferoller®
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
                          >
                            <li>
                              Traditional Zipline
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="c24"
                        >
                          Belay
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
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
                          className="c25"
                        >
                          <ul
                            className="c26"
                          >
                            <li>
                              Traditional top rope belay
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
                          >
                            <li>
                              Traditional top rope belay
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
                          >
                            <li>
                              Traditional top rope belay
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="c24"
                        >
                          Abseil
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
                          >
                            <li>
                              Static abseil rig with back up belay set up
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
                          >
                            <li>
                              Static abseil rig with back up belay set up
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
                          >
                            <li>
                              Static abseil rig with back up belay set up
                            </li>
                          </ul>
                        </td>
                        <td
                          className="c25"
                        >
                          <ul
                            className="c26"
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
                    className="c26"
                  >
                    <li
                      className="c27 c5"
                    >
                      This certificate is only valid for purposes of the abovementioned systems and devices at MOE OALCs and does not grant the holder any form of certification to operate or conduct activities at any other premises.
                    </li>
                    <li
                      className="c27 c5"
                    >
                      This certificate shall remain valid for a period of one (1) year from the date of this certificate.
                       
                    </li>
                    <li
                      className="c27 c5"
                    >
                      An expired certificate shall be deemed invalid.
                    </li>
                    <li
                      className="c27 c5"
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
            <NationalYouthCouncilCciLevel_1Template
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
