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
              margin-bottom: 8px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c28 {
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

            .c29 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 4px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }

            .c31 {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
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
              font-family: 'Libre Franklin';
              font-size: 12px;
            }

            .c27 {
              list-style-type: none;
            }

            .c27 > li:before {
              content: counter(list-item) ')';
              display: inline-block;
              min-width: 12px;
              margin-right: 8px;
              vertical-align: middle;
              text-align: left;
              font-weight: 800;
            }

            .c27 > li:not(:last-child) {
              margin-bottom: 8px;
            }

            .c30 {
              list-style-type: none;
              margin: 0;
              padding-left: 16px;
            }

            .c30 > li:before {
              content: counter(list-item) ')';
              display: inline-block;
              min-width: 20px;
              margin-right: 8px;
              vertical-align: middle;
              text-align: right;
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
                        Campcraft and Navigation Training
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
                    <div>
                      <p
                        className="c26 c6"
                      >
                        Campcraft & Navigation Modules
                      </p>
                      <div
                        className="c21"
                      >
                        <ol
                          className="c27"
                          style={
                            Object {
                              "padding": 0,
                            }
                          }
                        >
                          <li>
                            <span
                              className="c28 c6"
                            >
                              Navigation
                            </span>
                            <p
                              className="c29 c6"
                            >
                              Gain the knowledge and skill to conduct basic navigation lessons to OBS participants.
                            </p>
                          </li>
                          <li>
                            <span
                              className="c28 c6"
                            >
                              Risk Analysis and Management Systems
                            </span>
                            <p
                              className="c29 c6"
                            >
                              Develop proficiency in application of risk management to Land Expedition activities.
                            </p>
                          </li>
                          <li>
                            <span
                              className="c28 c6"
                            >
                              Knots and Lashings
                            </span>
                            <p
                              className="c29 c6"
                            >
                              Identify and be able to tie the following:
                            </p>
                            <ol
                              className="c30"
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
                              className="c28 c6"
                            >
                              Campsite Selection & Shelter Building
                            </span>
                            <p
                              className="c29 c6"
                            >
                              Analyse campsite suitability and appropriate shelter with considerations of space, ground type and foliage density.
                            </p>
                          </li>
                          <li>
                            <span
                              className="c28 c6"
                            >
                              Field Hygiene
                            </span>
                            <p
                              className="c29 c6"
                            >
                              Gain knowledge on the advice needed for participants to be able to maintain proper personal and cooking hygiene in the field.
                            </p>
                          </li>
                          <li>
                            <span
                              className="c28 c6"
                            >
                              Expedition Management
                            </span>
                            <p
                              className="c29 c6"
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
                      className="c31 c6"
                    >
                      The curriculum for Campcraft and Navigation aims to provide a list of competency modules to be delivered in the training. The skills and knowledge in the modules will enable participants to conduct a safe and quality OBS Courses (e.g. 5 Days MOE-OBS programme, PSOEB programme, etc.) This include competencies in map reading and basic orientation skills, introduction to knots and lashings and how to tie the respective knots and lashes as well as its characteristics, camp-craftsmanship and managing field hygiene, introducing to shelter building and its application to different location/campsites and application of risk assessment management. Participants will also be exposed to an introduction to the 7 principles of Leave No Trace (LNT) as well as night navigation.
                    </p>
                  </div>
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
