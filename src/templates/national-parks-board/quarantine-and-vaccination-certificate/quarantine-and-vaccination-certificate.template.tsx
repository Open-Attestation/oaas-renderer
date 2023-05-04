import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalParksBoardQuarantineAndVaccinationCertificateOaDoc } from './quarantine-and-vaccination-certificate.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { A4R, size } from 'components/paper-size'
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

const Logo = styled.img`
    width: 4.94cm;
    height: auto;
    @media only screen and (max-width: ${size.tablet}) {
        width: 187px;
    }
`

const Address = styled.img`
    width: 8.54cm;
    height: auto;
    @media only screen and (max-width: ${size.tablet}) {
        width: 307px;
    }
`

const LogoFlex = styled.div`
    width: 100%;
    display: flex;
    gap: 32px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    @media only screen and (max-width: ${size.tablet}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const DetailsFlex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    line-height: 22.5px;
    padding: 4px 0px;
    @media only screen and (max-width: ${size.tablet}) {
        flex-direction: column;
    }
`

const Col1 = styled.div`
    width: 50%;
    font-weight: bold;
`

const Col2 = styled.div`
    width: 50%;
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
    const [templateWidth, setTemplateWidth] = useState(-1)
    const qrPayload = retrieveQrAttachmentPayload(document)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleWindowResize = () => {
            if (!ref.current) return
            setTemplateWidth(ref.current.clientWidth)
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const showQrOnNextPage = templateWidth === -1 || templateWidth > 700

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
                ref={ref}
            >
                <A4R>
                    <FlexBox $vertical $spacing={5}>
                        <LogoFlex>
                            <Logo src={logoImgSrc} />
                            <Address src={addressImgSrc} />
                        </LogoFlex>
                        <Typography $bold $m={0} $textAlign="center">
                            QUARANTINE AND VACCINATION CERTIFICATE
                        </Typography>
                        <FlexBox $width="100%" $vertical>
                            <DetailsFlex>
                                <Col1>Name of Animal:</Col1>
                                <Col2>{document.animalName}</Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Microchip Number:</Col1>
                                <Col2>{document.microchipNumber}</Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Species:</Col1>
                                <Col2>{document.species}</Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Breed:</Col1>
                                <Col2>{document.breed}</Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Date of Birth:</Col1>
                                <Col2>
                                    {formatDate(document.birthDate, true)}
                                </Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Sex:</Col1>
                                <Col2>{sentenceCase(document.sex)}</Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Colour:</Col1>
                                <Col2>{document.colour}</Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Country of Export:</Col1>
                                <Col2>{document.exportCountry}</Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Name of Owner:</Col1>
                                <Col2>{document.ownerName}</Col2>
                            </DetailsFlex>
                        </FlexBox>
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
                        <FlexBox $width="100%" $vertical>
                            <DetailsFlex>
                                <Col1>
                                    Manufacturer/Vaccination Name/Brand:
                                </Col1>
                                <Col2>
                                    {document.rabiesVaccination?.manufacturer}
                                </Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Date of Vaccination:</Col1>
                                <Col2>
                                    {document.rabiesVaccination?.date
                                        ? formatDate(
                                              document.rabiesVaccination?.date,
                                              true
                                          )
                                        : ''}
                                </Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Duration of validity:</Col1>
                                <Col2>
                                    {
                                        document.rabiesVaccination
                                            ?.validityDuration
                                    }
                                </Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Batch/Lot number:</Col1>
                                <Col2>
                                    {document.rabiesVaccination?.batch.number}
                                </Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Batch/Lot expiry:</Col1>
                                <Col2>
                                    {document.rabiesVaccination?.batch.expiry
                                        ? formatDate(
                                              document.rabiesVaccination?.batch
                                                  .expiry,
                                              true
                                          )
                                        : ''}
                                </Col2>
                            </DetailsFlex>
                            <DetailsFlex>
                                <Col1>Veterinarian:</Col1>
                                <Col2>
                                    {document.rabiesVaccination?.veterinarian}
                                </Col2>
                            </DetailsFlex>
                        </FlexBox>
                    </FlexBox>
                    {!showQrOnNextPage && (
                        <FlexBox
                            $vertical
                            $spacing={5}
                            style={{ marginTop: '48px' }}
                        >
                            Present QR code for official authority to scan for
                            verification
                            <QRCodeContainer>
                                <QRCode>
                                    <QRCodeSVG value={qrPayload} size={256} />
                                </QRCode>
                            </QRCodeContainer>
                        </FlexBox>
                    )}
                </A4R>
                {showQrOnNextPage && (
                    <A4R>
                        <FlexBox $vertical $spacing={5}>
                            Present QR code for official authority to scan for
                            verification
                            <QRCodeContainer>
                                <QRCode>
                                    <QRCodeSVG value={qrPayload} size={256} />
                                </QRCode>
                            </QRCodeContainer>
                        </FlexBox>
                    </A4R>
                )}
            </TemplateContainer>
        </>
    )
}
