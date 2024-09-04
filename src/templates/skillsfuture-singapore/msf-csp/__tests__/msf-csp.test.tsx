import * as React from 'react'
import renderer from 'react-test-renderer'
import { SkillsfutureSingaporeMsfCspTemplate } from '../msf-csp.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../msf-csp.sample'

describe('SkillsfutureSingaporeMsfCspTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <SkillsfutureSingaporeMsfCspTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c0 {
              font-family: 'Work Sans';
              font-size: 14px;
              font-weight: 400;
              line-height: 24px;
            }

            .c1 {
              font-family: 'Work Sans';
              color: #151515;
              font-weight: 700;
              font-size: 28px;
              line-height: 36px;
            }

            .c4 {
              font-family: 'Work Sans';
              color: #151515;
              font-weight: 600;
              font-size: 20px;
              line-height: 28px;
            }

            .c3 {
              font-family: 'Work Sans';
              font-weight: 600;
              font-size: 14px;
              line-height: 20px;
            }

            .c2 {
              font-family: 'Work Sans';
              color: #4c4c4c;
              font-weight: 400;
              font-size: 12px;
              line-height: 16px;
            }

            .c5 {
              color: #373737;
            }

            .c6 {
              color: #676767;
            }

            <div
              className="c0"
            >
              <div
                className="relative bg-white border border-solid border-slate-200 max-w-[21cm] min-h-[29.7cm]  my-0 mx-auto print:border-none"
              >
                <div
                  className="p-4 md:px-16 md:py-6"
                >
                  <img
                    alt="MySkillsFuture Logo"
                    src="bg-msf-logo.png"
                    style={
                      Object {
                        "left": "50%",
                        "maxWidth": "20cm",
                        "position": "fixed",
                        "top": "50%",
                        "transform": "translate(-50%,-50%)",
                        "width": "94%",
                      }
                    }
                  />
                  <div
                    className="flex flex-col gap-8 pb-20 print:pb-0 relative"
                  >
                    <div
                      className="flex flex-row justify-between flex-wrap"
                    >
                      <div
                        className="flex flex-col"
                      >
                        <img
                          alt="MySkillsFuture Logo"
                          src="msf-logo.png"
                          style={
                            Object {
                              "height": "51px",
                              "width": "151px",
                            }
                          }
                        />
                        <div
                          className="c1"
                        >
                          Careers & Skills Passport
                        </div>
                        <div
                          className="c2"
                        >
                          Issued on 
                          13 May 2025
                          <br />
                          Expires on 
                          26 May 2025
                        </div>
                        <div
                          className="flex flex-row pt-1 pb-4 gap-x-2 items-center flex-wrap"
                        >
                          <div
                            className="c3"
                          >
                            Stella Tan Jia Xin
                          </div>
                          <div
                            className="flex flex-row items-center gap-1 rounded-[8px] px-2 py-1 w-[88px] h-[20px] bg-[#D7FFD7] text-[#007C34] leading-4"
                          >
                            <div
                              className="pt-0.5"
                            >
                              <img
                                alt="Verified icon"
                                src="icon-shield-checkmark.png"
                                style={
                                  Object {
                                    "height": "16px",
                                    "width": "16px",
                                  }
                                }
                              />
                            </div>
                            <div
                              className="text-xs font-semibold tracking-[0.10em]"
                            >
                              VERIFIED
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex flex-col"
                      >
                        <div
                          className="flex flex-row justify-center"
                        >
                          <div
                            className="flex flex-col items-center p-0 md:p-3"
                          >
                            <svg
                              height={150}
                              viewBox="0 0 25 25"
                              width={150}
                            >
                              <path
                                d="M0,0 h25v25H0z"
                                fill="#FFFFFF"
                                shapeRendering="crispEdges"
                              />
                              <path
                                d="M0 0h7v1H0zM9 0h1v1H9zM11 0h1v1H11zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM11 1h1v1H11zM15 1h2v1H15zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h2v1H8zM11 2h1v1H11zM15 2h1v1H15zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM11 3h5v1H11zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM12 4h1v1H12zM14 4h1v1H14zM16 4h1v1H16zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM15 5h1v1H15zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM8 7h1v1H8zM11 7h2v1H11zM14 7h2v1H14zM0 8h1v1H0zM2 8h5v1H2zM9 8h1v1H9zM12 8h4v1H12zM18 8h5v1H18zM3 9h1v1H3zM5 9h1v1H5zM8 9h2v1H8zM12 9h1v1H12zM19 9h1v1H19zM21 9h2v1H21zM1 10h4v1H1zM6 10h3v1H6zM11 10h2v1H11zM15 10h3v1H15zM19 10h2v1H19zM23,10 h2v1H23zM3 11h1v1H3zM8 11h1v1H8zM11 11h1v1H11zM14 11h1v1H14zM17 11h1v1H17zM24,11 h1v1H24zM1 12h4v1H1zM6 12h1v1H6zM8 12h1v1H8zM12 12h7v1H12zM20 12h1v1H20zM22 12h1v1H22zM0 13h4v1H0zM7 13h4v1H7zM13 13h1v1H13zM16 13h1v1H16zM19 13h1v1H19zM21 13h1v1H21zM0 14h1v1H0zM2 14h1v1H2zM4 14h1v1H4zM6 14h2v1H6zM9 14h4v1H9zM14 14h5v1H14zM22,14 h3v1H22zM0 15h1v1H0zM3 15h2v1H3zM8 15h1v1H8zM11 15h1v1H11zM14 15h2v1H14zM18 15h1v1H18zM21 15h1v1H21zM24,15 h1v1H24zM0 16h1v1H0zM3 16h2v1H3zM6 16h1v1H6zM10 16h5v1H10zM16,16 h9v1H16zM8 17h1v1H8zM12 17h1v1H12zM14 17h3v1H14zM20 17h2v1H20zM23,17 h2v1H23zM0 18h7v1H0zM10 18h1v1H10zM12 18h1v1H12zM16 18h1v1H16zM18 18h1v1H18zM20 18h2v1H20zM23,18 h2v1H23zM0 19h1v1H0zM6 19h1v1H6zM8 19h1v1H8zM11 19h1v1H11zM16 19h1v1H16zM20 19h1v1H20zM23,19 h2v1H23zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM8 20h2v1H8zM11 20h10v1H11zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h2v1H8zM11 21h3v1H11zM15 21h1v1H15zM17 21h2v1H17zM20 21h2v1H20zM23,21 h2v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM8 22h2v1H8zM14 22h2v1H14zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM10 23h1v1H10zM15 23h4v1H15zM20 23h1v1H20zM24,23 h1v1H24zM0 24h7v1H0zM8 24h1v1H8zM10 24h1v1H10zM12 24h4v1H12zM17 24h2v1H17zM23,24 h2v1H23z"
                                fill="#000000"
                                shapeRendering="crispEdges"
                              />
                            </svg>
                            <div
                              className="c0"
                            >
                              <div
                                className="text-[#373737]"
                              >
                                Scan to verify
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col gap-4 break-inside-avoid"
                    >
                      <div
                        className="flex flex-col break-inside-avoid"
                      >
                        <div
                          className="c4"
                        >
                          Top certified skills
                        </div>
                        <div
                          className="h-px bg-[#C6C6C6]"
                        />
                      </div>
                      <div
                        className="flex flex-row gap-3 flex-wrap"
                      >
                        <a
                          data-tooltip-id="tooltip-perform industrial audiometric screening"
                        >
                          <div
                            className="flex flex-row items-center gap-1 rounded-full px-3 py-1 max-w-[256px] bg-[#F0F3FF] text-[#2A51FE] leading-5"
                          >
                            <img
                              alt="Checkmark icon"
                              src="icon-circle-check.png"
                              style={
                                Object {
                                  "height": "16px",
                                  "width": "16px",
                                }
                              }
                            />
                            <div
                              className="text-ellipsis overflow-hidden min-[320px]:text-nowrap"
                            >
                              perform industrial audiometric screening
                            </div>
                          </div>
                        </a>
                        <a
                          data-tooltip-id="tooltip-Communications channel management"
                        >
                          <div
                            className="flex flex-row items-center gap-1 rounded-full px-3 py-1 max-w-[256px] bg-[#F0F3FF] text-[#2A51FE] leading-5"
                          >
                            <img
                              alt="Checkmark icon"
                              src="icon-circle-check.png"
                              style={
                                Object {
                                  "height": "16px",
                                  "width": "16px",
                                }
                              }
                            />
                            <div
                              className="text-ellipsis overflow-hidden min-[320px]:text-nowrap"
                            >
                              Communications channel management
                            </div>
                          </div>
                        </a>
                        <a
                          data-tooltip-id="tooltip-Customer loyalty management"
                        >
                          <div
                            className="flex flex-row items-center gap-1 rounded-full px-3 py-1 max-w-[256px] bg-[#F0F3FF] text-[#2A51FE] leading-5"
                          >
                            <img
                              alt="Checkmark icon"
                              src="icon-circle-check.png"
                              style={
                                Object {
                                  "height": "16px",
                                  "width": "16px",
                                }
                              }
                            />
                            <div
                              className="text-ellipsis overflow-hidden min-[320px]:text-nowrap"
                            >
                              Customer loyalty management
                            </div>
                          </div>
                        </a>
                        <a
                          data-tooltip-id="tooltip-meetings, incentives, conferences an..."
                        >
                          <div
                            className="flex flex-row items-center gap-1 rounded-full px-3 py-1 max-w-[256px] bg-[#F0F3FF] text-[#2A51FE] leading-5"
                          >
                            <img
                              alt="Checkmark icon"
                              src="icon-circle-check.png"
                              style={
                                Object {
                                  "height": "16px",
                                  "width": "16px",
                                }
                              }
                            />
                            <div
                              className="text-ellipsis overflow-hidden min-[320px]:text-nowrap"
                            >
                              meetings, incentives, conferences an...
                            </div>
                          </div>
                        </a>
                        <a
                          data-tooltip-id="tooltip-perform industrial audiometric screening"
                        >
                          <div
                            className="flex flex-row items-center gap-1 rounded-full px-3 py-1 max-w-[256px] bg-[#F0F3FF] text-[#2A51FE] leading-5"
                          >
                            <img
                              alt="Checkmark icon"
                              src="icon-circle-check.png"
                              style={
                                Object {
                                  "height": "16px",
                                  "width": "16px",
                                }
                              }
                            />
                            <div
                              className="text-ellipsis overflow-hidden min-[320px]:text-nowrap"
                            >
                              perform industrial audiometric screening
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      className="flex flex-col gap-4"
                    >
                      <div
                        className="flex flex-col break-inside-avoid"
                      >
                        <div
                          className="c4"
                        >
                          Employment history
                        </div>
                        <div
                          className="h-px bg-[#C6C6C6]"
                        />
                      </div>
                      <div
                        className="flex flex-col gap-6"
                      >
                        <div
                          className="flex flex-col break-inside-avoid"
                        >
                          <div
                            className="c5"
                          >
                            <b>
                              Marketing Manager (Senior Marketing Manager)
                            </b>
                             at 
                            Equinet Academy
                          </div>
                          <div
                            className="flex flex-row gap-x-2 flex-wrap items-center"
                          >
                            <div
                              className="c6"
                            >
                              Jan 2015 - Present (8 years 8 months)
                            </div>
                            <div
                              className="flex flex-row items-center gap-1 rounded-[8px] px-2 py-1 w-[88px] h-[20px] bg-[#D7FFD7] text-[#007C34] leading-4"
                            >
                              <div
                                className="pt-0.5"
                              >
                                <img
                                  alt="Verified icon"
                                  src="icon-shield-checkmark.png"
                                  style={
                                    Object {
                                      "height": "16px",
                                      "width": "16px",
                                    }
                                  }
                                />
                              </div>
                              <div
                                className="text-xs font-semibold tracking-[0.10em]"
                              >
                                VERIFIED
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex flex-col break-inside-avoid"
                        >
                          <div
                            className="c5"
                          >
                            <b>
                              Employee (Sales & Marketing Executive)
                            </b>
                             at 
                            Tai Hwa (Food manufacturing SME)
                          </div>
                          <div
                            className="flex flex-row gap-x-2 flex-wrap items-center"
                          >
                            <div
                              className="c6"
                            >
                              Aug 2011 - Jun 2015 (3 years 11 months)
                            </div>
                            <div
                              className="flex flex-row items-center gap-1 rounded-[8px] px-2 py-1 w-[88px] h-[20px] bg-[#D7FFD7] text-[#007C34] leading-4"
                            >
                              <div
                                className="pt-0.5"
                              >
                                <img
                                  alt="Verified icon"
                                  src="icon-shield-checkmark.png"
                                  style={
                                    Object {
                                      "height": "16px",
                                      "width": "16px",
                                    }
                                  }
                                />
                              </div>
                              <div
                                className="text-xs font-semibold tracking-[0.10em]"
                              >
                                VERIFIED
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex flex-col break-inside-avoid"
                        >
                          <div
                            className="c5"
                          >
                            <b>
                              Employee (Sales & Marketing Executive)
                            </b>
                             at 
                            Tai Hwa (Food manufacturing SME)
                          </div>
                          <div
                            className="flex flex-row gap-x-2 flex-wrap items-center"
                          >
                            <div
                              className="c6"
                            >
                              Aug 2011 - Jun 2015 (3 years 11 months)
                            </div>
                            <div
                              className="flex flex-row items-center gap-1 rounded-[8px] px-2 py-1 w-[88px] h-[20px] bg-[#D7FFD7] text-[#007C34] leading-4"
                            >
                              <div
                                className="pt-0.5"
                              >
                                <img
                                  alt="Verified icon"
                                  src="icon-shield-checkmark.png"
                                  style={
                                    Object {
                                      "height": "16px",
                                      "width": "16px",
                                    }
                                  }
                                />
                              </div>
                              <div
                                className="text-xs font-semibold tracking-[0.10em]"
                              >
                                VERIFIED
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col gap-4"
                    >
                      <div
                        className="flex flex-col break-inside-avoid"
                      >
                        <div
                          className="c4"
                        >
                          Professional certifications
                        </div>
                        <div
                          className="h-px bg-[#C6C6C6]"
                        />
                      </div>
                      <div
                        className="flex flex-col gap-6"
                      >
                        <div
                          className="flex flex-col break-inside-avoid"
                        >
                          <div
                            className="c5"
                          >
                            <b>
                              WSQ Digital Marketing Strategy
                            </b>
                             from 
                            Equinet Academy
                          </div>
                          <div
                            className="flex flex-row gap-x-2 flex-wrap items-center"
                          >
                            <div
                              className="c6"
                            >
                              Date attained: 
                              May 2014
                            </div>
                            <div
                              className="flex flex-row items-center gap-1 rounded-[8px] px-2 py-1 w-[88px] h-[20px] bg-[#D7FFD7] text-[#007C34] leading-4"
                            >
                              <div
                                className="pt-0.5"
                              >
                                <img
                                  alt="Verified icon"
                                  src="icon-shield-checkmark.png"
                                  style={
                                    Object {
                                      "height": "16px",
                                      "width": "16px",
                                    }
                                  }
                                />
                              </div>
                              <div
                                className="text-xs font-semibold tracking-[0.10em]"
                              >
                                VERIFIED
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex flex-col break-inside-avoid"
                        >
                          <div
                            className="c5"
                          >
                            <b>
                              WSQ Digital Marketing Strategy
                            </b>
                             from 
                            Equinet Academy
                          </div>
                          <div
                            className="flex flex-row gap-x-2 flex-wrap items-center"
                          >
                            <div
                              className="c6"
                            >
                              Date attained: 
                              May 2014
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col gap-4"
                    >
                      <div
                        className="flex flex-col break-inside-avoid"
                      >
                        <div
                          className="c4"
                        >
                          Academic qualifications
                        </div>
                        <div
                          className="h-px bg-[#C6C6C6]"
                        />
                      </div>
                      <div
                        className="flex flex-col gap-6"
                      >
                        <div
                          className="flex flex-col break-inside-avoid"
                        >
                          <div
                            className="c5"
                          >
                            <b>
                              Degree in Social Science
                            </b>
                             from 
                            National University of Singapore
                          </div>
                          <div
                            className="flex flex-row gap-x-2 flex-wrap items-center"
                          >
                            <div
                              className="c6"
                            >
                              Date attained: 
                              2010
                            </div>
                            <div
                              className="flex flex-row items-center gap-1 rounded-[8px] px-2 py-1 w-[88px] h-[20px] bg-[#D7FFD7] text-[#007C34] leading-4"
                            >
                              <div
                                className="pt-0.5"
                              >
                                <img
                                  alt="Verified icon"
                                  src="icon-shield-checkmark.png"
                                  style={
                                    Object {
                                      "height": "16px",
                                      "width": "16px",
                                    }
                                  }
                                />
                              </div>
                              <div
                                className="text-xs font-semibold tracking-[0.10em]"
                              >
                                VERIFIED
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex flex-col break-inside-avoid"
                        >
                          <div
                            className="c5"
                          >
                            <b>
                              GCE A Level
                            </b>
                             from 
                            SEAB
                          </div>
                          <div
                            className="flex flex-row gap-x-2 flex-wrap items-center"
                          >
                            <div
                              className="c6"
                            >
                              Date attained: 
                              May 2014
                            </div>
                            <div
                              className="flex flex-row items-center gap-1 rounded-[8px] px-2 py-1 w-[88px] h-[20px] bg-[#D7FFD7] text-[#007C34] leading-4"
                            >
                              <div
                                className="pt-0.5"
                              >
                                <img
                                  alt="Verified icon"
                                  src="icon-shield-checkmark.png"
                                  style={
                                    Object {
                                      "height": "16px",
                                      "width": "16px",
                                    }
                                  }
                                />
                              </div>
                              <div
                                className="text-xs font-semibold tracking-[0.10em]"
                              >
                                VERIFIED
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[#F0F3FF] pt-1 break-inside-avoid hidden print:block"
                    >
                      <div
                        className="px-4 md:px-16"
                      >
                        <div
                          className="flex flex-col gap-3 max-w-[666px] mx-auto"
                        >
                          <div
                            className="flex flex-row items-center gap-1 content-center "
                          >
                            <img
                              alt="Info icon"
                              src="icon-info.png"
                              style={
                                Object {
                                  "height": "16px",
                                  "width": "16px",
                                }
                              }
                            />
                            <div
                              className="c6 leading-5"
                            >
                              Find out more about Careers & Skills Passport and its verified information
                            </div>
                          </div>
                          <div
                            className="flex flex-col gap-3"
                          >
                            <div
                              className="flex flex-col px-4 leading-5"
                            >
                              <div
                                className="flex flex-row items-center gap-1"
                              >
                                <img
                                  alt="Checkmark icon"
                                  src="icon-circle-check.png"
                                  style={
                                    Object {
                                      "height": "16px",
                                      "width": "16px",
                                    }
                                  }
                                />
                                <div>
                                  <b>
                                    Certified skills
                                  </b>
                                </div>
                              </div>
                              <div
                                className="c5"
                              >
                                Certified skills were extracted from formal training and educational records.
                              </div>
                            </div>
                            <div
                              className="flex flex-col px-4 leading-5"
                            >
                              <div
                                className="flex flex-row items-center gap-1"
                              >
                                <img
                                  alt="Shield icon"
                                  src="icon-shield-keyhole.png"
                                  style={
                                    Object {
                                      "height": "16px",
                                      "width": "16px",
                                    }
                                  }
                                />
                                <div>
                                  <b>
                                    Verified Information
                                  </b>
                                </div>
                              </div>
                              <div
                                className="c5"
                              >
                                Company, training and education records from Government sources
                              </div>
                            </div>
                            <div
                              className="flex flex-col px-4 pb-4 leading-5"
                            >
                              <div
                                className="c5"
                              >
                                For more information on Careers & Skills Passport, please visit https://www.myskillsfuture.gov.sg/content/portal/en/index.html
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={[Function]}
                >
                  <div
                    className="absolute w-full bottom-0 left-0 bg-[#F0F3FF] print:hidden"
                  >
                    <div
                      className="px-4 md:px-16"
                    >
                      <div
                        className="flex flex-row items-start gap-1 py-1 content-center "
                      >
                        <img
                          alt="Info icon"
                          className="w-[16px] h-[16px] mt-0.5"
                          src="icon-info.png"
                        />
                        <div
                          className="c6 leading-5"
                        >
                          Find out more about Careers & Skills Passport and its verified information
                        </div>
                        <img
                          alt="Chevron icon"
                          className="w-[16px] h-[16px] mt-0.5 origin-center rotate-180"
                          src="icon-chevron-down.png"
                        />
                      </div>
                      <div
                        className="flex flex-col gap-3 max-w-[666px] mx-auto"
                      >
                        <div
                          aria-hidden={true}
                          className="rah-static rah-static--height-zero "
                          id="example-panel"
                          style={
                            Object {
                              "height": 0,
                              "overflow": "hidden",
                            }
                          }
                        >
                          <div
                            style={Object {}}
                          >
                            <div
                              className="flex flex-col gap-3 pt-2"
                            >
                              <div
                                className="flex flex-col px-4 leading-5"
                              >
                                <div
                                  className="flex flex-row items-center gap-1"
                                >
                                  <img
                                    alt="Checkmark icon"
                                    src="icon-circle-check.png"
                                    style={
                                      Object {
                                        "height": "16px",
                                        "width": "16px",
                                      }
                                    }
                                  />
                                  <div>
                                    <b>
                                      Certified skills
                                    </b>
                                  </div>
                                </div>
                                <div
                                  className="c5"
                                >
                                  Certified skills were extracted from formal training and educational records.
                                </div>
                              </div>
                              <div
                                className="flex flex-col px-4 leading-5"
                              >
                                <div
                                  className="flex flex-row items-center gap-1"
                                >
                                  <img
                                    alt="Shield icon"
                                    src="icon-shield-keyhole.png"
                                    style={
                                      Object {
                                        "height": "16px",
                                        "width": "16px",
                                      }
                                    }
                                  />
                                  <div>
                                    <b>
                                      Verified Information
                                    </b>
                                  </div>
                                </div>
                                <div
                                  className="c5"
                                >
                                  Company, training and education records from Government sources
                                </div>
                              </div>
                              <div
                                className="flex flex-col px-4 pb-4 leading-5"
                              >
                                <div
                                  className="c5"
                                >
                                  For more information on Careers & Skills Passport,
                                   
                                  <a
                                    href="https://www.myskillsfuture.gov.sg/content/portal/en/index.html"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    click here
                                  </a>
                                </div>
                              </div>
                            </div>
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

    test('should render recipient name', () => {
        render(
            <SkillsfutureSingaporeMsfCspTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('Stella Tan Jia Xin')).toBeTruthy()
    })
})
