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
              min-height: 29.7cm;
              padding: 2cm;
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
              width: 4.94cm;
              height: auto;
            }

            .c5 {
              width: 8.54cm;
              height: auto;
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

            .c13 {
              position: relative;
              top: 24px;
              width: 272px;
              height: 272px;
              border: 1px solid #bebebe;
            }

            .c14 {
              position: relative;
              top: 8px;
              left: 8px;
              width: 256px;
              height: 256px;
              background-color: #ccc;
            }

            @media only screen and (max-width:768px) {
              .c1 {
                padding: 24px;
              }
            }

            @media print {
              .c1 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
                width: 21cm;
                min-height: 29.7cm;
              }
            }

            @media only screen and (max-width:768px) {
              .c4 {
                width: 187px;
              }
            }

            @media only screen and (max-width:768px) {
              .c5 {
                width: 307px;
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
                        Dog
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
                        Date of Birth:
                      </div>
                      <div
                        className="c10"
                      >
                        14 October 2021
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
                        Male
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
                        13 September 2022
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
                        02 December 2023
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
              </div>
              <div
                className="c1"
              >
                <div
                  className="c2"
                >
                  Present QR code for official authority to scan for verification
                  <div
                    className="c13"
                  >
                    <div
                      className="c14"
                    >
                      <svg
                        height={256}
                        viewBox="0 0 65 65"
                        width={256}
                      >
                        <path
                          d="M0,0 h65v65H0z"
                          fill="#FFFFFF"
                          shapeRendering="crispEdges"
                        />
                        <path
                          d="M0 0h7v1H0zM9 0h1v1H9zM13 0h1v1H13zM15 0h3v1H15zM19 0h1v1H19zM21 0h2v1H21zM24 0h4v1H24zM29 0h3v1H29zM33 0h1v1H33zM36 0h1v1H36zM39 0h1v1H39zM42 0h2v1H42zM45 0h1v1H45zM47 0h1v1H47zM49 0h1v1H49zM53 0h1v1H53zM55 0h1v1H55zM58,0 h7v1H58zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM14 1h6v1H14zM21 1h1v1H21zM26 1h4v1H26zM34 1h5v1H34zM41 1h1v1H41zM43 1h1v1H43zM46 1h1v1H46zM48 1h1v1H48zM50 1h2v1H50zM56 1h1v1H56zM58 1h1v1H58zM64,1 h1v1H64zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM12 2h2v1H12zM15 2h1v1H15zM17 2h3v1H17zM22 2h1v1H22zM27 2h1v1H27zM29 2h4v1H29zM34 2h3v1H34zM38 2h1v1H38zM40 2h2v1H40zM44 2h1v1H44zM46 2h1v1H46zM49 2h1v1H49zM52 2h1v1H52zM54 2h1v1H54zM56 2h1v1H56zM58 2h1v1H58zM60 2h3v1H60zM64,2 h1v1H64zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h4v1H8zM13 3h1v1H13zM16 3h1v1H16zM18 3h3v1H18zM27 3h2v1H27zM33 3h4v1H33zM38 3h1v1H38zM41 3h3v1H41zM45 3h2v1H45zM48 3h1v1H48zM51 3h1v1H51zM54 3h2v1H54zM58 3h1v1H58zM60 3h3v1H60zM64,3 h1v1H64zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM11 4h1v1H11zM17 4h1v1H17zM21 4h6v1H21zM30 4h7v1H30zM39 4h4v1H39zM45 4h1v1H45zM48 4h2v1H48zM53 4h1v1H53zM56 4h1v1H56zM58 4h1v1H58zM60 4h3v1H60zM64,4 h1v1H64zM0 5h1v1H0zM6 5h1v1H6zM8 5h2v1H8zM14 5h9v1H14zM24 5h1v1H24zM26 5h2v1H26zM29 5h2v1H29zM34 5h3v1H34zM38 5h1v1H38zM40 5h2v1H40zM43 5h1v1H43zM45 5h3v1H45zM50 5h2v1H50zM54 5h1v1H54zM58 5h1v1H58zM64,5 h1v1H64zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38 6h1v1H38zM40 6h1v1H40zM42 6h1v1H42zM44 6h1v1H44zM46 6h1v1H46zM48 6h1v1H48zM50 6h1v1H50zM52 6h1v1H52zM54 6h1v1H54zM56 6h1v1H56zM58,6 h7v1H58zM11 7h1v1H11zM13 7h4v1H13zM18 7h4v1H18zM23 7h4v1H23zM29 7h2v1H29zM34 7h1v1H34zM37 7h1v1H37zM40 7h2v1H40zM44 7h2v1H44zM49 7h1v1H49zM51 7h3v1H51zM55 7h2v1H55zM0 8h5v1H0zM6 8h6v1H6zM14 8h1v1H14zM17 8h4v1H17zM28 8h1v1H28zM30 8h8v1H30zM41 8h2v1H41zM47 8h4v1H47zM53 8h1v1H53zM56 8h2v1H56zM59 8h1v1H59zM61 8h1v1H61zM63 8h1v1H63zM1 9h4v1H1zM7 9h3v1H7zM14 9h2v1H14zM17 9h1v1H17zM19 9h1v1H19zM22 9h3v1H22zM26 9h1v1H26zM29 9h3v1H29zM37 9h1v1H37zM41 9h4v1H41zM52 9h3v1H52zM64,9 h1v1H64zM0 10h1v1H0zM3 10h1v1H3zM5 10h3v1H5zM10 10h1v1H10zM15 10h8v1H15zM26 10h6v1H26zM35 10h1v1H35zM38 10h2v1H38zM45 10h3v1H45zM50 10h2v1H50zM55 10h2v1H55zM58 10h3v1H58zM2 11h1v1H2zM7 11h2v1H7zM10 11h2v1H10zM13 11h1v1H13zM16 11h5v1H16zM24 11h2v1H24zM27 11h4v1H27zM32 11h1v1H32zM36 11h1v1H36zM40 11h6v1H40zM49 11h1v1H49zM52 11h1v1H52zM54 11h1v1H54zM56 11h1v1H56zM58 11h1v1H58zM61 11h1v1H61zM2 12h2v1H2zM5 12h2v1H5zM9 12h3v1H9zM13 12h1v1H13zM15 12h1v1H15zM17 12h4v1H17zM23 12h1v1H23zM25 12h1v1H25zM28 12h1v1H28zM31 12h1v1H31zM35 12h5v1H35zM41 12h2v1H41zM45 12h5v1H45zM53 12h1v1H53zM56 12h1v1H56zM58 12h3v1H58zM62 12h1v1H62zM64,12 h1v1H64zM0 13h1v1H0zM2 13h2v1H2zM5 13h1v1H5zM8 13h6v1H8zM15 13h1v1H15zM21 13h2v1H21zM24 13h1v1H24zM26 13h2v1H26zM29 13h2v1H29zM32 13h2v1H32zM35 13h2v1H35zM39 13h5v1H39zM47 13h1v1H47zM51 13h1v1H51zM54 13h2v1H54zM59 13h3v1H59zM64,13 h1v1H64zM1 14h1v1H1zM3 14h6v1H3zM10 14h3v1H10zM15 14h2v1H15zM18 14h3v1H18zM22 14h1v1H22zM24 14h1v1H24zM26 14h1v1H26zM28 14h1v1H28zM30 14h1v1H30zM33 14h4v1H33zM38 14h2v1H38zM46 14h2v1H46zM49 14h2v1H49zM56 14h7v1H56zM0 15h1v1H0zM5 15h1v1H5zM7 15h4v1H7zM16 15h1v1H16zM22 15h1v1H22zM26 15h1v1H26zM30 15h3v1H30zM37 15h1v1H37zM39 15h7v1H39zM47 15h1v1H47zM51 15h2v1H51zM54 15h1v1H54zM63 15h1v1H63zM4 16h1v1H4zM6 16h3v1H6zM12 16h1v1H12zM15 16h1v1H15zM17 16h2v1H17zM20 16h2v1H20zM23 16h1v1H23zM27 16h3v1H27zM31 16h1v1H31zM34 16h5v1H34zM41 16h2v1H41zM46 16h1v1H46zM48 16h3v1H48zM56 16h1v1H56zM59 16h2v1H59zM62,16 h3v1H62zM0 17h3v1H0zM4 17h2v1H4zM7 17h1v1H7zM12 17h2v1H12zM19 17h1v1H19zM21 17h2v1H21zM24 17h1v1H24zM26 17h2v1H26zM31 17h1v1H31zM33 17h1v1H33zM35 17h2v1H35zM41 17h3v1H41zM47 17h2v1H47zM51 17h5v1H51zM57 17h1v1H57zM59 17h1v1H59zM61 17h1v1H61zM63,17 h2v1H63zM0 18h2v1H0zM6 18h2v1H6zM9 18h3v1H9zM13 18h2v1H13zM16 18h1v1H16zM18 18h1v1H18zM20 18h2v1H20zM23 18h1v1H23zM26 18h2v1H26zM29 18h6v1H29zM36 18h4v1H36zM45 18h2v1H45zM49 18h3v1H49zM56 18h5v1H56zM0 19h1v1H0zM2 19h1v1H2zM4 19h2v1H4zM7 19h1v1H7zM15 19h1v1H15zM17 19h1v1H17zM19 19h1v1H19zM24 19h1v1H24zM29 19h2v1H29zM32 19h2v1H32zM36 19h1v1H36zM39 19h2v1H39zM43 19h2v1H43zM46 19h1v1H46zM49 19h1v1H49zM52 19h2v1H52zM55 19h3v1H55zM61 19h1v1H61zM64,19 h1v1H64zM3 20h1v1H3zM5 20h2v1H5zM8 20h2v1H8zM13 20h1v1H13zM18 20h1v1H18zM20 20h2v1H20zM23 20h1v1H23zM28 20h1v1H28zM31 20h1v1H31zM34 20h3v1H34zM38 20h1v1H38zM41 20h1v1H41zM43 20h1v1H43zM45 20h2v1H45zM48 20h2v1H48zM51 20h1v1H51zM56 20h1v1H56zM60 20h4v1H60zM1 21h1v1H1zM3 21h1v1H3zM8 21h1v1H8zM10 21h1v1H10zM14 21h2v1H14zM22 21h5v1H22zM30 21h1v1H30zM33 21h1v1H33zM35 21h3v1H35zM40 21h1v1H40zM42 21h1v1H42zM49 21h1v1H49zM52 21h4v1H52zM57 21h1v1H57zM59 21h1v1H59zM64,21 h1v1H64zM1 22h1v1H1zM3 22h1v1H3zM6 22h2v1H6zM9 22h1v1H9zM13 22h2v1H13zM18 22h2v1H18zM29 22h2v1H29zM34 22h1v1H34zM40 22h1v1H40zM43 22h1v1H43zM45 22h2v1H45zM48 22h4v1H48zM55 22h2v1H55zM58 22h2v1H58zM61 22h3v1H61zM1 23h2v1H1zM4 23h2v1H4zM7 23h1v1H7zM9 23h2v1H9zM12 23h1v1H12zM14 23h2v1H14zM19 23h1v1H19zM21 23h1v1H21zM24 23h1v1H24zM26 23h2v1H26zM29 23h2v1H29zM32 23h1v1H32zM40 23h1v1H40zM42 23h3v1H42zM46 23h1v1H46zM49 23h2v1H49zM52 23h1v1H52zM54 23h5v1H54zM61 23h1v1H61zM0 24h1v1H0zM3 24h1v1H3zM5 24h4v1H5zM12 24h3v1H12zM16 24h3v1H16zM20 24h1v1H20zM25 24h1v1H25zM28 24h1v1H28zM31 24h1v1H31zM33 24h1v1H33zM35 24h3v1H35zM43 24h1v1H43zM45 24h1v1H45zM47 24h4v1H47zM53 24h4v1H53zM59 24h4v1H59zM64,24 h1v1H64zM4 25h2v1H4zM8 25h2v1H8zM12 25h2v1H12zM22 25h1v1H22zM24 25h4v1H24zM29 25h2v1H29zM32 25h2v1H32zM35 25h3v1H35zM40 25h6v1H40zM47 25h1v1H47zM49 25h1v1H49zM51 25h2v1H51zM54 25h2v1H54zM57 25h1v1H57zM59 25h3v1H59zM63,25 h2v1H63zM1 26h1v1H1zM3 26h2v1H3zM6 26h2v1H6zM10 26h1v1H10zM13 26h2v1H13zM16 26h1v1H16zM18 26h3v1H18zM25 26h4v1H25zM30 26h2v1H30zM33 26h2v1H33zM37 26h2v1H37zM40 26h1v1H40zM44 26h4v1H44zM50 26h1v1H50zM52 26h1v1H52zM55 26h4v1H55zM62 26h2v1H62zM1 27h1v1H1zM3 27h2v1H3zM7 27h2v1H7zM11 27h2v1H11zM14 27h1v1H14zM16 27h2v1H16zM19 27h4v1H19zM25 27h3v1H25zM29 27h4v1H29zM34 27h1v1H34zM36 27h1v1H36zM39 27h7v1H39zM49 27h1v1H49zM52 27h2v1H52zM57 27h1v1H57zM59 27h1v1H59zM63 27h1v1H63zM0 28h1v1H0zM4 28h7v1H4zM12 28h1v1H12zM14 28h2v1H14zM17 28h2v1H17zM20 28h1v1H20zM23 28h1v1H23zM25 28h1v1H25zM28 28h1v1H28zM31 28h1v1H31zM35 28h2v1H35zM38 28h2v1H38zM42 28h2v1H42zM45 28h1v1H45zM47 28h2v1H47zM50 28h1v1H50zM53 28h4v1H53zM60 28h3v1H60zM0 29h1v1H0zM3 29h1v1H3zM8 29h1v1H8zM10 29h1v1H10zM14 29h1v1H14zM16 29h1v1H16zM19 29h1v1H19zM21 29h2v1H21zM24 29h1v1H24zM26 29h2v1H26zM30 29h1v1H30zM32 29h1v1H32zM35 29h2v1H35zM41 29h4v1H41zM47 29h3v1H47zM54 29h1v1H54zM60,29 h5v1H60zM0 30h1v1H0zM4 30h5v1H4zM11 30h3v1H11zM15 30h2v1H15zM19 30h1v1H19zM22 30h2v1H22zM29 30h7v1H29zM37 30h2v1H37zM42 30h5v1H42zM50 30h2v1H50zM53 30h1v1H53zM56 30h7v1H56zM0 31h2v1H0zM4 31h1v1H4zM8 31h1v1H8zM10 31h1v1H10zM16 31h3v1H16zM22 31h3v1H22zM26 31h2v1H26zM29 31h2v1H29zM34 31h1v1H34zM37 31h1v1H37zM40 31h1v1H40zM42 31h1v1H42zM44 31h1v1H44zM47 31h1v1H47zM49 31h1v1H49zM51 31h2v1H51zM56 31h1v1H56zM60 31h2v1H60zM64,31 h1v1H64zM3 32h2v1H3zM6 32h1v1H6zM8 32h5v1H8zM14 32h7v1H14zM23 32h1v1H23zM25 32h1v1H25zM28 32h1v1H28zM30 32h1v1H30zM32 32h1v1H32zM34 32h3v1H34zM39 32h1v1H39zM43 32h1v1H43zM45 32h2v1H45zM48 32h4v1H48zM53 32h1v1H53zM56 32h1v1H56zM58 32h1v1H58zM60,32 h5v1H60zM4 33h1v1H4zM8 33h1v1H8zM13 33h1v1H13zM19 33h1v1H19zM21 33h4v1H21zM26 33h1v1H26zM29 33h2v1H29zM34 33h2v1H34zM37 33h1v1H37zM40 33h1v1H40zM42 33h1v1H42zM47 33h3v1H47zM51 33h6v1H51zM60 33h2v1H60zM64,33 h1v1H64zM0 34h1v1H0zM3 34h6v1H3zM10 34h2v1H10zM13 34h2v1H13zM16 34h1v1H16zM18 34h1v1H18zM20 34h1v1H20zM24 34h2v1H24zM28 34h7v1H28zM36 34h1v1H36zM38 34h2v1H38zM41 34h1v1H41zM43 34h1v1H43zM45 34h2v1H45zM48 34h1v1H48zM50 34h3v1H50zM56 34h5v1H56zM0 35h1v1H0zM2 35h2v1H2zM5 35h1v1H5zM7 35h2v1H7zM10 35h1v1H10zM12 35h1v1H12zM14 35h1v1H14zM19 35h2v1H19zM24 35h1v1H24zM26 35h2v1H26zM29 35h2v1H29zM33 35h2v1H33zM36 35h2v1H36zM39 35h2v1H39zM42 35h4v1H42zM52 35h2v1H52zM55 35h1v1H55zM57 35h5v1H57zM63,35 h2v1H63zM1 36h3v1H1zM5 36h2v1H5zM11 36h2v1H11zM15 36h4v1H15zM20 36h2v1H20zM23 36h1v1H23zM27 36h2v1H27zM32 36h2v1H32zM35 36h2v1H35zM43 36h1v1H43zM46 36h1v1H46zM48 36h4v1H48zM53 36h1v1H53zM58 36h1v1H58zM61 36h2v1H61zM64,36 h1v1H64zM2 37h4v1H2zM9 37h4v1H9zM14 37h1v1H14zM17 37h1v1H17zM19 37h1v1H19zM22 37h5v1H22zM30 37h1v1H30zM33 37h2v1H33zM37 37h1v1H37zM41 37h3v1H41zM48 37h2v1H48zM53 37h4v1H53zM59 37h3v1H59zM63,37 h2v1H63zM0 38h2v1H0zM4 38h3v1H4zM8 38h1v1H8zM11 38h2v1H11zM15 38h2v1H15zM18 38h1v1H18zM23 38h3v1H23zM27 38h3v1H27zM35 38h2v1H35zM39 38h3v1H39zM44 38h7v1H44zM53 38h1v1H53zM59 38h2v1H59zM63 38h1v1H63zM0 39h1v1H0zM3 39h2v1H3zM8 39h4v1H8zM17 39h3v1H17zM21 39h1v1H21zM23 39h3v1H23zM28 39h1v1H28zM30 39h2v1H30zM39 39h3v1H39zM44 39h1v1H44zM46 39h1v1H46zM49 39h5v1H49zM55 39h4v1H55zM60 39h2v1H60zM63,39 h2v1H63zM0 40h3v1H0zM4 40h3v1H4zM8 40h1v1H8zM13 40h6v1H13zM20 40h1v1H20zM23 40h1v1H23zM25 40h1v1H25zM27 40h6v1H27zM35 40h2v1H35zM38 40h2v1H38zM41 40h1v1H41zM43 40h1v1H43zM47 40h2v1H47zM50 40h2v1H50zM56 40h2v1H56zM62 40h2v1H62zM0 41h4v1H0zM7 41h2v1H7zM12 41h3v1H12zM22 41h1v1H22zM24 41h4v1H24zM31 41h1v1H31zM33 41h1v1H33zM36 41h2v1H36zM39 41h1v1H39zM41 41h2v1H41zM44 41h1v1H44zM47 41h3v1H47zM51 41h4v1H51zM58 41h1v1H58zM60 41h2v1H60zM64,41 h1v1H64zM6 42h1v1H6zM9 42h1v1H9zM11 42h1v1H11zM14 42h1v1H14zM17 42h2v1H17zM20 42h3v1H20zM25 42h3v1H25zM29 42h1v1H29zM32 42h2v1H32zM35 42h2v1H35zM38 42h1v1H38zM46 42h1v1H46zM50 42h1v1H50zM55 42h1v1H55zM57 42h1v1H57zM62 42h1v1H62zM0 43h1v1H0zM3 43h2v1H3zM9 43h3v1H9zM13 43h6v1H13zM20 43h1v1H20zM24 43h1v1H24zM26 43h1v1H26zM29 43h2v1H29zM34 43h1v1H34zM36 43h1v1H36zM38 43h3v1H38zM42 43h3v1H42zM51 43h2v1H51zM54 43h2v1H54zM57 43h2v1H57zM63,43 h2v1H63zM1 44h1v1H1zM5 44h5v1H5zM11 44h1v1H11zM13 44h2v1H13zM17 44h4v1H17zM23 44h1v1H23zM27 44h2v1H27zM30 44h1v1H30zM32 44h2v1H32zM35 44h2v1H35zM38 44h1v1H38zM41 44h2v1H41zM47 44h3v1H47zM53 44h2v1H53zM56 44h2v1H56zM61 44h2v1H61zM64,44 h1v1H64zM0 45h5v1H0zM7 45h1v1H7zM14 45h2v1H14zM21 45h2v1H21zM24 45h1v1H24zM26 45h1v1H26zM31 45h1v1H31zM33 45h5v1H33zM39 45h1v1H39zM41 45h4v1H41zM48 45h2v1H48zM51 45h2v1H51zM54 45h1v1H54zM56 45h6v1H56zM63,45 h2v1H63zM1 46h6v1H1zM8 46h3v1H8zM13 46h1v1H13zM17 46h2v1H17zM20 46h1v1H20zM23 46h1v1H23zM26 46h1v1H26zM28 46h2v1H28zM31 46h3v1H31zM35 46h3v1H35zM39 46h1v1H39zM43 46h2v1H43zM46 46h3v1H46zM50 46h1v1H50zM52 46h2v1H52zM55 46h2v1H55zM62 46h1v1H62zM0 47h2v1H0zM7 47h1v1H7zM10 47h1v1H10zM14 47h2v1H14zM19 47h1v1H19zM21 47h1v1H21zM23 47h2v1H23zM27 47h1v1H27zM33 47h2v1H33zM37 47h1v1H37zM40 47h6v1H40zM49 47h1v1H49zM52 47h4v1H52zM58 47h1v1H58zM60 47h2v1H60zM0 48h2v1H0zM3 48h1v1H3zM6 48h1v1H6zM8 48h1v1H8zM12 48h7v1H12zM20 48h1v1H20zM23 48h1v1H23zM25 48h1v1H25zM27 48h2v1H27zM30 48h1v1H30zM32 48h2v1H32zM35 48h2v1H35zM39 48h1v1H39zM46 48h4v1H46zM51 48h1v1H51zM53 48h2v1H53zM56 48h2v1H56zM59 48h1v1H59zM62 48h2v1H62zM0 49h1v1H0zM2 49h2v1H2zM5 49h1v1H5zM8 49h3v1H8zM14 49h1v1H14zM17 49h1v1H17zM21 49h6v1H21zM36 49h1v1H36zM40 49h1v1H40zM42 49h2v1H42zM45 49h1v1H45zM48 49h1v1H48zM51 49h4v1H51zM58 49h1v1H58zM60 49h1v1H60zM63,49 h2v1H63zM1 50h2v1H1zM6 50h1v1H6zM9 50h3v1H9zM13 50h5v1H13zM20 50h1v1H20zM24 50h1v1H24zM29 50h1v1H29zM35 50h5v1H35zM41 50h1v1H41zM46 50h6v1H46zM53 50h1v1H53zM55 50h2v1H55zM59 50h2v1H59zM63 50h1v1H63zM0 51h2v1H0zM3 51h3v1H3zM7 51h1v1H7zM10 51h4v1H10zM16 51h4v1H16zM22 51h4v1H22zM29 51h14v1H29zM44 51h1v1H44zM46 51h2v1H46zM49 51h1v1H49zM52 51h1v1H52zM54 51h3v1H54zM58 51h2v1H58zM61 51h1v1H61zM63,51 h2v1H63zM0 52h1v1H0zM2 52h2v1H2zM5 52h2v1H5zM10 52h2v1H10zM16 52h1v1H16zM18 52h4v1H18zM25 52h1v1H25zM27 52h3v1H27zM32 52h1v1H32zM34 52h5v1H34zM42 52h2v1H42zM46 52h1v1H46zM48 52h1v1H48zM51 52h1v1H51zM54 52h1v1H54zM56 52h1v1H56zM61 52h2v1H61zM3 53h1v1H3zM5 53h1v1H5zM7 53h6v1H7zM15 53h1v1H15zM18 53h2v1H18zM22 53h3v1H22zM26 53h1v1H26zM31 53h1v1H31zM37 53h1v1H37zM39 53h1v1H39zM41 53h3v1H41zM47 53h3v1H47zM51 53h4v1H51zM56 53h2v1H56zM59,53 h6v1H59zM2 54h2v1H2zM5 54h2v1H5zM10 54h1v1H10zM13 54h5v1H13zM19 54h1v1H19zM21 54h1v1H21zM23 54h1v1H23zM29 54h1v1H29zM32 54h2v1H32zM36 54h1v1H36zM41 54h1v1H41zM43 54h4v1H43zM50 54h1v1H50zM61 54h2v1H61zM0 55h1v1H0zM3 55h1v1H3zM11 55h2v1H11zM21 55h1v1H21zM24 55h1v1H24zM26 55h3v1H26zM30 55h6v1H30zM39 55h2v1H39zM42 55h4v1H42zM52 55h7v1H52zM60 55h2v1H60zM63,55 h2v1H63zM1 56h2v1H1zM4 56h1v1H4zM6 56h1v1H6zM10 56h2v1H10zM15 56h6v1H15zM25 56h1v1H25zM27 56h2v1H27zM30 56h8v1H30zM41 56h3v1H41zM45 56h1v1H45zM47 56h3v1H47zM53 56h1v1H53zM56 56h8v1H56zM8 57h2v1H8zM13 57h1v1H13zM17 57h1v1H17zM22 57h1v1H22zM24 57h1v1H24zM26 57h1v1H26zM29 57h2v1H29zM34 57h1v1H34zM37 57h1v1H37zM39 57h5v1H39zM48 57h2v1H48zM52 57h3v1H52zM56 57h1v1H56zM60 57h1v1H60zM63,57 h2v1H63zM0 58h7v1H0zM8 58h2v1H8zM11 58h3v1H11zM16 58h6v1H16zM23 58h4v1H23zM29 58h2v1H29zM32 58h1v1H32zM34 58h2v1H34zM38 58h2v1H38zM41 58h1v1H41zM45 58h6v1H45zM52 58h1v1H52zM56 58h1v1H56zM58 58h1v1H58zM60 58h1v1H60zM62 58h1v1H62zM0 59h1v1H0zM6 59h1v1H6zM10 59h1v1H10zM13 59h3v1H13zM18 59h1v1H18zM22 59h1v1H22zM25 59h1v1H25zM27 59h1v1H27zM30 59h1v1H30zM34 59h3v1H34zM38 59h1v1H38zM40 59h1v1H40zM42 59h1v1H42zM44 59h2v1H44zM47 59h1v1H47zM51 59h6v1H51zM60 59h1v1H60zM0 60h1v1H0zM2 60h3v1H2zM6 60h1v1H6zM8 60h2v1H8zM15 60h1v1H15zM18 60h1v1H18zM20 60h1v1H20zM23 60h1v1H23zM25 60h1v1H25zM28 60h11v1H28zM41 60h1v1H41zM45 60h6v1H45zM54 60h1v1H54zM56 60h5v1H56zM62 60h1v1H62zM0 61h1v1H0zM2 61h3v1H2zM6 61h1v1H6zM8 61h1v1H8zM13 61h2v1H13zM16 61h2v1H16zM19 61h1v1H19zM21 61h2v1H21zM24 61h1v1H24zM26 61h2v1H26zM32 61h2v1H32zM35 61h1v1H35zM41 61h3v1H41zM47 61h2v1H47zM53 61h4v1H53zM58 61h2v1H58zM61 61h1v1H61zM63 61h1v1H63zM0 62h1v1H0zM2 62h3v1H2zM6 62h1v1H6zM8 62h2v1H8zM11 62h2v1H11zM15 62h2v1H15zM19 62h2v1H19zM23 62h3v1H23zM27 62h1v1H27zM30 62h1v1H30zM33 62h2v1H33zM36 62h1v1H36zM38 62h4v1H38zM43 62h4v1H43zM48 62h3v1H48zM55 62h1v1H55zM60 62h2v1H60zM63 62h1v1H63zM0 63h1v1H0zM6 63h1v1H6zM8 63h2v1H8zM11 63h4v1H11zM16 63h3v1H16zM23 63h2v1H23zM33 63h1v1H33zM38 63h7v1H38zM47 63h1v1H47zM49 63h1v1H49zM51 63h2v1H51zM55 63h1v1H55zM57 63h1v1H57zM59 63h1v1H59zM61 63h1v1H61zM63 63h1v1H63zM0 64h7v1H0zM8 64h5v1H8zM14 64h3v1H14zM18 64h3v1H18zM23 64h1v1H23zM25 64h1v1H25zM27 64h6v1H27zM34 64h3v1H34zM42 64h1v1H42zM45 64h1v1H45zM48 64h1v1H48zM50 64h2v1H50zM53 64h4v1H53zM58 64h1v1H58zM60 64h3v1H60z"
                          fill="#000000"
                          shapeRendering="crispEdges"
                        />
                      </svg>
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
                        birthDate: '2021-10-14',
                        species: 'Dog',
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
                        sex: 'male',
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
                expect(screen.queryByText('2021-10-14')).toBeFalsy()
                expect(screen.getByText('14 October 2021')).toBeTruthy()
            })

            test('date of vaccination', () => {
                renderTemplate()
                expect(screen.queryByText('13-09-2022')).toBeFalsy()
                expect(screen.getByText('13 September 2022')).toBeTruthy()
            })

            test('Batch/Lot expiry', () => {
                renderTemplate()
                expect(screen.queryByText('02-12-2023')).toBeFalsy()
                expect(screen.getByText('02 December 2023')).toBeTruthy()
            })
        })
    })
})
