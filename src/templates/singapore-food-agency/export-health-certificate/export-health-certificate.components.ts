import { size } from 'components/paper-size/a4-resizable'
import styled from 'styled-components'

export const AppearWhenSmallerThanMobile = styled.div`
    display: none;
    @media only screen and (max-width: ${size.tablet}) {
        display: block;
    }
`

export const AppearWhenBiggerThanMobile = styled.div`
    display: block;
    @media only screen and (max-width: ${size.tablet}) {
        display: none;
    }
`

export const DefaultTypography = styled.div`
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    white-space: pre-line;
`

// DESKTOP COMPONENTS
export const LogoSection = styled.div`
    display: flex;
    padding: 0px 8px 6px 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
    border: 1px solid #000;
`
export const LogoSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    align-self: stretch;
`
export const LogoSectionContainerLogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const Logo = styled.img`
    width: 191px;
    height: 90px;
`

export const LogoSectionAddress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
`

export const CertifyingAgencySection = styled.div`
    display: flex;
    padding: 0px 8px 8px 8px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
`

export const TitleComponent = styled.div`
    display: flex;
    padding-bottom: 12px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    font-weight: 700;
`

export const CertifyingAgencySectionFields = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    align-self: stretch;
`

export const FieldComponent = styled.div`
    display: flex;
    padding: 0px 30px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`
export const IdentificationProductsTitleSection = styled.div`
    display: flex;
    padding: 0px 8px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
`

export const IdentificationProductsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    border-right: 1px solid #000;
`

export const IdentificationProductsTableHeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
    align-self: stretch;
`

export const TableHeaderCell = styled.div`
    display: flex;
    padding: 2px 8px 12px 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    border-bottom: 1px solid var(--black, #000);
    border-left: 1px solid var(--black, #000);

    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
`

export const IdentificationProductsTableRowContainer = styled.div`
    display: flex;
    align-items: flex-start;
    align-self: stretch;
`

export const TableCell = styled.div`
    display: flex;
    padding: 2px 8px 12px 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    border-bottom: 1px solid var(--black, #000);
    border-left: 1px solid var(--black, #000);

    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
`
export const IdentificationProductsTransportSection = styled.div`
    display: flex;
    padding: 2px 8px 8px 8px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
`

export const IdentificationProductsTransportContainer = styled.div`
    display: flex;
    padding-top: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    align-self: stretch;
`

export const SectionWithTitleAndFields = styled.div`
    display: flex;
    padding: 0px 8px 8px 8px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
`

export const SectionContainerWithTitleAndFields = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    align-self: stretch;
`

export const AttestationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`

export const AttestationText = styled.div`
    display: flex;
    padding: 0px 30px;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    align-self: stretch;

    flex: 1 0 0;
`

export const IssuanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    align-self: stretch;
`

export const IssuanceSignatureContainer = styled.div`
    display: flex;
    padding: 56px 0px 16px 0px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

export const IssuanceSignatureContainerSpacer = styled.div`
    flex: 1 0 0;
    align-self: stretch;
`

export const SignatureContainer = styled.div`
    display: flex;
    padding: 0px 30px;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
`

export const SignatureImg = styled.img`
    width: auto;
    height: auto;
`

export const SignatureNameComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;

    border-top: 1px solid #000;
`
export const QRSectionSection = styled.div`
    display: flex;
    padding: 0px 8px 8px 8px;
    flex-direction: column;
    align-items: center;
    align-self: stretch;

    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
`

export const QRSectionContainer = styled.div`
    display: flex;
    padding: 24px 0px;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`

export const QRCodeContainer = styled.div`
    display: flex;
    padding: 8px;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    border: 1px solid var(--gray-400, #9ca3af);
    background: #fff;
`

export const QRCode = styled.div`
    max-width: 256px;
    max-height: 256px;
    background-color: #ccc;
`

// MOBILE COMPONENTS
export const MobileLogoSectionContainerLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    align-self: stretch;
`

export const MobileFieldComponent = styled.div`
    display: flex;
    padding: 0px 22px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`
export const MobileProductFieldComponent = styled.div`
    display: flex;
    padding: 0px 32px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`
export const MobileProductComponent = styled.div`
    display: flex;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    align-self: stretch;

    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;

    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
`
export const MobileProductComponentIndex = styled.div`
    display: flex;
    padding-left: 32px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
`

export const MobileAttestationText = styled.div`
    display: flex;
    padding: 0px 22px;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    align-self: stretch;

    flex: 1 0 0;
`
