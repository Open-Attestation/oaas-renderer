import * as React from 'react'
import renderer from 'react-test-renderer'
import { NationalYouthCouncilGenerateCertificateTemplate } from '../generate-certificate.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../generate-certificate.sample'

describe('NationalYouthCouncilGenerateCertificateTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalYouthCouncilGenerateCertificateTemplate
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

            .c2 {
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

            .c5 {
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
              margin-top: -32px;
            }

            .c3 {
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

            .c6 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
            }

            .c8 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
              margin-top: -24px;
            }

            .c9 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
            }

            .c10 {
              font-size: 1.5em;
              font-style: normal;
              font-weight: 700;
              margin-top: 8px;
            }

            .c11 {
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin-top: 8px;
            }

            .c7 {
              font-family: 'Libre Franklin';
            }

            .c1 {
              min-width: 500px;
            }

            .c4 {
              max-width: 100%;
              height: auto;
              position: absolute;
              z-index: -1;
              border-radius: 16px;
              border: 1px solid #ccc;
            }

            <div
              className="c0 c1"
            >
              <div
                className="c2 c3"
              >
                <img
                  className="c4"
                  src="background.png"
                />
                <div
                  className="c5"
                >
                  <p
                    className="c6 c7"
                  >
                    Certificate of
                  </p>
                  <p
                    className="c8 c7"
                  >
                    Completion
                  </p>
                </div>
                <div
                  className="c0"
                >
                  <p
                    className="c9 c7"
                  >
                    This is to certify that
                  </p>
                  <p
                    className="c10 c7"
                  >
                    John Doe
                  </p>
                  <p
                    className="c11 c7"
                  >
                    has completed
                  </p>
                  <p
                    className="c10 c7"
                  >
                     CSA Milestone Programme
                  </p>
                  <p
                    className="c10 c7"
                  >
                    10 May 2022
                     - 
                    10 Jun 2022
                  </p>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <NationalYouthCouncilGenerateCertificateTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('John Doe')).toBeTruthy()
    })
})
