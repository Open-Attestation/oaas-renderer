import * as React from 'react'
import renderer from 'react-test-renderer'
import { TrustdocsDemoNparksQvacTemplate } from '../nparks-qvac.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../nparks-qvac.sample'

describe('TrustdocsDemoNparksQvacTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <TrustdocsDemoNparksQvacTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c1 {
              background: white;
              position: relative;
              max-width: 21cm;
              min-width: 320px;
              padding: 2cm;
              min-height: 29.7cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('undefined');
              z-index: initial;
            }

            .c2 {
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

            .c2 > *:not(:last-child) {
              margin-bottom: 40px;
            }

            .c7 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: 100%;
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

            .c0 {
              font-family: Arial,Helvetica,sans-serif;
            }

            .c6 {
              font-size: 15px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              text-align: center;
            }

            .c11 {
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 24px;
              padding-right: 24px;
              text-align: center;
            }

            .c12 {
              font-size: 15px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              width: 100%;
            }

            .c4 {
              width: 187px;
              height: 101px;
            }

            .c5 {
              width: 307px;
              height: 74px;
            }

            .c3 {
              width: 100%;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              gap: 32px;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
              -webkit-align-items: flex-end;
              -webkit-box-align: flex-end;
              -ms-flex-align: flex-end;
              align-items: flex-end;
            }

            .c8 {
              width: 100%;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
              line-height: 22.5px;
              padding: 4px 0px;
            }

            .c9 {
              width: 50%;
              font-weight: bold;
            }

            .c10 {
              width: 50%;
            }

            .c14 {
              border: 1px solid #bebebe;
              padding: 8px;
              margin-top: 24px;
            }

            .c15 {
              max-width: 256px;
              max-height: 256px;
              background-color: #ccc;
            }

            .c13 {
              display: none;
            }

            .c16 {
              display: block;
            }

            @media only screen and (max-width:768px) {
              .c1 {
                min-height: 1894px;
                padding: 24px;
              }
            }

            @media print {
              .c1 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                width: 21cm;
                min-height: 29.7cm;
                padding: 2cm;
              }
            }

            @media only screen and (max-width:768px) {
              .c3 {
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
              }
            }

            @media only screen and (max-width:768px) {
              .c8 {
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
              }
            }

            @media only screen and (max-width:768px) {
              .c13 {
                display: block;
              }
            }

            @media only screen and (max-width:768px) {
              .c16 {
                display: none;
              }
            }

            <div
              className="c0"
              id="national-parks-board-quarantine-and-vaccination-certificate"
            >
              <div
                className="c1"
              >
                <div
                  className="c2"
                >
                  <div
                    className="c3"
                  >
                    <img
                      className="c4"
                      src="animal-vet-service-logo.jpg"
                    />
                    <img
                      className="c5"
                      src="animal-vet-service-address.png"
                    />
                  </div>
                  <p
                    className="c6"
                  >
                    QUARANTINE AND VACCINATION CERTIFICATE
                  </p>
                  <div
                    className="c7"
                  >
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Name of Animal:
                      </div>
                      <div
                        className="c10"
                      >
                        SAMPLE_NAME1
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Microchip Number:
                      </div>
                      <div
                        className="c10"
                      >
                        000 000 000 000 000
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Species:
                      </div>
                      <div
                        className="c10"
                      >
                        CANINE
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Breed:
                      </div>
                      <div
                        className="c10"
                      >
                        Toy Poodle
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Month/Year of Birth:
                      </div>
                      <div
                        className="c10"
                      >
                        DECEMBER 2023
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Sex:
                      </div>
                      <div
                        className="c10"
                      >
                        MALE
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Colour:
                      </div>
                      <div
                        className="c10"
                      >
                        White
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Country of Export:
                      </div>
                      <div
                        className="c10"
                      >
                        Malaysia
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Name of Owner:
                      </div>
                      <div
                        className="c10"
                      >
                        SAMPLE_NAME2
                      </div>
                    </div>
                  </div>
                  <p
                    className="c11"
                  >
                    THIS IS TO CERTIFY THAT THE ANIMAL DETAILED ABOVE HAS COMPLETED THE MANDATORY POST ARRIVAL QUARANTINE OF
                     
                    <b>
                      <u>
                        11
                      </u>
                       DAYS
                    </b>
                     
                    FROM
                     
                    <b>
                      <u>
                        20/12/2023
                      </u>
                    </b>
                     
                    TO
                     
                    <b>
                      <u>
                        31/12/2023
                      </u>
                    </b>
                     
                    IN SINGAPORE
                  </p>
                  <p
                    className="c12"
                  >
                    DETAILS OF RABIES VACCINATION (IF APPLICABLE)
                  </p>
                  <div
                    className="c7"
                  >
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Manufacturer/Vaccination Name/Brand:
                      </div>
                      <div
                        className="c10"
                      >
                        SAMPLE_NAME3
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Date of Vaccination:
                      </div>
                      <div
                        className="c10"
                      >
                        13 SEPTEMBER 2022
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Duration of validity:
                      </div>
                      <div
                        className="c10"
                      >
                        1 Year
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Batch/Lot number:
                      </div>
                      <div
                        className="c10"
                      >
                        X000000
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Batch/Lot expiry:
                      </div>
                      <div
                        className="c10"
                      >
                        02 DECEMBER 2023
                      </div>
                    </div>
                    <div
                      className="c8"
                    >
                      <div
                        className="c9"
                      >
                        Veterinarian:
                      </div>
                      <div
                        className="c10"
                      >
                        SAMPLE_NAME4
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="c13"
                >
                  <div
                    className="c2"
                    style={
                      Object {
                        "marginBottom": "24px",
                        "marginTop": "48px",
                      }
                    }
                  >
                    Present QR code for official authority to scan for verification
                    <div
                      className="c14"
                    >
                      <div
                        className="c15"
                      >
                        <svg
                          height={256}
                          viewBox="0 0 21 21"
                          width={256}
                        >
                          <path
                            d="M0,0 h21v21H0z"
                            fill="#FFFFFF"
                            shapeRendering="crispEdges"
                          />
                          <path
                            d="M0 0h7v1H0zM9 0h4v1H9zM14,0 h7v1H14zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM10 1h2v1H10zM14 1h1v1H14zM20,1 h1v1H20zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h4v1H9zM14 2h1v1H14zM16 2h3v1H16zM20,2 h1v1H20zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM10 3h2v1H10zM14 3h1v1H14zM16 3h3v1H16zM20,3 h1v1H20zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h2v1H9zM14 4h1v1H14zM16 4h3v1H16zM20,4 h1v1H20zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM12 5h1v1H12zM14 5h1v1H14zM20,5 h1v1H20zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14,6 h7v1H14zM8 7h2v1H8zM11 7h1v1H11zM4 8h4v1H4zM9 8h1v1H9zM11 8h2v1H11zM14 8h2v1H14zM19 8h1v1H19zM1 9h3v1H1zM8 9h1v1H8zM10 9h1v1H10zM14 9h2v1H14zM17 9h3v1H17zM0 10h3v1H0zM4 10h4v1H4zM9 10h2v1H9zM12 10h1v1H12zM15 10h2v1H15zM18 10h2v1H18zM0 11h2v1H0zM3 11h3v1H3zM9 11h2v1H9zM12 11h3v1H12zM16 11h1v1H16zM18,11 h3v1H18zM2 12h1v1H2zM6 12h1v1H6zM8 12h4v1H8zM8 13h2v1H8zM11 13h1v1H11zM13 13h1v1H13zM17 13h1v1H17zM19,13 h2v1H19zM0 14h7v1H0zM8 14h1v1H8zM10 14h1v1H10zM14 14h1v1H14zM17 14h3v1H17zM0 15h1v1H0zM6 15h1v1H6zM8 15h5v1H8zM15 15h1v1H15zM18,15 h3v1H18zM0 16h1v1H0zM2 16h3v1H2zM6 16h1v1H6zM8 16h1v1H8zM10 16h1v1H10zM12 16h1v1H12zM15 16h2v1H15zM19,16 h2v1H19zM0 17h1v1H0zM2 17h3v1H2zM6 17h1v1H6zM9 17h4v1H9zM17 17h1v1H17zM19,17 h2v1H19zM0 18h1v1H0zM2 18h3v1H2zM6 18h1v1H6zM9 18h1v1H9zM12 18h2v1H12zM15 18h2v1H15zM18 18h1v1H18zM0 19h1v1H0zM6 19h1v1H6zM9 19h2v1H9zM14 19h3v1H14zM18 19h1v1H18zM20,19 h1v1H20zM0 20h7v1H0zM11 20h1v1H11zM14 20h1v1H14zM18,20 h3v1H18z"
                            fill="#000000"
                            shapeRendering="crispEdges"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="c16"
              >
                <div
                  className="c1"
                >
                  <div
                    className="c2"
                  >
                    Present QR code for official authority to scan for verification
                    <div
                      className="c14"
                    >
                      <div
                        className="c15"
                      >
                        <svg
                          height={256}
                          viewBox="0 0 21 21"
                          width={256}
                        >
                          <path
                            d="M0,0 h21v21H0z"
                            fill="#FFFFFF"
                            shapeRendering="crispEdges"
                          />
                          <path
                            d="M0 0h7v1H0zM9 0h4v1H9zM14,0 h7v1H14zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM10 1h2v1H10zM14 1h1v1H14zM20,1 h1v1H20zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h4v1H9zM14 2h1v1H14zM16 2h3v1H16zM20,2 h1v1H20zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM10 3h2v1H10zM14 3h1v1H14zM16 3h3v1H16zM20,3 h1v1H20zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h2v1H9zM14 4h1v1H14zM16 4h3v1H16zM20,4 h1v1H20zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM12 5h1v1H12zM14 5h1v1H14zM20,5 h1v1H20zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14,6 h7v1H14zM8 7h2v1H8zM11 7h1v1H11zM4 8h4v1H4zM9 8h1v1H9zM11 8h2v1H11zM14 8h2v1H14zM19 8h1v1H19zM1 9h3v1H1zM8 9h1v1H8zM10 9h1v1H10zM14 9h2v1H14zM17 9h3v1H17zM0 10h3v1H0zM4 10h4v1H4zM9 10h2v1H9zM12 10h1v1H12zM15 10h2v1H15zM18 10h2v1H18zM0 11h2v1H0zM3 11h3v1H3zM9 11h2v1H9zM12 11h3v1H12zM16 11h1v1H16zM18,11 h3v1H18zM2 12h1v1H2zM6 12h1v1H6zM8 12h4v1H8zM8 13h2v1H8zM11 13h1v1H11zM13 13h1v1H13zM17 13h1v1H17zM19,13 h2v1H19zM0 14h7v1H0zM8 14h1v1H8zM10 14h1v1H10zM14 14h1v1H14zM17 14h3v1H17zM0 15h1v1H0zM6 15h1v1H6zM8 15h5v1H8zM15 15h1v1H15zM18,15 h3v1H18zM0 16h1v1H0zM2 16h3v1H2zM6 16h1v1H6zM8 16h1v1H8zM10 16h1v1H10zM12 16h1v1H12zM15 16h2v1H15zM19,16 h2v1H19zM0 17h1v1H0zM2 17h3v1H2zM6 17h1v1H6zM9 17h4v1H9zM17 17h1v1H17zM19,17 h2v1H19zM0 18h1v1H0zM2 18h3v1H2zM6 18h1v1H6zM9 18h1v1H9zM12 18h2v1H12zM15 18h2v1H15zM18 18h1v1H18zM0 19h1v1H0zM6 19h1v1H6zM9 19h2v1H9zM14 19h3v1H14zM18 19h1v1H18zM20,19 h1v1H20zM0 20h7v1H0zM11 20h1v1H11zM14 20h1v1H14zM18,20 h3v1H18z"
                            fill="#000000"
                            shapeRendering="crispEdges"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <TrustdocsDemoNparksQvacTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('SAMPLE_NAME1')).toBeTruthy()
    })
})
