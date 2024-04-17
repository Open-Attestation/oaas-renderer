import { v2 } from '@govtechsg/open-attestation'
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import renderer from 'react-test-renderer'

import { sample } from '../quarantine-and-vaccination-certificate.sample'
import { NationalParksBoardQuarantineAndVaccinationCertificateTemplate } from '../quarantine-and-vaccination-certificate.template'

describe('NationalParksBoardQuarantineAndVaccinationCertificateTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <NationalParksBoardQuarantineAndVaccinationCertificateTemplate
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
                        KOBE
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
                        900 111 881 990 863
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
                        Shiba Inu
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
                        China
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
                        CHAN ZI ANG
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
                        MERIAL RABISIN R
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
                        L489157
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
                        Clarissa Frany Francisco, DVM
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
                          viewBox="0 0 69 69"
                          width={256}
                        >
                          <path
                            d="M0,0 h69v69H0z"
                            fill="#FFFFFF"
                            shapeRendering="crispEdges"
                          />
                          <path
                            d="M0 0h7v1H0zM10 0h3v1H10zM17 0h1v1H17zM21 0h2v1H21zM24 0h4v1H24zM31 0h1v1H31zM35 0h1v1H35zM42 0h2v1H42zM47 0h1v1H47zM49 0h1v1H49zM52 0h1v1H52zM54 0h1v1H54zM57 0h4v1H57zM62,0 h7v1H62zM0 1h1v1H0zM6 1h1v1H6zM8 1h3v1H8zM14 1h3v1H14zM19 1h1v1H19zM22 1h3v1H22zM26 1h2v1H26zM29 1h2v1H29zM32 1h2v1H32zM36 1h3v1H36zM41 1h1v1H41zM43 1h1v1H43zM45 1h3v1H45zM50 1h2v1H50zM55 1h2v1H55zM62 1h1v1H62zM68,1 h1v1H68zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM10 2h3v1H10zM15 2h1v1H15zM18 2h2v1H18zM22 2h3v1H22zM26 2h8v1H26zM37 2h1v1H37zM40 2h1v1H40zM42 2h5v1H42zM52 2h1v1H52zM56 2h3v1H56zM62 2h1v1H62zM64 2h3v1H64zM68,2 h1v1H68zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM12 3h2v1H12zM15 3h4v1H15zM20 3h1v1H20zM28 3h7v1H28zM36 3h1v1H36zM47 3h3v1H47zM51 3h1v1H51zM53 3h1v1H53zM55 3h1v1H55zM57 3h1v1H57zM60 3h1v1H60zM62 3h1v1H62zM64 3h3v1H64zM68,3 h1v1H68zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h1v1H9zM11 4h1v1H11zM14 4h2v1H14zM17 4h1v1H17zM19 4h1v1H19zM21 4h4v1H21zM26 4h2v1H26zM31 4h6v1H31zM39 4h5v1H39zM45 4h1v1H45zM48 4h2v1H48zM51 4h4v1H51zM56 4h1v1H56zM58 4h1v1H58zM60 4h1v1H60zM62 4h1v1H62zM64 4h3v1H64zM68,4 h1v1H68zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h3v1H10zM15 5h1v1H15zM18 5h2v1H18zM27 5h4v1H27zM32 5h1v1H32zM36 5h3v1H36zM40 5h1v1H40zM46 5h1v1H46zM48 5h4v1H48zM55 5h4v1H55zM62 5h1v1H62zM68,5 h1v1H68zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38 6h1v1H38zM40 6h1v1H40zM42 6h1v1H42zM44 6h1v1H44zM46 6h1v1H46zM48 6h1v1H48zM50 6h1v1H50zM52 6h1v1H52zM54 6h1v1H54zM56 6h1v1H56zM58 6h1v1H58zM60 6h1v1H60zM62,6 h7v1H62zM14 7h1v1H14zM20 7h1v1H20zM24 7h1v1H24zM26 7h2v1H26zM30 7h3v1H30zM36 7h1v1H36zM39 7h1v1H39zM42 7h1v1H42zM45 7h1v1H45zM48 7h2v1H48zM52 7h1v1H52zM54 7h3v1H54zM59 7h2v1H59zM0 8h5v1H0zM6 8h3v1H6zM18 8h1v1H18zM20 8h2v1H20zM23 8h1v1H23zM25 8h1v1H25zM28 8h1v1H28zM30 8h1v1H30zM32 8h7v1H32zM43 8h1v1H43zM45 8h4v1H45zM53 8h1v1H53zM55 8h1v1H55zM57 8h2v1H57zM61 8h1v1H61zM63 8h1v1H63zM65 8h1v1H65zM67 8h1v1H67zM0 9h2v1H0zM4 9h2v1H4zM7 9h2v1H7zM10 9h3v1H10zM14 9h1v1H14zM19 9h1v1H19zM22 9h1v1H22zM24 9h3v1H24zM29 9h1v1H29zM33 9h1v1H33zM37 9h1v1H37zM40 9h1v1H40zM42 9h2v1H42zM45 9h1v1H45zM47 9h1v1H47zM49 9h1v1H49zM53 9h3v1H53zM59 9h2v1H59zM65 9h2v1H65zM68,9 h1v1H68zM0 10h1v1H0zM4 10h1v1H4zM6 10h1v1H6zM9 10h4v1H9zM14 10h1v1H14zM16 10h3v1H16zM20 10h5v1H20zM31 10h7v1H31zM40 10h1v1H40zM43 10h1v1H43zM45 10h9v1H45zM55 10h1v1H55zM57 10h2v1H57zM61 10h3v1H61zM9 11h3v1H9zM14 11h1v1H14zM24 11h1v1H24zM26 11h1v1H26zM29 11h2v1H29zM33 11h1v1H33zM35 11h3v1H35zM39 11h7v1H39zM47 11h1v1H47zM51 11h4v1H51zM56 11h1v1H56zM59 11h1v1H59zM64,11 h5v1H64zM1 12h2v1H1zM6 12h1v1H6zM8 12h3v1H8zM12 12h1v1H12zM16 12h3v1H16zM20 12h2v1H20zM25 12h1v1H25zM28 12h4v1H28zM34 12h1v1H34zM36 12h1v1H36zM41 12h3v1H41zM48 12h1v1H48zM50 12h1v1H50zM53 12h1v1H53zM55 12h1v1H55zM57 12h1v1H57zM60 12h1v1H60zM62 12h1v1H62zM1 13h5v1H1zM10 13h3v1H10zM14 13h1v1H14zM16 13h2v1H16zM19 13h1v1H19zM21 13h2v1H21zM24 13h1v1H24zM26 13h2v1H26zM31 13h1v1H31zM35 13h1v1H35zM37 13h1v1H37zM42 13h2v1H42zM47 13h3v1H47zM51 13h4v1H51zM56 13h2v1H56zM59 13h2v1H59zM65 13h2v1H65zM68,13 h1v1H68zM0 14h1v1H0zM2 14h5v1H2zM11 14h1v1H11zM14 14h2v1H14zM18 14h1v1H18zM20 14h1v1H20zM22 14h2v1H22zM25 14h1v1H25zM27 14h2v1H27zM30 14h1v1H30zM32 14h2v1H32zM36 14h1v1H36zM38 14h2v1H38zM41 14h1v1H41zM46 14h1v1H46zM48 14h1v1H48zM50 14h1v1H50zM52 14h1v1H52zM57 14h3v1H57zM61 14h2v1H61zM64 14h1v1H64zM66 14h2v1H66zM1 15h2v1H1zM4 15h2v1H4zM7 15h1v1H7zM9 15h1v1H9zM11 15h1v1H11zM13 15h3v1H13zM22 15h2v1H22zM26 15h2v1H26zM29 15h3v1H29zM33 15h1v1H33zM35 15h2v1H35zM39 15h2v1H39zM42 15h1v1H42zM44 15h1v1H44zM46 15h1v1H46zM49 15h6v1H49zM56 15h1v1H56zM58 15h3v1H58zM63 15h5v1H63zM5 16h2v1H5zM8 16h2v1H8zM12 16h1v1H12zM18 16h1v1H18zM20 16h2v1H20zM28 16h3v1H28zM32 16h1v1H32zM34 16h3v1H34zM38 16h2v1H38zM45 16h6v1H45zM53 16h2v1H53zM58 16h2v1H58zM61 16h1v1H61zM65 16h1v1H65zM0 17h3v1H0zM4 17h1v1H4zM7 17h1v1H7zM11 17h3v1H11zM17 17h1v1H17zM22 17h6v1H22zM29 17h1v1H29zM33 17h1v1H33zM40 17h1v1H40zM42 17h2v1H42zM47 17h3v1H47zM51 17h2v1H51zM54 17h1v1H54zM56 17h1v1H56zM60 17h2v1H60zM64 17h2v1H64zM67,17 h2v1H67zM0 18h2v1H0zM3 18h1v1H3zM5 18h4v1H5zM12 18h1v1H12zM14 18h1v1H14zM16 18h5v1H16zM24 18h2v1H24zM27 18h1v1H27zM30 18h1v1H30zM32 18h7v1H32zM41 18h1v1H41zM43 18h1v1H43zM46 18h1v1H46zM50 18h1v1H50zM52 18h2v1H52zM58 18h3v1H58zM62 18h1v1H62zM64 18h1v1H64zM67 18h1v1H67zM0 19h2v1H0zM4 19h1v1H4zM7 19h2v1H7zM12 19h2v1H12zM18 19h1v1H18zM21 19h1v1H21zM23 19h3v1H23zM27 19h3v1H27zM31 19h1v1H31zM33 19h1v1H33zM37 19h1v1H37zM39 19h4v1H39zM44 19h2v1H44zM47 19h1v1H47zM49 19h1v1H49zM52 19h3v1H52zM56 19h1v1H56zM58 19h3v1H58zM64 19h3v1H64zM0 20h1v1H0zM2 20h1v1H2zM5 20h3v1H5zM9 20h2v1H9zM12 20h1v1H12zM14 20h1v1H14zM17 20h2v1H17zM20 20h1v1H20zM23 20h1v1H23zM28 20h4v1H28zM33 20h3v1H33zM37 20h2v1H37zM42 20h2v1H42zM46 20h3v1H46zM51 20h1v1H51zM53 20h2v1H53zM61 20h3v1H61zM65 20h1v1H65zM68,20 h1v1H68zM0 21h2v1H0zM8 21h1v1H8zM10 21h2v1H10zM13 21h1v1H13zM15 21h3v1H15zM19 21h1v1H19zM21 21h7v1H21zM29 21h1v1H29zM32 21h1v1H32zM34 21h2v1H34zM42 21h1v1H42zM45 21h1v1H45zM47 21h3v1H47zM53 21h3v1H53zM59 21h3v1H59zM65 21h1v1H65zM67,21 h2v1H67zM4 22h1v1H4zM6 22h1v1H6zM8 22h3v1H8zM13 22h5v1H13zM20 22h1v1H20zM23 22h3v1H23zM30 22h1v1H30zM32 22h1v1H32zM36 22h4v1H36zM43 22h1v1H43zM46 22h2v1H46zM50 22h1v1H50zM53 22h1v1H53zM57 22h3v1H57zM61 22h2v1H61zM65 22h3v1H65zM3 23h3v1H3zM10 23h3v1H10zM14 23h1v1H14zM16 23h3v1H16zM22 23h3v1H22zM29 23h1v1H29zM31 23h1v1H31zM35 23h3v1H35zM39 23h1v1H39zM41 23h4v1H41zM47 23h1v1H47zM49 23h1v1H49zM51 23h4v1H51zM56 23h2v1H56zM59 23h3v1H59zM64 23h1v1H64zM66,23 h3v1H66zM0 24h2v1H0zM3 24h2v1H3zM6 24h1v1H6zM14 24h1v1H14zM18 24h1v1H18zM20 24h2v1H20zM25 24h1v1H25zM27 24h4v1H27zM34 24h4v1H34zM41 24h2v1H41zM48 24h1v1H48zM54 24h2v1H54zM63 24h1v1H63zM65 24h1v1H65zM67,24 h2v1H67zM2 25h2v1H2zM7 25h2v1H7zM11 25h1v1H11zM14 25h2v1H14zM17 25h1v1H17zM19 25h1v1H19zM22 25h3v1H22zM26 25h1v1H26zM33 25h1v1H33zM37 25h1v1H37zM39 25h1v1H39zM42 25h2v1H42zM45 25h1v1H45zM47 25h3v1H47zM53 25h2v1H53zM60 25h2v1H60zM65,25 h4v1H65zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h1v1H8zM20 26h1v1H20zM23 26h1v1H23zM26 26h1v1H26zM28 26h2v1H28zM32 26h5v1H32zM41 26h1v1H41zM43 26h1v1H43zM46 26h3v1H46zM50 26h1v1H50zM52 26h1v1H52zM55 26h1v1H55zM57 26h2v1H57zM62 26h1v1H62zM64 26h3v1H64zM1 27h1v1H1zM3 27h1v1H3zM5 27h1v1H5zM9 27h1v1H9zM14 27h2v1H14zM17 27h3v1H17zM24 27h1v1H24zM27 27h1v1H27zM30 27h2v1H30zM35 27h1v1H35zM38 27h1v1H38zM40 27h3v1H40zM44 27h2v1H44zM51 27h3v1H51zM55 27h3v1H55zM59 27h1v1H59zM63 27h5v1H63zM1 28h1v1H1zM6 28h2v1H6zM9 28h4v1H9zM16 28h1v1H16zM18 28h4v1H18zM25 28h1v1H25zM28 28h3v1H28zM32 28h1v1H32zM34 28h1v1H34zM36 28h2v1H36zM39 28h1v1H39zM41 28h3v1H41zM45 28h5v1H45zM53 28h1v1H53zM58 28h2v1H58zM62 28h2v1H62zM65 28h1v1H65zM1 29h1v1H1zM5 29h1v1H5zM7 29h1v1H7zM10 29h5v1H10zM22 29h1v1H22zM24 29h4v1H24zM31 29h1v1H31zM33 29h1v1H33zM37 29h1v1H37zM40 29h5v1H40zM48 29h2v1H48zM52 29h3v1H52zM56 29h2v1H56zM60 29h1v1H60zM63 29h1v1H63zM65 29h2v1H65zM68,29 h1v1H68zM4 30h1v1H4zM6 30h1v1H6zM8 30h1v1H8zM14 30h3v1H14zM18 30h1v1H18zM20 30h1v1H20zM27 30h6v1H27zM34 30h1v1H34zM36 30h1v1H36zM38 30h2v1H38zM43 30h6v1H43zM50 30h1v1H50zM52 30h2v1H52zM57 30h4v1H57zM62 30h1v1H62zM66 30h2v1H66zM0 31h2v1H0zM3 31h1v1H3zM5 31h1v1H5zM10 31h1v1H10zM12 31h1v1H12zM14 31h1v1H14zM16 31h1v1H16zM25 31h1v1H25zM27 31h1v1H27zM30 31h2v1H30zM33 31h1v1H33zM36 31h1v1H36zM42 31h1v1H42zM44 31h2v1H44zM49 31h4v1H49zM54 31h4v1H54zM59 31h2v1H59zM63 31h4v1H63zM68,31 h1v1H68zM1 32h9v1H1zM11 32h1v1H11zM16 32h1v1H16zM18 32h3v1H18zM23 32h1v1H23zM25 32h1v1H25zM28 32h9v1H28zM38 32h1v1H38zM43 32h1v1H43zM46 32h4v1H46zM51 32h1v1H51zM57 32h1v1H57zM59 32h7v1H59zM2 33h3v1H2zM8 33h3v1H8zM13 33h1v1H13zM15 33h1v1H15zM21 33h4v1H21zM26 33h2v1H26zM32 33h1v1H32zM36 33h1v1H36zM42 33h1v1H42zM45 33h1v1H45zM48 33h1v1H48zM51 33h2v1H51zM54 33h1v1H54zM56 33h1v1H56zM59 33h2v1H59zM64 33h1v1H64zM66 33h1v1H66zM68,33 h1v1H68zM4 34h1v1H4zM6 34h1v1H6zM8 34h1v1H8zM10 34h1v1H10zM13 34h2v1H13zM17 34h3v1H17zM23 34h3v1H23zM28 34h3v1H28zM32 34h1v1H32zM34 34h1v1H34zM36 34h1v1H36zM38 34h1v1H38zM41 34h1v1H41zM45 34h4v1H45zM50 34h1v1H50zM52 34h2v1H52zM57 34h2v1H57zM60 34h1v1H60zM62 34h1v1H62zM64 34h2v1H64zM67 34h1v1H67zM1 35h4v1H1zM8 35h2v1H8zM11 35h4v1H11zM16 35h1v1H16zM18 35h2v1H18zM24 35h3v1H24zM30 35h3v1H30zM36 35h2v1H36zM39 35h3v1H39zM43 35h3v1H43zM50 35h3v1H50zM56 35h1v1H56zM60 35h1v1H60zM64,35 h5v1H64zM1 36h12v1H1zM15 36h6v1H15zM23 36h1v1H23zM25 36h1v1H25zM27 36h2v1H27zM30 36h1v1H30zM32 36h5v1H32zM41 36h1v1H41zM46 36h1v1H46zM48 36h2v1H48zM51 36h1v1H51zM53 36h3v1H53zM57 36h1v1H57zM59 36h6v1H59zM67 36h1v1H67zM0 37h3v1H0zM5 37h1v1H5zM8 37h2v1H8zM11 37h1v1H11zM13 37h3v1H13zM17 37h1v1H17zM19 37h1v1H19zM22 37h3v1H22zM27 37h1v1H27zM31 37h2v1H31zM34 37h2v1H34zM37 37h1v1H37zM39 37h5v1H39zM48 37h2v1H48zM51 37h2v1H51zM54 37h3v1H54zM60 37h4v1H60zM68,37 h1v1H68zM6 38h1v1H6zM11 38h2v1H11zM14 38h1v1H14zM16 38h1v1H16zM18 38h2v1H18zM21 38h1v1H21zM26 38h3v1H26zM30 38h1v1H30zM32 38h1v1H32zM34 38h1v1H34zM38 38h2v1H38zM41 38h1v1H41zM45 38h3v1H45zM50 38h3v1H50zM55 38h4v1H55zM60 38h2v1H60zM64 38h3v1H64zM0 39h1v1H0zM7 39h6v1H7zM16 39h1v1H16zM18 39h2v1H18zM22 39h1v1H22zM24 39h2v1H24zM27 39h5v1H27zM33 39h1v1H33zM35 39h5v1H35zM42 39h1v1H42zM44 39h2v1H44zM49 39h1v1H49zM51 39h2v1H51zM54 39h4v1H54zM59 39h1v1H59zM61 39h2v1H61zM64 39h1v1H64zM66,39 h3v1H66zM2 40h1v1H2zM5 40h2v1H5zM9 40h2v1H9zM15 40h1v1H15zM17 40h4v1H17zM23 40h1v1H23zM25 40h1v1H25zM27 40h4v1H27zM32 40h2v1H32zM35 40h3v1H35zM45 40h2v1H45zM48 40h2v1H48zM53 40h3v1H53zM58 40h1v1H58zM61 40h1v1H61zM63 40h3v1H63zM67 40h1v1H67zM0 41h2v1H0zM9 41h5v1H9zM16 41h1v1H16zM21 41h2v1H21zM24 41h1v1H24zM26 41h1v1H26zM31 41h4v1H31zM36 41h2v1H36zM39 41h2v1H39zM42 41h1v1H42zM44 41h2v1H44zM47 41h3v1H47zM51 41h4v1H51zM57 41h1v1H57zM60 41h1v1H60zM63 41h1v1H63zM66 41h1v1H66zM68,41 h1v1H68zM0 42h1v1H0zM2 42h6v1H2zM11 42h7v1H11zM20 42h2v1H20zM24 42h2v1H24zM29 42h1v1H29zM39 42h1v1H39zM41 42h1v1H41zM44 42h1v1H44zM46 42h2v1H46zM50 42h2v1H50zM53 42h1v1H53zM55 42h1v1H55zM58 42h1v1H58zM60 42h2v1H60zM67 42h1v1H67zM0 43h3v1H0zM4 43h1v1H4zM8 43h1v1H8zM10 43h1v1H10zM13 43h2v1H13zM16 43h1v1H16zM19 43h1v1H19zM21 43h2v1H21zM28 43h2v1H28zM31 43h1v1H31zM33 43h2v1H33zM36 43h3v1H36zM40 43h1v1H40zM42 43h1v1H42zM44 43h4v1H44zM51 43h6v1H51zM59 43h1v1H59zM62 43h6v1H62zM0 44h1v1H0zM2 44h2v1H2zM6 44h3v1H6zM10 44h1v1H10zM15 44h7v1H15zM23 44h1v1H23zM25 44h1v1H25zM28 44h3v1H28zM36 44h1v1H36zM38 44h2v1H38zM43 44h1v1H43zM46 44h1v1H46zM48 44h4v1H48zM61 44h1v1H61zM63 44h2v1H63zM67 44h1v1H67zM0 45h2v1H0zM3 45h1v1H3zM5 45h1v1H5zM7 45h1v1H7zM9 45h2v1H9zM12 45h2v1H12zM15 45h1v1H15zM22 45h1v1H22zM24 45h4v1H24zM31 45h7v1H31zM40 45h1v1H40zM42 45h1v1H42zM44 45h1v1H44zM52 45h1v1H52zM54 45h2v1H54zM57 45h1v1H57zM59 45h1v1H59zM62 45h2v1H62zM66,45 h3v1H66zM0 46h1v1H0zM3 46h4v1H3zM8 46h3v1H8zM12 46h8v1H12zM21 46h1v1H21zM23 46h1v1H23zM25 46h1v1H25zM32 46h2v1H32zM38 46h2v1H38zM41 46h1v1H41zM46 46h5v1H46zM55 46h1v1H55zM58 46h3v1H58zM64 46h1v1H64zM66 46h2v1H66zM0 47h2v1H0zM4 47h1v1H4zM8 47h3v1H8zM13 47h2v1H13zM17 47h3v1H17zM22 47h1v1H22zM24 47h2v1H24zM29 47h3v1H29zM33 47h5v1H33zM39 47h1v1H39zM43 47h2v1H43zM47 47h1v1H47zM49 47h4v1H49zM54 47h3v1H54zM59 47h5v1H59zM65 47h2v1H65zM0 48h2v1H0zM3 48h6v1H3zM13 48h1v1H13zM15 48h2v1H15zM18 48h3v1H18zM28 48h3v1H28zM36 48h2v1H36zM43 48h1v1H43zM47 48h4v1H47zM60 48h2v1H60zM64 48h2v1H64zM67 48h1v1H67zM0 49h2v1H0zM5 49h1v1H5zM7 49h4v1H7zM13 49h3v1H13zM17 49h1v1H17zM21 49h7v1H21zM31 49h6v1H31zM42 49h2v1H42zM45 49h1v1H45zM47 49h1v1H47zM52 49h4v1H52zM61 49h1v1H61zM68,49 h1v1H68zM1 50h1v1H1zM6 50h1v1H6zM8 50h1v1H8zM11 50h1v1H11zM13 50h4v1H13zM18 50h3v1H18zM23 50h1v1H23zM29 50h2v1H29zM37 50h4v1H37zM44 50h1v1H44zM46 50h1v1H46zM48 50h3v1H48zM52 50h2v1H52zM55 50h1v1H55zM57 50h2v1H57zM63 50h4v1H63zM68,50 h1v1H68zM1 51h3v1H1zM5 51h1v1H5zM7 51h2v1H7zM13 51h3v1H13zM18 51h1v1H18zM21 51h2v1H21zM24 51h1v1H24zM26 51h2v1H26zM29 51h2v1H29zM32 51h2v1H32zM36 51h2v1H36zM40 51h1v1H40zM42 51h3v1H42zM49 51h2v1H49zM52 51h3v1H52zM56 51h1v1H56zM59 51h4v1H59zM64 51h4v1H64zM0 52h1v1H0zM4 52h3v1H4zM9 52h2v1H9zM12 52h2v1H12zM15 52h4v1H15zM20 52h2v1H20zM23 52h1v1H23zM28 52h1v1H28zM30 52h1v1H30zM33 52h1v1H33zM36 52h1v1H36zM41 52h2v1H41zM45 52h7v1H45zM53 52h3v1H53zM61 52h1v1H61zM63 52h2v1H63zM0 53h1v1H0zM3 53h1v1H3zM9 53h1v1H9zM12 53h4v1H12zM17 53h1v1H17zM19 53h1v1H19zM21 53h2v1H21zM24 53h1v1H24zM26 53h2v1H26zM29 53h1v1H29zM31 53h2v1H31zM34 53h3v1H34zM41 53h2v1H41zM47 53h3v1H47zM51 53h2v1H51zM54 53h1v1H54zM56 53h1v1H56zM59 53h2v1H59zM63 53h1v1H63zM68,53 h1v1H68zM3 54h1v1H3zM6 54h3v1H6zM14 54h5v1H14zM20 54h1v1H20zM25 54h1v1H25zM27 54h4v1H27zM32 54h1v1H32zM37 54h3v1H37zM41 54h1v1H41zM43 54h1v1H43zM45 54h2v1H45zM48 54h1v1H48zM50 54h2v1H50zM53 54h1v1H53zM55 54h2v1H55zM58 54h1v1H58zM60 54h2v1H60zM63 54h2v1H63zM66 54h2v1H66zM0 55h1v1H0zM2 55h3v1H2zM7 55h1v1H7zM9 55h3v1H9zM15 55h2v1H15zM19 55h1v1H19zM21 55h2v1H21zM24 55h1v1H24zM26 55h2v1H26zM30 55h2v1H30zM35 55h3v1H35zM40 55h1v1H40zM42 55h4v1H42zM47 55h1v1H47zM49 55h1v1H49zM52 55h8v1H52zM62 55h3v1H62zM66,55 h3v1H66zM0 56h1v1H0zM2 56h3v1H2zM6 56h2v1H6zM10 56h1v1H10zM14 56h2v1H14zM18 56h4v1H18zM23 56h1v1H23zM25 56h1v1H25zM27 56h2v1H27zM30 56h1v1H30zM32 56h2v1H32zM35 56h3v1H35zM39 56h1v1H39zM45 56h2v1H45zM48 56h1v1H48zM54 56h2v1H54zM60 56h3v1H60zM64 56h2v1H64zM0 57h2v1H0zM3 57h3v1H3zM7 57h2v1H7zM13 57h3v1H13zM17 57h1v1H17zM22 57h1v1H22zM24 57h1v1H24zM26 57h2v1H26zM29 57h1v1H29zM31 57h1v1H31zM34 57h2v1H34zM37 57h1v1H37zM39 57h4v1H39zM44 57h1v1H44zM47 57h3v1H47zM53 57h3v1H53zM57 57h1v1H57zM59 57h4v1H59zM67,57 h2v1H67zM0 58h1v1H0zM2 58h1v1H2zM4 58h4v1H4zM9 58h1v1H9zM11 58h1v1H11zM13 58h1v1H13zM15 58h1v1H15zM17 58h2v1H17zM21 58h1v1H21zM23 58h1v1H23zM25 58h1v1H25zM27 58h2v1H27zM30 58h1v1H30zM33 58h1v1H33zM35 58h2v1H35zM39 58h1v1H39zM41 58h2v1H41zM46 58h1v1H46zM48 58h1v1H48zM58 58h1v1H58zM60 58h2v1H60zM63 58h4v1H63zM0 59h1v1H0zM8 59h1v1H8zM10 59h1v1H10zM12 59h1v1H12zM14 59h1v1H14zM17 59h1v1H17zM19 59h1v1H19zM21 59h4v1H21zM28 59h4v1H28zM35 59h3v1H35zM39 59h4v1H39zM44 59h2v1H44zM47 59h1v1H47zM49 59h1v1H49zM51 59h3v1H51zM56 59h1v1H56zM59 59h1v1H59zM61 59h2v1H61zM65 59h2v1H65zM0 60h1v1H0zM3 60h2v1H3zM6 60h1v1H6zM11 60h4v1H11zM16 60h3v1H16zM20 60h2v1H20zM23 60h1v1H23zM25 60h1v1H25zM27 60h4v1H27zM32 60h6v1H32zM43 60h1v1H43zM46 60h1v1H46zM48 60h3v1H48zM58 60h1v1H58zM60 60h5v1H60zM67 60h1v1H67zM8 61h3v1H8zM12 61h1v1H12zM14 61h1v1H14zM22 61h6v1H22zM31 61h2v1H31zM36 61h1v1H36zM39 61h1v1H39zM42 61h2v1H42zM45 61h1v1H45zM47 61h3v1H47zM52 61h3v1H52zM56 61h1v1H56zM59 61h2v1H59zM64 61h1v1H64zM66,61 h3v1H66zM0 62h7v1H0zM8 62h4v1H8zM16 62h3v1H16zM20 62h1v1H20zM24 62h2v1H24zM27 62h1v1H27zM29 62h1v1H29zM31 62h2v1H31zM34 62h1v1H34zM36 62h1v1H36zM38 62h1v1H38zM41 62h1v1H41zM43 62h6v1H43zM50 62h2v1H50zM53 62h1v1H53zM57 62h1v1H57zM60 62h1v1H60zM62 62h1v1H62zM64 62h2v1H64zM67 62h1v1H67zM0 63h1v1H0zM6 63h1v1H6zM10 63h2v1H10zM13 63h1v1H13zM16 63h2v1H16zM20 63h1v1H20zM24 63h3v1H24zM29 63h1v1H29zM32 63h1v1H32zM36 63h2v1H36zM39 63h1v1H39zM41 63h5v1H41zM49 63h4v1H49zM54 63h1v1H54zM56 63h1v1H56zM58 63h1v1H58zM60 63h1v1H60zM64 63h1v1H64zM66,63 h3v1H66zM0 64h1v1H0zM2 64h3v1H2zM6 64h1v1H6zM8 64h2v1H8zM12 64h3v1H12zM16 64h3v1H16zM20 64h1v1H20zM27 64h4v1H27zM32 64h6v1H32zM41 64h3v1H41zM45 64h6v1H45zM54 64h1v1H54zM57 64h9v1H57zM67,64 h2v1H67zM0 65h1v1H0zM2 65h3v1H2zM6 65h1v1H6zM8 65h3v1H8zM15 65h1v1H15zM18 65h2v1H18zM21 65h6v1H21zM32 65h1v1H32zM37 65h1v1H37zM39 65h2v1H39zM42 65h1v1H42zM45 65h1v1H45zM47 65h3v1H47zM53 65h2v1H53zM60 65h2v1H60zM63 65h4v1H63zM0 66h1v1H0zM2 66h3v1H2zM6 66h1v1H6zM8 66h1v1H8zM11 66h1v1H11zM15 66h2v1H15zM18 66h2v1H18zM22 66h4v1H22zM28 66h1v1H28zM30 66h1v1H30zM33 66h3v1H33zM41 66h1v1H41zM43 66h1v1H43zM46 66h1v1H46zM48 66h5v1H48zM55 66h1v1H55zM57 66h5v1H57zM65 66h2v1H65zM0 67h1v1H0zM6 67h1v1H6zM8 67h1v1H8zM10 67h2v1H10zM17 67h1v1H17zM21 67h2v1H21zM25 67h1v1H25zM27 67h1v1H27zM32 67h1v1H32zM38 67h8v1H38zM49 67h2v1H49zM52 67h1v1H52zM54 67h1v1H54zM56 67h1v1H56zM59 67h1v1H59zM63 67h4v1H63zM0 68h7v1H0zM8 68h1v1H8zM11 68h1v1H11zM16 68h1v1H16zM18 68h3v1H18zM23 68h1v1H23zM28 68h1v1H28zM30 68h2v1H30zM35 68h2v1H35zM41 68h2v1H41zM46 68h3v1H46zM50 68h2v1H50zM57 68h7v1H57zM67 68h1v1H67z"
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
                          viewBox="0 0 69 69"
                          width={256}
                        >
                          <path
                            d="M0,0 h69v69H0z"
                            fill="#FFFFFF"
                            shapeRendering="crispEdges"
                          />
                          <path
                            d="M0 0h7v1H0zM10 0h3v1H10zM17 0h1v1H17zM21 0h2v1H21zM24 0h4v1H24zM31 0h1v1H31zM35 0h1v1H35zM42 0h2v1H42zM47 0h1v1H47zM49 0h1v1H49zM52 0h1v1H52zM54 0h1v1H54zM57 0h4v1H57zM62,0 h7v1H62zM0 1h1v1H0zM6 1h1v1H6zM8 1h3v1H8zM14 1h3v1H14zM19 1h1v1H19zM22 1h3v1H22zM26 1h2v1H26zM29 1h2v1H29zM32 1h2v1H32zM36 1h3v1H36zM41 1h1v1H41zM43 1h1v1H43zM45 1h3v1H45zM50 1h2v1H50zM55 1h2v1H55zM62 1h1v1H62zM68,1 h1v1H68zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM10 2h3v1H10zM15 2h1v1H15zM18 2h2v1H18zM22 2h3v1H22zM26 2h8v1H26zM37 2h1v1H37zM40 2h1v1H40zM42 2h5v1H42zM52 2h1v1H52zM56 2h3v1H56zM62 2h1v1H62zM64 2h3v1H64zM68,2 h1v1H68zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM12 3h2v1H12zM15 3h4v1H15zM20 3h1v1H20zM28 3h7v1H28zM36 3h1v1H36zM47 3h3v1H47zM51 3h1v1H51zM53 3h1v1H53zM55 3h1v1H55zM57 3h1v1H57zM60 3h1v1H60zM62 3h1v1H62zM64 3h3v1H64zM68,3 h1v1H68zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h1v1H9zM11 4h1v1H11zM14 4h2v1H14zM17 4h1v1H17zM19 4h1v1H19zM21 4h4v1H21zM26 4h2v1H26zM31 4h6v1H31zM39 4h5v1H39zM45 4h1v1H45zM48 4h2v1H48zM51 4h4v1H51zM56 4h1v1H56zM58 4h1v1H58zM60 4h1v1H60zM62 4h1v1H62zM64 4h3v1H64zM68,4 h1v1H68zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h3v1H10zM15 5h1v1H15zM18 5h2v1H18zM27 5h4v1H27zM32 5h1v1H32zM36 5h3v1H36zM40 5h1v1H40zM46 5h1v1H46zM48 5h4v1H48zM55 5h4v1H55zM62 5h1v1H62zM68,5 h1v1H68zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38 6h1v1H38zM40 6h1v1H40zM42 6h1v1H42zM44 6h1v1H44zM46 6h1v1H46zM48 6h1v1H48zM50 6h1v1H50zM52 6h1v1H52zM54 6h1v1H54zM56 6h1v1H56zM58 6h1v1H58zM60 6h1v1H60zM62,6 h7v1H62zM14 7h1v1H14zM20 7h1v1H20zM24 7h1v1H24zM26 7h2v1H26zM30 7h3v1H30zM36 7h1v1H36zM39 7h1v1H39zM42 7h1v1H42zM45 7h1v1H45zM48 7h2v1H48zM52 7h1v1H52zM54 7h3v1H54zM59 7h2v1H59zM0 8h5v1H0zM6 8h3v1H6zM18 8h1v1H18zM20 8h2v1H20zM23 8h1v1H23zM25 8h1v1H25zM28 8h1v1H28zM30 8h1v1H30zM32 8h7v1H32zM43 8h1v1H43zM45 8h4v1H45zM53 8h1v1H53zM55 8h1v1H55zM57 8h2v1H57zM61 8h1v1H61zM63 8h1v1H63zM65 8h1v1H65zM67 8h1v1H67zM0 9h2v1H0zM4 9h2v1H4zM7 9h2v1H7zM10 9h3v1H10zM14 9h1v1H14zM19 9h1v1H19zM22 9h1v1H22zM24 9h3v1H24zM29 9h1v1H29zM33 9h1v1H33zM37 9h1v1H37zM40 9h1v1H40zM42 9h2v1H42zM45 9h1v1H45zM47 9h1v1H47zM49 9h1v1H49zM53 9h3v1H53zM59 9h2v1H59zM65 9h2v1H65zM68,9 h1v1H68zM0 10h1v1H0zM4 10h1v1H4zM6 10h1v1H6zM9 10h4v1H9zM14 10h1v1H14zM16 10h3v1H16zM20 10h5v1H20zM31 10h7v1H31zM40 10h1v1H40zM43 10h1v1H43zM45 10h9v1H45zM55 10h1v1H55zM57 10h2v1H57zM61 10h3v1H61zM9 11h3v1H9zM14 11h1v1H14zM24 11h1v1H24zM26 11h1v1H26zM29 11h2v1H29zM33 11h1v1H33zM35 11h3v1H35zM39 11h7v1H39zM47 11h1v1H47zM51 11h4v1H51zM56 11h1v1H56zM59 11h1v1H59zM64,11 h5v1H64zM1 12h2v1H1zM6 12h1v1H6zM8 12h3v1H8zM12 12h1v1H12zM16 12h3v1H16zM20 12h2v1H20zM25 12h1v1H25zM28 12h4v1H28zM34 12h1v1H34zM36 12h1v1H36zM41 12h3v1H41zM48 12h1v1H48zM50 12h1v1H50zM53 12h1v1H53zM55 12h1v1H55zM57 12h1v1H57zM60 12h1v1H60zM62 12h1v1H62zM1 13h5v1H1zM10 13h3v1H10zM14 13h1v1H14zM16 13h2v1H16zM19 13h1v1H19zM21 13h2v1H21zM24 13h1v1H24zM26 13h2v1H26zM31 13h1v1H31zM35 13h1v1H35zM37 13h1v1H37zM42 13h2v1H42zM47 13h3v1H47zM51 13h4v1H51zM56 13h2v1H56zM59 13h2v1H59zM65 13h2v1H65zM68,13 h1v1H68zM0 14h1v1H0zM2 14h5v1H2zM11 14h1v1H11zM14 14h2v1H14zM18 14h1v1H18zM20 14h1v1H20zM22 14h2v1H22zM25 14h1v1H25zM27 14h2v1H27zM30 14h1v1H30zM32 14h2v1H32zM36 14h1v1H36zM38 14h2v1H38zM41 14h1v1H41zM46 14h1v1H46zM48 14h1v1H48zM50 14h1v1H50zM52 14h1v1H52zM57 14h3v1H57zM61 14h2v1H61zM64 14h1v1H64zM66 14h2v1H66zM1 15h2v1H1zM4 15h2v1H4zM7 15h1v1H7zM9 15h1v1H9zM11 15h1v1H11zM13 15h3v1H13zM22 15h2v1H22zM26 15h2v1H26zM29 15h3v1H29zM33 15h1v1H33zM35 15h2v1H35zM39 15h2v1H39zM42 15h1v1H42zM44 15h1v1H44zM46 15h1v1H46zM49 15h6v1H49zM56 15h1v1H56zM58 15h3v1H58zM63 15h5v1H63zM5 16h2v1H5zM8 16h2v1H8zM12 16h1v1H12zM18 16h1v1H18zM20 16h2v1H20zM28 16h3v1H28zM32 16h1v1H32zM34 16h3v1H34zM38 16h2v1H38zM45 16h6v1H45zM53 16h2v1H53zM58 16h2v1H58zM61 16h1v1H61zM65 16h1v1H65zM0 17h3v1H0zM4 17h1v1H4zM7 17h1v1H7zM11 17h3v1H11zM17 17h1v1H17zM22 17h6v1H22zM29 17h1v1H29zM33 17h1v1H33zM40 17h1v1H40zM42 17h2v1H42zM47 17h3v1H47zM51 17h2v1H51zM54 17h1v1H54zM56 17h1v1H56zM60 17h2v1H60zM64 17h2v1H64zM67,17 h2v1H67zM0 18h2v1H0zM3 18h1v1H3zM5 18h4v1H5zM12 18h1v1H12zM14 18h1v1H14zM16 18h5v1H16zM24 18h2v1H24zM27 18h1v1H27zM30 18h1v1H30zM32 18h7v1H32zM41 18h1v1H41zM43 18h1v1H43zM46 18h1v1H46zM50 18h1v1H50zM52 18h2v1H52zM58 18h3v1H58zM62 18h1v1H62zM64 18h1v1H64zM67 18h1v1H67zM0 19h2v1H0zM4 19h1v1H4zM7 19h2v1H7zM12 19h2v1H12zM18 19h1v1H18zM21 19h1v1H21zM23 19h3v1H23zM27 19h3v1H27zM31 19h1v1H31zM33 19h1v1H33zM37 19h1v1H37zM39 19h4v1H39zM44 19h2v1H44zM47 19h1v1H47zM49 19h1v1H49zM52 19h3v1H52zM56 19h1v1H56zM58 19h3v1H58zM64 19h3v1H64zM0 20h1v1H0zM2 20h1v1H2zM5 20h3v1H5zM9 20h2v1H9zM12 20h1v1H12zM14 20h1v1H14zM17 20h2v1H17zM20 20h1v1H20zM23 20h1v1H23zM28 20h4v1H28zM33 20h3v1H33zM37 20h2v1H37zM42 20h2v1H42zM46 20h3v1H46zM51 20h1v1H51zM53 20h2v1H53zM61 20h3v1H61zM65 20h1v1H65zM68,20 h1v1H68zM0 21h2v1H0zM8 21h1v1H8zM10 21h2v1H10zM13 21h1v1H13zM15 21h3v1H15zM19 21h1v1H19zM21 21h7v1H21zM29 21h1v1H29zM32 21h1v1H32zM34 21h2v1H34zM42 21h1v1H42zM45 21h1v1H45zM47 21h3v1H47zM53 21h3v1H53zM59 21h3v1H59zM65 21h1v1H65zM67,21 h2v1H67zM4 22h1v1H4zM6 22h1v1H6zM8 22h3v1H8zM13 22h5v1H13zM20 22h1v1H20zM23 22h3v1H23zM30 22h1v1H30zM32 22h1v1H32zM36 22h4v1H36zM43 22h1v1H43zM46 22h2v1H46zM50 22h1v1H50zM53 22h1v1H53zM57 22h3v1H57zM61 22h2v1H61zM65 22h3v1H65zM3 23h3v1H3zM10 23h3v1H10zM14 23h1v1H14zM16 23h3v1H16zM22 23h3v1H22zM29 23h1v1H29zM31 23h1v1H31zM35 23h3v1H35zM39 23h1v1H39zM41 23h4v1H41zM47 23h1v1H47zM49 23h1v1H49zM51 23h4v1H51zM56 23h2v1H56zM59 23h3v1H59zM64 23h1v1H64zM66,23 h3v1H66zM0 24h2v1H0zM3 24h2v1H3zM6 24h1v1H6zM14 24h1v1H14zM18 24h1v1H18zM20 24h2v1H20zM25 24h1v1H25zM27 24h4v1H27zM34 24h4v1H34zM41 24h2v1H41zM48 24h1v1H48zM54 24h2v1H54zM63 24h1v1H63zM65 24h1v1H65zM67,24 h2v1H67zM2 25h2v1H2zM7 25h2v1H7zM11 25h1v1H11zM14 25h2v1H14zM17 25h1v1H17zM19 25h1v1H19zM22 25h3v1H22zM26 25h1v1H26zM33 25h1v1H33zM37 25h1v1H37zM39 25h1v1H39zM42 25h2v1H42zM45 25h1v1H45zM47 25h3v1H47zM53 25h2v1H53zM60 25h2v1H60zM65,25 h4v1H65zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h1v1H8zM20 26h1v1H20zM23 26h1v1H23zM26 26h1v1H26zM28 26h2v1H28zM32 26h5v1H32zM41 26h1v1H41zM43 26h1v1H43zM46 26h3v1H46zM50 26h1v1H50zM52 26h1v1H52zM55 26h1v1H55zM57 26h2v1H57zM62 26h1v1H62zM64 26h3v1H64zM1 27h1v1H1zM3 27h1v1H3zM5 27h1v1H5zM9 27h1v1H9zM14 27h2v1H14zM17 27h3v1H17zM24 27h1v1H24zM27 27h1v1H27zM30 27h2v1H30zM35 27h1v1H35zM38 27h1v1H38zM40 27h3v1H40zM44 27h2v1H44zM51 27h3v1H51zM55 27h3v1H55zM59 27h1v1H59zM63 27h5v1H63zM1 28h1v1H1zM6 28h2v1H6zM9 28h4v1H9zM16 28h1v1H16zM18 28h4v1H18zM25 28h1v1H25zM28 28h3v1H28zM32 28h1v1H32zM34 28h1v1H34zM36 28h2v1H36zM39 28h1v1H39zM41 28h3v1H41zM45 28h5v1H45zM53 28h1v1H53zM58 28h2v1H58zM62 28h2v1H62zM65 28h1v1H65zM1 29h1v1H1zM5 29h1v1H5zM7 29h1v1H7zM10 29h5v1H10zM22 29h1v1H22zM24 29h4v1H24zM31 29h1v1H31zM33 29h1v1H33zM37 29h1v1H37zM40 29h5v1H40zM48 29h2v1H48zM52 29h3v1H52zM56 29h2v1H56zM60 29h1v1H60zM63 29h1v1H63zM65 29h2v1H65zM68,29 h1v1H68zM4 30h1v1H4zM6 30h1v1H6zM8 30h1v1H8zM14 30h3v1H14zM18 30h1v1H18zM20 30h1v1H20zM27 30h6v1H27zM34 30h1v1H34zM36 30h1v1H36zM38 30h2v1H38zM43 30h6v1H43zM50 30h1v1H50zM52 30h2v1H52zM57 30h4v1H57zM62 30h1v1H62zM66 30h2v1H66zM0 31h2v1H0zM3 31h1v1H3zM5 31h1v1H5zM10 31h1v1H10zM12 31h1v1H12zM14 31h1v1H14zM16 31h1v1H16zM25 31h1v1H25zM27 31h1v1H27zM30 31h2v1H30zM33 31h1v1H33zM36 31h1v1H36zM42 31h1v1H42zM44 31h2v1H44zM49 31h4v1H49zM54 31h4v1H54zM59 31h2v1H59zM63 31h4v1H63zM68,31 h1v1H68zM1 32h9v1H1zM11 32h1v1H11zM16 32h1v1H16zM18 32h3v1H18zM23 32h1v1H23zM25 32h1v1H25zM28 32h9v1H28zM38 32h1v1H38zM43 32h1v1H43zM46 32h4v1H46zM51 32h1v1H51zM57 32h1v1H57zM59 32h7v1H59zM2 33h3v1H2zM8 33h3v1H8zM13 33h1v1H13zM15 33h1v1H15zM21 33h4v1H21zM26 33h2v1H26zM32 33h1v1H32zM36 33h1v1H36zM42 33h1v1H42zM45 33h1v1H45zM48 33h1v1H48zM51 33h2v1H51zM54 33h1v1H54zM56 33h1v1H56zM59 33h2v1H59zM64 33h1v1H64zM66 33h1v1H66zM68,33 h1v1H68zM4 34h1v1H4zM6 34h1v1H6zM8 34h1v1H8zM10 34h1v1H10zM13 34h2v1H13zM17 34h3v1H17zM23 34h3v1H23zM28 34h3v1H28zM32 34h1v1H32zM34 34h1v1H34zM36 34h1v1H36zM38 34h1v1H38zM41 34h1v1H41zM45 34h4v1H45zM50 34h1v1H50zM52 34h2v1H52zM57 34h2v1H57zM60 34h1v1H60zM62 34h1v1H62zM64 34h2v1H64zM67 34h1v1H67zM1 35h4v1H1zM8 35h2v1H8zM11 35h4v1H11zM16 35h1v1H16zM18 35h2v1H18zM24 35h3v1H24zM30 35h3v1H30zM36 35h2v1H36zM39 35h3v1H39zM43 35h3v1H43zM50 35h3v1H50zM56 35h1v1H56zM60 35h1v1H60zM64,35 h5v1H64zM1 36h12v1H1zM15 36h6v1H15zM23 36h1v1H23zM25 36h1v1H25zM27 36h2v1H27zM30 36h1v1H30zM32 36h5v1H32zM41 36h1v1H41zM46 36h1v1H46zM48 36h2v1H48zM51 36h1v1H51zM53 36h3v1H53zM57 36h1v1H57zM59 36h6v1H59zM67 36h1v1H67zM0 37h3v1H0zM5 37h1v1H5zM8 37h2v1H8zM11 37h1v1H11zM13 37h3v1H13zM17 37h1v1H17zM19 37h1v1H19zM22 37h3v1H22zM27 37h1v1H27zM31 37h2v1H31zM34 37h2v1H34zM37 37h1v1H37zM39 37h5v1H39zM48 37h2v1H48zM51 37h2v1H51zM54 37h3v1H54zM60 37h4v1H60zM68,37 h1v1H68zM6 38h1v1H6zM11 38h2v1H11zM14 38h1v1H14zM16 38h1v1H16zM18 38h2v1H18zM21 38h1v1H21zM26 38h3v1H26zM30 38h1v1H30zM32 38h1v1H32zM34 38h1v1H34zM38 38h2v1H38zM41 38h1v1H41zM45 38h3v1H45zM50 38h3v1H50zM55 38h4v1H55zM60 38h2v1H60zM64 38h3v1H64zM0 39h1v1H0zM7 39h6v1H7zM16 39h1v1H16zM18 39h2v1H18zM22 39h1v1H22zM24 39h2v1H24zM27 39h5v1H27zM33 39h1v1H33zM35 39h5v1H35zM42 39h1v1H42zM44 39h2v1H44zM49 39h1v1H49zM51 39h2v1H51zM54 39h4v1H54zM59 39h1v1H59zM61 39h2v1H61zM64 39h1v1H64zM66,39 h3v1H66zM2 40h1v1H2zM5 40h2v1H5zM9 40h2v1H9zM15 40h1v1H15zM17 40h4v1H17zM23 40h1v1H23zM25 40h1v1H25zM27 40h4v1H27zM32 40h2v1H32zM35 40h3v1H35zM45 40h2v1H45zM48 40h2v1H48zM53 40h3v1H53zM58 40h1v1H58zM61 40h1v1H61zM63 40h3v1H63zM67 40h1v1H67zM0 41h2v1H0zM9 41h5v1H9zM16 41h1v1H16zM21 41h2v1H21zM24 41h1v1H24zM26 41h1v1H26zM31 41h4v1H31zM36 41h2v1H36zM39 41h2v1H39zM42 41h1v1H42zM44 41h2v1H44zM47 41h3v1H47zM51 41h4v1H51zM57 41h1v1H57zM60 41h1v1H60zM63 41h1v1H63zM66 41h1v1H66zM68,41 h1v1H68zM0 42h1v1H0zM2 42h6v1H2zM11 42h7v1H11zM20 42h2v1H20zM24 42h2v1H24zM29 42h1v1H29zM39 42h1v1H39zM41 42h1v1H41zM44 42h1v1H44zM46 42h2v1H46zM50 42h2v1H50zM53 42h1v1H53zM55 42h1v1H55zM58 42h1v1H58zM60 42h2v1H60zM67 42h1v1H67zM0 43h3v1H0zM4 43h1v1H4zM8 43h1v1H8zM10 43h1v1H10zM13 43h2v1H13zM16 43h1v1H16zM19 43h1v1H19zM21 43h2v1H21zM28 43h2v1H28zM31 43h1v1H31zM33 43h2v1H33zM36 43h3v1H36zM40 43h1v1H40zM42 43h1v1H42zM44 43h4v1H44zM51 43h6v1H51zM59 43h1v1H59zM62 43h6v1H62zM0 44h1v1H0zM2 44h2v1H2zM6 44h3v1H6zM10 44h1v1H10zM15 44h7v1H15zM23 44h1v1H23zM25 44h1v1H25zM28 44h3v1H28zM36 44h1v1H36zM38 44h2v1H38zM43 44h1v1H43zM46 44h1v1H46zM48 44h4v1H48zM61 44h1v1H61zM63 44h2v1H63zM67 44h1v1H67zM0 45h2v1H0zM3 45h1v1H3zM5 45h1v1H5zM7 45h1v1H7zM9 45h2v1H9zM12 45h2v1H12zM15 45h1v1H15zM22 45h1v1H22zM24 45h4v1H24zM31 45h7v1H31zM40 45h1v1H40zM42 45h1v1H42zM44 45h1v1H44zM52 45h1v1H52zM54 45h2v1H54zM57 45h1v1H57zM59 45h1v1H59zM62 45h2v1H62zM66,45 h3v1H66zM0 46h1v1H0zM3 46h4v1H3zM8 46h3v1H8zM12 46h8v1H12zM21 46h1v1H21zM23 46h1v1H23zM25 46h1v1H25zM32 46h2v1H32zM38 46h2v1H38zM41 46h1v1H41zM46 46h5v1H46zM55 46h1v1H55zM58 46h3v1H58zM64 46h1v1H64zM66 46h2v1H66zM0 47h2v1H0zM4 47h1v1H4zM8 47h3v1H8zM13 47h2v1H13zM17 47h3v1H17zM22 47h1v1H22zM24 47h2v1H24zM29 47h3v1H29zM33 47h5v1H33zM39 47h1v1H39zM43 47h2v1H43zM47 47h1v1H47zM49 47h4v1H49zM54 47h3v1H54zM59 47h5v1H59zM65 47h2v1H65zM0 48h2v1H0zM3 48h6v1H3zM13 48h1v1H13zM15 48h2v1H15zM18 48h3v1H18zM28 48h3v1H28zM36 48h2v1H36zM43 48h1v1H43zM47 48h4v1H47zM60 48h2v1H60zM64 48h2v1H64zM67 48h1v1H67zM0 49h2v1H0zM5 49h1v1H5zM7 49h4v1H7zM13 49h3v1H13zM17 49h1v1H17zM21 49h7v1H21zM31 49h6v1H31zM42 49h2v1H42zM45 49h1v1H45zM47 49h1v1H47zM52 49h4v1H52zM61 49h1v1H61zM68,49 h1v1H68zM1 50h1v1H1zM6 50h1v1H6zM8 50h1v1H8zM11 50h1v1H11zM13 50h4v1H13zM18 50h3v1H18zM23 50h1v1H23zM29 50h2v1H29zM37 50h4v1H37zM44 50h1v1H44zM46 50h1v1H46zM48 50h3v1H48zM52 50h2v1H52zM55 50h1v1H55zM57 50h2v1H57zM63 50h4v1H63zM68,50 h1v1H68zM1 51h3v1H1zM5 51h1v1H5zM7 51h2v1H7zM13 51h3v1H13zM18 51h1v1H18zM21 51h2v1H21zM24 51h1v1H24zM26 51h2v1H26zM29 51h2v1H29zM32 51h2v1H32zM36 51h2v1H36zM40 51h1v1H40zM42 51h3v1H42zM49 51h2v1H49zM52 51h3v1H52zM56 51h1v1H56zM59 51h4v1H59zM64 51h4v1H64zM0 52h1v1H0zM4 52h3v1H4zM9 52h2v1H9zM12 52h2v1H12zM15 52h4v1H15zM20 52h2v1H20zM23 52h1v1H23zM28 52h1v1H28zM30 52h1v1H30zM33 52h1v1H33zM36 52h1v1H36zM41 52h2v1H41zM45 52h7v1H45zM53 52h3v1H53zM61 52h1v1H61zM63 52h2v1H63zM0 53h1v1H0zM3 53h1v1H3zM9 53h1v1H9zM12 53h4v1H12zM17 53h1v1H17zM19 53h1v1H19zM21 53h2v1H21zM24 53h1v1H24zM26 53h2v1H26zM29 53h1v1H29zM31 53h2v1H31zM34 53h3v1H34zM41 53h2v1H41zM47 53h3v1H47zM51 53h2v1H51zM54 53h1v1H54zM56 53h1v1H56zM59 53h2v1H59zM63 53h1v1H63zM68,53 h1v1H68zM3 54h1v1H3zM6 54h3v1H6zM14 54h5v1H14zM20 54h1v1H20zM25 54h1v1H25zM27 54h4v1H27zM32 54h1v1H32zM37 54h3v1H37zM41 54h1v1H41zM43 54h1v1H43zM45 54h2v1H45zM48 54h1v1H48zM50 54h2v1H50zM53 54h1v1H53zM55 54h2v1H55zM58 54h1v1H58zM60 54h2v1H60zM63 54h2v1H63zM66 54h2v1H66zM0 55h1v1H0zM2 55h3v1H2zM7 55h1v1H7zM9 55h3v1H9zM15 55h2v1H15zM19 55h1v1H19zM21 55h2v1H21zM24 55h1v1H24zM26 55h2v1H26zM30 55h2v1H30zM35 55h3v1H35zM40 55h1v1H40zM42 55h4v1H42zM47 55h1v1H47zM49 55h1v1H49zM52 55h8v1H52zM62 55h3v1H62zM66,55 h3v1H66zM0 56h1v1H0zM2 56h3v1H2zM6 56h2v1H6zM10 56h1v1H10zM14 56h2v1H14zM18 56h4v1H18zM23 56h1v1H23zM25 56h1v1H25zM27 56h2v1H27zM30 56h1v1H30zM32 56h2v1H32zM35 56h3v1H35zM39 56h1v1H39zM45 56h2v1H45zM48 56h1v1H48zM54 56h2v1H54zM60 56h3v1H60zM64 56h2v1H64zM0 57h2v1H0zM3 57h3v1H3zM7 57h2v1H7zM13 57h3v1H13zM17 57h1v1H17zM22 57h1v1H22zM24 57h1v1H24zM26 57h2v1H26zM29 57h1v1H29zM31 57h1v1H31zM34 57h2v1H34zM37 57h1v1H37zM39 57h4v1H39zM44 57h1v1H44zM47 57h3v1H47zM53 57h3v1H53zM57 57h1v1H57zM59 57h4v1H59zM67,57 h2v1H67zM0 58h1v1H0zM2 58h1v1H2zM4 58h4v1H4zM9 58h1v1H9zM11 58h1v1H11zM13 58h1v1H13zM15 58h1v1H15zM17 58h2v1H17zM21 58h1v1H21zM23 58h1v1H23zM25 58h1v1H25zM27 58h2v1H27zM30 58h1v1H30zM33 58h1v1H33zM35 58h2v1H35zM39 58h1v1H39zM41 58h2v1H41zM46 58h1v1H46zM48 58h1v1H48zM58 58h1v1H58zM60 58h2v1H60zM63 58h4v1H63zM0 59h1v1H0zM8 59h1v1H8zM10 59h1v1H10zM12 59h1v1H12zM14 59h1v1H14zM17 59h1v1H17zM19 59h1v1H19zM21 59h4v1H21zM28 59h4v1H28zM35 59h3v1H35zM39 59h4v1H39zM44 59h2v1H44zM47 59h1v1H47zM49 59h1v1H49zM51 59h3v1H51zM56 59h1v1H56zM59 59h1v1H59zM61 59h2v1H61zM65 59h2v1H65zM0 60h1v1H0zM3 60h2v1H3zM6 60h1v1H6zM11 60h4v1H11zM16 60h3v1H16zM20 60h2v1H20zM23 60h1v1H23zM25 60h1v1H25zM27 60h4v1H27zM32 60h6v1H32zM43 60h1v1H43zM46 60h1v1H46zM48 60h3v1H48zM58 60h1v1H58zM60 60h5v1H60zM67 60h1v1H67zM8 61h3v1H8zM12 61h1v1H12zM14 61h1v1H14zM22 61h6v1H22zM31 61h2v1H31zM36 61h1v1H36zM39 61h1v1H39zM42 61h2v1H42zM45 61h1v1H45zM47 61h3v1H47zM52 61h3v1H52zM56 61h1v1H56zM59 61h2v1H59zM64 61h1v1H64zM66,61 h3v1H66zM0 62h7v1H0zM8 62h4v1H8zM16 62h3v1H16zM20 62h1v1H20zM24 62h2v1H24zM27 62h1v1H27zM29 62h1v1H29zM31 62h2v1H31zM34 62h1v1H34zM36 62h1v1H36zM38 62h1v1H38zM41 62h1v1H41zM43 62h6v1H43zM50 62h2v1H50zM53 62h1v1H53zM57 62h1v1H57zM60 62h1v1H60zM62 62h1v1H62zM64 62h2v1H64zM67 62h1v1H67zM0 63h1v1H0zM6 63h1v1H6zM10 63h2v1H10zM13 63h1v1H13zM16 63h2v1H16zM20 63h1v1H20zM24 63h3v1H24zM29 63h1v1H29zM32 63h1v1H32zM36 63h2v1H36zM39 63h1v1H39zM41 63h5v1H41zM49 63h4v1H49zM54 63h1v1H54zM56 63h1v1H56zM58 63h1v1H58zM60 63h1v1H60zM64 63h1v1H64zM66,63 h3v1H66zM0 64h1v1H0zM2 64h3v1H2zM6 64h1v1H6zM8 64h2v1H8zM12 64h3v1H12zM16 64h3v1H16zM20 64h1v1H20zM27 64h4v1H27zM32 64h6v1H32zM41 64h3v1H41zM45 64h6v1H45zM54 64h1v1H54zM57 64h9v1H57zM67,64 h2v1H67zM0 65h1v1H0zM2 65h3v1H2zM6 65h1v1H6zM8 65h3v1H8zM15 65h1v1H15zM18 65h2v1H18zM21 65h6v1H21zM32 65h1v1H32zM37 65h1v1H37zM39 65h2v1H39zM42 65h1v1H42zM45 65h1v1H45zM47 65h3v1H47zM53 65h2v1H53zM60 65h2v1H60zM63 65h4v1H63zM0 66h1v1H0zM2 66h3v1H2zM6 66h1v1H6zM8 66h1v1H8zM11 66h1v1H11zM15 66h2v1H15zM18 66h2v1H18zM22 66h4v1H22zM28 66h1v1H28zM30 66h1v1H30zM33 66h3v1H33zM41 66h1v1H41zM43 66h1v1H43zM46 66h1v1H46zM48 66h5v1H48zM55 66h1v1H55zM57 66h5v1H57zM65 66h2v1H65zM0 67h1v1H0zM6 67h1v1H6zM8 67h1v1H8zM10 67h2v1H10zM17 67h1v1H17zM21 67h2v1H21zM25 67h1v1H25zM27 67h1v1H27zM32 67h1v1H32zM38 67h8v1H38zM49 67h2v1H49zM52 67h1v1H52zM54 67h1v1H54zM56 67h1v1H56zM59 67h1v1H59zM63 67h4v1H63zM0 68h7v1H0zM8 68h1v1H8zM11 68h1v1H11zM16 68h1v1H16zM18 68h3v1H18zM23 68h1v1H23zM28 68h1v1H28zM30 68h2v1H30zM35 68h2v1H35zM41 68h2v1H41zM46 68h3v1H46zM50 68h2v1H50zM57 68h7v1H57zM67 68h1v1H67z"
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

    describe('date formats', () => {
        const renderTemplate = () =>
            render(
                <NationalParksBoardQuarantineAndVaccinationCertificateTemplate
                    document={{
                        $template: {
                            name: 'national-parks-board/quarantine-and-vaccination-certificate',
                            type: v2.TemplateType.EmbeddedRenderer,
                            url: 'http://localhost:3000',
                        },
                        animalName: 'KOBE',
                        monthYearOfBirth: '12-2023',
                        species: 'CANINE',
                        breed: 'Shiba Inu',
                        colour: 'White',
                        exportCountry: 'China',
                        microchipNumber: '900 111 881 990 863',
                        name: 'CHAN ZI ANG',
                        quarantine: {
                            endDate: '2023-12-31',
                            startDate: '2023-12-20',
                            numOfDays: 11,
                        },
                        sex: 'MALE',
                        rabiesVaccination: {
                            manufacturer: 'MERIAL RABISIN R',
                            batch: {
                                expiry: '2023-12-02',
                                number: 'L489157',
                            },
                            date: '2022-09-13',
                            validityDuration: '1 YEAR',
                            veterinarian: 'Clarissa Frany Francisco, DVM',
                        },
                        issuers: [
                            {
                                name: 'institute of blockchain',
                            },
                        ],
                    }}
                    handleObfuscation={() => void 0}
                />
            )
        describe('quarentine dates should be in DD/MM/YYYY format', () => {
            test('start date', () => {
                renderTemplate()
                expect(screen.queryByText('2023-12-20')).toBeFalsy()
                expect(screen.getByText('20/12/2023')).toBeTruthy()
            })

            test('end date', () => {
                renderTemplate()
                expect(screen.queryByText('2023-12-31')).toBeFalsy()
                expect(screen.getByText('31/12/2023')).toBeTruthy()
            })
        })
        describe('non quarentine dates into something like 14 October 2021 format', () => {
            test('birthdate', () => {
                renderTemplate()
                expect(screen.queryByText('12-2023')).toBeFalsy()
                expect(screen.getByText('DECEMBER 2023')).toBeTruthy()
            })

            test('date of vaccination', () => {
                renderTemplate()
                expect(screen.queryByText('13-09-2022')).toBeFalsy()
                expect(screen.getByText('13 SEPTEMBER 2022')).toBeTruthy()
            })

            test('Batch/Lot expiry', () => {
                renderTemplate()
                expect(screen.queryByText('02-12-2023')).toBeFalsy()
                expect(screen.getByText('02 DECEMBER 2023')).toBeTruthy()
            })
        })
    })
})
