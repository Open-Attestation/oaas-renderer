import * as React from 'react'
import renderer from 'react-test-renderer'
import { TrustdocsDemoLicenseToVerifyTemplate } from '../license-to-verify.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../license-to-verify.sample'

describe('TrustdocsDemoLicenseToVerifyTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <TrustdocsDemoLicenseToVerifyTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
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
            }

            .c7 > *:not(:last-child) {
              margin-bottom: 16px;
            }

            .c8 {
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

            .c13 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: 100%;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: start;
              -webkit-justify-content: flex-start;
              -ms-flex-pack: start;
              justify-content: flex-start;
            }

            .c16 {
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

            .c16 > *:not(:last-child) {
              margin-bottom: 12px;
            }

            .c17 {
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

            .c17 > *:not(:last-child) {
              margin-bottom: 4px;
            }

            .c0 {
              background: white;
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
              -webkit-letter-spacing: -0.16px;
              -moz-letter-spacing: -0.16px;
              -ms-letter-spacing: -0.16px;
              letter-spacing: -0.16px;
              min-width: 320px;
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
              padding: 24px 0px;
            }

            .c1 {
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

            .c1 * {
              box-sizing: border-box;
            }

            .c1 > div:first-child {
              margin-bottom: 16px;
            }

            .c2 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: 320px;
              height: 500px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              border-radius: 16px;
              overflow: hidden;
              text-align: center;
            }

            .c3 {
              background: white;
              border: 1px solid #d1d5db;
            }

            .c4 {
              background: url(bg.svg);
            }

            .c15 {
              background: #edfafa;
              border: 1px solid #d1d5db;
            }

            .c5 {
              width: 100%;
              height: 48px;
              background: #047481;
              color: #ffffff;
              text-align: center;
              font-family: League Gothic;
              font-size: 32px;
              font-style: normal;
              font-weight: 400;
              line-height: 48px;
              -webkit-letter-spacing: 2.56px;
              -moz-letter-spacing: 2.56px;
              -ms-letter-spacing: 2.56px;
              letter-spacing: 2.56px;
            }

            .c6 {
              padding: 32px 24px 24px 24px;
              width: 100%;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-flex: 1;
              -webkit-flex-grow: 1;
              -ms-flex-positive: 1;
              flex-grow: 1;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }

            .c18 {
              width: calc(175px - 24px);
              height: calc(175px - 24px);
              background: white;
              padding: 12px;
              border: 4px solid #afecef;
              box-sizing: content-box;
              border-radius: 8px;
            }

            .c9 {
              width: 151.638px;
              height: 160px;
              margin-bottom: 32px;
            }

            .c10 {
              color: #036672;
              text-align: center;
              font-family: Inter;
              font-size: 18px;
              font-style: normal;
              font-weight: 700;
              line-height: 150%;
              -webkit-letter-spacing: -0.18px;
              -moz-letter-spacing: -0.18px;
              -ms-letter-spacing: -0.18px;
              letter-spacing: -0.18px;
            }

            .c19 {
              color: #000;
              font-family: Inter;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
              -webkit-letter-spacing: -0.12px;
              -moz-letter-spacing: -0.12px;
              -ms-letter-spacing: -0.12px;
              letter-spacing: -0.12px;
            }

            .c14 {
              width: 159.273px;
              height: 24px;
              padding: 0px 6.218px 0px 5.74px;
            }

            .c11 {
              color: #047481;
              text-align: center;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
              line-height: 150%;
              -webkit-letter-spacing: -0.154px;
              -moz-letter-spacing: -0.154px;
              -ms-letter-spacing: -0.154px;
              letter-spacing: -0.154px;
            }

            .c12 {
              color: #111928;
              text-align: center;
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
              -webkit-letter-spacing: -0.16px;
              -moz-letter-spacing: -0.16px;
              -ms-letter-spacing: -0.16px;
              letter-spacing: -0.16px;
            }

            @media screen and (min-width:800px) {
              .c1 {
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
              }

              .c1 > div:first-child {
                margin-bottom: 0;
                margin-right: 16px;
              }
            }

            <div
              className="c0"
              id="trustdocs-demo-license-to-verify"
            >
              <div
                className="c1"
              >
                <div
                  className="c2 c3"
                >
                  <div
                    className="c2 c4"
                  >
                    <div
                      className="c5"
                    >
                      LICENSE TO VERIFY
                    </div>
                    <div
                      className="c6"
                    >
                      <div
                        className="c7"
                      >
                        <div
                          className="c8"
                        >
                          <img
                            alt="Profile Image"
                            className="c9"
                            src="data:image/png;base64,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"
                          />
                          <div
                            className="c10"
                          >
                            {Your Name}
                          </div>
                          <div>
                            has been assessed to be capable of verifying TrustDocs.
                          </div>
                        </div>
                        <div>
                          <div
                            className="c11"
                          >
                            Valid till
                            :
                          </div>
                          <div
                            className="c12"
                          >
                            24 Nov 2023
                          </div>
                        </div>
                      </div>
                      <div
                        className="c13"
                      >
                        <img
                          alt="Trustdocs Logo"
                          className="c14"
                          src="trustdocs-logo.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="c2 c15"
                >
                  <div
                    className="c5"
                  />
                  <div
                    className="c6"
                  >
                    <div
                      className="c16"
                    >
                      <div>
                        <div
                          className="c11"
                        >
                          Issued on
                          :
                        </div>
                        <div
                          className="c12"
                        >
                          23 Nov 2023
                        </div>
                      </div>
                      <div>
                        <div
                          className="c11"
                        >
                          Country of assessment
                          :
                        </div>
                        <div
                          className="c12"
                        >
                          Singapore
                        </div>
                      </div>
                      <div>
                        <div
                          className="c11"
                        >
                          Assessed by
                          :
                        </div>
                        <div
                          className="c12"
                        >
                          John Demo
                        </div>
                      </div>
                    </div>
                    <div
                      className="c17"
                    >
                      <svg
                        className="c18"
                        height={128}
                        viewBox="0 0 49 49"
                        width={128}
                      >
                        <path
                          d="M0,0 h49v49H0z"
                          fill="#FFFFFF"
                          shapeRendering="crispEdges"
                        />
                        <path
                          d="M0 0h7v1H0zM9 0h5v1H9zM16 0h2v1H16zM19 0h2v1H19zM22 0h1v1H22zM24 0h5v1H24zM30 0h2v1H30zM33 0h5v1H33zM40 0h1v1H40zM42,0 h7v1H42zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM11 1h2v1H11zM16 1h1v1H16zM19 1h1v1H19zM21 1h1v1H21zM26 1h1v1H26zM28 1h3v1H28zM33 1h1v1H33zM37 1h4v1H37zM42 1h1v1H42zM48,1 h1v1H48zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h2v1H8zM12 2h2v1H12zM15 2h4v1H15zM21 2h3v1H21zM27 2h1v1H27zM30 2h3v1H30zM35 2h1v1H35zM39 2h2v1H39zM42 2h1v1H42zM44 2h3v1H44zM48,2 h1v1H48zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM9 3h3v1H9zM13 3h1v1H13zM15 3h1v1H15zM17 3h1v1H17zM19 3h1v1H19zM21 3h1v1H21zM25 3h3v1H25zM29 3h1v1H29zM37 3h1v1H37zM39 3h1v1H39zM42 3h1v1H42zM44 3h3v1H44zM48,3 h1v1H48zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM14 4h3v1H14zM18 4h1v1H18zM20 4h1v1H20zM22 4h5v1H22zM28 4h4v1H28zM33 4h1v1H33zM42 4h1v1H42zM44 4h3v1H44zM48,4 h1v1H48zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM11 5h2v1H11zM14 5h3v1H14zM18 5h1v1H18zM22 5h1v1H22zM26 5h2v1H26zM29 5h6v1H29zM37 5h2v1H37zM42 5h1v1H42zM48,5 h1v1H48zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38 6h1v1H38zM40 6h1v1H40zM42,6 h7v1H42zM8 7h1v1H8zM11 7h4v1H11zM19 7h1v1H19zM22 7h1v1H22zM26 7h2v1H26zM30 7h3v1H30zM35 7h2v1H35zM39 7h2v1H39zM0 8h2v1H0zM3 8h1v1H3zM6 8h2v1H6zM9 8h1v1H9zM13 8h1v1H13zM18 8h1v1H18zM20 8h1v1H20zM22 8h8v1H22zM31 8h1v1H31zM33 8h2v1H33zM36 8h1v1H36zM38 8h2v1H38zM42 8h3v1H42zM46 8h2v1H46zM1 9h1v1H1zM4 9h1v1H4zM11 9h1v1H11zM13 9h1v1H13zM15 9h1v1H15zM17 9h2v1H17zM23 9h1v1H23zM27 9h1v1H27zM32 9h1v1H32zM35 9h1v1H35zM39 9h1v1H39zM43 9h1v1H43zM45 9h1v1H45zM48,9 h1v1H48zM0 10h1v1H0zM2 10h2v1H2zM5 10h4v1H5zM12 10h1v1H12zM15 10h1v1H15zM17 10h1v1H17zM19 10h3v1H19zM23 10h5v1H23zM31 10h2v1H31zM34 10h6v1H34zM41 10h1v1H41zM43 10h2v1H43zM48,10 h1v1H48zM1 11h2v1H1zM4 11h1v1H4zM9 11h3v1H9zM13 11h1v1H13zM15 11h1v1H15zM18 11h4v1H18zM23 11h1v1H23zM28 11h1v1H28zM30 11h1v1H30zM35 11h2v1H35zM41 11h1v1H41zM47 11h1v1H47zM0 12h2v1H0zM5 12h2v1H5zM8 12h2v1H8zM13 12h1v1H13zM15 12h3v1H15zM19 12h1v1H19zM21 12h1v1H21zM23 12h4v1H23zM28 12h3v1H28zM32 12h1v1H32zM35 12h2v1H35zM39 12h1v1H39zM42 12h4v1H42zM47,12 h2v1H47zM0 13h2v1H0zM5 13h1v1H5zM8 13h3v1H8zM12 13h1v1H12zM15 13h3v1H15zM23 13h3v1H23zM28 13h1v1H28zM32 13h1v1H32zM34 13h1v1H34zM37 13h1v1H37zM40 13h1v1H40zM44 13h3v1H44zM48,13 h1v1H48zM1 14h1v1H1zM5 14h2v1H5zM9 14h1v1H9zM11 14h2v1H11zM15 14h2v1H15zM19 14h1v1H19zM21 14h1v1H21zM26 14h3v1H26zM33 14h1v1H33zM36 14h1v1H36zM38 14h2v1H38zM43 14h3v1H43zM48,14 h1v1H48zM0 15h2v1H0zM3 15h3v1H3zM8 15h1v1H8zM10 15h2v1H10zM13 15h3v1H13zM17 15h1v1H17zM24 15h1v1H24zM27 15h2v1H27zM31 15h2v1H31zM34 15h3v1H34zM39 15h1v1H39zM41 15h1v1H41zM44 15h1v1H44zM47 15h1v1H47zM0 16h3v1H0zM4 16h1v1H4zM6 16h2v1H6zM10 16h5v1H10zM17 16h2v1H17zM22 16h6v1H22zM29 16h1v1H29zM32 16h6v1H32zM40 16h2v1H40zM44 16h1v1H44zM47,16 h2v1H47zM1 17h1v1H1zM3 17h1v1H3zM13 17h1v1H13zM18 17h1v1H18zM20 17h2v1H20zM23 17h2v1H23zM26 17h4v1H26zM33 17h1v1H33zM36 17h1v1H36zM38 17h2v1H38zM43 17h3v1H43zM48,17 h1v1H48zM0 18h2v1H0zM4 18h1v1H4zM6 18h3v1H6zM10 18h3v1H10zM14 18h2v1H14zM18 18h1v1H18zM24 18h1v1H24zM26 18h3v1H26zM31 18h1v1H31zM35 18h1v1H35zM37 18h1v1H37zM43 18h3v1H43zM48,18 h1v1H48zM2 19h2v1H2zM5 19h1v1H5zM7 19h2v1H7zM10 19h2v1H10zM13 19h1v1H13zM15 19h2v1H15zM21 19h3v1H21zM25 19h3v1H25zM29 19h1v1H29zM31 19h3v1H31zM35 19h3v1H35zM40 19h2v1H40zM44,19 h5v1H44zM2 20h1v1H2zM6 20h1v1H6zM8 20h1v1H8zM10 20h1v1H10zM12 20h1v1H12zM16 20h3v1H16zM20 20h2v1H20zM24 20h3v1H24zM28 20h3v1H28zM33 20h2v1H33zM36 20h3v1H36zM41 20h1v1H41zM45 20h1v1H45zM47,20 h2v1H47zM0 21h1v1H0zM2 21h1v1H2zM5 21h1v1H5zM9 21h1v1H9zM11 21h2v1H11zM16 21h1v1H16zM19 21h1v1H19zM21 21h1v1H21zM25 21h1v1H25zM33 21h1v1H33zM35 21h2v1H35zM44 21h2v1H44zM48,21 h1v1H48zM0 22h2v1H0zM3 22h7v1H3zM12 22h1v1H12zM14 22h1v1H14zM16 22h2v1H16zM19 22h8v1H19zM32 22h6v1H32zM39 22h7v1H39zM47,22 h2v1H47zM0 23h5v1H0zM8 23h1v1H8zM12 23h1v1H12zM14 23h1v1H14zM16 23h3v1H16zM20 23h1v1H20zM22 23h1v1H22zM26 23h2v1H26zM29 23h3v1H29zM34 23h1v1H34zM36 23h3v1H36zM40 23h1v1H40zM44 23h2v1H44zM1 24h1v1H1zM4 24h1v1H4zM6 24h1v1H6zM8 24h5v1H8zM14 24h2v1H14zM17 24h3v1H17zM22 24h1v1H22zM24 24h1v1H24zM26 24h4v1H26zM31 24h2v1H31zM36 24h2v1H36zM39 24h2v1H39zM42 24h1v1H42zM44 24h1v1H44zM47,24 h2v1H47zM1 25h4v1H1zM8 25h3v1H8zM12 25h7v1H12zM21 25h2v1H21zM26 25h2v1H26zM34 25h1v1H34zM37 25h1v1H37zM40 25h1v1H40zM44 25h2v1H44zM48,25 h1v1H48zM4 26h5v1H4zM12 26h5v1H12zM20 26h7v1H20zM28 26h1v1H28zM31 26h1v1H31zM33 26h1v1H33zM36 26h3v1H36zM40 26h5v1H40zM47,26 h2v1H47zM0 27h3v1H0zM5 27h1v1H5zM12 27h3v1H12zM17 27h3v1H17zM21 27h1v1H21zM25 27h3v1H25zM31 27h2v1H31zM34 27h1v1H34zM36 27h1v1H36zM38 27h3v1H38zM42 27h1v1H42zM45 27h1v1H45zM47,27 h2v1H47zM1 28h1v1H1zM5 28h5v1H5zM11 28h1v1H11zM15 28h1v1H15zM17 28h1v1H17zM19 28h3v1H19zM23 28h1v1H23zM27 28h1v1H27zM29 28h8v1H29zM41 28h2v1H41zM46 28h1v1H46zM48,28 h1v1H48zM1 29h2v1H1zM5 29h1v1H5zM8 29h1v1H8zM12 29h4v1H12zM20 29h2v1H20zM23 29h1v1H23zM28 29h1v1H28zM31 29h1v1H31zM35 29h2v1H35zM38 29h1v1H38zM41 29h1v1H41zM44 29h1v1H44zM47,29 h2v1H47zM3 30h2v1H3zM6 30h1v1H6zM8 30h1v1H8zM10 30h1v1H10zM14 30h3v1H14zM18 30h2v1H18zM21 30h6v1H21zM28 30h1v1H28zM32 30h2v1H32zM35 30h1v1H35zM37 30h1v1H37zM40 30h1v1H40zM42 30h1v1H42zM44,30 h5v1H44zM0 31h1v1H0zM3 31h2v1H3zM7 31h1v1H7zM10 31h2v1H10zM14 31h3v1H14zM19 31h1v1H19zM21 31h2v1H21zM32 31h1v1H32zM34 31h4v1H34zM42 31h2v1H42zM45 31h3v1H45zM0 32h3v1H0zM5 32h2v1H5zM9 32h1v1H9zM11 32h2v1H11zM18 32h3v1H18zM23 32h4v1H23zM28 32h2v1H28zM31 32h1v1H31zM34 32h1v1H34zM36 32h1v1H36zM40 32h1v1H40zM42 32h4v1H42zM47 32h1v1H47zM1 33h2v1H1zM10 33h1v1H10zM14 33h2v1H14zM17 33h3v1H17zM21 33h2v1H21zM25 33h2v1H25zM29 33h1v1H29zM31 33h1v1H31zM36 33h1v1H36zM39 33h2v1H39zM46 33h1v1H46zM48,33 h1v1H48zM2 34h2v1H2zM6 34h1v1H6zM9 34h2v1H9zM13 34h2v1H13zM16 34h1v1H16zM18 34h1v1H18zM20 34h2v1H20zM23 34h2v1H23zM26 34h2v1H26zM32 34h6v1H32zM40 34h3v1H40zM45 34h2v1H45zM48,34 h1v1H48zM1 35h2v1H1zM4 35h1v1H4zM7 35h1v1H7zM10 35h2v1H10zM14 35h2v1H14zM17 35h1v1H17zM20 35h5v1H20zM28 35h2v1H28zM31 35h3v1H31zM36 35h1v1H36zM38 35h1v1H38zM41 35h2v1H41zM44 35h2v1H44zM47 35h1v1H47zM0 36h4v1H0zM5 36h2v1H5zM8 36h1v1H8zM10 36h1v1H10zM12 36h1v1H12zM14 36h1v1H14zM16 36h1v1H16zM18 36h2v1H18zM23 36h1v1H23zM26 36h1v1H26zM28 36h7v1H28zM36 36h1v1H36zM42 36h2v1H42zM47,36 h2v1H47zM4 37h1v1H4zM9 37h1v1H9zM12 37h2v1H12zM21 37h1v1H21zM25 37h2v1H25zM28 37h2v1H28zM31 37h4v1H31zM36 37h1v1H36zM39 37h1v1H39zM42 37h2v1H42zM45,37 h4v1H45zM1 38h1v1H1zM5 38h4v1H5zM10 38h2v1H10zM18 38h2v1H18zM21 38h3v1H21zM25 38h1v1H25zM27 38h2v1H27zM31 38h1v1H31zM33 38h1v1H33zM36 38h1v1H36zM38 38h1v1H38zM40 38h1v1H40zM42 38h1v1H42zM48,38 h1v1H48zM1 39h3v1H1zM7 39h1v1H7zM10 39h1v1H10zM12 39h3v1H12zM16 39h2v1H16zM21 39h3v1H21zM27 39h2v1H27zM30 39h1v1H30zM32 39h2v1H32zM35 39h2v1H35zM38 39h1v1H38zM40 39h2v1H40zM43 39h3v1H43zM0 40h3v1H0zM6 40h4v1H6zM14 40h3v1H14zM18 40h2v1H18zM22 40h5v1H22zM32 40h1v1H32zM34 40h3v1H34zM40 40h8v1H40zM8 41h1v1H8zM10 41h2v1H10zM15 41h1v1H15zM18 41h3v1H18zM22 41h1v1H22zM26 41h1v1H26zM28 41h2v1H28zM35 41h1v1H35zM38 41h3v1H38zM44 41h1v1H44zM46 41h1v1H46zM48,41 h1v1H48zM0 42h7v1H0zM8 42h2v1H8zM13 42h1v1H13zM17 42h1v1H17zM19 42h1v1H19zM22 42h1v1H22zM24 42h1v1H24zM26 42h4v1H26zM32 42h2v1H32zM36 42h2v1H36zM40 42h1v1H40zM42 42h1v1H42zM44 42h2v1H44zM48,42 h1v1H48zM0 43h1v1H0zM6 43h1v1H6zM11 43h1v1H11zM14 43h5v1H14zM21 43h2v1H21zM26 43h2v1H26zM29 43h1v1H29zM31 43h2v1H31zM35 43h4v1H35zM40 43h1v1H40zM44 43h1v1H44zM46 43h1v1H46zM0 44h1v1H0zM2 44h3v1H2zM6 44h1v1H6zM9 44h2v1H9zM12 44h5v1H12zM20 44h1v1H20zM22 44h5v1H22zM28 44h2v1H28zM33 44h2v1H33zM36 44h1v1H36zM38 44h1v1H38zM40 44h6v1H40zM47 44h1v1H47zM0 45h1v1H0zM2 45h3v1H2zM6 45h1v1H6zM8 45h4v1H8zM13 45h1v1H13zM15 45h1v1H15zM17 45h1v1H17zM19 45h1v1H19zM22 45h2v1H22zM27 45h3v1H27zM33 45h1v1H33zM36 45h1v1H36zM39 45h3v1H39zM44 45h2v1H44zM47,45 h2v1H47zM0 46h1v1H0zM2 46h3v1H2zM6 46h1v1H6zM9 46h4v1H9zM14 46h2v1H14zM17 46h3v1H17zM23 46h4v1H23zM29 46h1v1H29zM32 46h1v1H32zM34 46h1v1H34zM36 46h1v1H36zM41 46h1v1H41zM44 46h1v1H44zM46 46h1v1H46zM0 47h1v1H0zM6 47h1v1H6zM8 47h1v1H8zM14 47h2v1H14zM17 47h1v1H17zM19 47h5v1H19zM26 47h3v1H26zM36 47h3v1H36zM41 47h1v1H41zM0 48h7v1H0zM8 48h4v1H8zM13 48h3v1H13zM18 48h1v1H18zM20 48h6v1H20zM27 48h3v1H27zM31 48h6v1H31zM40 48h2v1H40zM43 48h2v1H43zM47,48 h2v1H47z"
                          fill="#000000"
                          shapeRendering="crispEdges"
                        />
                      </svg>
                      <div
                        className="c19"
                      >
                        Scan QR to verify
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `)
    })
})
