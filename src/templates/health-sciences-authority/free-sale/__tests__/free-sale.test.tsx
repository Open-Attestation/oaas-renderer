import * as React from 'react'
import renderer from 'react-test-renderer'
import { HealthSciencesAuthorityFreeSaleTemplate } from '../free-sale.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../free-sale.sample'

describe('HealthSciencesAuthorityFreeSaleTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <HealthSciencesAuthorityFreeSaleTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            Array [
              .c0 {
              background: white;
              position: relative;
              width: 21cm;
              min-height: 29.7cm;
              padding: 2cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('freesale-a4-bg.png');
              z-index: initial;
            }

            .c3 {
              padding-left: calc(96px - 2cm);
              padding-right: calc(96px - 2cm);
              padding-top: calc(252px - 2cm);
            }

            .c4 {
              margin: 0;
              color: #000;
              text-align: center;
              font-family: Times New Roman;
              font-size: 18px;
              font-style: normal;
              font-weight: 700;
              line-height: 150%;
              -webkit-letter-spacing: -0.18px;
              -moz-letter-spacing: -0.18px;
              -ms-letter-spacing: -0.18px;
              letter-spacing: -0.18px;
            }

            .c5 {
              margin: 0;
              color: #000;
              font-family: Times New Roman;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 115%;
              -webkit-letter-spacing: -0.07px;
              -moz-letter-spacing: -0.07px;
              -ms-letter-spacing: -0.07px;
              letter-spacing: -0.07px;
            }

            .c1 {
              margin: 0px;
              color: #000;
              font-family: Times New Roman;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
              line-height: 160%;
              -webkit-letter-spacing: -0.07px;
              -moz-letter-spacing: -0.07px;
              -ms-letter-spacing: -0.07px;
              letter-spacing: -0.07px;
              top: 167px;
              right: 96px;
              position: absolute;
            }

            .c6 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
            }

            .c2 {
              position: absolute;
              right: 94px;
              bottom: 87px;
              color: #000;
              text-align: right;
              font-family: Times New Roman;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 115%;
              -webkit-letter-spacing: -0.07px;
              -moz-letter-spacing: -0.07px;
              -ms-letter-spacing: -0.07px;
              letter-spacing: -0.07px;
            }

            @media print {
              .c0 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
              }
            }

            <div
                className="c0"
              >
                <p
                  className="c1"
                >
                  CERTIFICATE NO:
                  <br />
                  MCEL2300000M
                </p>
                <p
                  className="c2"
                >
                  <span
                    style={
                      Object {
                        "fontWeight": "700",
                      }
                    }
                  >
                    1
                  </span>
                   of
                   
                  <span
                    style={
                      Object {
                        "fontWeight": "700",
                      }
                    }
                  >
                    2
                  </span>
                </p>
                <div
                  className="c3"
                >
                  <p
                    className="c4"
                  >
                    THE MEDICINES ACT 1975
                    <br />
                    CERTIFICATE FOR EXPORTER OF A MEDICINAL PRODUCT
                    <br />
                    (FREE SALE CERTIFICATE)
                  </p>
                  <p
                    className="c5"
                    style={
                      Object {
                        "marginTop": "32px",
                      }
                    }
                  >
                    A certificate is hereby granted under Section 22 of the Medicines Act 1975 for the export of
                     
                    Traditional Medicine
                     listed in the attached Schedule to:
                    <br />
                    SPAIN, INDIA
                    <br />
                    <br />
                    <span
                      style={
                        Object {
                          "fontWeight": "bold",
                        }
                      }
                    >
                      It is hereby certified that the type of medicinal product listed in the Schedule:
                    </span>
                    <br />
                    <br />
                    <span
                      style={
                        Object {
                          "fontWeight": "bold",
                        }
                      }
                    >
                      Manufactured by:
                    </span>
                    <br />
                    Example Company A Pte Ltd
                    <br />
                    123 Canberra, 01-01 Office A, Singapore 123456
                    <br />
                    <br />
                    <span
                      style={
                        Object {
                          "fontWeight": "bold",
                        }
                      }
                    >
                      Distributed by:
                    </span>
                    <br />
                    Example Company B Pte Ltd
                    <br />
                    123 Canberra, 02-02 Office B, Singapore 123457
                    <br />
                    <br />
                    can be freely sold in Singapore without a licence or product registration, subject to compliance with applicable laws.
                    <br />
                    <br />
                    The free sale status of the product stated in the attached Schedule is predicated on the product formula and intended use as specified. The product has not been evaluated by the Health Sciences Authority (HSA) for its safety, efficacy, and quality. The distribution and manufacturing premises of the product have not been assessed by the HSA. The companies named on this certificate are responsible to ensure the safety and quality of the product for use by the consumers. This certificate shall not be construed as an endorsement or approval by the HSA of the product, or any claims made in relation to the product.
                    <br />
                    <br />
                    The information on this certificate and the attached Schedule is accurate on the date of issuance based on the information submitted to the HSA.
                    <br />
                    <br />
                    <br />
                    <br />
                    <span
                      style={
                        Object {
                          "fontWeight": "bold",
                        }
                      }
                    >
                      Date of issue: 
                      01 January 2023
                    </span>
                    <br />
                    <br />
                  </p>
                  <div
                    className="c6"
                  >
                    <p
                      className="c5"
                    >
                      Health Products Regulation Group
                      <br />
                      Health Sciences Authority
                      <br />
                      11 Biopolis Way
                      <br />
                      #11-01, Helios, Singapore 138667
                      <br />
                      Tel: 65-68661111
                      <br />
                      Email: HSA_Certification@hsa.gov.sg
                    </p>
                    <div>
                      <img
                        alt="signature"
                        src="data:image/png;base64,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"
                        style={
                          Object {
                            "height": "48px",
                            "maxWidth": "200px",
                            "width": "auto",
                          }
                        }
                      />
                      <p
                        className="c5"
                      >
                        Regulatory Consultant
                        <br />
                        Audit and Licensing Division
                        <br />
                        For Chief Executive
                        <br />
                        Health Sciences Authority of Singapore
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  alt="HSA stamp"
                  src="hsa-stamp.svg"
                  style={
                    Object {
                      "bottom": "34px",
                      "marginTop": "8px",
                      "position": "absolute",
                      "right": "225px",
                    }
                  }
                />
              </div>,
              .c0 {
              background: white;
              position: relative;
              width: 21cm;
              min-height: 29.7cm;
              padding: 2cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('freesale-a4-bg.png');
              z-index: initial;
            }

            .c3 {
              padding-left: calc(96px - 2cm);
              padding-right: calc(96px - 2cm);
              padding-top: calc(252px - 2cm);
            }

            .c4 {
              margin: 0;
              color: #000;
              text-align: center;
              font-family: Times New Roman;
              font-size: 18px;
              font-style: normal;
              font-weight: 700;
              line-height: 150%;
              -webkit-letter-spacing: -0.18px;
              -moz-letter-spacing: -0.18px;
              -ms-letter-spacing: -0.18px;
              letter-spacing: -0.18px;
            }

            .c5 {
              margin: 0;
              color: #000;
              font-family: Times New Roman;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 115%;
              -webkit-letter-spacing: -0.07px;
              -moz-letter-spacing: -0.07px;
              -ms-letter-spacing: -0.07px;
              letter-spacing: -0.07px;
            }

            .c1 {
              margin: 0px;
              color: #000;
              font-family: Times New Roman;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
              line-height: 160%;
              -webkit-letter-spacing: -0.07px;
              -moz-letter-spacing: -0.07px;
              -ms-letter-spacing: -0.07px;
              letter-spacing: -0.07px;
              top: 167px;
              right: 96px;
              position: absolute;
            }

            .c6 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              gap: 16px;
            }

            .c7 {
              width: 21px;
            }

            .c8 {
              -webkit-box-flex: 1;
              -webkit-flex-grow: 1;
              -ms-flex-positive: 1;
              flex-grow: 1;
            }

            .c2 {
              position: absolute;
              right: 94px;
              bottom: 87px;
              color: #000;
              text-align: right;
              font-family: Times New Roman;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 115%;
              -webkit-letter-spacing: -0.07px;
              -moz-letter-spacing: -0.07px;
              -ms-letter-spacing: -0.07px;
              letter-spacing: -0.07px;
            }

            @media print {
              .c0 {
                border: none;
                -webkit-break-inside: avoid;
                break-inside: avoid;
                -webkit-break-before: always;
                break-before: always;
              }
            }

            <div
                className="c0"
              >
                <p
                  className="c1"
                >
                  CERTIFICATE NO:
                  <br />
                  MCEL2300000M
                </p>
                <p
                  className="c2"
                >
                  <span
                    style={
                      Object {
                        "fontWeight": "700",
                      }
                    }
                  >
                    2
                  </span>
                   of
                   
                  <span
                    style={
                      Object {
                        "fontWeight": "700",
                      }
                    }
                  >
                    2
                  </span>
                </p>
                <div
                  className="c3"
                >
                  <p
                    className="c4"
                  >
                    THE SCHEDULE
                  </p>
                  <p
                    className="c5"
                    style={
                      Object {
                        "marginTop": "32px",
                      }
                    }
                  >
                    <span
                      style={
                        Object {
                          "fontWeight": "bold",
                        }
                      }
                    >
                      Product name in Singapore:
                    </span>
                     
                    Aloe balm body care
                    <br />
                    <br />
                    <span
                      style={
                        Object {
                          "fontWeight": "bold",
                        }
                      }
                    >
                      Brand name in the importing country as declared by the company:
                    </span>
                    <br />
                    Aloe Balm Body Care
                    <br />
                    <br />
                    <span
                      style={
                        Object {
                          "fontWeight": "bold",
                        }
                      }
                    >
                      Intended use:
                    </span>
                     
                    External use on skin
                    <br />
                    <br />
                    <br />
                    <br />
                    <span
                      style={
                        Object {
                          "fontWeight": "bold",
                        }
                      }
                    >
                      Formula:
                    </span>
                    <br />
                    <br />
                  </p>
                  <div
                    style={
                      Object {
                        "width": "440px",
                      }
                    }
                  >
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                        style={
                          Object {
                            "fontWeight": "bold",
                            "textDecoration": "underline",
                          }
                        }
                      >
                        No.
                      </p>
                      <p
                        className="c5 c8"
                        style={
                          Object {
                            "fontWeight": "bold",
                            "textDecoration": "underline",
                          }
                        }
                      >
                        Name of Ingredients
                      </p>
                      <p
                        className="c5"
                        style={
                          Object {
                            "fontWeight": "bold",
                            "textDecoration": "underline",
                          }
                        }
                      >
                        Strength
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        1
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in.
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        2
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient2
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        3
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient3
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        4
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient4
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        5
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient5
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        6
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient6
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        7
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient7
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        8
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient8
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        9
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient9
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        10
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient10
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        11
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient11
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        12
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient12
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        13
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient13
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        14
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient14
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        15
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient15
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        16
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient16
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        17
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient17
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        18
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient18
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        19
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient19
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                    <div
                      className="c6"
                    >
                      <p
                        className="c5 c7"
                      >
                        20
                        .
                      </p>
                      <p
                        className="c5 c8"
                      >
                        Ingredient20
                      </p>
                      <p
                        className="c5"
                      >
                        500mg
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  alt="HSA stamp"
                  src="hsa-stamp.svg"
                  style={
                    Object {
                      "bottom": "34px",
                      "marginTop": "8px",
                      "position": "absolute",
                      "right": "225px",
                    }
                  }
                />
              </div>,
            ]
        `)
    })
})
