import * as React from 'react'
import renderer from 'react-test-renderer'
import { SingaporeFoodAgencyExportHealthCertificateTemplate } from '../export-health-certificate.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../export-health-certificate.sample'

describe('SingaporeFoodAgencyExportHealthCertificateTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <SingaporeFoodAgencyExportHealthCertificateTemplate
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
              padding: 24px;
              min-height: 29.7cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('undefined');
              z-index: initial;
            }

            .c34 {
              display: none;
            }

            .c3 {
              display: block;
            }

            .c2 {
              font-family: Arial;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
              white-space: pre-line;
            }

            .c4 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 0px 8px 6px 8px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 32px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              border: 1px solid #000;
            }

            .c5 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 2px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
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
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c7 {
              width: 191px;
              height: 90px;
            }

            .c8 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 18px;
            }

            .c9 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 0px 8px 8px 8px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              border-right: 1px solid #000;
              border-bottom: 1px solid #000;
              border-left: 1px solid #000;
            }

            .c10 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding-bottom: 12px;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 8px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              font-weight: 700;
            }

            .c11 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 2px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c12 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 0px 30px;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 8px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c13 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 0px 8px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              border-right: 1px solid #000;
              border-bottom: 1px solid #000;
              border-left: 1px solid #000;
            }

            .c14 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              border-right: 1px solid #000;
            }

            .c15 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c16 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 2px 8px 12px 8px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 8px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              border-bottom: 1px solid var(--black,#000);
              border-left: 1px solid var(--black,#000);
              font-size: 11px;
              font-style: normal;
              font-weight: 700;
              line-height: 125%;
            }

            .c17 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c18 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 2px 8px 12px 8px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 8px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              border-bottom: 1px solid var(--black,#000);
              border-left: 1px solid var(--black,#000);
              font-size: 11px;
              font-style: normal;
              font-weight: 400;
              line-height: 125%;
            }

            .c19 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 2px 8px 8px 8px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              border-right: 1px solid #000;
              border-bottom: 1px solid #000;
              border-left: 1px solid #000;
            }

            .c20 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding-top: 12px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 2px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c21 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 0px 8px 8px 8px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              border-right: 1px solid #000;
              border-bottom: 1px solid #000;
              border-left: 1px solid #000;
            }

            .c22 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 2px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c23 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 4px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
            }

            .c24 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 0px 30px;
              -webkit-box-pack: start;
              -webkit-justify-content: flex-start;
              -ms-flex-pack: start;
              justify-content: flex-start;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              gap: 8px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              -webkit-flex: 1 0 0;
              -ms-flex: 1 0 0;
              flex: 1 0 0;
            }

            .c25 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 56px 0px 16px 0px;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 8px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c26 {
              -webkit-flex: 1 0 0;
              -ms-flex: 1 0 0;
              flex: 1 0 0;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c27 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 0px 30px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              -webkit-flex: 1 0 0;
              -ms-flex: 1 0 0;
              flex: 1 0 0;
            }

            .c28 {
              width: auto;
              height: auto;
            }

            .c29 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 16px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              border-top: 1px solid #000;
            }

            .c30 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 0px 8px 8px 8px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              border-right: 1px solid #000;
              border-bottom: 1px solid #000;
              border-left: 1px solid #000;
            }

            .c31 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 24px 0px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              gap: 32px;
              text-align: center;
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              line-height: 150%;
            }

            .c32 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 8px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              gap: 8px;
              border: 1px solid var(--gray-400,#9ca3af);
              background: #fff;
            }

            .c33 {
              max-width: 256px;
              max-height: 256px;
              background-color: #ccc;
            }

            .c35 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 18px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c36 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 0px 22px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c39 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 0px 32px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
            }

            .c37 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 8px;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 2px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              border-right: 1px solid #000;
              border-bottom: 1px solid #000;
              border-left: 1px solid #000;
              font-size: 11px;
              font-style: normal;
              font-weight: 400;
              line-height: 125%;
            }

            .c38 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding-left: 32px;
              -webkit-align-items: flex-start;
              -webkit-box-align: flex-start;
              -ms-flex-align: flex-start;
              align-items: flex-start;
              gap: 8px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              font-size: 12px;
              font-style: normal;
              font-weight: 700;
              line-height: 125%;
            }

            .c40 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              padding: 0px 22px;
              -webkit-box-pack: start;
              -webkit-justify-content: flex-start;
              -ms-flex-pack: start;
              justify-content: flex-start;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              gap: 8px;
              -webkit-align-self: stretch;
              -ms-flex-item-align: stretch;
              align-self: stretch;
              -webkit-flex: 1 0 0;
              -ms-flex: 1 0 0;
              flex: 1 0 0;
            }

            .c0 pre {
              background-color: lightgray;
              overflow-wrap: anywhere;
              white-space: break-spaces;
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
              .c34 {
                display: block;
              }
            }

            @media only screen and (max-width:768px) {
              .c3 {
                display: none;
              }
            }

            <div
              className="c0"
              id="singapore-food-agency-export-health-certificate"
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
                    <div
                      className="c4"
                    >
                      <div
                        className="c5"
                      >
                        <div
                          style={
                            Object {
                              "alignSelf": "stretch",
                              "fontSize": "16px",
                              "fontWeight": "700",
                              "lineHeight": "125%",
                              "textAlign": "right",
                            }
                          }
                        >
                          EH2312287
                        </div>
                        <div
                          className="c6"
                        >
                          <img
                            className="c7"
                            src="sfa_logo.png"
                          />
                          <div
                            className="c8"
                          >
                            <div
                              style={
                                Object {
                                  "fontFamily": "Arial",
                                  "fontSize": "16px",
                                  "fontWeight": "700",
                                  "lineHeight": "150%",
                                }
                              }
                            >
                              Singapore Food Agency
                            </div>
                            52 Jurong Gateway Road #14-01 Singapore 608550
                          </div>
                        </div>
                      </div>
                      <div
                        style={
                          Object {
                            "fontSize": "18px",
                            "fontWeight": "700",
                            "lineHeight": "125%",
                          }
                        }
                      >
                        EXPORT HEALTH CERTIFICATE
                      </div>
                    </div>
                    <div
                      className="c9"
                    >
                      <div
                        className="c10"
                      >
                        <div
                          style={
                            Object {
                              "width": "22px",
                            }
                          }
                        >
                          I.
                        </div>
                        CERTIFYING AGENCY
                      </div>
                      <div
                        className="c11"
                      >
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Exporting Country:
                          </div>
                          SINGAPORE
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Issuing Authority:
                          </div>
                          Singapore Food Agency (SFA)
                        </div>
                      </div>
                    </div>
                    <div
                      className="c13"
                    >
                      <div
                        className="c10"
                      >
                        <div
                          style={
                            Object {
                              "width": "14px",
                            }
                          }
                        >
                          II.
                        </div>
                        IDENTIFICATION OF THE PRODUCTS
                      </div>
                    </div>
                    <div
                      className="c14"
                    >
                      <div
                        className="c15"
                      >
                        <div
                          className="c16"
                          style={
                            Object {
                              "width": "230px",
                            }
                          }
                        >
                          Product Description
                        </div>
                        <div
                          className="c16"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          Brand
                        </div>
                        <div
                          className="c16"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          Product Code/ Batch No./ Lot No.
                        </div>
                        <div
                          className="c16"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          Number & Type of Packages
                        </div>
                        <div
                          className="c16"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          Net weight (Gross Weight)
                        </div>
                        <div
                          className="c16"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          Production Date
                        </div>
                        <div
                          className="c16"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          Expiry Date
                        </div>
                      </div>
                      <div
                        className="c17"
                      >
                        <div
                          className="c18"
                          style={
                            Object {
                              "width": "230px",
                            }
                          }
                        >
                          INSTANT FULL CREAM MILK POWDER
                        </div>
                        <div
                          className="c18"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          AMPEC
                        </div>
                        <div
                          className="c18"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          NIL / REG9466
                        </div>
                        <div
                          className="c18"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          25(KGM) X 999(BAG)
                        </div>
                        <div
                          className="c18"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          24975(KGM
                        </div>
                        <div
                          className="c18"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          19/10/2023
                        </div>
                        <div
                          className="c18"
                          style={
                            Object {
                              "flex": "1 0 0",
                            }
                          }
                        >
                          19/10/2025
                        </div>
                      </div>
                    </div>
                    <div
                      className="c19"
                    >
                      <div
                        className="c20"
                      >
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Means of Transport:
                          </div>
                          SEA
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Vessel Name/Flight Number:
                          </div>
                          RITA V. 043N
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Container No.:
                          </div>
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Seal No.:
                          </div>
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            ETD:
                          </div>
                          05/11/2023
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Place of Dispatch:
                          </div>
                          Singapore
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Shipping Marks:
                          </div>
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Remarks:
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="c21"
                    >
                      <div
                        className="c10"
                      >
                        <div
                          style={
                            Object {
                              "width": "22px",
                            }
                          }
                        >
                          III.
                        </div>
                        ORIGIN AND PROVENENCE OF THE PRODUCTS
                      </div>
                      <div
                        className="c22"
                      >
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Name and Address of
                            <br />
                            Manufacturer:
                          </div>
                          PHILIPINES
            NO 21 TUAS AVE 12
            SINGAPORE 639040
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Processing Premise Licence No.:
                          </div>
                          PL02G1661
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Name and Address of Consignor:
                          </div>
                          CONSIGNORXXX INDUSTRIES INTERNATIONAL PTE LTD
            1 PIONEER SECTOR WALK
            SINGAPORE 627896
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Date of inspection:
                          </div>
                          01/11/2023
                        </div>
                      </div>
                    </div>
                    <div
                      className="c21"
                    >
                      <div
                        className="c10"
                      >
                        <div
                          style={
                            Object {
                              "width": "22px",
                            }
                          }
                        >
                          IV.
                        </div>
                        DESTINATION OF THE PRODUCTS
                      </div>
                      <div
                        className="c22"
                      >
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Country/Region of Destination:
                          </div>
                          PHILIPINES
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Name and Address of Consignee:
                          </div>
                          CONSIGNEEXXX TRADING CORPORATION
            711 ELCANO STREET, SAN NICOLAS MANILA 1006
            PHILIPPINES
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Import Permit No.:
                          </div>
                        </div>
                        <div
                          className="c12"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                                "width": "192px",
                              }
                            }
                          >
                            Purpose:
                          </div>
                          HUMAN CONSUMPTION
                        </div>
                      </div>
                    </div>
                    <div
                      className="c21"
                    >
                      <div
                        className="c10"
                      >
                        <div
                          style={
                            Object {
                              "width": "22px",
                            }
                          }
                        >
                          V.
                        </div>
                        ATTESTATION
                      </div>
                      <div
                        className="c23"
                      >
                        <div
                          className="c24"
                        >
                          I, the undersigned, certify that:
                          <br />
                          <br />
                        </div>
                      </div>
                      <div
                        className="c23"
                        style={
                          Object {
                            "paddingBottom": "8px",
                          }
                        }
                      >
                        <div
                          className="c24"
                        >
                          the consignment is found to be fit for human consumption based on the laboratory analysis of the above-mentioned consignment.
                          <br />
                          On analysis, the following results were obtained:-
                          <br />
                          &lt;Laboratory results&gt;
                          <br />
                          D.L. = Detection Limit
                          <br />
                          Note: '&lt; denotes less than
                          <br />
                          <br />
                          I have examined the manufacturer's declaration and has no reason to doubt the truth of any particular in the declaration. (If endorsement for manufacturer's declaration button is checked)
                          <br />
                        </div>
                      </div>
                    </div>
                    <div
                      className="c21"
                    >
                      <div
                        className="c12"
                      >
                        <div
                          style={
                            Object {
                              "fontWeight": "700",
                              "width": "192px",
                            }
                          }
                        >
                          Issued in Singapore on:
                        </div>
                        31/10/2023
                      </div>
                      <div
                        className="c24"
                        style={
                          Object {
                            "paddingTop": "24px",
                          }
                        }
                      >
                        This certificate is only valid for 12 months. Amendment to this certificate and photo copy of this certificate are not valid unless countersigned by an authorised officer of Singapore Food Agency.
                      </div>
                      <div
                        className="c25"
                      >
                        <div
                          className="c26"
                        />
                        <div
                          className="c27"
                        >
                          <img
                            className="c28"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAtCAMAAABS+V+kAAAA21BMVEX////9/f3////9/f34+Pj7+/v8/Pz29/bz8/PDw8M9PT319fXp6elXV1f6+vrn5+dFRUXk5OScnJySkpJPT0/f39/s7Oy+vr6WlpaFhYVcXFyampqOjo5kZGRMTEy6urqsrKympqZUVFTu7u7b29vX2NfNzc28vLy4uLiioqKfn59fX1+zs7Ovr6+pqqmjo6OKiopnZ2dJSUnQ0dDKysrFxcXAwMC1tbVzc3NxcXAsLCzHx8d+fn5ra2tCQkLw8PDr6+vU1NSBgoFtbW03NzewsLB4eHh1dXUzMzOL5qoYAAAAAnRSTlOAgKCo1lMAAAN3SURBVFjD3ZbnztowFIZpju3svRMS9t57882O+7+iQsLXQKu2P4Kp1FdE4ljID+8ZjgsFhoYAflm4XSpQAQOkoBtdh9TA588tCAhNxxkG41vHuNnWr0JKYAC25M0VyGIQw3WTvmNAvGyV2QzMoLpvPMLxfCN7L+jKsei+7ljqjkGfvHe5mxqzzZKOrxZygpO9U0D6JDuT3eG41+ECvvwEnfzfy3E2rxcqJHxS/7p9rSdL2fhm9u8ExkRR0Fns6VHImS6Nv0U2EHIhZUm5ExgIVpA6mzdblW6nYoSdYYlv1AC48nFaQqytpoOcHSZ3SDUAYFYtef74y+EQBVUrmAS9qiYIcvjsDLXpgJOGmxWqLV9YyJTjyMxSV+O7ezmW1/tiaJpGp9wf9Ct+vH1fV4qW1pHwwJJ51JYnIxsBJLXA93hJENWI48l4sLAlFiNECAHASOX7Zc/ayv2as6pW2+oi+KYdN23HHvm+X3FtkeQGI35qlRschosQYtV5t8iL+ngbLEWYRZOWyEea6b5qWiRrwcQ6akHYUHKDXWGiKxgTQjA+WXUHZdP/YtSlYVwtsQD2iBehWezquG5Y29hs7VbFr1bPRXnB0IiEtWcYo1HHDL3xRt4bndVCqo2EuCSeM8AhAE7igCGnZnCf4BSp/Geb5G0uEPm1Jq+/VOVesNmPfXOnP2EQP8taRYRURMEIp3VQLj19DnOA03lEdqvVnA/bLb5Zl57F877KIp5WHDi3mfSy6IfFsDP7mKZ0FO5zA0kySiAb7GUgFFUCADPva2AJ71Pr6NVuh/cu4FsHgHayYKiJr0bFM01z1C+bLsdQAF9f3+CpFAnj5/SVITqS3V4tV+VhA1EA32yJFrJQtD+qCYiPrF4sBC6ikerr+xQfpfW9ND1udEzD87v1lEoNLBmaEKoAH2AGCOIQy7HnmKJj7rNQ7UrZhSNV8iXl0gHDc7lntRJu6pjTHfIBTrhUwACqMZ1WWPjRcNh9bbNXPEpgLPnaW9/JuIzihk2WyUQHDHXv/e3lCa7PcUfngLZjsA/CZgZXHPj5QkkDDKjhbyNd+f25cn9w0rPs/CC8LYF5KBiAYdtVzdSVh4O5UjUeOr8tJzUw1+r1BrW/YCk0F1r23ngOHg4GZ1CciQD/wLHkkD9TKYFzmc3ANPTfOc7NZT4VCue//3gVvgPWp21JK5fMYQAAAABJRU5ErkJggg=="
                          />
                          <div
                            className="c29"
                          >
                            Mr LIM TONG PENG
                            <div>
                              Singapore Food Agency
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="c30"
                    >
                      <div
                        className="c31"
                      >
                        Present QR code for official authority to scan for verification
                        <div
                          className="c32"
                        >
                          <div
                            className="c33"
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
                                d="M0 0h7v1H0zM9 0h1v1H9zM14,0 h7v1H14zM0 1h1v1H0zM6 1h1v1H6zM10 1h2v1H10zM14 1h1v1H14zM20,1 h1v1H20zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h5v1H8zM14 2h1v1H14zM16 2h3v1H16zM20,2 h1v1H20zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h3v1H8zM12 3h1v1H12zM14 3h1v1H14zM16 3h3v1H16zM20,3 h1v1H20zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h3v1H9zM14 4h1v1H14zM16 4h3v1H16zM20,4 h1v1H20zM0 5h1v1H0zM6 5h1v1H6zM9 5h1v1H9zM11 5h2v1H11zM14 5h1v1H14zM20,5 h1v1H20zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14,6 h7v1H14zM3 8h2v1H3zM6 8h2v1H6zM12 8h1v1H12zM17 8h2v1H17zM0 9h2v1H0zM5 9h1v1H5zM7 9h2v1H7zM11 9h2v1H11zM15 9h3v1H15zM19,9 h2v1H19zM0 10h2v1H0zM5 10h4v1H5zM12 10h4v1H12zM17 10h1v1H17zM20,10 h1v1H20zM1 11h1v1H1zM3 11h2v1H3zM8 11h4v1H8zM15 11h2v1H15zM19 11h1v1H19zM0 12h1v1H0zM2 12h2v1H2zM6 12h1v1H6zM8 12h1v1H8zM14,12 h7v1H14zM8 13h2v1H8zM13 13h1v1H13zM18,13 h3v1H18zM0 14h7v1H0zM8 14h3v1H8zM13 14h2v1H13zM17 14h2v1H17zM20,14 h1v1H20zM0 15h1v1H0zM6 15h1v1H6zM9 15h3v1H9zM13 15h2v1H13zM18 15h1v1H18zM0 16h1v1H0zM2 16h3v1H2zM6 16h1v1H6zM8 16h2v1H8zM11 16h1v1H11zM14 16h1v1H14zM16 16h1v1H16zM18 16h2v1H18zM0 17h1v1H0zM2 17h3v1H2zM6 17h1v1H6zM8 17h2v1H8zM12 17h1v1H12zM15 17h2v1H15zM0 18h1v1H0zM2 18h3v1H2zM6 18h1v1H6zM9 18h1v1H9zM11 18h2v1H11zM15 18h3v1H15zM19,18 h2v1H19zM0 19h1v1H0zM6 19h1v1H6zM13 19h1v1H13zM15 19h1v1H15zM17 19h1v1H17zM19,19 h2v1H19zM0 20h7v1H0zM10 20h3v1H10zM14 20h3v1H14zM18 20h2v1H18z"
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
                    className="c34"
                  >
                    <div
                      className="c4"
                    >
                      <div
                        className="c5"
                      >
                        <div
                          style={
                            Object {
                              "alignSelf": "stretch",
                              "fontSize": "16px",
                              "fontWeight": "700",
                              "lineHeight": "125%",
                              "textAlign": "right",
                            }
                          }
                        >
                          EH2312287
                        </div>
                        <div
                          className="c35"
                        >
                          <img
                            className="c7"
                            src="sfa_logo.png"
                          />
                          <div
                            className="c8"
                          >
                            <div
                              style={
                                Object {
                                  "fontFamily": "Arial",
                                  "fontSize": "16px",
                                  "fontWeight": "700",
                                  "lineHeight": "150%",
                                }
                              }
                            >
                              Singapore Food Agency
                            </div>
                            52 Jurong Gateway Road #14-01 Singapore 608550
                          </div>
                        </div>
                      </div>
                      <div
                        style={
                          Object {
                            "fontSize": "18px",
                            "fontWeight": "700",
                            "lineHeight": "125%",
                          }
                        }
                      >
                        EXPORT HEALTH CERTIFICATE
                      </div>
                    </div>
                    <div
                      className="c9"
                    >
                      <div
                        className="c10"
                      >
                        <div
                          style={
                            Object {
                              "width": "14px",
                            }
                          }
                        >
                          I.
                        </div>
                        CERTIFYING AGENCY
                      </div>
                      <div
                        className="c11"
                      >
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Exporting Country:
                          </div>
                          SINGAPORE
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Issuing Authority:
                          </div>
                          Singapore Food Agency (SFA)
                        </div>
                      </div>
                    </div>
                    <div
                      className="c13"
                    >
                      <div
                        className="c10"
                      >
                        <div
                          style={
                            Object {
                              "width": "14px",
                            }
                          }
                        >
                          II.
                        </div>
                        IDENTIFICATION OF THE PRODUCTS
                      </div>
                    </div>
                    <div
                      className="c37"
                    >
                      <div
                        className="c38"
                      >
                        ITEM 
                        1
                      </div>
                      <div
                        className="c39"
                      >
                        <div
                          style={
                            Object {
                              "fontWeight": "700",
                            }
                          }
                        >
                          Product Description
                        </div>
                        INSTANT FULL CREAM MILK POWDER
                      </div>
                      <div
                        className="c39"
                      >
                        <div
                          style={
                            Object {
                              "fontWeight": "700",
                            }
                          }
                        >
                          Brand
                        </div>
                        AMPEC
                      </div>
                      <div
                        className="c39"
                      >
                        <div
                          style={
                            Object {
                              "fontWeight": "700",
                            }
                          }
                        >
                          Product Code/ Batch No./ Lot No.
                        </div>
                        NIL / REG9466
                      </div>
                      <div
                        className="c39"
                      >
                        <div
                          style={
                            Object {
                              "fontWeight": "700",
                            }
                          }
                        >
                          Number & Type of Packages
                        </div>
                        25(KGM) X 999(BAG)
                      </div>
                      <div
                        className="c39"
                      >
                        <div
                          style={
                            Object {
                              "fontWeight": "700",
                            }
                          }
                        >
                          Net weight (Gross Weight)
                        </div>
                        24975(KGM
                      </div>
                      <div
                        className="c39"
                      >
                        <div
                          style={
                            Object {
                              "fontWeight": "700",
                            }
                          }
                        >
                          Production Date
                        </div>
                        19/10/2023
                      </div>
                      <div
                        className="c39"
                      >
                        <div
                          style={
                            Object {
                              "fontWeight": "700",
                            }
                          }
                        >
                          Expiry Date
                        </div>
                        19/10/2025
                      </div>
                    </div>
                    <div
                      className="c19"
                    >
                      <div
                        className="c20"
                      >
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Means of Transport:
                          </div>
                          SEA
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Vessel Name/Flight Number:
                          </div>
                          RITA V. 043N
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Container No.:
                          </div>
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Seal No.:
                          </div>
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            ETD:
                          </div>
                          05/11/2023
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Place of Dispatch:
                          </div>
                          Singapore
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Shipping Marks:
                          </div>
                          <br />
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Remarks:
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div
                      className="c21"
                    >
                      <div
                        className="c10"
                      >
                        <div
                          style={
                            Object {
                              "width": "14px",
                            }
                          }
                        >
                          III.
                        </div>
                        ORIGIN AND PROVENENCE OF THE PRODUCTS
                      </div>
                      <div
                        className="c22"
                      >
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Name and Address of Manufacturer:
                          </div>
                          PHILIPINES
            NO 21 TUAS AVE 12
            SINGAPORE 639040
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Processing Premise Licence No.:
                          </div>
                          PL02G1661
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Name and Address of Consignor:
                          </div>
                          CONSIGNORXXX INDUSTRIES INTERNATIONAL PTE LTD
            1 PIONEER SECTOR WALK
            SINGAPORE 627896
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Date of inspection:
                          </div>
                          01/11/2023
                          01/11/2023
                        </div>
                      </div>
                    </div>
                    <div
                      className="c21"
                    >
                      <div
                        className="c10"
                      >
                        <div
                          style={
                            Object {
                              "width": "14px",
                            }
                          }
                        >
                          IV.
                        </div>
                        DESTINATION OF THE PRODUCTS
                      </div>
                      <div
                        className="c22"
                      >
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Country/Region of Destination:
                          </div>
                          PHILIPINES
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Name and Address of Consignee:
                          </div>
                          CONSIGNEEXXX TRADING CORPORATION
            711 ELCANO STREET, SAN NICOLAS MANILA 1006
            PHILIPPINES
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Import Permit No.:
                          </div>
                          <br />
                        </div>
                        <div
                          className="c36"
                        >
                          <div
                            style={
                              Object {
                                "fontWeight": "700",
                              }
                            }
                          >
                            Purpose:
                          </div>
                          HUMAN CONSUMPTION
                        </div>
                      </div>
                    </div>
                    <div
                      className="c21"
                    >
                      <div
                        className="c10"
                      >
                        <div
                          style={
                            Object {
                              "width": "14px",
                            }
                          }
                        >
                          V.
                        </div>
                        ATTESTATION
                      </div>
                      <div
                        className="c23"
                      >
                        <div
                          className="c40"
                        >
                          I, the undersigned, certify that:
                          <br />
                          <br />
                        </div>
                      </div>
                      <div
                        className="c23"
                        style={
                          Object {
                            "paddingBottom": "8px",
                          }
                        }
                      >
                        <div
                          className="c40"
                        >
                          the consignment is found to be fit for human consumption based on the laboratory analysis of the above-mentioned consignment.
                          <br />
                          On analysis, the following results were obtained:-
                          <br />
                          &lt;Laboratory results&gt;
                          <br />
                          D.L. = Detection Limit
                          <br />
                          Note: '&lt; denotes less than
                          <br />
                          <br />
                          I have examined the manufacturer's declaration and has no reason to doubt the truth of any particular in the declaration. (If endorsement for manufacturer's declaration button is checked)
                          <br />
                        </div>
                      </div>
                    </div>
                    <div
                      className="c21"
                    >
                      <div
                        className="c36"
                      >
                        <div
                          style={
                            Object {
                              "fontWeight": "700",
                            }
                          }
                        >
                          Issued in Singapore on:
                        </div>
                        31/10/2023
                      </div>
                      <div
                        className="c40"
                        style={
                          Object {
                            "paddingTop": "24px",
                          }
                        }
                      >
                        This certificate is only valid for 12 months. Amendment to this certificate and photo copy of this certificate are not valid unless countersigned by an authorised officer of Singapore Food Agency.
                      </div>
                      <div
                        className="c25"
                      >
                        <div
                          className="c27"
                        >
                          <img
                            className="c28"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAtCAMAAABS+V+kAAAA21BMVEX////9/f3////9/f34+Pj7+/v8/Pz29/bz8/PDw8M9PT319fXp6elXV1f6+vrn5+dFRUXk5OScnJySkpJPT0/f39/s7Oy+vr6WlpaFhYVcXFyampqOjo5kZGRMTEy6urqsrKympqZUVFTu7u7b29vX2NfNzc28vLy4uLiioqKfn59fX1+zs7Ovr6+pqqmjo6OKiopnZ2dJSUnQ0dDKysrFxcXAwMC1tbVzc3NxcXAsLCzHx8d+fn5ra2tCQkLw8PDr6+vU1NSBgoFtbW03NzewsLB4eHh1dXUzMzOL5qoYAAAAAnRSTlOAgKCo1lMAAAN3SURBVFjD3ZbnztowFIZpju3svRMS9t57882O+7+iQsLXQKu2P4Kp1FdE4ljID+8ZjgsFhoYAflm4XSpQAQOkoBtdh9TA588tCAhNxxkG41vHuNnWr0JKYAC25M0VyGIQw3WTvmNAvGyV2QzMoLpvPMLxfCN7L+jKsei+7ljqjkGfvHe5mxqzzZKOrxZygpO9U0D6JDuT3eG41+ECvvwEnfzfy3E2rxcqJHxS/7p9rSdL2fhm9u8ExkRR0Fns6VHImS6Nv0U2EHIhZUm5ExgIVpA6mzdblW6nYoSdYYlv1AC48nFaQqytpoOcHSZ3SDUAYFYtef74y+EQBVUrmAS9qiYIcvjsDLXpgJOGmxWqLV9YyJTjyMxSV+O7ezmW1/tiaJpGp9wf9Ct+vH1fV4qW1pHwwJJ51JYnIxsBJLXA93hJENWI48l4sLAlFiNECAHASOX7Zc/ayv2as6pW2+oi+KYdN23HHvm+X3FtkeQGI35qlRschosQYtV5t8iL+ngbLEWYRZOWyEea6b5qWiRrwcQ6akHYUHKDXWGiKxgTQjA+WXUHZdP/YtSlYVwtsQD2iBehWezquG5Y29hs7VbFr1bPRXnB0IiEtWcYo1HHDL3xRt4bndVCqo2EuCSeM8AhAE7igCGnZnCf4BSp/Geb5G0uEPm1Jq+/VOVesNmPfXOnP2EQP8taRYRURMEIp3VQLj19DnOA03lEdqvVnA/bLb5Zl57F877KIp5WHDi3mfSy6IfFsDP7mKZ0FO5zA0kySiAb7GUgFFUCADPva2AJ71Pr6NVuh/cu4FsHgHayYKiJr0bFM01z1C+bLsdQAF9f3+CpFAnj5/SVITqS3V4tV+VhA1EA32yJFrJQtD+qCYiPrF4sBC6ikerr+xQfpfW9ND1udEzD87v1lEoNLBmaEKoAH2AGCOIQy7HnmKJj7rNQ7UrZhSNV8iXl0gHDc7lntRJu6pjTHfIBTrhUwACqMZ1WWPjRcNh9bbNXPEpgLPnaW9/JuIzihk2WyUQHDHXv/e3lCa7PcUfngLZjsA/CZgZXHPj5QkkDDKjhbyNd+f25cn9w0rPs/CC8LYF5KBiAYdtVzdSVh4O5UjUeOr8tJzUw1+r1BrW/YCk0F1r23ngOHg4GZ1CciQD/wLHkkD9TKYFzmc3ANPTfOc7NZT4VCue//3gVvgPWp21JK5fMYQAAAABJRU5ErkJggg=="
                          />
                          <div
                            className="c29"
                          >
                            Mr LIM TONG PENG
                            <div>
                              Singapore Food Agency
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="c30"
                    >
                      <div
                        className="c31"
                      >
                        Present QR code for official authority to scan for verification
                        <div
                          className="c32"
                        >
                          <div
                            className="c33"
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
                                d="M0 0h7v1H0zM9 0h1v1H9zM14,0 h7v1H14zM0 1h1v1H0zM6 1h1v1H6zM10 1h2v1H10zM14 1h1v1H14zM20,1 h1v1H20zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h5v1H8zM14 2h1v1H14zM16 2h3v1H16zM20,2 h1v1H20zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h3v1H8zM12 3h1v1H12zM14 3h1v1H14zM16 3h3v1H16zM20,3 h1v1H20zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h3v1H9zM14 4h1v1H14zM16 4h3v1H16zM20,4 h1v1H20zM0 5h1v1H0zM6 5h1v1H6zM9 5h1v1H9zM11 5h2v1H11zM14 5h1v1H14zM20,5 h1v1H20zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14,6 h7v1H14zM3 8h2v1H3zM6 8h2v1H6zM12 8h1v1H12zM17 8h2v1H17zM0 9h2v1H0zM5 9h1v1H5zM7 9h2v1H7zM11 9h2v1H11zM15 9h3v1H15zM19,9 h2v1H19zM0 10h2v1H0zM5 10h4v1H5zM12 10h4v1H12zM17 10h1v1H17zM20,10 h1v1H20zM1 11h1v1H1zM3 11h2v1H3zM8 11h4v1H8zM15 11h2v1H15zM19 11h1v1H19zM0 12h1v1H0zM2 12h2v1H2zM6 12h1v1H6zM8 12h1v1H8zM14,12 h7v1H14zM8 13h2v1H8zM13 13h1v1H13zM18,13 h3v1H18zM0 14h7v1H0zM8 14h3v1H8zM13 14h2v1H13zM17 14h2v1H17zM20,14 h1v1H20zM0 15h1v1H0zM6 15h1v1H6zM9 15h3v1H9zM13 15h2v1H13zM18 15h1v1H18zM0 16h1v1H0zM2 16h3v1H2zM6 16h1v1H6zM8 16h2v1H8zM11 16h1v1H11zM14 16h1v1H14zM16 16h1v1H16zM18 16h2v1H18zM0 17h1v1H0zM2 17h3v1H2zM6 17h1v1H6zM8 17h2v1H8zM12 17h1v1H12zM15 17h2v1H15zM0 18h1v1H0zM2 18h3v1H2zM6 18h1v1H6zM9 18h1v1H9zM11 18h2v1H11zM15 18h3v1H15zM19,18 h2v1H19zM0 19h1v1H0zM6 19h1v1H6zM13 19h1v1H13zM15 19h1v1H15zM17 19h1v1H17zM19,19 h2v1H19zM0 20h7v1H0zM10 20h3v1H10zM14 20h3v1H14zM18 20h2v1H18z"
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
              </div>
            </div>
        `)
    })
})
