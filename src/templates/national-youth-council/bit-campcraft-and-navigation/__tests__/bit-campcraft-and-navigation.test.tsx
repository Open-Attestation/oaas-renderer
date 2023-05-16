import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilBitCampcraftAndNavigationTemplate } from '../bit-campcraft-and-navigation.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../bit-campcraft-and-navigation.sample'

describe('NationalYouthCouncilBitCampcraftAndNavigationTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilBitCampcraftAndNavigationTemplate
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
              margin-bottom: 8px;
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
              background-image: url('description-watermark.png');
              z-index: initial;
            }

            .c13 {
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

            .c15 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
              text-align: center;
            }

            .c16 {
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

            .c23 {
              font-size: 10px;
              font-style: italic;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c24 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 8px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c26 {
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              -webkit-text-decoration: underline;
              text-decoration: underline;
            }

            .c27 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 4px;
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

            .c5 {
              font-family: 'Libre Franklin';
            }

            .c12 {
              width: 100%;
              height: 100px;
              background: url('nicholas-signature&1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png');
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
            }

            .c14 {
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
              font-family: 'Libre Franklin';
              font-size: 12px;
            }

            .c25 {
              list-style-type: none;
            }

            .c25 > li:before {
              content: counter(list-item) ')';
              display: inline-block;
              min-width: 12px;
              margin-right: 8px;
              vertical-align: middle;
              text-align: left;
              font-weight: 800;
            }

            .c25 > li:not(:last-child) {
              margin-bottom: 8px;
            }

            .c28 {
              list-style-type: none;
              margin: 0;
              padding-left: 16px;
            }

            .c28 > li:before {
              content: counter(list-item) ')';
              display: inline-block;
              min-width: 20px;
              margin-right: 8px;
              vertical-align: middle;
              text-align: right;
            }

            .c22 {
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
                      Campcraft and Navigation Training
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
                    />
                    <div
                      className="c13"
                    />
                    <div
                      className="c14"
                    >
                      <p
                        className="c15 c5"
                      >
                        <b>
                          Nicholas Conceicao
                        </b>
                         | Executive Director
                      </p>
                      <p
                        className="c16 c5"
                      >
                        Outward Bound Singapore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="c17"
              >
                <div
                  className="c18"
                >
                  <div
                    className="c19"
                  >
                    <p
                      className="c20 c5"
                    >
                      Brick Wall Model of Core Competencies for Effective Outdoor Leadership
                    </p>
                    <div
                      className="c21"
                    >
                      <img
                        alt="brick wall model"
                        className="c22"
                        src="brick-wall-model.png"
                      />
                      <p
                        className="c23 c5"
                      >
                        Priest, S. & Gass, M. (2018). Effective Leadership in Adventure Programming (3rd ed.). Human Kinetics
                      </p>
                    </div>
                  </div>
                  <div>
                    <p
                      className="c24 c5"
                    >
                      Campcraft & Navigation Modules
                    </p>
                    <div
                      className="c19"
                    >
                      <ol
                        className="c25"
                        style={
                          Object {
                            "padding": 0,
                          }
                        }
                      >
                        <li>
                          <span
                            className="c26 c5"
                          >
                            Navigation
                          </span>
                          <p
                            className="c27 c5"
                          >
                            Gain the knowledge and skill to conduct basic navigation lessons to OBS participants.
                          </p>
                        </li>
                        <li>
                          <span
                            className="c26 c5"
                          >
                            Risk Analysis and Management Systems
                          </span>
                          <p
                            className="c27 c5"
                          >
                            Develop proficiency in application of risk management to Land Expedition activities.
                          </p>
                        </li>
                        <li>
                          <span
                            className="c26 c5"
                          >
                            Knots and Lashings
                          </span>
                          <p
                            className="c27 c5"
                          >
                            Identify and be able to tie the following:
                          </p>
                          <ol
                            className="c28"
                          >
                            <li>
                              Overhand knots
                            </li>
                            <li>
                              Figure 8 knots
                            </li>
                            <li>
                              Reef knot
                            </li>
                            <li>
                              Fisherman knots
                            </li>
                            <li>
                              Hitches (Clove, Half, Mooring & Taut line)
                            </li>
                            <li>
                              Lashings (Square, Tripod and Round)
                            </li>
                            <li>
                              Bowline
                            </li>
                            <li>
                              Alpine Butterfly
                            </li>
                            <li>
                              Sheet bend
                            </li>
                            <li>
                              Sheepshank
                            </li>
                          </ol>
                        </li>
                        <li>
                          <span
                            className="c26 c5"
                          >
                            Campsite Selection & Shelter Building
                          </span>
                          <p
                            className="c27 c5"
                          >
                            Analyse campsite suitability and appropriate shelter with considerations of space, ground type and foliage density.
                          </p>
                        </li>
                        <li>
                          <span
                            className="c26 c5"
                          >
                            Field Hygiene
                          </span>
                          <p
                            className="c27 c5"
                          >
                            Gain knowledge on the advice needed for participants to be able to maintain proper personal and cooking hygiene in the field.
                          </p>
                        </li>
                        <li>
                          <span
                            className="c26 c5"
                          >
                            Expedition Management
                          </span>
                          <p
                            className="c27 c5"
                          >
                            Gain knowledge and skills to conduct a safe and quality land expedition.
                          </p>
                          <ul>
                            <li>
                              Group management during trekking
                            </li>
                            <li>
                              Incident management for
                              <ul>
                                <li>
                                  Inclement weather
                                </li>
                                <li>
                                  Animal attack (Bee/Hornet/Boars/Dogs/Monkeys/Snakes)
                                </li>
                                <li>
                                  Unable to locate current location
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <p
                    className="c29 c5"
                  >
                    The curriculum for Campcraft and Navigation aims to provide a list of competency modules to be delivered in the training. The skills and knowledge in the modules will enable participants to conduct a safe and quality OBS Courses (e.g. 5 Days MOE-OBS programme, PSOEB programme, etc.) This include competencies in map reading and basic orientation skills, introduction to knots and lashings and how to tie the respective knots and lashes as well as its characteristics, camp-craftsmanship and managing field hygiene, introducing to shelter building and its application to different location/campsites and application of risk assessment management. Participants will also be exposed to an introduction to the 7 principles of Leave No Trace (LNT) as well as night navigation.
                  </p>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilBitCampcraftAndNavigationTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('JOHN DOE')).toBeTruthy()
    })
})
