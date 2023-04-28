import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalParksBoardQuarantineAndVaccinationCertificateOaDoc } from './quarantine-and-vaccination-certificate.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { A4 } from 'components/paper-size'
import { FlexBox } from 'components/flexbox'
import { makeTypography } from 'components/typography/makeTypography'
import { DateTime } from 'luxon'
import logoImgSrc from './animal-vet-service-logo.jpg'
import addressImgSrc from './animal-vet-service-address.png'
import { sentenceCase } from 'change-case'
import { QRCodeSVG } from 'qrcode.react'
import { retrieveQrAttachmentPayload } from 'utils/retrieve-qr-attachment-payload'

const TemplateContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`

const BASE_FONT_SIZE = '15px'
const Typography = makeTypography({
    small: BASE_FONT_SIZE,
    medium: BASE_FONT_SIZE,
    large: BASE_FONT_SIZE,
    xlarge: BASE_FONT_SIZE,
})

const TableContainer = styled.div`
    width: 100%;
    font-size: ${BASE_FONT_SIZE};

    table {
        width: 90%;
        tbody {
            tr {
                td {
                    padding: 4px 0px 4px 0px;
                    width: 50%;
                    &:first-child {
                        font-weight: bold;
                    }
                }
            }
        }
    }
`

const Logo = styled.img`
    width: 4.94cm;
    height: auto;
`

const Address = styled.img`
    width: 8.54cm;
    height: auto;
`

const QRCodeContainer = styled.div`
    position: relative;
    top: 24px;

    width: 272px;
    height: 272px;
    border: 1px solid #bebebe;
`

const QRCode = styled.div`
    position: relative;
    top: 8px;
    left: 8px;

    width: 256px;
    height: 256px;
    background-color: #ccc;
`

const formatDate = (dateStr: string, full = false) =>
    // full -> 10 October 2021
    DateTime.fromISO(dateStr).toFormat(!full ? 'dd/MM/yyyy' : 'dd LLLL yyyy')

export const NationalParksBoardQuarantineAndVaccinationCertificateTemplate: FunctionComponent<
    TemplateProps<NationalParksBoardQuarantineAndVaccinationCertificateOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const qrPayload = retrieveQrAttachmentPayload(document)

    return (
        <>
            <Helmet>
                <title>
                    national-parks-board -
                    quarantine-and-vaccination-certificate
                </title>
            </Helmet>
            <TemplateContainer
                className={className}
                id="national-parks-board-quarantine-and-vaccination-certificate"
            >
                <A4>
                    <FlexBox $vertical $spacing={5}>
                        <FlexBox
                            $width="100%"
                            $justifyContent="space-between"
                            $alignItems="flex-end"
                        >
                            <Logo src={logoImgSrc} />
                            <Address src={addressImgSrc} />
                        </FlexBox>
                        <Typography $bold $m={0}>
                            QUARANTINE AND VACCINATION CERTIFICATE
                        </Typography>
                        <TableContainer>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Name of Animal:</td>
                                        <td>{document.animalName}</td>
                                    </tr>
                                    <tr>
                                        <td>Microchip Number:</td>
                                        <td>{document.microchipNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Species:</td>
                                        <td>{document.species}</td>
                                    </tr>
                                    <tr>
                                        <td>Breed:</td>
                                        <td>{document.breed}</td>
                                    </tr>
                                    <tr>
                                        <td>Date of Birth:</td>
                                        <td>
                                            {formatDate(
                                                document.birthDate,
                                                true
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sex:</td>
                                        <td>{sentenceCase(document.sex)}</td>
                                    </tr>
                                    <tr>
                                        <td>Colour:</td>
                                        <td>{document.colour}</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Export:</td>
                                        <td>{document.exportCountry}</td>
                                    </tr>
                                    <tr>
                                        <td>Name of Owner</td>
                                        <td>{document.ownerName}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableContainer>
                        <Typography $textAlign="center" $m={0} $px={3}>
                            THIS IS TO CERTIFY THAT THE ANIMAL DETAILED ABOVE
                            HAS COMPLETED THE MANDATORY POST ARRIVAL QUARANTINE
                            OF{' '}
                            <b>
                                <u>{document.quarantine.numOfDays}</u> DAYS
                            </b>{' '}
                            FROM{' '}
                            <b>
                                <u>
                                    {formatDate(document.quarantine.startDate)}
                                </u>
                            </b>{' '}
                            TO{' '}
                            <b>
                                <u>{formatDate(document.quarantine.endDate)}</u>
                            </b>{' '}
                            IN SINGAPORE
                        </Typography>
                        <Typography $bold $width="100%" $m={0}>
                            DETAILS OF RABIES VACCINATION (IF APPLICABLE)
                        </Typography>
                        <TableContainer>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            Manufacturer/Vaccination Name/Brand:
                                        </td>
                                        <td>
                                            {
                                                document.rabiesVaccination
                                                    ?.manufacturer
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Date of Vaccination:</td>
                                        <td>
                                            {document.rabiesVaccination?.date
                                                ? formatDate(
                                                      document.rabiesVaccination
                                                          ?.date,
                                                      true
                                                  )
                                                : ''}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Duration of validity:</td>
                                        <td>
                                            {
                                                document.rabiesVaccination
                                                    ?.validityDuration
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Batch/Lot number:</td>
                                        <td>
                                            {
                                                document.rabiesVaccination
                                                    ?.batch.number
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Batch/Lot expiry:</td>
                                        <td>
                                            {document.rabiesVaccination?.batch
                                                .expiry
                                                ? formatDate(
                                                      document.rabiesVaccination
                                                          ?.batch.expiry,
                                                      true
                                                  )
                                                : ''}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Veterinarian:</td>
                                        <td>
                                            {
                                                document.rabiesVaccination
                                                    ?.veterinarian
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableContainer>
                    </FlexBox>
                </A4>
                <A4>
                    <FlexBox $vertical $spacing={5}>
                        Present QR code for official authority to scan for
                        verification
                        <QRCodeContainer>
                            <QRCode>
                                <QRCodeSVG value={qrPayload} size={256} />
                            </QRCode>
                        </QRCodeContainer>
                    </FlexBox>
                </A4>
            </TemplateContainer>
        </>
    )
}
