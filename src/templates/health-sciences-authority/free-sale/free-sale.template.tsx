import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { HealthSciencesAuthorityFreeSaleOaDoc } from './free-sale.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { A4 } from 'components/paper-size'
import mainBg from '../common/assets/freesale-a4-bg.png'
import hsaStamp from '../common/assets/hsa-stamp.svg'
import { DateTime } from 'luxon'

const MainDiv = styled.div`
    // A4 has a 2cm padding
    padding-left: calc(96px - 2cm);
    padding-right: calc(96px - 2cm);
    padding-top: calc(252px - 2cm);
`

const Title = styled.p`
    margin: 0;
    color: #000;
    text-align: center;
    font-family: Times New Roman;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 27px */
    letter-spacing: -0.18px;
`

const Text = styled.p`
    margin: 0;
    color: #000;
    font-family: Times New Roman;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 115%; /* 16.1px */
    letter-spacing: -0.07px;
`

const CertNo = styled.p`
    margin: 0px;
    color: #000;
    font-family: Times New Roman;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 22.4px */
    letter-spacing: -0.07px;
    top: 167px;
    right: 96px;
    position: absolute;
`

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const Row = styled.div`
    display: flex;
    gap: 16px;
`

const RowNumber = styled(Text)`
    width: 21px;
`

const Ingredient = styled(Text)`
    flex-grow: 1;
`

const PageNo = styled.p`
    position: absolute;
    right: 94px;
    bottom: 87px;
    color: #000;
    text-align: right;
    font-family: Times New Roman;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 115%; /* 16.1px */
    letter-spacing: -0.07px;
`

export const HealthSciencesAuthorityFreeSaleTemplate: FunctionComponent<
    TemplateProps<HealthSciencesAuthorityFreeSaleOaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    const countries = document.countries.map((country) => country.toUpperCase())
    const dateOfIssue = DateTime.fromISO(document.dateOfIssue).toFormat(
        'dd MMMM yyyy'
    )
    const ingredients = document.ingredients.map((ingredient, index) => (
        <Row key={index}>
            <RowNumber>{index + 1}.</RowNumber>
            <Ingredient>{ingredient.name}</Ingredient>
            <Text>{ingredient.strength}</Text>
        </Row>
    ))

    return (
        <>
            <Helmet>
                <title>health-sciences-authority - free-sale</title>
            </Helmet>
            <A4 $bgImg={mainBg}>
                <CertNo>
                    CERTIFICATE NO:<br></br>
                    {document.certNumber}
                </CertNo>
                <PageNo>
                    <span style={{ fontWeight: '700' }}>1</span> of{' '}
                    <span style={{ fontWeight: '700' }}>2</span>
                </PageNo>
                <MainDiv>
                    <Title>
                        THE MEDICINES ACT 1975<br></br>CERTIFICATE FOR EXPORTER
                        OF A MEDICINAL PRODUCT<br></br>(FREE SALE CERTIFICATE)
                    </Title>
                    <Text style={{ marginTop: '32px' }}>
                        A certificate is hereby granted under Section 22 of the
                        Medicines Act 1975 for the export of{' '}
                        {document.typeOfMedicinalProduct} listed in the attached
                        Schedule to:
                        <br></br>
                        {countries.join(', ')}
                        <br></br>
                        <br></br>
                        <span style={{ fontWeight: 'bold' }}>
                            It is hereby certified that the type of medicinal
                            product listed in the Schedule:
                        </span>
                        <br></br>
                        <br></br>
                        <span style={{ fontWeight: 'bold' }}>
                            Manufactured by:
                        </span>
                        <br></br>
                        {document.manufacturerName}
                        <br></br>
                        {document.manufacturerAddress}
                        <br></br>
                        <br></br>
                        <span style={{ fontWeight: 'bold' }}>
                            Distributed by:
                        </span>
                        <br></br>
                        {document.distributorName}
                        <br></br>
                        {document.distributorAddress}
                        <br></br>
                        <br></br>
                        can be freely sold in Singapore without a licence or
                        product registration, subject to compliance with
                        applicable laws.
                        <br></br>
                        <br></br>
                        The free sale status of the product stated in the
                        attached Schedule is predicated on the product formula
                        and intended use as specified. The product has not been
                        evaluated by the Health Sciences Authority (HSA) for its
                        safety, efficacy, and quality. The distribution and
                        manufacturing premises of the product have not been
                        assessed by the HSA. The companies named on this
                        certificate are responsible to ensure the safety and
                        quality of the product for use by the consumers. This
                        certificate shall not be construed as an endorsement or
                        approval by the HSA of the product, or any claims made
                        in relation to the product.
                        <br></br>
                        <br></br>
                        The information on this certificate and the attached
                        Schedule is accurate on the date of issuance based on
                        the information submitted to the HSA.
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <span style={{ fontWeight: 'bold' }}>
                            Date of issue: {dateOfIssue}
                        </span>
                        <br></br>
                        <br></br>
                    </Text>
                    <FlexDiv>
                        <Text>
                            Health Products Regulation Group<br></br>
                            Health Sciences Authority<br></br>
                            11 Biopolis Way<br></br>
                            #11-01, Helios, Singapore 138667<br></br>
                            Tel: 65-68661111<br></br>
                            Email: HSA_Certification@hsa.gov.sg
                        </Text>
                        <div>
                            <img
                                style={{
                                    height: '48px',
                                    width: 'auto',
                                    maxWidth: '200px',
                                }}
                                src={document.signature_image}
                                alt="signature"
                            />
                            <Text>
                                {document.designationOfSignee}
                                <br></br>
                                Audit and Licensing Division<br></br>
                                For Chief Executive<br></br>
                                Health Sciences Authority of Singapore
                            </Text>
                        </div>
                    </FlexDiv>
                </MainDiv>
                <img
                    style={{
                        marginTop: '8px',
                        position: 'absolute',
                        right: '225px',
                        bottom: '34px',
                    }}
                    src={hsaStamp}
                    alt="HSA stamp"
                ></img>
            </A4>
            <A4 $bgImg={mainBg}>
                <CertNo>
                    CERTIFICATE NO:<br></br>
                    {document.certNumber}
                </CertNo>
                <PageNo>
                    <span style={{ fontWeight: '700' }}>2</span> of{' '}
                    <span style={{ fontWeight: '700' }}>2</span>
                </PageNo>
                <MainDiv>
                    <Title>THE SCHEDULE</Title>
                    <Text style={{ marginTop: '32px' }}>
                        <span style={{ fontWeight: 'bold' }}>
                            Product name in Singapore:
                        </span>{' '}
                        {document.productName}
                        <br></br>
                        <br></br>
                        <span style={{ fontWeight: 'bold' }}>
                            Brand name in the importing country as declared by
                            the company:
                        </span>
                        <br></br>
                        {document.brandName}
                        <br></br>
                        <br></br>
                        <span style={{ fontWeight: 'bold' }}>
                            Intended use:
                        </span>{' '}
                        {document.intendedUse}
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <span style={{ fontWeight: 'bold' }}>Formula:</span>
                        <br></br>
                        <br></br>
                    </Text>
                    <div style={{ width: '440px' }}>
                        <Row>
                            <RowNumber
                                style={{
                                    fontWeight: 'bold',
                                    textDecoration: 'underline',
                                }}
                            >
                                No.
                            </RowNumber>
                            <Ingredient
                                style={{
                                    fontWeight: 'bold',
                                    textDecoration: 'underline',
                                }}
                            >
                                Name of Ingredients
                            </Ingredient>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    textDecoration: 'underline',
                                }}
                            >
                                Strength
                            </Text>
                        </Row>
                        {ingredients}
                    </div>
                </MainDiv>
                <img
                    style={{
                        marginTop: '8px',
                        position: 'absolute',
                        right: '225px',
                        bottom: '34px',
                    }}
                    src={hsaStamp}
                    alt="HSA stamp"
                ></img>
            </A4>
        </>
    )
}
