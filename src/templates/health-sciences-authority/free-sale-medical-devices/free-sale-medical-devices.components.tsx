import styled from 'styled-components'

export const Pg1MainDiv = styled.div`
    margin-left: 96px;
    margin-right: 96px;
    margin-top: 258px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 36px;
`

export const Pg1MainDivItem = styled.div`
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    z-index: 0;
`
export const Pg1HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    gap: 33px;
`

export const Pg1HeaderDivItem = styled.div`
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;

    color: #000000;
`

export const Pg1BodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 18px;
`

export const Pg1BodyDivItem = styled.div`
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`

export const Pg1TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
`

export const Pg1TitleDivItem = styled.div`
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;

    color: #000000;
`

export const Pg1InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    font-family: 'Times New Roman';
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;

    color: #000000;
`

export const Pg1InfoFieldsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Pg1InfoFieldDetailsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
`

export const Pg1InfoFieldDetailsDivItem = styled.div`
    width: 190px;
`

export const Pg1InfoFieldDetailsDivItemValue = styled.div`
    width: 284px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
`

export const Pg1PointDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;
`

export const Pg1PointDivItem = styled.div`
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
`

export const Pg1BottomDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 31px;

    align-self: stretch;
`
export const Pg1SignatoryDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
`

export const Pg1SigneeSignatureComponent = styled.div`
    width: 185px;
    height: 92px;

    text-align: center;
    align-items: flex-end;
    justify-content: center;
    display: flex;
`

export const Pg1SigneeSignatureImg = styled.img`
    display: block;
    max-width: 185px;
    max-height: 92px;
`

export const Pg1SignatoryDetailsDiv = styled.div`
    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 14.3449px;
    line-height: 115%;
    /* or 16px */
    letter-spacing: -0.005em;

    color: #000000;
`
export const Pg1FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 11px;
`

export const Pg1FooterEndorsement = styled.div`
    /* HSA MD/italics info */
    font-family: 'Times New Roman';
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
    /* or 14px */

    /* gray/500 */
    color: #6b7280;
`

export const Pg1FooterAddress = styled.div`
    align-self: stretch;

    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 120%;
    /* or 12px */
    text-align: center;

    color: #000000;
`
export const Pg2MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 96px 50px;
    gap: 24px;
`

export const Pg2HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const Pg2HeaderLogoImg = styled.img`
    flex-grow: 1;
    height: 81.58px;
    width: 143px;
`

export const Pg2CertificateNoDiv = styled.div`
    position: absolute;
    top: 122px;
    right: 158px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;

    color: #000000;
`

export const Pg2ScheduleDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: 18px;
`
export const Pg2ScheduleDivHeaderFooterItem = styled.div`
    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;

    text-align: center;

    color: #000000;
`

export const Pg2ScheduleDivTableItem = styled.div`
    table {
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid black;
        padding: 10px 8px;
    }

    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    /* or 19px */

    color: #000000;
`

export const Pg2StampDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
`

export const Pg2StampImg = styled.img`
    margin-top: 8.42px;
    margin-right: 34.73px;
    height: 94.27px;
    width: 95.29px;
`

export const PgFooterDiv = styled.div`
    position: absolute;
    left: 96px;
    right: 96px;
    bottom: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;

    color: #000000;
`

export const Pg3AppendixTableItemTitle = styled.div`
    margin-bottom: 8px;
    margin-left: 16px;

    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;

    color: #000000;
`

export const Pg4MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 96px 96px 50px;
    gap: 40px;

    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;

    color: #000000;
`

export const PgTermsTitleDiv = styled.div`
    width: 100%;
    font-weight: 700;
    text-align: center;
`

export const PgTermsContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
`

export const PgTermsSectionDiv = styled.div`
    width: 100%
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const PgTermsSectionBulletDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 0px 0px 20px;
    gap: 8px;
`
