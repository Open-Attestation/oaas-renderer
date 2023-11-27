import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { SingaporeFoodAgencyExportHealthCertificateOaDoc } from './export-health-certificate.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { A4R } from 'components/paper-size'
import { DateTime } from 'luxon'
import {
    Logo,
    LogoSection,
    LogoSectionContainer,
    LogoSectionContainerLogoContainer,
    LogoSectionAddress,
    CertifyingAgencySection,
    TitleComponent,
    CertifyingAgencySectionFields,
    FieldComponent,
    IdentificationProductsTitleSection,
    IdentificationProductsSection,
    IdentificationProductsTableHeaderContainer,
    TableHeaderCell,
    IdentificationProductsTableRowContainer,
    TableCell,
    IdentificationProductsTransportSection,
    IdentificationProductsTransportContainer,
    SectionWithTitleAndFields,
    SectionContainerWithTitleAndFields,
    AttestationContainer,
    AttestationText,
    IssuanceSignatureContainer,
    IssuanceSignatureContainerSpacer,
    SignatureContainer,
    SignatureImg,
    SignatureNameComponent,
    QRSectionContainer,
    QRSectionSection,
    QRCodeContainer,
    QRCode,
    DefaultTypography,
    AppearWhenBiggerThanMobile,
    AppearWhenSmallerThanMobile,
    MobileLogoSectionContainerLogoContainer,
    MobileFieldComponent,
    MobileProductComponent,
    MobileProductComponentIndex,
    MobileAttestationText,
} from './export-health-certificate.components'
import logoImgSrc from './sfa_logo.png'
import { QRCodeSVG } from 'qrcode.react'
import { retrieveQrAttachmentPayload } from 'utils/retrieve-qr-attachment-payload'

export function formatDate(date: string): string {
    if (!date) {
        return ''
    }

    const dateTime = DateTime.fromISO(date)
    return dateTime.toFormat('dd/MM/yyyy')
}

const TemplateContainer = styled.div`
    pre {
        background-color: lightgray;
        overflow-wrap: anywhere;
        white-space: break-spaces;
    }
`
export const SingaporeFoodAgencyExportHealthCertificateTemplate: FunctionComponent<
    TemplateProps<SingaporeFoodAgencyExportHealthCertificateOaDoc> & {
        className?: string
    }
> = ({ document, className = '' }) => {
    const qrPayload = retrieveQrAttachmentPayload(document)
    const etd = formatDate(document.etd)
    const dateOfInspection = formatDate(
        document.originAndProvenence.dateOfInspection ?? ''
    )
    const issuedDate = formatDate(document.issuedInSingaporeDate)
    const products = document.products.map((product, index) => (
        <IdentificationProductsTableRowContainer key={index}>
            <TableCell style={{ width: '230px' }}>
                {product.description}
            </TableCell>
            <TableCell style={{ flex: '1 0 0' }}>{product.brand}</TableCell>
            <TableCell style={{ flex: '1 0 0' }}>
                {product.codeOrBatchNoOrLotNo}
            </TableCell>
            <TableCell style={{ flex: '1 0 0' }}>
                {product.numberAndTypeOfPackages}
            </TableCell>
            <TableCell style={{ flex: '1 0 0' }}>{product.netWeight}</TableCell>
            <TableCell style={{ flex: '1 0 0' }}>
                {formatDate(product.productionDate)}
            </TableCell>
            <TableCell style={{ flex: '1 0 0' }}>
                {formatDate(product.expiryDate)}
            </TableCell>
        </IdentificationProductsTableRowContainer>
    ))

    const mobileProducts = document.products.map((product, index) => (
        <MobileProductComponent>
            <MobileProductComponentIndex>
                {index + 1}
            </MobileProductComponentIndex>
            <MobileFieldComponent>
                <div
                    style={{
                        fontWeight: '700',
                    }}
                >
                    Product Description
                </div>
                {product.description}
            </MobileFieldComponent>
            <MobileFieldComponent>
                <div
                    style={{
                        fontWeight: '700',
                    }}
                >
                    Brand
                </div>
                {product.brand}
            </MobileFieldComponent>
            <MobileFieldComponent>
                <div
                    style={{
                        fontWeight: '700',
                    }}
                >
                    Product Code/ Batch No./ Lot No.
                </div>
                {product.codeOrBatchNoOrLotNo}
            </MobileFieldComponent>
            <MobileFieldComponent>
                <div
                    style={{
                        fontWeight: '700',
                    }}
                >
                    Number & Type of Packages
                </div>
                {product.numberAndTypeOfPackages}
            </MobileFieldComponent>
            <MobileFieldComponent>
                <div
                    style={{
                        fontWeight: '700',
                    }}
                >
                    Net weight (Gross Weight)
                </div>
                {product.netWeight}
            </MobileFieldComponent>
            <MobileFieldComponent>
                <div
                    style={{
                        fontWeight: '700',
                    }}
                >
                    Production Date
                </div>
                {formatDate(product.productionDate)}
            </MobileFieldComponent>
            <MobileFieldComponent>
                <div
                    style={{
                        fontWeight: '700',
                    }}
                >
                    Expiry Date
                </div>
                {formatDate(product.expiryDate)}
            </MobileFieldComponent>
        </MobileProductComponent>
    ))

    return (
        <>
            <Helmet>
                <title>singapore-food-agency - export-health-certificate</title>
            </Helmet>
            <TemplateContainer
                className={className}
                id="singapore-food-agency-export-health-certificate"
            >
                <A4R $padding="24px">
                    <DefaultTypography>
                        <AppearWhenBiggerThanMobile>
                            <LogoSection>
                                <LogoSectionContainer>
                                    <div
                                        style={{
                                            alignSelf: 'stretch',
                                            textAlign: 'right',
                                            fontSize: '16px',
                                            fontWeight: '700',
                                            lineHeight: '125%',
                                        }}
                                    >
                                        {document.certificateNumber}
                                    </div>
                                    <LogoSectionContainerLogoContainer>
                                        <Logo src={logoImgSrc} />
                                        <LogoSectionAddress>
                                            <div
                                                style={{
                                                    fontFamily: 'Arial',
                                                    fontSize: '16px',
                                                    fontWeight: '700',
                                                    lineHeight: '150%',
                                                }}
                                            >
                                                Singapore Food Agency
                                            </div>
                                            52 Jurong Gateway Road #14-01
                                            Singapore 608550
                                        </LogoSectionAddress>
                                    </LogoSectionContainerLogoContainer>
                                </LogoSectionContainer>
                                <div
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        lineHeight: '125%',
                                    }}
                                >
                                    EXPORT HEALTH CERTIFICATE
                                </div>
                            </LogoSection>
                            <CertifyingAgencySection>
                                <TitleComponent>
                                    <div style={{ width: '22px' }}>I.</div>
                                    CERTIFYING AGENCY
                                </TitleComponent>
                                <CertifyingAgencySectionFields>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Exporting Country:
                                        </div>
                                        {document.exportingCountry}
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Issuing Authority:
                                        </div>
                                        Singapore Food Agency (SFA)
                                    </FieldComponent>
                                </CertifyingAgencySectionFields>
                            </CertifyingAgencySection>
                            <IdentificationProductsTitleSection>
                                <TitleComponent>
                                    <div style={{ width: '22px' }}>II.</div>
                                    IDENTIFICATION OF THE PRODUCTS
                                </TitleComponent>
                            </IdentificationProductsTitleSection>
                            <IdentificationProductsSection>
                                <IdentificationProductsTableHeaderContainer>
                                    <TableHeaderCell style={{ width: '230px' }}>
                                        Product Description
                                    </TableHeaderCell>
                                    <TableHeaderCell style={{ flex: '1 0 0' }}>
                                        Brand
                                    </TableHeaderCell>
                                    <TableHeaderCell style={{ flex: '1 0 0' }}>
                                        Product Code/ Batch No./ Lot No.
                                    </TableHeaderCell>
                                    <TableHeaderCell style={{ flex: '1 0 0' }}>
                                        Number & Type of Packages
                                    </TableHeaderCell>
                                    <TableHeaderCell style={{ flex: '1 0 0' }}>
                                        Net weight (Gross Weight)
                                    </TableHeaderCell>
                                    <TableHeaderCell style={{ flex: '1 0 0' }}>
                                        Production Date
                                    </TableHeaderCell>
                                    <TableHeaderCell style={{ flex: '1 0 0' }}>
                                        Expiry Date
                                    </TableHeaderCell>
                                </IdentificationProductsTableHeaderContainer>
                                {products}
                            </IdentificationProductsSection>
                            <IdentificationProductsTransportSection>
                                <IdentificationProductsTransportContainer>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Means of Transport:
                                        </div>
                                        {document.meansOfTransport}
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Vessel Name/Flight Number:
                                        </div>
                                        {document.vesselNameFlightNumber}
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Container No.:
                                        </div>
                                        {document.containerNo}
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Seal No.:
                                        </div>
                                        {document.sealNo}
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            ETD:
                                        </div>
                                        {etd}
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Place of Dispatch:
                                        </div>
                                        {document.placeOfDispatch}
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Shipping Marks:
                                        </div>
                                        {document.shippingMarks}
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Remarks:
                                        </div>
                                        {document.remarks}
                                    </FieldComponent>
                                </IdentificationProductsTransportContainer>
                            </IdentificationProductsTransportSection>
                            <SectionWithTitleAndFields>
                                <TitleComponent>
                                    <div style={{ width: '22px' }}>III.</div>
                                    ORIGIN AND PROVENENCE OF THE PRODUCTS
                                </TitleComponent>
                                <SectionContainerWithTitleAndFields>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Name and Address of
                                            <br />
                                            Manufacturer:
                                        </div>
                                        {
                                            document.originAndProvenence
                                                .nameAddressOfManufacturer
                                        }
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Processing Premise Licence No.:
                                        </div>
                                        {
                                            document.originAndProvenence
                                                .processingPremiseLicenseNo
                                        }
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Name and Address of Consignor:
                                        </div>
                                        {
                                            document.originAndProvenence
                                                .nameAddressOfConsignor
                                        }
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Date of inspection:
                                        </div>
                                        {dateOfInspection}
                                    </FieldComponent>
                                </SectionContainerWithTitleAndFields>
                            </SectionWithTitleAndFields>
                            <SectionWithTitleAndFields>
                                <TitleComponent>
                                    <div style={{ width: '22px' }}>IV.</div>
                                    DESTINATION OF THE PRODUCTS
                                </TitleComponent>
                                <SectionContainerWithTitleAndFields>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Country/Region of Destination:
                                        </div>
                                        {
                                            document.destination
                                                .countryRegionOfDestination
                                        }
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Name and Address of Consignee:
                                        </div>
                                        {
                                            document.destination
                                                .nameAddressOfConsigee
                                        }
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Import Permit No.:
                                        </div>
                                        {document.destination.importPermitNo}
                                    </FieldComponent>
                                    <FieldComponent>
                                        <div
                                            style={{
                                                width: '192px',
                                                fontWeight: '700',
                                            }}
                                        >
                                            Purpose:
                                        </div>
                                        {document.destination.purpose}
                                    </FieldComponent>
                                </SectionContainerWithTitleAndFields>
                            </SectionWithTitleAndFields>
                            <SectionWithTitleAndFields>
                                <TitleComponent>
                                    <div style={{ width: '22px' }}>V.</div>
                                    ATTESTATION
                                </TitleComponent>
                                <AttestationContainer>
                                    <AttestationText>
                                        I, the undersigned, certify that:
                                        <br />
                                        <br />
                                    </AttestationText>
                                </AttestationContainer>
                                <AttestationContainer
                                    style={{ paddingBottom: '8px' }}
                                >
                                    <AttestationText>
                                        the consignment is found to be fit for
                                        human consumption based on the
                                        laboratory analysis of the
                                        above-mentioned consignment.
                                        <br />
                                        On analysis, the following results were
                                        obtained:-
                                        <br />
                                        {document.attestation.laboratoryResults}
                                        <br />
                                        D.L. = Detection Limit
                                        <br />
                                        Note: '&lt; denotes less than
                                        <br />
                                        <br />
                                        I have examined the manufacturer's
                                        declaration and has no reason to doubt
                                        the truth of any particular in the
                                        declaration. (If endorsement for
                                        manufacturer's declaration button is
                                        checked)
                                        <br />
                                    </AttestationText>
                                </AttestationContainer>
                            </SectionWithTitleAndFields>
                            <SectionWithTitleAndFields>
                                <FieldComponent>
                                    <div
                                        style={{
                                            width: '192px',
                                            fontWeight: '700',
                                        }}
                                    >
                                        Issued in Singapore on:
                                    </div>
                                    {issuedDate}
                                </FieldComponent>
                                <AttestationText style={{ paddingTop: '24px' }}>
                                    This certificate is only valid for 12
                                    months. Amendment to this certificate and
                                    photo copy of this certificate are not valid
                                    unless countersigned by an authorised
                                    officer of Singapore Food Agency.
                                </AttestationText>
                                <IssuanceSignatureContainer>
                                    <IssuanceSignatureContainerSpacer></IssuanceSignatureContainerSpacer>
                                    <SignatureContainer>
                                        <SignatureImg
                                            src={document.signeeSignature_image}
                                        />
                                        <SignatureNameComponent>
                                            {document.signeeName}
                                            <div>Singapore Food Agency</div>
                                        </SignatureNameComponent>
                                    </SignatureContainer>
                                </IssuanceSignatureContainer>
                            </SectionWithTitleAndFields>
                            <QRSectionSection>
                                <QRSectionContainer>
                                    Present QR code for official authority to
                                    scan for verification
                                    <QRCodeContainer>
                                        <QRCode>
                                            <QRCodeSVG
                                                value={qrPayload}
                                                size={256}
                                            />
                                        </QRCode>
                                    </QRCodeContainer>
                                </QRSectionContainer>
                            </QRSectionSection>
                        </AppearWhenBiggerThanMobile>
                        <AppearWhenSmallerThanMobile>
                            <LogoSection>
                                <LogoSectionContainer>
                                    <div
                                        style={{
                                            alignSelf: 'stretch',
                                            textAlign: 'right',
                                            fontSize: '16px',
                                            fontWeight: '700',
                                            lineHeight: '125%',
                                        }}
                                    >
                                        {document.certificateNumber}
                                    </div>
                                    <MobileLogoSectionContainerLogoContainer>
                                        <Logo src={logoImgSrc} />
                                        <LogoSectionAddress>
                                            <div
                                                style={{
                                                    fontFamily: 'Arial',
                                                    fontSize: '16px',
                                                    fontWeight: '700',
                                                    lineHeight: '150%',
                                                }}
                                            >
                                                Singapore Food Agency
                                            </div>
                                            52 Jurong Gateway Road #14-01
                                            Singapore 608550
                                        </LogoSectionAddress>
                                    </MobileLogoSectionContainerLogoContainer>
                                </LogoSectionContainer>
                                <div
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        lineHeight: '125%',
                                    }}
                                >
                                    EXPORT HEALTH CERTIFICATE
                                </div>
                            </LogoSection>
                            <CertifyingAgencySection>
                                <TitleComponent>
                                    <div style={{ width: '22px' }}>I.</div>
                                    CERTIFYING AGENCY
                                </TitleComponent>
                                <CertifyingAgencySectionFields>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Exporting Country:
                                        </div>
                                        {document.exportingCountry}
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Issuing Authority:
                                        </div>
                                        Singapore Food Agency (SFA)
                                    </MobileFieldComponent>
                                </CertifyingAgencySectionFields>
                            </CertifyingAgencySection>
                            <IdentificationProductsTitleSection>
                                <TitleComponent>
                                    <div style={{ width: '22px' }}>II.</div>
                                    IDENTIFICATION OF THE PRODUCTS
                                </TitleComponent>
                            </IdentificationProductsTitleSection>
                            {mobileProducts}
                            <IdentificationProductsTransportSection>
                                <IdentificationProductsTransportContainer>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Means of Transport:
                                        </div>
                                        {document.meansOfTransport}
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Vessel Name/Flight Number:
                                        </div>
                                        {document.vesselNameFlightNumber}
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Container No.:
                                        </div>
                                        {document.containerNo}
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Seal No.:
                                        </div>
                                        {document.sealNo}
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            ETD:
                                        </div>
                                        {etd}
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Place of Dispatch:
                                        </div>
                                        {document.placeOfDispatch}
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Shipping Marks:
                                        </div>
                                        {document.shippingMarks}
                                        {!document.shippingMarks && <br />}
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Remarks:
                                        </div>
                                        {document.remarks}
                                        {!document.remarks && <br />}
                                    </MobileFieldComponent>
                                </IdentificationProductsTransportContainer>
                            </IdentificationProductsTransportSection>
                            <SectionWithTitleAndFields>
                                <TitleComponent>
                                    <div style={{ width: '22px' }}>III.</div>
                                    ORIGIN AND PROVENENCE OF THE PRODUCTS
                                </TitleComponent>
                                <SectionContainerWithTitleAndFields>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Name and Address of Manufacturer:
                                        </div>
                                        {
                                            document.originAndProvenence
                                                .nameAddressOfManufacturer
                                        }
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Processing Premise Licence No.:
                                        </div>
                                        {
                                            document.originAndProvenence
                                                .processingPremiseLicenseNo
                                        }
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Name and Address of Consignor:
                                        </div>
                                        {
                                            document.originAndProvenence
                                                .nameAddressOfConsignor
                                        }
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Date of inspection:
                                        </div>
                                        {dateOfInspection}
                                        {dateOfInspection}
                                        {!dateOfInspection && <br />}
                                    </MobileFieldComponent>
                                </SectionContainerWithTitleAndFields>
                            </SectionWithTitleAndFields>
                            <SectionWithTitleAndFields>
                                <TitleComponent>
                                    <div style={{ width: '22px' }}>IV.</div>
                                    DESTINATION OF THE PRODUCTS
                                </TitleComponent>
                                <SectionContainerWithTitleAndFields>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Country/Region of Destination:
                                        </div>
                                        {
                                            document.destination
                                                .countryRegionOfDestination
                                        }
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Name and Address of Consignee:
                                        </div>
                                        {
                                            document.destination
                                                .nameAddressOfConsigee
                                        }
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Import Permit No.:
                                        </div>
                                        {document.destination.importPermitNo}
                                        {document.destination.importPermitNo}
                                        {!document.destination
                                            .importPermitNo && <br />}
                                    </MobileFieldComponent>
                                    <MobileFieldComponent>
                                        <div
                                            style={{
                                                fontWeight: '700',
                                            }}
                                        >
                                            Purpose:
                                        </div>
                                        {document.destination.purpose}
                                    </MobileFieldComponent>
                                </SectionContainerWithTitleAndFields>
                            </SectionWithTitleAndFields>
                            <SectionWithTitleAndFields>
                                <TitleComponent>
                                    <div style={{ width: '22px' }}>V.</div>
                                    ATTESTATION
                                </TitleComponent>
                                <AttestationContainer>
                                    <MobileAttestationText>
                                        I, the undersigned, certify that:
                                        <br />
                                        <br />
                                    </MobileAttestationText>
                                </AttestationContainer>
                                <AttestationContainer
                                    style={{ paddingBottom: '8px' }}
                                >
                                    <MobileAttestationText>
                                        the consignment is found to be fit for
                                        human consumption based on the
                                        laboratory analysis of the
                                        above-mentioned consignment.
                                        <br />
                                        On analysis, the following results were
                                        obtained:-
                                        <br />
                                        {document.attestation.laboratoryResults}
                                        <br />
                                        D.L. = Detection Limit
                                        <br />
                                        Note: '&lt; denotes less than
                                        <br />
                                        <br />
                                        I have examined the manufacturer's
                                        declaration and has no reason to doubt
                                        the truth of any particular in the
                                        declaration. (If endorsement for
                                        manufacturer's declaration button is
                                        checked)
                                        <br />
                                    </MobileAttestationText>
                                </AttestationContainer>
                            </SectionWithTitleAndFields>
                            <SectionWithTitleAndFields>
                                <MobileFieldComponent>
                                    <div
                                        style={{
                                            fontWeight: '700',
                                        }}
                                    >
                                        Issued in Singapore on:
                                    </div>
                                    {issuedDate}
                                </MobileFieldComponent>
                                <MobileAttestationText
                                    style={{ paddingTop: '24px' }}
                                >
                                    This certificate is only valid for 12
                                    months. Amendment to this certificate and
                                    photo copy of this certificate are not valid
                                    unless countersigned by an authorised
                                    officer of Singapore Food Agency.
                                </MobileAttestationText>
                                <IssuanceSignatureContainer>
                                    <SignatureContainer>
                                        <SignatureImg
                                            src={document.signeeSignature_image}
                                        />
                                        <SignatureNameComponent>
                                            {document.signeeName}
                                            <div>Singapore Food Agency</div>
                                        </SignatureNameComponent>
                                    </SignatureContainer>
                                </IssuanceSignatureContainer>
                            </SectionWithTitleAndFields>
                            <QRSectionSection>
                                <QRSectionContainer>
                                    Present QR code for official authority to
                                    scan for verification
                                    <QRCodeContainer>
                                        <QRCode>
                                            <QRCodeSVG
                                                value={qrPayload}
                                                size={256}
                                            />
                                        </QRCode>
                                    </QRCodeContainer>
                                </QRSectionContainer>
                            </QRSectionSection>
                        </AppearWhenSmallerThanMobile>
                    </DefaultTypography>
                </A4R>
            </TemplateContainer>
        </>
    )
}
