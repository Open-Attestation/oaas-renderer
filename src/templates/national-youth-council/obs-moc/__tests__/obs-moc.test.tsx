import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilObsMocTemplate } from '../obs-moc.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../obs-moc.sample'

describe('NationalYouthCouncilObsMocTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilObsMocTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
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
            }

            .c1 {
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

            .c3 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              text-align: center;
            }

            .c7 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c8 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
            }

            .c9 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
            }

            .c10 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
              text-align: center;
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

            .c19 {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c20 {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              text-align: justify;
            }

            .c4 {
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

            .c2 {
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

            .c5 {
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

            .c21 {
              font-size: 16px;
              font-family: 'Libre Franklin';
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
              .c1 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
              }
            }

            @media print {
              .c18 {
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
                className="c1"
              >
                <div
                  className="c2"
                >
                  <div>
                    <p
                      className="c3 c4"
                    >
                      Certificate of 
                      <br />
                      Participation
                    </p>
                  </div>
                </div>
                <div
                  className="c5"
                >
                  <div
                    className="c6"
                  >
                    <p
                      className="c7 c4"
                    >
                      This is to certify that
                    </p>
                    <p
                      className="c8 c4"
                    >
                      YEO YOYO
                    </p>
                    <p
                      className="c9 c4"
                    >
                      has completed
                    </p>
                    <p
                      className="c10 c4"
                    >
                      A mentally and physically challenging expeditionary Outward Bound Course as part of the National Outdoor Adventure Education Masterplan
                    </p>
                    <p
                      className="c8 c4"
                    >
                      28 September - 03 October 2022
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
                        className="c16 c4"
                      >
                        <b>
                          Nicholas Conceicao
                        </b>
                         | Executive Director
                      </p>
                      <p
                        className="c17 c4"
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
                <div>
                  <p
                    className="c19 c4"
                  >
                    National Outdoor Adventure Education Masterplan
                  </p>
                  <p
                    className="c20 c4"
                  >
                    The National Outdoor Adventure Education Masterplan is a joint initiative by the Ministry of Education and Ministry of Culture, Community and Youth to strengthen our youth's self-efficacy, resilience and social cohesion. To help our youths prepare for the future, the Masterplan aims to:
                  </p>
                  <ol
                    className="c21"
                  >
                    <li>
                      Build 
                      <b>
                        confidence
                      </b>
                       and 
                      <b>
                        resilience
                      </b>
                       through rugged outdoor living
                    </li>
                    <li>
                      Appreciate community diversity through
                       
                      <b>
                        social interaction
                      </b>
                       opportunities
                    </li>
                    <li>
                      Forge 
                      <b>
                        camaraderie
                      </b>
                       through common challenging experiences
                    </li>
                    <li>
                      Build a strong foundation for
                       
                      <b>
                        active and healthy living
                      </b>
                    </li>
                  </ol>
                  <p
                    className="c20 c4"
                  >
                    Under the Masterplan, youths have the opportunity to attend at least three cohort camps from primary to secondary school. The youth's outdoor education experience will culminate in an Outward Bound Course for Secondary 3 students.
                  </p>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilObsMocTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('YEO YOYO')).toBeTruthy()
    })
})
