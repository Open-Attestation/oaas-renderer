import * as React from 'react'
import renderer from 'react-test-renderer'
import { GovtechDigitalAcademyCertificateOfParticipation_1SigneeTemplate } from '../certificate-of-participation-1-signee.template'
import { render, screen } from '@testing-library/react'
import { sample } from '../certificate-of-participation-1-signee.sample'

describe('GovtechDigitalAcademyCertificateOfParticipation_1SigneeTemplate', () => {
    it('should match snapshot', () => {
        const tree = renderer
            .create(
                <GovtechDigitalAcademyCertificateOfParticipation_1SigneeTemplate
                    document={sample}
                    handleObfuscation={() => void 0}
                />
            )
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .c0 {
              background: white;
              position: relative;
              width: 29cm;
              height: 20.6cm;
              padding: 2cm;
              margin: 0 auto;
              box-sizing: border-box;
              border: 1px solid #ccc;
              background-size: cover;
              background-image: url('COP_1sign_150dpi.png');
              z-index: initial;
            }

            .c1 {
              position: absolute;
              width: 380px;
              height: 66px;
              left: 548px;
              top: 184px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 700;
              font-size: 54px;
              line-height: 66px;
              -webkit-letter-spacing: 0.01em;
              -moz-letter-spacing: 0.01em;
              -ms-letter-spacing: 0.01em;
              letter-spacing: 0.01em;
              text-align: center;
              color: #2b2c2b;
            }

            .c2 {
              position: absolute;
              width: 388px;
              height: 53px;
              left: 545px;
              top: 236px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 600;
              font-size: 36px;
              line-height: 50px;
              text-align: center;
              color: #9d7a45;
            }

            .c3 {
              position: absolute;
              width: 244px;
              height: 22px;
              left: 617px;
              top: 316px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 700;
              font-size: 18px;
              line-height: 22px;
              color: #a9a8a8;
            }

            .c4 {
              position: absolute;
              width: 558px;
              height: 54px;
              top: 357px;
              right: 73px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 700;
              font-size: 24px;
              line-height: 110%;
              text-align: center;
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
              -webkit-box-pack: end;
              -webkit-justify-content: end;
              -ms-flex-pack: end;
              justify-content: end;
              color: #000000;
            }

            .c5 {
              position: absolute;
              width: 558px;
              left: 463px;
              top: 420px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 500;
              font-size: 17px;
              line-height: 125%;
              text-align: center;
              -webkit-letter-spacing: -0.01em;
              -moz-letter-spacing: -0.01em;
              -ms-letter-spacing: -0.01em;
              letter-spacing: -0.01em;
              color: #2b2c2b;
            }

            .c6 {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 600;
              padding: 14px 0;
              display: block;
              text-align: center;
              color: #000000;
              white-space: pre-line;
            }

            .c9 {
              position: absolute;
              width: 259px;
              height: 51px;
              left: 610.84px;
              top: 677.36px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 500;
              font-size: 12px;
              line-height: 110%;
              text-align: center;
              -webkit-letter-spacing: -0.01em;
              -moz-letter-spacing: -0.01em;
              -ms-letter-spacing: -0.01em;
              letter-spacing: -0.01em;
              color: #000000;
            }

            .c7 {
              position: absolute;
              width: 259px;
              height: 85px;
              top: 588px;
              right: 224px;
              text-align: center;
              -webkit-align-items: flex-end;
              -webkit-box-align: flex-end;
              -ms-flex-align: flex-end;
              align-items: flex-end;
              -webkit-box-pack: center;
              -webkit-justify-content: center;
              -ms-flex-pack: center;
              justify-content: center;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
            }

            .c8 {
              display: block;
              max-width: 259px;
              max-height: 85px;
            }

            .c11 {
              position: absolute;
              width: 280px;
              height: 100px;
              top: 602px;
              left: 48px;
              background-size: contain;
            }

            .c12 {
              display: block;
              max-width: 280px;
              max-height: 100px;
            }

            .c13 {
              position: absolute;
              top: 731px;
              left: 48px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 500;
              font-size: 17px;
              text-align: left;
              color: #ffffff;
            }

            .c10 {
              position: absolute;
              top: 575px;
              left: 48px;
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 500;
              font-size: 17px;
              text-align: left;
              color: #ffffff;
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
              <div
                className="c1"
              >
                CERTIFICATE
              </div>
              <div
                className="c2"
              >
                OF PARTICIPATION
              </div>
              <div
                className="c3"
              >
                PROUDLY PRESENTED TO
              </div>
              <div
                className="c4"
              >
                THONG YONG JIE ANDRE
              </div>
              <div
                className="c5"
              >
                <div
                  className=""
                >
                  for your active participation in
                </div>
                <div
                  className="c6"
                >
                  Google AI Bootcamp 
             22 June 2023
                </div>
              </div>
              <div
                className="c7"
              >
                <img
                  alt="Signature of signee"
                  className="c8"
                  src="svg-stub"
                />
              </div>
              <div
                className="c9"
              >
                Sahas Sankaran
                , 
                Director
                <br />
                GovTech Digital Academy
                <br />
                Government Technology Agency
              </div>
              <div
                className="c10"
              >
                Partner:
              </div>
              <div
                className="c11"
              >
                <img
                  alt="Partner Logo"
                  className="c12"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABkCAYAAABdGS+CAAAUunpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjapZppkts4toX/YxW9BIwXwHIwRrwdvOX3dyilnOkqR1RFW86UTJEgcIczgHbn///vuv/wJ/faXC61WTfz/Mk99zj40Pzrz3x+B5+f369/tPen8PO4s/y+KHIo8Z5e/+zxffxwPH4G9f19k/B1/tdAnzsNPpVfX4z3DcL87fh637f9PtD7zim877zfq3oPlOLreHj/e73Pt97qj6Vte9/5vA+1Xz8lWarRCq9TkzW79Rkuf8XwPYj+7X4cqIR7FyaQYjwpJM/vlOJrZkk/KQ3e6+s354VU+JxSd7zF1DUKkzBCXJ9AvtfxlaHhv8fj864Uv5f3zIhJvL5Kv754VvnO1J/+fF+6+6ydWd3jfwz0ef+tlj6fvtXSM6My/1BLXxekn6n29nn/HHffvwjltwvS5/7x+4y6vT/FX8ffMQrhx+K/lcC9u91nzaxiZCOv9l7U1xKfT44TWVhOz2XGq/JT+FyfV+fV/PCLgtxkcfJaoYdIbdyQww4j3HDCdnxYgXKNOZ5IZcQYV0zPsUZKelxJ1ZL1CjfW1NNOjZJZT43lFF9TcVmB7M9rPXdr3HkHTo2BwQKX/KOX+6cn/t3rXnUw8VWLlPkEi3lF1TPTUOb0m9PISLjvoJYnwF+v3/8EdX8iheUJc2OBw8/XELOEX7WVnkQnziu8v5Ag1P0UhhKVHfcuTCYkUuCNHgwWfI2xhkAgGwkaTD2mHCcZCKXEzSRjTsnITYu6NZdUF55zY4mv40AtmXiaiNz0NEhWzoX6qblRQ6OkkkuhvWpppZdhyTK9Zs6qCbNHTTXXUq3W2mqvo6WWW2nWamutt9FjT0B66dZrb733MbjnYOTBxaO5wZEZZ5p5lmmzzjb7HIvyWXmVZauutvoaO+60Aattu+62+x4nHErp5FMOuOdOO/2MS63ddPMtFyi47fY7Pll7Z/Uvr3+RtfDOWnwypfPqJ2scrfXd0JSL0yDKGRmLOZDxSgoCBR2VM99CzlGZU87gKLqiRCZZlJsdlDEymE9wsdzAla/c/crcv86bM/tj3uK/yZxT6v6HzH3y5k595+1vsrbHwyTpyZC6UD3oE93HOSM2/kK9BAM4cWTJP4fe7wTlbvGxfTvY/npSFfXOXEIuouHiQm71n1zI6WRJF0IWutpesxkPRcTsQGORGbqmjdKbYBVcTnvMFPdcudOHZ69G7MouZw3re6bWTuqb8w8LAPRrdHX0TbAuh8rqZHrHQ/Hvm7ky3dNn7aHFnM/y7W5u4E+aRFARmPSGItaMgSblMe+MI3BXMMVYa2yHqziFzFNS1a6lcGpf/ZLRTFq2Pz3kk4tx/9tmdStdEu633WQzGTg9xioqtAqI5XZW7QcsOtRztNWpxEwJ2wxxAxH9xryXpeTOnkQN7lqMQ90wFmVP09mGxXphmY3KKIV4gX+Fmc8WqA++TevWQyHelLubRp9CMqPUSbu0ezKVfsc5vfjdc+XwGQgEyjnWvahCg/aIYeqr5G1pEP87XB+hwnqbeu4l7LyQQ0bRxcvQYUJ9hHJbsBoqg2y0zx01riKFNrLw+UgqORVJO3NfaRqCkeOdFPOodmz2TYWQyjrvSba2LXrvJM7oHeIcIXXyEAaRc1THKpXI3hvToHvsFpEw86h5TCZa5qDBfF6Q5gFN7Ebbl4tBoMHg1zPp6cZtBIUmhLAbXRlo/WTb2+6xkFloYt01SB+1V2pmrgjzmWmHse5ZxJiiGQvwP9eOpjXPyNys7z13q2sXYu/HpGKrrXFtA5nUNGlYB7E5qOMAqAR/chgsbc7V4rK9yKWnMAWocTfmko8nuzYb4DnvSntXlBFz3yfMydkxrJqn/ELoQG1PKL/LKqhklqXFAUeJfPUZdlr0WX++C+Ssc8PDEqtHy3aApo175snm1po1IEJ86If6i/SjX70Cs56b22AMu4d+Yagc8kz3MjtlseS5yAvH4eXtNvhVicaxOObhruH0VNHDFONOoLKWfqGKtZQ28DE0qo0mI9HAZMzU2jzTPbFuZANkLPzUcDvFQe3EUa86H8IHAj2sv8RSXyjTdisxggCrplC6s94hj30q6qCKq+KQyaBJqo1dkXf7ct3pOimE3s8NK/NhHdJy64DqFql352k06n1z5QYyAKfJrBO6jYzQO6ZYUpeAQBd0qNimhDD3YrIEgEK8DtyFQOCV2BbtH9BgYgpWOEr2T6+BGdZHO8X2OWMveokpJGjrLlQn4FfmdQds6FQ5HU4d3LjCvFQ/VQxx5dEyHVoMTUwIAc+pVmLw++h5ACEN1mT1OoilM7KNUybgTL0KDspsTXBBtKC10Cp3JefNUtZw5+ag3jhxUZ1ZGXGsB2LKyDArVPgE3wzV1gskuzljb5iDTMLZqa0GDxwYOIDSEzQFyzoib+bh6KDzQLkxxaz+LqMseiIXAC1QkawdkOJceJL+6NQz4E8YNvLj6YfDct1T/DsAgYSlQNGUEAncqsNTVYbUB8GP/QSvjo+o9o2MWEAxi+EkPxrKv8L4RkggPjJSQU+dDPIGaoTuaHPEqXialhATouP6sjOcYWEbiaSUy6qunL6rZETsligVpEZEk1C3BpdAOBQ2uAB6UGt0GoNwzASdqOGzJAlUUw5A2ygZeqr4fvOavV2g9XSPtImwZCzIFKQZVIjAiZTF7kUyxRoLRANPGKZsB3DZ3GHPnKavE1WUJgkLx3KBclZHsW1wkEovUEoZiKsN210uZoHeLhVwE+mPpwYKGUaBK45ggyKzh2cPJQLMDgxVyXQmpXFxXAVdSJkIhlHYSMI7J7KGVBU1YJ+oiIqgAiEuUmrefQD5P6KRbfJH5lAIAG9ygCzEFIxMGoXlobZjAMDFtZGwSrUkoQC0ooYtqBZusvD/jYURQ7CAIo+uoSvxaOkUjN0YXb0Hpg9a7LQ+uS1Fdmh8wM3AZiAxpKSpobO+JgeNuQssXBJNhADJTr1RGdA7wvGIjuwbaJYHNOn1tKjhU5CjMrlD7OaKJIsujaSd6mESEBPRzxALIIdu7EG6wzeYDwZLn/b66i5h7HSnVESX8gsO9gNJFT5RwiFfubSWdhShsrIcqFTJk52jn9AtAEiVoX9zTa4tpHlD+aIHcWvgdiIODdSacBhBRd7YSlJhoCUg0iHiGeEGWTWp+kB5Hu+Apk5X0WeqWaqwwRbgSqXOSqyAHcZiMSRwCcIgXJbEJLiKdooEfs64oGI36elFWy1IpaKolifCCYFw4VmMOeKPcp6Q5rllX2EdZmIOnD/hrkj/RqmBR2szU5RmTXBBbKh+7gQ5U7P3JvFuWnXumhKxpqaKtBSiZBdaskt4FjyDXw7Yr0x89oB8UdITd26bqF814PR4EUzHLWNvfo6kDujYgAtc00Jav2jJrQrsIFZG3mAvwrB4KB7RGgZ9mqSdRKxEeoheJ/KScll3mMHZdxJ7mHh4hwo4L6vVYoRhuzoMjYUGBbLnQD6HK/EkgT372hV8BJS21A/aF20OCiC0nj0QISoqBeoKuKYOz9m5yH3UqtT+BFcpWoLje2O1SJpz4McQIP9ycLcVvwanAb+kjcwgkhHUAXVGu3E5YTvABh4VCUudLZQnKIc1AqomYq8BQccaEtVtYBPYQXfM3j1obUhTCCDuDpdwGdZn0omThBaUXZQwheaQ0dA7iMS8KMLg2oVE2gDYCrBhcjfkBV2Y1wF/TIbqriWhQv3Du6DNRpcBdl4IsBBRKIvg6Ciub8wrZmk/2h3QOb1NxTPEmqIk8pL4JCf1ubjNmUCqx8UI8lIZyBqijnDFs4KjkxogWIZjhVB1UhcaXeRdjxRoKE3ciCKgLncQ9qCkYRgQEt1Jp5dKR8witdpxphtfQDIL3AgbQODQnmHgvdSH5jBsN8kmxpXcbdutQtRQL9JO8Af6ET2DvEGSofsoxQvyLG5/qD/wp4KCFCp1gRqsgBZ8N+gEB8Ih8JAGzOUUdYe2YEG6BnxwQp607pW+LINz+NIqiEDaGtb+IEEWUU7o7DwDBVsR92E1lod7KZh1lLvEJszKdFY+k1wkjCigXA4uDFrgIFjXCA3O34UmC2YNtsJ40POgMqYPxK0YLvSq+sdrbydj4RIwuIkdpboGIoWEQxu4i+vUltyF3o5ytqQIytBGLqCDcGBaoxh9AWTg1pB6YGtZS5uRGXlAycINAIkjYrhREgCzD+babQ5mQn5CSK1c5OVG2s9FJ5D9jFBCYQcaFYURr2mHA+SIqNqroie59WFFjiInB1Zd7iTorpR2CiCiR3kjaVmVZMsoG35pujN+zFwm+ekYAH6FT6dpRnAifLsl08A6KrzskRBM0FgihPylGOuEuagMqIlJObADtPIUJYgX8VEgOVRIo8vCl4yjIhekVV4R209ZzbU2sJDuwvJdXKIo3SHSUMpIdTyaAYIqNoQyBttup3C6qSRXR35saotkIoF7B9MOQSqIX7h+5uZgDMYZEBjfI2kieaIfRe5byE4q1RJyBcQmoPzo716L9EPMeGnK1COe3Zhy5rAa1giihv4juEIkoX81l6Ghpe25F24aFC6e3GdVvudcugt1HQl2ANVxhhfertRZvFjRByp8ap3moN3PfqRIgwl70wbcWK3DZ6EtWhI8R701p+snpEFnofJrTMg+lEM7VCx0UkHi8QwcSwq0FgWBokCkycUBdkcig6J1CXcBfh1JykHbNbIyJZ0Mc4S1JMyzJ0GTtgUQrc+wrBTRL3QGpwQ6BQuBFtlRMNNoQfQzyXq2zS9dN2DrDG+o7O+JwK+8F2bLwARjjXLsg7rF1GzaBgQlkvFxAVghz8zITEbtL6rnYA25t2ofCQsjUena56Ru8mL1eMtRXcC8k3gEGPxCjUyhHqU9z5EjjMyTsCG9uD1uDQbAOLDog76L6CQzdZptx6wrbll2EBkXnghxZsaMcmsIhNEOs+tSVtiNgbTB85GdwIG4pE44pt0apgdGCFgPqkEbVRxf+ym1JDuJDGyoRDg/DyqCv40UNsQxF1xc1MW9YvwCtgpBXZn2gdufSCWJdJwSFu7bliLKDFUCmF8JWjppoisYe3IVdIRKMBNPW0O8XjrIo2KII/ROy057tmUpSaQ5tj9pv6w0sPJ6rQ50aKCCwyriyWFUlOVRLzClhnHW5hHBiy9o7F0FDiCEjpXHoRErAIZKBB1b4UyUfx/AQYziTVUjFmnQ2rnI2E6ksKfa8S0xoebIJGJ7ZkTngiT4BCd0eXHqCFSCfpjBnFDylAXGSgB7XdBMqhkOgzegC2yUT9qcQ45CR8QpY7iCCMpRaEe7wfIToWFjMU4UHWWGwmHeESgrzPjCzYAxqi9OwcPBaxfM34QFoLbkWDEy59ZlzGn1SnNC2hhcaIjqQ3CVio7f1QOye1EcEcmEsrx0aa8Y7UPwJ8CWB12XZKqAbsJfwdGpLSEVepGCgWLJGlWGRyVLdoVw1OQigCAwOpy8OE+RyDmstLWFjaqGf/SLeSLPliwZ6AF6S/lMjbEXEnKq3cALbRpEXIUTBt9qYD46meCh4NJ8dnpx14AXQZcC6axcK9lCCWFEB3aq9tnBbBxwePl+2qzIgG9OQliesp7MaFe4GFzHYofkG9q2g+1IZm3MA3SXVp375rtdeoAq437SQV+gZ/C1FV6jLzElLWp3GZ1N29HXFX2pbQyZSMIPfU6wG16RFwHotYFrS08W+UErIfpR9CJ7/JlMCii1oG6Mb5HM6cNT7x1FCoJGbSSjITFHPQf0DPasH+033fGCOCTERRGhKhgKbEb/kciOlO+Cinhf0rCSxzsccQIemaJUxl++/vYta5YABZ+r6Bs5ziorMcF4ASFOT/F6hpkII8Yx+4Va9drc23Cm+IHxs/YFczREPo6MOgf26L0CrRkSBQxeriD9fEUrQjxX/KxnAVyEeVvEEuuACu+4iYDNT9B0WIvfEYvE5AZzzljrtN1EVJOOBRxFBtikN8F5VBJFIcd2ESsgD8rGNz3ClXLCfJ+qbQD8mWkbP06HaujP8yVAQZukgG1S5tEa2uTAA5psF9KvGyCKzNK2n77QxnnT0yvkjE/4fpQRjIWemfAQ6oDlM4YetBnydYAkQCPUQPsv84S7JilgunXiQRnxqsCdSNkQiUwMTIiIGzRmg4XpC/nGBkqCUtC+tk1VWsgzZBpSEBTvRx1i9UZHJ8QC5R8cR4IIaXUEucwpPiIzA+aG2iKM4LcWTqDpHOt1Bu3KTO2DopBcIU2oy/16nFQH/QT6a/cT8/A3j5Qo6fczo59PmdzzvyB217M25DrFX/V0qsAbfqcBIbHeOmlw0ghEIvQ6RKfdFlJQhp6MIQtGcpAdFAh6t4l9xeBeRAM6SPSpzYa4H4gj68sH8nBBgEh1RXq1aPuVSqVGmBEKM9K9cSOGh2nztYPmADdGGZ0LZgFjBX+CF9PuBRxAlnKULUKTIiUWq6muDW051aTdIxoES4pFqHgGVo62KEhWMJk4kC5J7rYsbT1CYdQmrb+pS0ydw8pXba4tAt7xbvQhGqPiA2ENWEhFnPQgUQ+RurZL+f4aRnZqnXryM4RIerxqYVKMRIrA0uTUhv63C2od25e9tnGYYshVT3QOknOOZ76w7TLVQAO51f2gcUQN4D9Rylg0bMt+pC7k4OkAoJBGSHf4sV+7UtrnhC9gBFpfxgmL5qDBRbM/6RHqYzxn1fXAiCU0213aqsJHo2wG4m7wRUWnTjv5Lu0JG310nVHagpsWcGwAehy76SEdPxEDWou2gC/NWUaGGhAKQ0+WtCPW9Kjl+e8HkLlrMrlT28KH+ERSSV9B0CZ3iM6yQ/YwTJKFdK9KOSD+0dkVGYrXufJXeFokEPUMgxJ5xTP5hbDWfwFBCcAHFwdDxrSVhkzV7nwyNNP2xjxgOwM2cdDFReweYrIeQ0hqSzeDGGg4UBV80AbpWuX1lDiN/NVeiDn01QBkQ4ZU6DHsOl5+PQ90QXMysrWXQdkR59fRX0+H6WNgb35/9kunaTtlRPd+/hv//B6Q+AmTqj1/yw8u6IlUpSTz/DxKdp9nyn/3DiCBCYR89KcIvbb072PQfj//x0ABTtvde/dfuCZcAnlXMoYAAAGFaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBiG36ZqRSqCdhBxyFCdWhAVcdQqFKFCqBVadTC59Edo0pCkuDgKrgUHfxarDi7Oujq4CoLgD4iri5Oii5T4XVJoEeMdxz28970vd98BQr3MNKtjDNB020wnE2I2tyKGXhGi2YV+xGRmGbOSlILv+LpHgO93cZ7lX/fn6FXzFgMCIvEMM0ybeJ14atM2OO8TR1hJVonPiWMmXZD4keuKx2+ciy4LPDNiZtJzxBFisdjGShuzkqkRTxJHVU2nfCHrscp5i7NWrrLmPfkLw3l9eYnrtIaRxAIWIUGEgio2UIaNOO06KRbSdJ7w8Q+5folcCrk2wMgxjwo0yK4f/A9+99YqTIx7SeEE0PniOB8jQGgXaNQc5/vYcRonQPAZuNJb/kodmP4kvdbSokdA3zZwcd3SlD3gcgcYfDJkU3alIC2hUADez+ibcsDALdCz6vWteY7TByBDvUrdAAeHwGiRstd83t3d3rd/a5r9+wE+XHKSGEUgagAADmVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDpkODMxODBkNy0wNzFjLTQ1YWEtYjk2ZS1iNjFmM2E3NGJiZTYiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTUyZmU0OTctNGMxNC00NDFkLTk0YWUtNjYyNjBlMTEyMGRkIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YzVjNjEwM2EtOTllOC00OTdlLWJmMDYtMGRlMzRmZTI3YjIwIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjQ2OSIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEzOSIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iTWFjIE9TIgogICBHSU1QOlRpbWVTdGFtcD0iMTY4ODcxNTU3MTY1MTg2MCIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjMyIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMzowNzowN1QxNTozOToyOSswODowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjM6MDc6MDdUMTU6Mzk6MjkrMDg6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZDk5Yjc0ZC01OGFhLTRjNGYtYThhMi0wYmQ0OGI2YjIzMmEiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTWFjIE9TKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMy0wNy0wN1QxNTozOTozMSswODowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgIDxleGlmOlVzZXJDb21tZW50PgogICAgPHJkZjpBbHQ+CiAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5TY3JlZW5zaG90PC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZXhpZjpVc2VyQ29tbWVudD4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pm0p6u0AAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnBwcHJx+64MwmAAAAEnRFWHRDb21tZW50AFNjcmVlbnNob3T7EasKAAAXQklEQVR42u1df2wcx3V+u3ertI5Ep0nQmhFJxRFJmykCJKrOsXhUKDegKasU3L/SSnVbAUVdiwp5kmo4cKjAZSAirR1bpgTSLlI3QoqQMYICKaRIoenakkUyTo5wWiAoIZFCEx1lGQHqJhTrxLy73f5xnOXs7Mzu7M+bvZsPOFgm75Z7O/O+ed97b94ohmEYICEhIREBVPkIJCQkJMFISEhIgpGQkJCQBCMhISEJRkJCQhKMhISEhCQYCQmJhBNMqVSCYrGY6AdTLBahVCrVxSQolUqJ/q61MN9q9bsqURbaFYtF0DQtkeSSxPsOOnEBANLptLxvOUeTQTDoQSiKkogJUCqVwDCMuiOXpH7/eiWXJNlW5DEYRVEgKbsRDMMARVHqVi+n02lQFCURcgmRYb2SS1JsS4lrL5LoLl09yqKkegb17rkkae4qcW52FNGlq3dZlLTnIsklWbYVa5paRJeu3mVRkuSS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"
                />
              </div>
              <div
                className="c13"
              >
                Date of Issue: 
                10 May 2022
              </div>
            </div>
        `)
    })

    test('should render recipient name', () => {
        render(
            <GovtechDigitalAcademyCertificateOfParticipation_1SigneeTemplate
                document={sample}
                handleObfuscation={() => void 0}
            />
        )
        expect(screen.getByText('THONG YONG JIE ANDRE')).toBeTruthy()
    })
})
