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
                        viewBox="0 0 61 61"
                        width={256}
                      >
                        <path
                          d="M0,0 h61v61H0z"
                          fill="#FFFFFF"
                          shapeRendering="crispEdges"
                        />
                        <path
                          d="M0 0h7v1H0zM9 0h1v1H9zM11 0h3v1H11zM15 0h1v1H15zM19 0h1v1H19zM21 0h1v1H21zM23 0h1v1H23zM25 0h2v1H25zM30 0h2v1H30zM35 0h1v1H35zM37 0h1v1H37zM42 0h3v1H42zM47 0h1v1H47zM49 0h1v1H49zM51 0h2v1H51zM54,0 h7v1H54zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM18 1h1v1H18zM22 1h1v1H22zM28 1h4v1H28zM33 1h3v1H33zM37 1h2v1H37zM40 1h1v1H40zM45 1h4v1H45zM51 1h2v1H51zM54 1h1v1H54zM60,1 h1v1H60zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM10 2h2v1H10zM13 2h3v1H13zM19 2h1v1H19zM21 2h1v1H21zM23 2h1v1H23zM26 2h7v1H26zM34 2h1v1H34zM37 2h2v1H37zM40 2h1v1H40zM42 2h1v1H42zM44 2h1v1H44zM46 2h1v1H46zM50 2h3v1H50zM54 2h1v1H54zM56 2h3v1H56zM60,2 h1v1H60zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM13 3h1v1H13zM16 3h5v1H16zM23 3h2v1H23zM27 3h2v1H27zM33 3h6v1H33zM43 3h1v1H43zM45 3h2v1H45zM48 3h3v1H48zM52 3h1v1H52zM54 3h1v1H54zM56 3h3v1H56zM60,3 h1v1H60zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM12 4h1v1H12zM17 4h1v1H17zM19 4h1v1H19zM21 4h4v1H21zM26 4h7v1H26zM34 4h1v1H34zM37 4h1v1H37zM41 4h3v1H41zM50 4h2v1H50zM54 4h1v1H54zM56 4h3v1H56zM60,4 h1v1H60zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM12 5h3v1H12zM16 5h2v1H16zM19 5h1v1H19zM22 5h2v1H22zM27 5h2v1H27zM32 5h2v1H32zM35 5h4v1H35zM40 5h2v1H40zM46 5h3v1H46zM50 5h1v1H50zM54 5h1v1H54zM60,5 h1v1H60zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38 6h1v1H38zM40 6h1v1H40zM42 6h1v1H42zM44 6h1v1H44zM46 6h1v1H46zM48 6h1v1H48zM50 6h1v1H50zM52 6h1v1H52zM54,6 h7v1H54zM10 7h1v1H10zM13 7h1v1H13zM15 7h1v1H15zM22 7h2v1H22zM25 7h1v1H25zM27 7h2v1H27zM32 7h1v1H32zM37 7h1v1H37zM40 7h3v1H40zM44 7h1v1H44zM49 7h1v1H49zM51 7h1v1H51zM0 8h5v1H0zM6 8h3v1H6zM10 8h1v1H10zM13 8h1v1H13zM15 8h3v1H15zM19 8h1v1H19zM23 8h2v1H23zM28 8h5v1H28zM36 8h1v1H36zM41 8h3v1H41zM47 8h2v1H47zM50 8h1v1H50zM52 8h2v1H52zM55 8h1v1H55zM57 8h1v1H57zM59 8h1v1H59zM1 9h2v1H1zM4 9h2v1H4zM7 9h3v1H7zM13 9h3v1H13zM18 9h1v1H18zM22 9h4v1H22zM27 9h1v1H27zM33 9h1v1H33zM37 9h1v1H37zM39 9h1v1H39zM41 9h2v1H41zM44 9h2v1H44zM48 9h2v1H48zM54 9h3v1H54zM59 9h1v1H59zM3 10h2v1H3zM6 10h2v1H6zM9 10h2v1H9zM12 10h2v1H12zM15 10h1v1H15zM19 10h1v1H19zM21 10h1v1H21zM24 10h2v1H24zM27 10h1v1H27zM29 10h1v1H29zM31 10h2v1H31zM34 10h1v1H34zM36 10h1v1H36zM38 10h1v1H38zM41 10h1v1H41zM43 10h1v1H43zM45 10h4v1H45zM50 10h3v1H50zM55 10h3v1H55zM59,10 h2v1H59zM2 11h1v1H2zM5 11h1v1H5zM8 11h1v1H8zM10 11h1v1H10zM17 11h1v1H17zM21 11h5v1H21zM28 11h1v1H28zM30 11h1v1H30zM32 11h1v1H32zM34 11h11v1H34zM46 11h1v1H46zM49 11h1v1H49zM51 11h1v1H51zM54 11h3v1H54zM60,11 h1v1H60zM0 12h4v1H0zM6 12h2v1H6zM10 12h1v1H10zM16 12h1v1H16zM18 12h1v1H18zM20 12h1v1H20zM27 12h2v1H27zM31 12h4v1H31zM36 12h2v1H36zM41 12h1v1H41zM43 12h1v1H43zM45 12h4v1H45zM50 12h2v1H50zM53 12h3v1H53zM58 12h1v1H58zM0 13h1v1H0zM2 13h1v1H2zM7 13h1v1H7zM10 13h3v1H10zM14 13h2v1H14zM21 13h1v1H21zM23 13h4v1H23zM28 13h1v1H28zM30 13h2v1H30zM35 13h2v1H35zM40 13h4v1H40zM47 13h3v1H47zM54 13h1v1H54zM57 13h1v1H57zM60,13 h1v1H60zM2 14h1v1H2zM5 14h2v1H5zM8 14h1v1H8zM12 14h3v1H12zM19 14h3v1H19zM23 14h2v1H23zM27 14h5v1H27zM33 14h2v1H33zM36 14h1v1H36zM43 14h1v1H43zM45 14h4v1H45zM50 14h3v1H50zM58,14 h3v1H58zM0 15h5v1H0zM9 15h2v1H9zM12 15h1v1H12zM14 15h1v1H14zM17 15h2v1H17zM25 15h3v1H25zM30 15h2v1H30zM34 15h1v1H34zM38 15h1v1H38zM40 15h1v1H40zM42 15h1v1H42zM46 15h1v1H46zM49 15h1v1H49zM51 15h1v1H51zM53 15h1v1H53zM56 15h1v1H56zM59 15h1v1H59zM0 16h2v1H0zM4 16h1v1H4zM6 16h1v1H6zM9 16h2v1H9zM12 16h4v1H12zM17 16h5v1H17zM23 16h2v1H23zM28 16h3v1H28zM33 16h7v1H33zM43 16h1v1H43zM46 16h3v1H46zM52 16h2v1H52zM55 16h1v1H55zM57 16h2v1H57zM60,16 h1v1H60zM0 17h1v1H0zM2 17h1v1H2zM7 17h2v1H7zM11 17h1v1H11zM16 17h1v1H16zM19 17h1v1H19zM24 17h1v1H24zM26 17h1v1H26zM29 17h2v1H29zM32 17h1v1H32zM35 17h2v1H35zM41 17h2v1H41zM44 17h1v1H44zM49 17h1v1H49zM53 17h3v1H53zM57 17h1v1H57zM0 18h2v1H0zM5 18h5v1H5zM12 18h2v1H12zM15 18h2v1H15zM18 18h1v1H18zM20 18h1v1H20zM22 18h4v1H22zM27 18h5v1H27zM34 18h1v1H34zM38 18h2v1H38zM41 18h1v1H41zM46 18h2v1H46zM50 18h3v1H50zM56 18h1v1H56zM59,18 h2v1H59zM0 19h1v1H0zM4 19h2v1H4zM7 19h3v1H7zM14 19h1v1H14zM16 19h1v1H16zM19 19h2v1H19zM22 19h1v1H22zM24 19h2v1H24zM29 19h2v1H29zM32 19h2v1H32zM36 19h2v1H36zM40 19h3v1H40zM44 19h1v1H44zM47 19h1v1H47zM49 19h1v1H49zM52 19h1v1H52zM54 19h1v1H54zM57 19h1v1H57zM59 19h1v1H59zM0 20h8v1H0zM9 20h2v1H9zM12 20h7v1H12zM24 20h1v1H24zM27 20h2v1H27zM30 20h3v1H30zM35 20h2v1H35zM38 20h1v1H38zM42 20h2v1H42zM45 20h1v1H45zM47 20h2v1H47zM50 20h1v1H50zM52 20h2v1H52zM55 20h1v1H55zM57 20h2v1H57zM60,20 h1v1H60zM0 21h6v1H0zM7 21h5v1H7zM13 21h1v1H13zM19 21h1v1H19zM21 21h7v1H21zM29 21h1v1H29zM33 21h1v1H33zM39 21h4v1H39zM44 21h2v1H44zM47 21h2v1H47zM51 21h1v1H51zM54 21h3v1H54zM59 21h1v1H59zM0 22h3v1H0zM4 22h1v1H4zM6 22h1v1H6zM9 22h3v1H9zM14 22h1v1H14zM18 22h4v1H18zM24 22h5v1H24zM30 22h2v1H30zM36 22h1v1H36zM38 22h2v1H38zM41 22h1v1H41zM45 22h4v1H45zM50 22h1v1H50zM57 22h1v1H57zM59,22 h2v1H59zM1 23h1v1H1zM3 23h1v1H3zM13 23h1v1H13zM17 23h2v1H17zM23 23h2v1H23zM26 23h2v1H26zM30 23h4v1H30zM37 23h1v1H37zM40 23h1v1H40zM42 23h3v1H42zM46 23h2v1H46zM49 23h1v1H49zM53 23h1v1H53zM56 23h1v1H56zM60,23 h1v1H60zM4 24h4v1H4zM9 24h1v1H9zM11 24h6v1H11zM18 24h1v1H18zM25 24h3v1H25zM31 24h2v1H31zM34 24h1v1H34zM36 24h2v1H36zM43 24h1v1H43zM45 24h5v1H45zM52 24h2v1H52zM58 24h1v1H58zM1 25h2v1H1zM5 25h1v1H5zM9 25h1v1H9zM12 25h3v1H12zM17 25h4v1H17zM22 25h3v1H22zM30 25h2v1H30zM35 25h3v1H35zM41 25h4v1H41zM47 25h3v1H47zM53 25h2v1H53zM56 25h1v1H56zM1 26h4v1H1zM6 26h1v1H6zM12 26h1v1H12zM14 26h3v1H14zM18 26h1v1H18zM20 26h1v1H20zM33 26h1v1H33zM35 26h2v1H35zM38 26h3v1H38zM43 26h4v1H43zM48 26h3v1H48zM56 26h2v1H56zM59,26 h2v1H59zM0 27h2v1H0zM3 27h3v1H3zM7 27h1v1H7zM10 27h1v1H10zM13 27h1v1H13zM16 27h1v1H16zM19 27h2v1H19zM24 27h1v1H24zM26 27h2v1H26zM29 27h3v1H29zM33 27h1v1H33zM36 27h7v1H36zM44 27h1v1H44zM46 27h1v1H46zM49 27h1v1H49zM53 27h4v1H53zM1 28h2v1H1zM4 28h5v1H4zM11 28h3v1H11zM15 28h4v1H15zM21 28h1v1H21zM23 28h1v1H23zM25 28h1v1H25zM28 28h5v1H28zM35 28h1v1H35zM38 28h1v1H38zM41 28h3v1H41zM46 28h3v1H46zM52 28h5v1H52zM58,28 h3v1H58zM0 29h2v1H0zM3 29h2v1H3zM8 29h2v1H8zM11 29h2v1H11zM14 29h2v1H14zM17 29h1v1H17zM19 29h1v1H19zM21 29h4v1H21zM27 29h2v1H27zM32 29h1v1H32zM37 29h4v1H37zM42 29h3v1H42zM47 29h3v1H47zM52 29h1v1H52zM56 29h4v1H56zM4 30h1v1H4zM6 30h1v1H6zM8 30h1v1H8zM11 30h1v1H11zM15 30h3v1H15zM20 30h1v1H20zM22 30h7v1H22zM30 30h1v1H30zM32 30h1v1H32zM34 30h2v1H34zM40 30h1v1H40zM46 30h2v1H46zM50 30h3v1H50zM54 30h1v1H54zM56 30h1v1H56zM60,30 h1v1H60zM4 31h1v1H4zM8 31h1v1H8zM11 31h3v1H11zM15 31h1v1H15zM21 31h2v1H21zM24 31h2v1H24zM27 31h2v1H27zM32 31h2v1H32zM40 31h1v1H40zM42 31h3v1H42zM50 31h3v1H50zM56 31h1v1H56zM59,31 h2v1H59zM0 32h1v1H0zM2 32h7v1H2zM11 32h2v1H11zM14 32h1v1H14zM17 32h2v1H17zM20 32h1v1H20zM22 32h1v1H22zM24 32h2v1H24zM28 32h5v1H28zM34 32h3v1H34zM38 32h1v1H38zM42 32h1v1H42zM45 32h2v1H45zM48 32h2v1H48zM52,32 h9v1H52zM0 33h2v1H0zM4 33h1v1H4zM8 33h1v1H8zM11 33h3v1H11zM15 33h1v1H15zM19 33h1v1H19zM21 33h1v1H21zM23 33h1v1H23zM26 33h5v1H26zM33 33h1v1H33zM36 33h2v1H36zM40 33h4v1H40zM45 33h1v1H45zM47 33h3v1H47zM51 33h5v1H51zM57 33h1v1H57zM0 34h1v1H0zM2 34h3v1H2zM6 34h2v1H6zM9 34h2v1H9zM14 34h1v1H14zM17 34h3v1H17zM21 34h1v1H21zM27 34h3v1H27zM33 34h6v1H33zM40 34h1v1H40zM43 34h1v1H43zM45 34h2v1H45zM50 34h2v1H50zM54 34h1v1H54zM57,34 h4v1H57zM0 35h2v1H0zM3 35h2v1H3zM7 35h1v1H7zM9 35h2v1H9zM12 35h2v1H12zM15 35h1v1H15zM17 35h2v1H17zM23 35h1v1H23zM26 35h3v1H26zM31 35h1v1H31zM34 35h2v1H34zM37 35h4v1H37zM42 35h3v1H42zM46 35h1v1H46zM49 35h1v1H49zM53 35h1v1H53zM55 35h1v1H55zM59,35 h2v1H59zM0 36h2v1H0zM3 36h1v1H3zM5 36h2v1H5zM8 36h4v1H8zM13 36h8v1H13zM23 36h3v1H23zM27 36h3v1H27zM31 36h4v1H31zM36 36h1v1H36zM38 36h2v1H38zM41 36h1v1H41zM43 36h1v1H43zM47 36h3v1H47zM51 36h1v1H51zM53 36h1v1H53zM56 36h3v1H56zM60,36 h1v1H60zM1 37h1v1H1zM4 37h1v1H4zM7 37h1v1H7zM9 37h1v1H9zM21 37h4v1H21zM28 37h1v1H28zM30 37h1v1H30zM34 37h4v1H34zM40 37h1v1H40zM42 37h3v1H42zM48 37h1v1H48zM52 37h1v1H52zM55 37h1v1H55zM1 38h1v1H1zM4 38h7v1H4zM14 38h4v1H14zM19 38h1v1H19zM23 38h1v1H23zM27 38h3v1H27zM32 38h2v1H32zM35 38h4v1H35zM40 38h1v1H40zM43 38h2v1H43zM46 38h6v1H46zM54 38h1v1H54zM57 38h1v1H57zM59,38 h2v1H59zM0 39h1v1H0zM2 39h1v1H2zM5 39h1v1H5zM8 39h1v1H8zM10 39h1v1H10zM13 39h3v1H13zM19 39h1v1H19zM24 39h2v1H24zM27 39h1v1H27zM29 39h3v1H29zM33 39h1v1H33zM37 39h1v1H37zM39 39h2v1H39zM44 39h1v1H44zM46 39h1v1H46zM55 39h1v1H55zM6 40h1v1H6zM10 40h2v1H10zM13 40h5v1H13zM19 40h1v1H19zM23 40h1v1H23zM27 40h6v1H27zM35 40h2v1H35zM41 40h2v1H41zM46 40h3v1H46zM50 40h7v1H50zM58 40h1v1H58zM60,40 h1v1H60zM0 41h2v1H0zM3 41h3v1H3zM7 41h2v1H7zM10 41h2v1H10zM18 41h1v1H18zM21 41h5v1H21zM27 41h2v1H27zM30 41h4v1H30zM36 41h2v1H36zM41 41h4v1H41zM47 41h1v1H47zM49 41h1v1H49zM51 41h1v1H51zM53 41h2v1H53zM57 41h1v1H57zM59,41 h2v1H59zM0 42h1v1H0zM4 42h7v1H4zM12 42h1v1H12zM14 42h1v1H14zM17 42h3v1H17zM21 42h1v1H21zM23 42h2v1H23zM27 42h1v1H27zM29 42h1v1H29zM33 42h2v1H33zM36 42h1v1H36zM40 42h1v1H40zM43 42h1v1H43zM45 42h2v1H45zM48 42h1v1H48zM50 42h2v1H50zM54 42h2v1H54zM57 42h1v1H57zM60,42 h1v1H60zM0 43h1v1H0zM3 43h1v1H3zM8 43h1v1H8zM10 43h2v1H10zM14 43h2v1H14zM17 43h2v1H17zM21 43h2v1H21zM24 43h3v1H24zM28 43h4v1H28zM35 43h2v1H35zM39 43h3v1H39zM44 43h2v1H44zM49 43h2v1H49zM52 43h2v1H52zM55 43h1v1H55zM59,43 h2v1H59zM0 44h3v1H0zM4 44h1v1H4zM6 44h2v1H6zM12 44h2v1H12zM15 44h6v1H15zM29 44h2v1H29zM33 44h1v1H33zM36 44h2v1H36zM39 44h1v1H39zM43 44h1v1H43zM45 44h1v1H45zM47 44h10v1H47zM58 44h1v1H58zM60,44 h1v1H60zM2 45h1v1H2zM4 45h1v1H4zM8 45h4v1H8zM14 45h2v1H14zM17 45h1v1H17zM23 45h2v1H23zM26 45h4v1H26zM31 45h1v1H31zM35 45h2v1H35zM41 45h2v1H41zM44 45h1v1H44zM47 45h3v1H47zM54 45h1v1H54zM58 45h1v1H58zM2 46h1v1H2zM4 46h1v1H4zM6 46h3v1H6zM10 46h3v1H10zM14 46h1v1H14zM17 46h3v1H17zM21 46h1v1H21zM24 46h1v1H24zM29 46h2v1H29zM33 46h2v1H33zM36 46h2v1H36zM39 46h1v1H39zM43 46h6v1H43zM50 46h2v1H50zM53 46h6v1H53zM60,46 h1v1H60zM2 47h1v1H2zM7 47h1v1H7zM9 47h2v1H9zM13 47h1v1H13zM15 47h5v1H15zM24 47h1v1H24zM26 47h1v1H26zM28 47h1v1H28zM31 47h3v1H31zM35 47h1v1H35zM37 47h1v1H37zM40 47h3v1H40zM44 47h1v1H44zM46 47h2v1H46zM49 47h1v1H49zM1 48h1v1H1zM3 48h1v1H3zM5 48h2v1H5zM10 48h3v1H10zM15 48h1v1H15zM18 48h1v1H18zM20 48h2v1H20zM23 48h3v1H23zM29 48h2v1H29zM32 48h5v1H32zM39 48h1v1H39zM41 48h2v1H41zM45 48h4v1H45zM50 48h2v1H50zM54 48h5v1H54zM60,48 h1v1H60zM1 49h2v1H1zM4 49h1v1H4zM8 49h1v1H8zM11 49h1v1H11zM16 49h1v1H16zM19 49h1v1H19zM24 49h1v1H24zM26 49h3v1H26zM30 49h4v1H30zM35 49h1v1H35zM37 49h1v1H37zM41 49h2v1H41zM44 49h1v1H44zM49 49h1v1H49zM52 49h1v1H52zM55 49h1v1H55zM57 49h2v1H57zM2 50h6v1H2zM9 50h1v1H9zM11 50h1v1H11zM14 50h5v1H14zM20 50h1v1H20zM23 50h2v1H23zM27 50h2v1H27zM30 50h5v1H30zM36 50h6v1H36zM46 50h3v1H46zM50 50h5v1H50zM57 50h1v1H57zM59,50 h2v1H59zM0 51h3v1H0zM4 51h1v1H4zM8 51h1v1H8zM13 51h1v1H13zM16 51h1v1H16zM18 51h1v1H18zM21 51h1v1H21zM24 51h4v1H24zM29 51h2v1H29zM33 51h1v1H33zM39 51h3v1H39zM44 51h2v1H44zM52 51h1v1H52zM54 51h2v1H54zM0 52h4v1H0zM6 52h1v1H6zM9 52h1v1H9zM11 52h1v1H11zM16 52h3v1H16zM20 52h2v1H20zM23 52h2v1H23zM28 52h5v1H28zM36 52h3v1H36zM43 52h1v1H43zM46 52h3v1H46zM50 52h7v1H50zM58,52 h3v1H58zM8 53h1v1H8zM10 53h1v1H10zM13 53h2v1H13zM21 53h4v1H21zM26 53h3v1H26zM32 53h2v1H32zM35 53h1v1H35zM37 53h1v1H37zM41 53h2v1H41zM49 53h1v1H49zM52 53h1v1H52zM56 53h2v1H56zM0 54h7v1H0zM8 54h3v1H8zM12 54h1v1H12zM14 54h1v1H14zM18 54h1v1H18zM20 54h2v1H20zM25 54h2v1H25zM28 54h1v1H28zM30 54h1v1H30zM32 54h1v1H32zM35 54h2v1H35zM38 54h3v1H38zM43 54h1v1H43zM46 54h3v1H46zM51 54h2v1H51zM54 54h1v1H54zM56 54h2v1H56zM60,54 h1v1H60zM0 55h1v1H0zM6 55h1v1H6zM9 55h1v1H9zM12 55h7v1H12zM24 55h1v1H24zM26 55h1v1H26zM28 55h1v1H28zM32 55h2v1H32zM35 55h1v1H35zM39 55h4v1H39zM44 55h2v1H44zM50 55h1v1H50zM52 55h1v1H52zM56 55h1v1H56zM59,55 h2v1H59zM0 56h1v1H0zM2 56h3v1H2zM6 56h1v1H6zM8 56h1v1H8zM10 56h4v1H10zM15 56h2v1H15zM18 56h1v1H18zM25 56h13v1H25zM43 56h1v1H43zM47 56h3v1H47zM51 56h6v1H51zM58 56h1v1H58zM60,56 h1v1H60zM0 57h1v1H0zM2 57h3v1H2zM6 57h1v1H6zM8 57h1v1H8zM10 57h3v1H10zM14 57h1v1H14zM17 57h4v1H17zM22 57h3v1H22zM27 57h1v1H27zM30 57h2v1H30zM35 57h3v1H35zM39 57h7v1H39zM47 57h3v1H47zM51 57h1v1H51zM53 57h1v1H53zM55 57h3v1H55zM60,57 h1v1H60zM0 58h1v1H0zM2 58h3v1H2zM6 58h1v1H6zM8 58h2v1H8zM18 58h1v1H18zM20 58h1v1H20zM22 58h2v1H22zM27 58h1v1H27zM29 58h3v1H29zM33 58h1v1H33zM38 58h2v1H38zM41 58h1v1H41zM45 58h2v1H45zM50 58h1v1H50zM53 58h3v1H53zM58 58h1v1H58zM60,58 h1v1H60zM0 59h1v1H0zM6 59h1v1H6zM8 59h2v1H8zM11 59h1v1H11zM14 59h1v1H14zM16 59h1v1H16zM19 59h2v1H19zM23 59h1v1H23zM26 59h2v1H26zM29 59h2v1H29zM32 59h3v1H32zM36 59h6v1H36zM44 59h1v1H44zM47 59h1v1H47zM52 59h4v1H52zM57 59h1v1H57zM60,59 h1v1H60zM0 60h7v1H0zM8 60h3v1H8zM13 60h1v1H13zM15 60h4v1H15zM20 60h2v1H20zM23 60h1v1H23zM25 60h1v1H25zM29 60h3v1H29zM35 60h1v1H35zM38 60h1v1H38zM41 60h1v1H41zM43 60h1v1H43zM47 60h5v1H47zM57,60 h4v1H57z"
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
                        ownerName: 'CHAN ZI ANG',
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
