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
              width: 21cm;
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

            .c3 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              width: 100%;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-align-items: flex-end;
              -webkit-box-align: flex-end;
              -ms-flex-align: flex-end;
              align-items: flex-end;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
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
            }

            .c8 {
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

            .c9 {
              font-size: 15px;
              font-style: normal;
              font-weight: 700;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-left: 0px;
              margin-right: 0px;
              width: 100%;
            }

            .c7 {
              width: 100%;
              font-size: 15px;
            }

            .c7 table {
              width: 90%;
            }

            .c7 table tbody tr td {
              padding: 4px 0px 4px 0px;
              width: 50%;
            }

            .c7 table tbody tr td:first-child {
              font-weight: bold;
            }

            .c4 {
              width: 4.94cm;
              height: auto;
            }

            .c5 {
              width: 8.54cm;
              height: auto;
            }

            .c10 {
              position: relative;
              top: 24px;
              width: 272px;
              height: 272px;
              border: 1px solid #bebebe;
            }

            .c11 {
              position: relative;
              top: 8px;
              left: 8px;
              width: 256px;
              height: 256px;
              background-color: #ccc;
            }

            @media print {
              .c1 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
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
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            Name of Animal:
                          </td>
                          <td>
                            KOBE
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Microchip Number:
                          </td>
                          <td>
                            900 111 881 990 863
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Species:
                          </td>
                          <td>
                            Dog
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Breed:
                          </td>
                          <td>
                            Shiba Inu
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Date of Birth:
                          </td>
                          <td>
                            14 October 2021
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Sex:
                          </td>
                          <td>
                            Male
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Colour:
                          </td>
                          <td>
                            White
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Country of Export:
                          </td>
                          <td>
                            China
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Name of Owner
                          </td>
                          <td>
                            CHAN ZI ANG
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="c8"
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
                    className="c9"
                  >
                    DETAILS OF RABIES VACCINATION (IF APPLICABLE)
                  </p>
                  <div
                    className="c7"
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            Manufacturer/Vaccination Name/Brand:
                          </td>
                          <td>
                            MERIAL RABISIN R
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Date of Vaccination:
                          </td>
                          <td>
                            13 September 2022
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Duration of validity:
                          </td>
                          <td>
                            1 Year
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Batch/Lot number:
                          </td>
                          <td>
                            L489157
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Batch/Lot expiry:
                          </td>
                          <td>
                            02 December 2023
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Veterinarian:
                          </td>
                          <td>
                            Clarissa Frany Francisco, DVM
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                    className="c10"
                  >
                    <div
                      className="c11"
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
                          d="M0 0h7v1H0zM9 0h1v1H9zM13 0h2v1H13zM22 0h5v1H22zM29 0h3v1H29zM33 0h1v1H33zM35 0h2v1H35zM42 0h1v1H42zM44 0h1v1H44zM47 0h2v1H47zM53 0h1v1H53zM55 0h1v1H55zM58,0 h7v1H58zM0 1h1v1H0zM6 1h1v1H6zM8 1h4v1H8zM13 1h2v1H13zM16 1h2v1H16zM19 1h1v1H19zM21 1h1v1H21zM23 1h3v1H23zM27 1h1v1H27zM29 1h1v1H29zM34 1h1v1H34zM37 1h2v1H37zM41 1h1v1H41zM43 1h1v1H43zM45 1h2v1H45zM48 1h5v1H48zM56 1h1v1H56zM58 1h1v1H58zM64,1 h1v1H64zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h1v1H9zM11 2h1v1H11zM14 2h3v1H14zM20 2h6v1H20zM32 2h1v1H32zM34 2h1v1H34zM38 2h4v1H38zM43 2h2v1H43zM46 2h1v1H46zM49 2h1v1H49zM52 2h1v1H52zM54 2h1v1H54zM56 2h1v1H56zM58 2h1v1H58zM60 2h3v1H60zM64,2 h1v1H64zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h3v1H8zM12 3h2v1H12zM16 3h2v1H16zM19 3h3v1H19zM27 3h5v1H27zM33 3h2v1H33zM36 3h1v1H36zM38 3h2v1H38zM41 3h3v1H41zM45 3h4v1H45zM51 3h1v1H51zM54 3h2v1H54zM58 3h1v1H58zM60 3h3v1H60zM64,3 h1v1H64zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM13 4h1v1H13zM16 4h1v1H16zM18 4h1v1H18zM22 4h5v1H22zM30 4h5v1H30zM36 4h1v1H36zM40 4h6v1H40zM49 4h1v1H49zM53 4h1v1H53zM56 4h1v1H56zM58 4h1v1H58zM60 4h3v1H60zM64,4 h1v1H64zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM12 5h2v1H12zM15 5h1v1H15zM17 5h7v1H17zM26 5h1v1H26zM29 5h2v1H29zM34 5h2v1H34zM38 5h4v1H38zM45 5h2v1H45zM48 5h1v1H48zM50 5h1v1H50zM54 5h1v1H54zM58 5h1v1H58zM64,5 h1v1H64zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30 6h1v1H30zM32 6h1v1H32zM34 6h1v1H34zM36 6h1v1H36zM38 6h1v1H38zM40 6h1v1H40zM42 6h1v1H42zM44 6h1v1H44zM46 6h1v1H46zM48 6h1v1H48zM50 6h1v1H50zM52 6h1v1H52zM54 6h1v1H54zM56 6h1v1H56zM58,6 h7v1H58zM9 7h2v1H9zM12 7h1v1H12zM18 7h2v1H18zM21 7h1v1H21zM24 7h3v1H24zM28 7h3v1H28zM34 7h1v1H34zM37 7h4v1H37zM42 7h4v1H42zM49 7h1v1H49zM52 7h2v1H52zM55 7h2v1H55zM0 8h5v1H0zM6 8h5v1H6zM16 8h5v1H16zM28 8h1v1H28zM30 8h7v1H30zM38 8h1v1H38zM43 8h1v1H43zM47 8h2v1H47zM53 8h1v1H53zM56 8h2v1H56zM59 8h1v1H59zM61 8h1v1H61zM63 8h1v1H63zM1 9h4v1H1zM8 9h1v1H8zM10 9h1v1H10zM12 9h1v1H12zM14 9h1v1H14zM16 9h2v1H16zM19 9h1v1H19zM22 9h3v1H22zM26 9h1v1H26zM29 9h4v1H29zM37 9h1v1H37zM41 9h3v1H41zM48 9h2v1H48zM53 9h2v1H53zM57 9h1v1H57zM59 9h4v1H59zM64,9 h1v1H64zM0 10h2v1H0zM4 10h7v1H4zM13 10h2v1H13zM16 10h1v1H16zM18 10h4v1H18zM27 10h4v1H27zM35 10h1v1H35zM37 10h3v1H37zM46 10h1v1H46zM48 10h1v1H48zM50 10h2v1H50zM53 10h1v1H53zM55 10h1v1H55zM57 10h3v1H57zM61 10h1v1H61zM2 11h1v1H2zM5 11h1v1H5zM7 11h2v1H7zM10 11h3v1H10zM15 11h2v1H15zM18 11h3v1H18zM24 11h7v1H24zM32 11h1v1H32zM36 11h1v1H36zM40 11h5v1H40zM46 11h1v1H46zM49 11h1v1H49zM52 11h3v1H52zM56 11h1v1H56zM58 11h1v1H58zM2 12h1v1H2zM4 12h1v1H4zM6 12h3v1H6zM12 12h1v1H12zM14 12h2v1H14zM18 12h1v1H18zM25 12h1v1H25zM28 12h1v1H28zM31 12h1v1H31zM33 12h1v1H33zM35 12h2v1H35zM38 12h2v1H38zM42 12h1v1H42zM47 12h4v1H47zM54 12h3v1H54zM58 12h5v1H58zM64,12 h1v1H64zM1 13h2v1H1zM7 13h1v1H7zM10 13h3v1H10zM14 13h1v1H14zM17 13h1v1H17zM22 13h3v1H22zM26 13h2v1H26zM30 13h1v1H30zM32 13h2v1H32zM35 13h3v1H35zM39 13h5v1H39zM47 13h1v1H47zM51 13h1v1H51zM54 13h1v1H54zM59 13h2v1H59zM64,13 h1v1H64zM5 14h2v1H5zM10 14h2v1H10zM15 14h3v1H15zM19 14h1v1H19zM23 14h1v1H23zM25 14h1v1H25zM29 14h2v1H29zM33 14h5v1H33zM39 14h1v1H39zM45 14h3v1H45zM49 14h2v1H49zM53 14h1v1H53zM55 14h4v1H55zM60 14h1v1H60zM62 14h1v1H62zM0 15h3v1H0zM8 15h6v1H8zM16 15h1v1H16zM19 15h4v1H19zM24 15h1v1H24zM29 15h2v1H29zM32 15h2v1H32zM35 15h1v1H35zM37 15h1v1H37zM40 15h1v1H40zM42 15h3v1H42zM47 15h1v1H47zM52 15h1v1H52zM54 15h2v1H54zM61 15h1v1H61zM63 15h1v1H63zM0 16h2v1H0zM3 16h1v1H3zM6 16h1v1H6zM9 16h4v1H9zM17 16h5v1H17zM25 16h1v1H25zM28 16h1v1H28zM31 16h1v1H31zM33 16h2v1H33zM36 16h1v1H36zM39 16h1v1H39zM45 16h2v1H45zM48 16h4v1H48zM56 16h1v1H56zM59 16h2v1H59zM62,16 h3v1H62zM0 17h2v1H0zM4 17h2v1H4zM7 17h1v1H7zM9 17h2v1H9zM13 17h1v1H13zM19 17h1v1H19zM21 17h6v1H21zM31 17h2v1H31zM35 17h3v1H35zM42 17h2v1H42zM47 17h1v1H47zM52 17h1v1H52zM54 17h2v1H54zM57 17h1v1H57zM59 17h1v1H59zM61 17h1v1H61zM64,17 h1v1H64zM0 18h1v1H0zM2 18h1v1H2zM5 18h2v1H5zM12 18h2v1H12zM16 18h1v1H16zM18 18h1v1H18zM20 18h2v1H20zM24 18h2v1H24zM27 18h1v1H27zM29 18h2v1H29zM34 18h3v1H34zM38 18h4v1H38zM45 18h2v1H45zM48 18h4v1H48zM53 18h1v1H53zM55 18h6v1H55zM0 19h3v1H0zM7 19h1v1H7zM9 19h1v1H9zM12 19h1v1H12zM15 19h5v1H15zM21 19h4v1H21zM27 19h4v1H27zM32 19h2v1H32zM44 19h1v1H44zM46 19h2v1H46zM49 19h1v1H49zM51 19h3v1H51zM55 19h1v1H55zM57 19h1v1H57zM61 19h1v1H61zM0 20h2v1H0zM4 20h1v1H4zM6 20h2v1H6zM10 20h2v1H10zM14 20h1v1H14zM18 20h3v1H18zM25 20h1v1H25zM27 20h2v1H27zM31 20h1v1H31zM33 20h2v1H33zM36 20h1v1H36zM38 20h1v1H38zM41 20h1v1H41zM43 20h1v1H43zM45 20h5v1H45zM56 20h1v1H56zM60 20h3v1H60zM0 21h1v1H0zM2 21h1v1H2zM4 21h2v1H4zM7 21h3v1H7zM11 21h2v1H11zM14 21h2v1H14zM17 21h2v1H17zM21 21h4v1H21zM26 21h2v1H26zM29 21h1v1H29zM33 21h1v1H33zM35 21h3v1H35zM39 21h2v1H39zM42 21h2v1H42zM47 21h3v1H47zM51 21h1v1H51zM53 21h3v1H53zM59 21h1v1H59zM63,21 h2v1H63zM0 22h1v1H0zM2 22h1v1H2zM4 22h1v1H4zM6 22h3v1H6zM11 22h1v1H11zM13 22h1v1H13zM18 22h3v1H18zM23 22h2v1H23zM27 22h2v1H27zM34 22h2v1H34zM39 22h2v1H39zM45 22h6v1H45zM55 22h5v1H55zM61 22h3v1H61zM8 23h1v1H8zM11 23h1v1H11zM13 23h3v1H13zM19 23h1v1H19zM21 23h1v1H21zM26 23h1v1H26zM28 23h3v1H28zM32 23h1v1H32zM37 23h1v1H37zM39 23h4v1H39zM44 23h2v1H44zM47 23h1v1H47zM50 23h8v1H50zM59 23h1v1H59zM61 23h1v1H61zM63,23 h2v1H63zM4 24h4v1H4zM9 24h1v1H9zM12 24h2v1H12zM15 24h4v1H15zM20 24h1v1H20zM25 24h1v1H25zM28 24h1v1H28zM31 24h1v1H31zM33 24h1v1H33zM35 24h2v1H35zM42 24h2v1H42zM45 24h5v1H45zM55 24h2v1H55zM58 24h5v1H58zM0 25h2v1H0zM3 25h1v1H3zM5 25h1v1H5zM7 25h3v1H7zM11 25h2v1H11zM14 25h2v1H14zM22 25h1v1H22zM24 25h4v1H24zM30 25h1v1H30zM32 25h2v1H32zM35 25h3v1H35zM39 25h2v1H39zM42 25h3v1H42zM47 25h3v1H47zM51 25h2v1H51zM54 25h2v1H54zM59 25h3v1H59zM63,25 h2v1H63zM0 26h1v1H0zM2 26h2v1H2zM6 26h4v1H6zM13 26h1v1H13zM16 26h5v1H16zM25 26h1v1H25zM27 26h3v1H27zM31 26h1v1H31zM33 26h2v1H33zM36 26h1v1H36zM38 26h2v1H38zM43 26h5v1H43zM50 26h1v1H50zM52 26h1v1H52zM55 26h1v1H55zM58 26h2v1H58zM63 26h1v1H63zM0 27h2v1H0zM7 27h1v1H7zM10 27h1v1H10zM13 27h1v1H13zM17 27h1v1H17zM19 27h3v1H19zM25 27h1v1H25zM27 27h1v1H27zM29 27h4v1H29zM34 27h1v1H34zM36 27h2v1H36zM39 27h2v1H39zM43 27h4v1H43zM49 27h1v1H49zM52 27h4v1H52zM57 27h1v1H57zM63 27h1v1H63zM0 28h1v1H0zM2 28h5v1H2zM8 28h1v1H8zM11 28h3v1H11zM15 28h1v1H15zM17 28h4v1H17zM23 28h1v1H23zM25 28h1v1H25zM28 28h2v1H28zM31 28h1v1H31zM35 28h2v1H35zM38 28h2v1H38zM41 28h3v1H41zM47 28h2v1H47zM50 28h1v1H50zM53 28h1v1H53zM55 28h2v1H55zM59 28h4v1H59zM0 29h2v1H0zM4 29h1v1H4zM8 29h1v1H8zM10 29h2v1H10zM16 29h1v1H16zM19 29h1v1H19zM21 29h2v1H21zM24 29h4v1H24zM30 29h2v1H30zM35 29h3v1H35zM41 29h4v1H41zM47 29h2v1H47zM53 29h2v1H53zM59 29h2v1H59zM62,29 h3v1H62zM1 30h2v1H1zM4 30h6v1H4zM11 30h8v1H11zM20 30h1v1H20zM22 30h2v1H22zM29 30h7v1H29zM43 30h2v1H43zM46 30h1v1H46zM50 30h2v1H50zM56 30h6v1H56zM1 31h2v1H1zM4 31h1v1H4zM8 31h1v1H8zM10 31h1v1H10zM13 31h1v1H13zM16 31h2v1H16zM21 31h4v1H21zM27 31h1v1H27zM30 31h1v1H30zM34 31h2v1H34zM40 31h1v1H40zM42 31h1v1H42zM44 31h1v1H44zM47 31h1v1H47zM49 31h1v1H49zM52 31h1v1H52zM55 31h2v1H55zM60 31h2v1H60zM64,31 h1v1H64zM4 32h1v1H4zM6 32h1v1H6zM8 32h2v1H8zM12 32h1v1H12zM14 32h5v1H14zM20 32h1v1H20zM25 32h1v1H25zM27 32h2v1H27zM30 32h1v1H30zM32 32h1v1H32zM34 32h1v1H34zM36 32h4v1H36zM41 32h1v1H41zM43 32h1v1H43zM48 32h2v1H48zM51 32h1v1H51zM56 32h1v1H56zM58 32h1v1H58zM60 32h1v1H60zM62 32h1v1H62zM1 33h1v1H1zM3 33h2v1H3zM8 33h2v1H8zM11 33h2v1H11zM19 33h1v1H19zM22 33h5v1H22zM29 33h2v1H29zM34 33h1v1H34zM39 33h1v1H39zM41 33h2v1H41zM45 33h1v1H45zM47 33h1v1H47zM54 33h1v1H54zM56 33h1v1H56zM60 33h2v1H60zM63,33 h2v1H63zM0 34h2v1H0zM3 34h8v1H3zM14 34h1v1H14zM16 34h2v1H16zM19 34h1v1H19zM21 34h1v1H21zM23 34h1v1H23zM25 34h1v1H25zM27 34h8v1H27zM36 34h3v1H36zM46 34h1v1H46zM48 34h3v1H48zM56 34h5v1H56zM0 35h4v1H0zM5 35h1v1H5zM7 35h1v1H7zM9 35h1v1H9zM11 35h2v1H11zM14 35h2v1H14zM20 35h1v1H20zM22 35h2v1H22zM25 35h1v1H25zM27 35h1v1H27zM29 35h2v1H29zM32 35h1v1H32zM34 35h4v1H34zM40 35h1v1H40zM42 35h1v1H42zM45 35h1v1H45zM52 35h2v1H52zM55 35h5v1H55zM61 35h1v1H61zM63,35 h2v1H63zM3 36h4v1H3zM9 36h2v1H9zM12 36h2v1H12zM16 36h2v1H16zM19 36h3v1H19zM25 36h1v1H25zM27 36h2v1H27zM32 36h2v1H32zM35 36h2v1H35zM39 36h1v1H39zM43 36h1v1H43zM46 36h6v1H46zM53 36h1v1H53zM58 36h1v1H58zM61 36h2v1H61zM4 37h2v1H4zM8 37h2v1H8zM12 37h4v1H12zM18 37h1v1H18zM22 37h3v1H22zM26 37h1v1H26zM30 37h2v1H30zM33 37h2v1H33zM37 37h1v1H37zM39 37h4v1H39zM48 37h2v1H48zM51 37h11v1H51zM64,37 h1v1H64zM0 38h1v1H0zM2 38h2v1H2zM6 38h1v1H6zM11 38h3v1H11zM16 38h1v1H16zM18 38h2v1H18zM25 38h1v1H25zM28 38h2v1H28zM31 38h2v1H31zM36 38h1v1H36zM39 38h1v1H39zM41 38h1v1H41zM43 38h1v1H43zM45 38h2v1H45zM48 38h3v1H48zM53 38h1v1H53zM55 38h1v1H55zM59 38h2v1H59zM63 38h1v1H63zM4 39h2v1H4zM10 39h1v1H10zM12 39h1v1H12zM14 39h2v1H14zM17 39h2v1H17zM20 39h2v1H20zM23 39h3v1H23zM28 39h1v1H28zM30 39h1v1H30zM33 39h2v1H33zM38 39h1v1H38zM40 39h2v1H40zM44 39h3v1H44zM49 39h5v1H49zM55 39h4v1H55zM60 39h2v1H60zM63,39 h2v1H63zM0 40h2v1H0zM5 40h4v1H5zM11 40h3v1H11zM15 40h4v1H15zM20 40h1v1H20zM23 40h1v1H23zM25 40h1v1H25zM27 40h2v1H27zM30 40h3v1H30zM35 40h3v1H35zM41 40h1v1H41zM43 40h1v1H43zM46 40h1v1H46zM48 40h3v1H48zM56 40h2v1H56zM62 40h1v1H62zM3 41h2v1H3zM7 41h1v1H7zM10 41h2v1H10zM13 41h2v1H13zM22 41h1v1H22zM24 41h4v1H24zM31 41h1v1H31zM34 41h4v1H34zM41 41h2v1H41zM44 41h1v1H44zM48 41h2v1H48zM52 41h3v1H52zM58 41h1v1H58zM60 41h2v1H60zM64,41 h1v1H64zM0 42h2v1H0zM5 42h5v1H5zM11 42h1v1H11zM13 42h1v1H13zM17 42h2v1H17zM20 42h1v1H20zM27 42h1v1H27zM29 42h1v1H29zM32 42h2v1H32zM35 42h1v1H35zM38 42h2v1H38zM41 42h1v1H41zM46 42h2v1H46zM50 42h1v1H50zM52 42h2v1H52zM55 42h1v1H55zM62 42h1v1H62zM0 43h3v1H0zM4 43h1v1H4zM9 43h4v1H9zM14 43h3v1H14zM20 43h1v1H20zM24 43h1v1H24zM26 43h1v1H26zM34 43h1v1H34zM36 43h1v1H36zM38 43h4v1H38zM43 43h2v1H43zM51 43h2v1H51zM54 43h5v1H54zM63,43 h2v1H63zM4 44h1v1H4zM6 44h2v1H6zM10 44h1v1H10zM14 44h1v1H14zM18 44h1v1H18zM20 44h2v1H20zM23 44h1v1H23zM25 44h1v1H25zM27 44h2v1H27zM32 44h2v1H32zM35 44h3v1H35zM41 44h1v1H41zM45 44h1v1H45zM47 44h2v1H47zM50 44h1v1H50zM53 44h2v1H53zM56 44h4v1H56zM61 44h2v1H61zM64,44 h1v1H64zM0 45h1v1H0zM4 45h1v1H4zM7 45h1v1H7zM9 45h1v1H9zM14 45h2v1H14zM17 45h1v1H17zM21 45h2v1H21zM24 45h3v1H24zM30 45h2v1H30zM33 45h5v1H33zM39 45h1v1H39zM41 45h4v1H41zM48 45h1v1H48zM51 45h5v1H51zM58 45h4v1H58zM63,45 h2v1H63zM0 46h7v1H0zM8 46h1v1H8zM12 46h1v1H12zM14 46h1v1H14zM17 46h1v1H17zM20 46h1v1H20zM24 46h1v1H24zM27 46h5v1H27zM33 46h1v1H33zM35 46h2v1H35zM39 46h1v1H39zM43 46h2v1H43zM46 46h3v1H46zM50 46h1v1H50zM52 46h1v1H52zM55 46h1v1H55zM57 46h1v1H57zM62 46h1v1H62zM0 47h4v1H0zM7 47h2v1H7zM11 47h2v1H11zM14 47h2v1H14zM17 47h1v1H17zM19 47h1v1H19zM21 47h2v1H21zM25 47h3v1H25zM30 47h2v1H30zM33 47h2v1H33zM38 47h1v1H38zM40 47h7v1H40zM51 47h2v1H51zM54 47h5v1H54zM60 47h2v1H60zM1 48h3v1H1zM6 48h2v1H6zM10 48h5v1H10zM16 48h3v1H16zM20 48h1v1H20zM27 48h2v1H27zM32 48h1v1H32zM35 48h3v1H35zM39 48h1v1H39zM42 48h1v1H42zM47 48h3v1H47zM56 48h2v1H56zM61 48h3v1H61zM5 49h1v1H5zM10 49h3v1H10zM17 49h1v1H17zM19 49h1v1H19zM21 49h2v1H21zM24 49h4v1H24zM31 49h1v1H31zM33 49h4v1H33zM42 49h1v1H42zM44 49h2v1H44zM52 49h1v1H52zM54 49h1v1H54zM56 49h1v1H56zM58 49h1v1H58zM60 49h1v1H60zM64,49 h1v1H64zM3 50h1v1H3zM5 50h2v1H5zM8 50h1v1H8zM13 50h4v1H13zM18 50h1v1H18zM20 50h1v1H20zM23 50h1v1H23zM27 50h4v1H27zM35 50h4v1H35zM41 50h1v1H41zM46 50h1v1H46zM48 50h4v1H48zM53 50h1v1H53zM55 50h1v1H55zM59 50h2v1H59zM1 51h3v1H1zM5 51h1v1H5zM7 51h1v1H7zM10 51h2v1H10zM13 51h2v1H13zM16 51h3v1H16zM21 51h3v1H21zM25 51h5v1H25zM31 51h1v1H31zM33 51h2v1H33zM37 51h6v1H37zM44 51h1v1H44zM46 51h2v1H46zM49 51h1v1H49zM51 51h2v1H51zM54 51h2v1H54zM58 51h4v1H58zM64,51 h1v1H64zM3 52h4v1H3zM13 52h4v1H13zM18 52h3v1H18zM27 52h3v1H27zM32 52h1v1H32zM36 52h4v1H36zM42 52h2v1H42zM46 52h3v1H46zM54 52h1v1H54zM56 52h1v1H56zM58 52h1v1H58zM61 52h2v1H61zM64,52 h1v1H64zM2 53h2v1H2zM7 53h2v1H7zM11 53h2v1H11zM17 53h2v1H17zM21 53h6v1H21zM31 53h1v1H31zM35 53h1v1H35zM37 53h1v1H37zM40 53h4v1H40zM49 53h1v1H49zM51 53h1v1H51zM53 53h2v1H53zM58 53h5v1H58zM64,53 h1v1H64zM2 54h2v1H2zM5 54h5v1H5zM11 54h2v1H11zM17 54h1v1H17zM20 54h2v1H20zM23 54h2v1H23zM29 54h1v1H29zM31 54h1v1H31zM35 54h2v1H35zM39 54h1v1H39zM41 54h1v1H41zM43 54h1v1H43zM45 54h2v1H45zM48 54h1v1H48zM50 54h2v1H50zM61 54h3v1H61zM0 55h1v1H0zM3 55h1v1H3zM7 55h1v1H7zM10 55h2v1H10zM14 55h1v1H14zM16 55h1v1H16zM19 55h1v1H19zM21 55h1v1H21zM26 55h3v1H26zM30 55h1v1H30zM33 55h2v1H33zM37 55h4v1H37zM42 55h1v1H42zM44 55h2v1H44zM49 55h4v1H49zM54 55h5v1H54zM60 55h2v1H60zM64,55 h1v1H64zM1 56h2v1H1zM4 56h1v1H4zM6 56h1v1H6zM12 56h9v1H12zM25 56h1v1H25zM27 56h8v1H27zM36 56h1v1H36zM38 56h1v1H38zM41 56h3v1H41zM46 56h3v1H46zM50 56h2v1H50zM53 56h1v1H53zM56 56h7v1H56zM8 57h6v1H8zM17 57h1v1H17zM22 57h1v1H22zM24 57h1v1H24zM26 57h1v1H26zM30 57h1v1H30zM34 57h4v1H34zM41 57h3v1H41zM45 57h1v1H45zM47 57h3v1H47zM52 57h3v1H52zM56 57h1v1H56zM60 57h1v1H60zM63,57 h2v1H63zM0 58h7v1H0zM8 58h1v1H8zM10 58h3v1H10zM14 58h1v1H14zM16 58h1v1H16zM18 58h3v1H18zM22 58h4v1H22zM30 58h1v1H30zM32 58h1v1H32zM34 58h3v1H34zM38 58h1v1H38zM41 58h1v1H41zM43 58h4v1H43zM48 58h1v1H48zM50 58h1v1H50zM56 58h1v1H56zM58 58h1v1H58zM60 58h1v1H60zM0 59h1v1H0zM6 59h1v1H6zM10 59h1v1H10zM12 59h4v1H12zM17 59h1v1H17zM22 59h1v1H22zM27 59h1v1H27zM30 59h1v1H30zM34 59h4v1H34zM40 59h2v1H40zM44 59h1v1H44zM47 59h1v1H47zM49 59h4v1H49zM54 59h3v1H54zM60 59h2v1H60zM0 60h1v1H0zM2 60h3v1H2zM6 60h1v1H6zM8 60h2v1H8zM11 60h1v1H11zM14 60h2v1H14zM18 60h4v1H18zM23 60h1v1H23zM25 60h1v1H25zM28 60h10v1H28zM45 60h1v1H45zM47 60h2v1H47zM53 60h1v1H53zM56 60h5v1H56zM62 60h1v1H62zM0 61h1v1H0zM2 61h3v1H2zM6 61h1v1H6zM8 61h5v1H8zM16 61h1v1H16zM22 61h1v1H22zM24 61h1v1H24zM26 61h2v1H26zM32 61h1v1H32zM35 61h1v1H35zM37 61h1v1H37zM41 61h3v1H41zM47 61h2v1H47zM54 61h1v1H54zM56 61h2v1H56zM59 61h1v1H59zM62 61h2v1H62zM0 62h1v1H0zM2 62h3v1H2zM6 62h1v1H6zM8 62h1v1H8zM10 62h1v1H10zM12 62h1v1H12zM15 62h4v1H15zM23 62h2v1H23zM26 62h1v1H26zM30 62h1v1H30zM34 62h1v1H34zM36 62h2v1H36zM39 62h3v1H39zM43 62h4v1H43zM48 62h1v1H48zM50 62h1v1H50zM53 62h1v1H53zM55 62h1v1H55zM58 62h1v1H58zM60 62h2v1H60zM63 62h1v1H63zM0 63h1v1H0zM6 63h1v1H6zM8 63h1v1H8zM11 63h1v1H11zM14 63h1v1H14zM16 63h1v1H16zM19 63h1v1H19zM26 63h3v1H26zM33 63h1v1H33zM35 63h1v1H35zM37 63h1v1H37zM40 63h5v1H40zM49 63h1v1H49zM51 63h2v1H51zM54 63h1v1H54zM56 63h2v1H56zM59 63h1v1H59zM63 63h1v1H63zM0 64h7v1H0zM8 64h1v1H8zM10 64h7v1H10zM18 64h3v1H18zM28 64h1v1H28zM30 64h3v1H30zM34 64h1v1H34zM36 64h1v1H36zM38 64h2v1H38zM47 64h4v1H47zM54 64h1v1H54zM57 64h2v1H57zM60 64h1v1H60zM62 64h1v1H62z"
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
