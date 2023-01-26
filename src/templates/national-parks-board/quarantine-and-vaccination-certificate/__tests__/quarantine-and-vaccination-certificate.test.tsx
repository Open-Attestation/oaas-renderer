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
