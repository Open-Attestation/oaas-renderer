import { render, screen } from '@testing-library/react'
import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../milestone.sample'
import { CsaMilestoneTemplate } from '../milestone.template'

describe('MilestoneTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <CsaMilestoneTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c6 {
              display: block;
              border-bottom: 1px solid black;
              width: 100%;
              max-width: 792px;
              margin-top: 16px;
              margin-bottom: 16px;
            }

            .c11 {
              display: block;
              border-bottom: 1px solid black;
              width: 100%;
              max-width: 100%;
              margin-top: 8px;
              margin-bottom: 8px;
            }

            .c1 {
              font-size: 3em;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 32px;
            }

            .c2 {
              font-size: 1em;
              font-style: italic;
              font-weight: 400;
            }

            .c3 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
            }

            .c4 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-bottom: 32px;
            }

            .c5 {
              font-size: 2em;
              font-style: normal;
              font-weight: 700;
            }

            .c7 {
              font-size: 1.5em;
              font-style: italic;
              font-weight: 400;
            }

            .c8 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
            }

            .c12 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 400;
              margin-top: 4px;
              margin-bottom: 4px;
            }

            .c0 {
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
              min-width: 790px;
            }

            .c9 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
            }

            .c10 {
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
            }

            .c10:not(:last-child) {
              margin-right: 128px;
            }

            .c10 span:not(:last-child) {
              margin-bottom: 8px;
            }

            <div
              className="c0"
              id="milestone-template"
            >
              <h1
                className="c1"
              >
                Certificate of Completion
              </h1>
              <p
                className="c2"
              >
                Presented jointly by
              </p>
              <p
                className="c3"
              >
                Cyber Security Agency of Singapore (CSA)
              </p>
              <p
                className="c4"
              >
                awarded to
              </p>
              <p
                className="c5"
              >
                John Doe
              </p>
              <div
                className="c6"
              />
              <p
                className="c7"
              >
                For completion of the
              </p>
              <p
                className="c3"
              >
                 CSA Milestone Programme
              </p>
              <p
                className="c8"
              >
                10 May - 10 June 2022
              </p>
              <div
                className="c9"
              >
                <div
                  className="c10"
                >
                  <img
                    alt="7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab"
                    src="7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab.png"
                  />
                  <div
                    className="c11"
                  />
                  <p
                    className="c12"
                  >
                    Betsie Chacko
                  </p>
                  <p
                    className="c12"
                  >
                    Associate Director
                  </p>
                  <p
                    className="c12"
                  >
                    CISA International
                  </p>
                </div>
                <div
                  className="c10"
                >
                  <img
                    alt="7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab"
                    src="7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab.png"
                  />
                  <div
                    className="c11"
                  />
                  <p
                    className="c12"
                  >
                    Betsie Chacko
                  </p>
                  <p
                    className="c12"
                  >
                    Associate Director
                  </p>
                  <p
                    className="c12"
                  >
                    CISA International
                  </p>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <CsaMilestoneTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
