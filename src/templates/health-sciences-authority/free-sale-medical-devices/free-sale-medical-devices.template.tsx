import { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { HealthSciencesAuthorityFreeSaleMedicalDevicesOaDoc } from './free-sale-medical-devices.types'
import { Helmet } from 'react-helmet-async'
import { A4, A4HeightPx4Pages, A4WidthPx } from 'components/paper-size'
import mainBg from '../common/assets/medicaldevice-a4-bg.png'
import { DateTime } from 'luxon'
import hsaStamp from '../common/assets/hsa-stamp.svg'
import hsaLogo from '../common/assets/logo-hsa.svg'
import {
    Pg1MainDiv,
    Pg1MainDivItem,
    Pg1HeaderDiv,
    Pg1HeaderDivItem,
    Pg1BodyDiv,
    Pg1TitleDiv,
    Pg1TitleDivItem,
    Pg1InfoDiv,
    Pg1PointDiv,
    Pg1PointDivItem,
    Pg1BottomDiv,
    Pg1SignatoryDiv,
    Pg1SigneeSignatureComponent,
    Pg1SigneeSignatureImg,
    Pg1SignatoryDetailsDiv,
    Pg1FooterDiv,
    Pg1FooterEndorsement,
    Pg1FooterAddress,
    Pg2CertificateNoDiv,
    Pg2HeaderDiv,
    Pg2HeaderLogoImg,
    Pg2MainDiv,
    Pg2ScheduleDiv,
    Pg2ScheduleDivHeaderFooterItem,
    Pg2ScheduleDivTableItem,
    Pg2StampDiv,
    Pg2StampImg,
    Pg3AppendixTableItemTitle,
    PgFooterDiv,
    Pg4MainDiv,
    PgTermsContentDiv,
    PgTermsSectionBulletDiv,
    PgTermsSectionDiv,
    PgTermsTitleDiv,
    Pg1InfoFieldDetailsDiv,
    Pg1InfoFieldDetailsDivItem,
    Pg1InfoFieldDetailsDivItemValue,
    Pg1InfoFieldsDiv,
} from './free-sale-medical-devices.components'
import { useShrinkToViewport } from 'hooks/useShrinkToViewport'
import { ScalableDocument } from 'components/scalable-document/ScalableDocument'

const documentWidth = A4WidthPx
const documentHeight = A4HeightPx4Pages

export const HealthSciencesAuthorityFreeSaleMedicalDevicesTemplate: FunctionComponent<
    TemplateProps<HealthSciencesAuthorityFreeSaleMedicalDevicesOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const issueDate = DateTime.fromISO(document.DateOfIssue).toFormat(
        'dd MMM yyyy'
    )

    const scehduleList = document.schedule.map((item, index) => (
        <tr>
            <td style={{ textAlign: 'center' }}>{index + 1}.</td>
            <td>{item.deviceProprietaryOrBrandName}</td>
            <td>{item.intendedUse}</td>
        </tr>
    ))

    const appendixList = document.schedule.map((item, index) => (
        <>
            <Pg3AppendixTableItemTitle>
                <b>
                    {index + 1}. {item.deviceProprietaryOrBrandName}
                </b>
            </Pg3AppendixTableItemTitle>

            <table style={{ width: '100%', marginBottom: '24px' }}>
                <tr>
                    <th>S/No.</th>
                    <th style={{ textAlign: 'left' }}>Model/ Description</th>
                    <th style={{ textAlign: 'left' }}>Product Number</th>
                </tr>
                {item.appendix.map((adxItem, index) => (
                    <tr>
                        <td style={{ textAlign: 'center' }}>{index + 1}.</td>
                        <td>{adxItem.modelOrDescription}</td>
                        <td>{adxItem.productNumber}</td>
                    </tr>
                ))}
            </table>
        </>
    ))

    const transformScale = useShrinkToViewport(documentWidth)
    return (
        <>
            <Helmet>
                <title>
                    health-sciences-authority - free-sale-medical-devices
                </title>
            </Helmet>
            <ScalableDocument
                $scale={transformScale}
                $documentHeight={documentHeight}
            >
                <A4 $bgImg={mainBg} $padding="0.1px">
                    <Pg1MainDiv>
                        <Pg1MainDivItem>
                            <Pg1HeaderDiv>
                                <Pg1HeaderDivItem>
                                    HSA 600:36/18
                                    <br />
                                    Date of Issue: {issueDate}
                                </Pg1HeaderDivItem>
                                <Pg1HeaderDivItem>
                                    Certificate No.
                                    <br />
                                    <b>{document.certificateNumber}</b>
                                </Pg1HeaderDivItem>
                            </Pg1HeaderDiv>
                        </Pg1MainDivItem>
                        <Pg1MainDivItem>
                            <Pg1BodyDiv>
                                <Pg1TitleDiv>
                                    <Pg1TitleDivItem
                                        style={{ textAlign: 'center' }}
                                    >
                                        <b>
                                            CERTIFICATE OF FREE SALE FOR MEDICAL
                                            DEVICE
                                        </b>
                                    </Pg1TitleDivItem>
                                    <Pg1TitleDivItem>
                                        It is hereby certified that the
                                        following medical device products may be
                                        supplied in Singapore subject to the
                                        device being listed on the Singapore
                                        Medical Device Register.
                                    </Pg1TitleDivItem>
                                </Pg1TitleDiv>
                                <Pg1InfoDiv>
                                    <Pg1InfoFieldsDiv>
                                        <Pg1InfoFieldDetailsDiv>
                                            <Pg1InfoFieldDetailsDivItem>
                                                Device Proprietary/Brand Name
                                            </Pg1InfoFieldDetailsDivItem>
                                            <Pg1InfoFieldDetailsDivItemValue>
                                                <div>:</div>
                                                <div>
                                                    Please refer to attached
                                                    Schedule.
                                                </div>
                                            </Pg1InfoFieldDetailsDivItemValue>
                                        </Pg1InfoFieldDetailsDiv>
                                    </Pg1InfoFieldsDiv>
                                    <Pg1InfoFieldsDiv>
                                        <Pg1InfoFieldDetailsDiv>
                                            <Pg1InfoFieldDetailsDivItem>
                                                Intended Use
                                            </Pg1InfoFieldDetailsDivItem>
                                            <Pg1InfoFieldDetailsDivItemValue>
                                                <div>:</div>
                                                <div>
                                                    Please refer to attached
                                                    Schedule.
                                                </div>
                                            </Pg1InfoFieldDetailsDivItemValue>
                                        </Pg1InfoFieldDetailsDiv>
                                    </Pg1InfoFieldsDiv>
                                    <Pg1InfoFieldsDiv>
                                        <Pg1InfoFieldDetailsDiv>
                                            <Pg1InfoFieldDetailsDivItem>
                                                Manufacturing Site
                                            </Pg1InfoFieldDetailsDivItem>
                                            <Pg1InfoFieldDetailsDivItemValue>
                                                <div>:</div>
                                                <div>
                                                    {
                                                        document.manufacturingSiteName
                                                    }
                                                    <br />
                                                    {
                                                        document.manufacturingSiteAddress
                                                    }
                                                </div>
                                            </Pg1InfoFieldDetailsDivItemValue>
                                        </Pg1InfoFieldDetailsDiv>
                                    </Pg1InfoFieldsDiv>
                                    <Pg1InfoFieldsDiv>
                                        <Pg1InfoFieldDetailsDiv>
                                            <Pg1InfoFieldDetailsDivItem>
                                                Product Owner
                                            </Pg1InfoFieldDetailsDivItem>
                                            <Pg1InfoFieldDetailsDivItemValue>
                                                <div>:</div>
                                                <div>
                                                    {document.productOwnerName}
                                                    <br />
                                                    {
                                                        document.productOwnerAddress
                                                    }
                                                </div>
                                            </Pg1InfoFieldDetailsDivItemValue>
                                        </Pg1InfoFieldDetailsDiv>
                                    </Pg1InfoFieldsDiv>
                                    <Pg1InfoFieldsDiv>
                                        <Pg1InfoFieldDetailsDiv>
                                            <Pg1InfoFieldDetailsDivItem>
                                                Registrant
                                            </Pg1InfoFieldDetailsDivItem>
                                            <Pg1InfoFieldDetailsDivItemValue>
                                                <div>:</div>
                                                <div>
                                                    {document.registrantName}
                                                    <br />
                                                    {document.registrantAddress}
                                                </div>
                                            </Pg1InfoFieldDetailsDivItemValue>
                                        </Pg1InfoFieldDetailsDiv>
                                    </Pg1InfoFieldsDiv>
                                    <div>
                                        Please refer to the attached definition
                                        of the terms used in this certificate
                                    </div>
                                </Pg1InfoDiv>
                                <Pg1PointDiv>
                                    <Pg1PointDivItem>2</Pg1PointDivItem>
                                    <Pg1PointDivItem style={{ flex: '1' }}>
                                        The information provided in this
                                        certificate and attached Schedule is
                                        based on the information submitted to
                                        the Authority.
                                    </Pg1PointDivItem>
                                </Pg1PointDiv>
                                <Pg1PointDiv>
                                    <Pg1PointDivItem>3</Pg1PointDivItem>
                                    <Pg1PointDivItem style={{ flex: '1' }}>
                                        The information provided in this
                                        certificate and attached Schedule is
                                        accurate as on the date of issuance.
                                    </Pg1PointDivItem>
                                </Pg1PointDiv>
                                <Pg1BottomDiv>
                                    <Pg1SignatoryDiv>
                                        <Pg1SigneeSignatureComponent>
                                            <Pg1SigneeSignatureImg
                                                src={document.signature_image}
                                                alt="Signature of signee"
                                            />
                                        </Pg1SigneeSignatureComponent>
                                        <Pg1SignatoryDetailsDiv>
                                            {document.signatoryName}
                                            <br />
                                            {document.signatoryTitle}
                                            <br />
                                            for GROUP DIRECTOR
                                            <br />
                                            HEALTH PRODUCTS REGULATION GROUP
                                            <br />
                                            HEALTH SCIENCES AUTHORITY
                                        </Pg1SignatoryDetailsDiv>
                                    </Pg1SignatoryDiv>
                                    <Pg1FooterDiv>
                                        <Pg1FooterEndorsement>
                                            This certificate shall not be
                                            construed as an endorsement of the
                                            medical device product by the Health
                                            Sciences Authority
                                        </Pg1FooterEndorsement>
                                        <Pg1FooterAddress>
                                            Medical Devices Cluster, Health
                                            Products Regulation Group, Health
                                            Sciences Authority
                                            <br />
                                            11 Biopolis Way, #11-01 Helios,
                                            Singapore 138667. Tel: (65) 6866
                                            1111, Fax: (65) 6478 9028
                                        </Pg1FooterAddress>
                                    </Pg1FooterDiv>
                                </Pg1BottomDiv>
                            </Pg1BodyDiv>
                        </Pg1MainDivItem>
                    </Pg1MainDiv>
                    <img
                        style={{
                            position: 'absolute',
                            top: '818px',
                            left: '572px',
                            height: '94.27px',
                            width: '95.29px',
                        }}
                        src={hsaStamp}
                        alt="HSA stamp"
                    ></img>
                </A4>

                <A4 $padding="0">
                    <Pg2CertificateNoDiv>
                        Certificate No.
                        <br />
                        <b>{document.certificateNumber}</b>
                    </Pg2CertificateNoDiv>
                    <Pg2MainDiv>
                        <Pg2HeaderDiv>
                            <Pg2HeaderLogoImg src={hsaLogo} alt="HSA Logo" />
                        </Pg2HeaderDiv>
                        <Pg2ScheduleDiv>
                            <Pg2ScheduleDivHeaderFooterItem>
                                THE SCHEDULE
                            </Pg2ScheduleDivHeaderFooterItem>
                            <Pg2ScheduleDivTableItem>
                                <table style={{ width: '100%' }}>
                                    <tr>
                                        <th>No.</th>
                                        <th style={{ width: '240px' }}>
                                            Device Proprietary/Brand Name
                                        </th>
                                        <th>Intended Use</th>
                                    </tr>
                                    {scehduleList}
                                </table>
                            </Pg2ScheduleDivTableItem>
                            <Pg2ScheduleDivHeaderFooterItem>
                                END OF PRODUCT LIST
                            </Pg2ScheduleDivHeaderFooterItem>
                        </Pg2ScheduleDiv>
                        <Pg2StampDiv>
                            <Pg2StampImg src={hsaStamp} alt="HSA Stamp" />
                        </Pg2StampDiv>
                    </Pg2MainDiv>
                    <PgFooterDiv>
                        <div>HSA 600:36/18 dated {issueDate}</div>
                        <div>Page 1 of 2</div>
                    </PgFooterDiv>
                </A4>

                <A4 $padding="0">
                    <Pg2CertificateNoDiv>
                        Certificate No.
                        <br />
                        <b>{document.certificateNumber}</b>
                    </Pg2CertificateNoDiv>
                    <Pg2MainDiv>
                        <Pg2HeaderDiv>
                            <Pg2HeaderLogoImg src={hsaLogo} alt="HSA Logo" />
                        </Pg2HeaderDiv>
                        <Pg2ScheduleDiv>
                            <Pg2ScheduleDivHeaderFooterItem>
                                APPENDIX I
                            </Pg2ScheduleDivHeaderFooterItem>
                            <Pg2ScheduleDivTableItem>
                                {appendixList}
                            </Pg2ScheduleDivTableItem>
                            <Pg2ScheduleDivHeaderFooterItem>
                                END OF PRODUCT LIST
                            </Pg2ScheduleDivHeaderFooterItem>
                        </Pg2ScheduleDiv>
                        <Pg2StampDiv>
                            <Pg2StampImg src={hsaStamp} alt="HSA Stamp" />
                        </Pg2StampDiv>
                    </Pg2MainDiv>
                    <PgFooterDiv>
                        <div>HSA 600:36/18 dated {issueDate}</div>
                        <div>Page 2 of 2</div>
                    </PgFooterDiv>
                </A4>

                <A4 $padding="0">
                    <Pg4MainDiv>
                        <PgTermsTitleDiv>Definition of Terms</PgTermsTitleDiv>
                        <PgTermsContentDiv>
                            <PgTermsSectionDiv>
                                <b>Manufacturing Site:</b>
                                <br />
                                The location where the manufacture of a health
                                product is carried out. Manufacture, in relation
                                to a health product, means to make, fabricate,
                                produce or process the health product and
                                includes —
                                <PgTermsSectionBulletDiv>
                                    <div>(a)</div>
                                    <div>
                                        any process carried out in the course of
                                        so making, fabricating, producing or
                                        processing the health product; and
                                    </div>
                                </PgTermsSectionBulletDiv>
                                <PgTermsSectionBulletDiv>
                                    <div>(b)</div>
                                    <div>
                                        the packaging and labelling of the
                                        health product before it is supplied
                                    </div>
                                </PgTermsSectionBulletDiv>
                            </PgTermsSectionDiv>
                            <PgTermsSectionDiv>
                                <b>Product Owner:</b>
                                <br />
                                in relation to a health product, means a person
                                who –
                                <PgTermsSectionBulletDiv>
                                    <div>(a)</div>
                                    <div>
                                        supplies the health product under his
                                        own name, or under any trade-mark,
                                        design, trade name or other name or mark
                                        owned or controlled by him; and
                                    </div>
                                </PgTermsSectionBulletDiv>
                                <PgTermsSectionBulletDiv>
                                    <div>(b)</div>
                                    <div>
                                        is responsible for designing,
                                        manufacturing, assembling, processing,
                                        labelling, packaging, refurbishing or
                                        modifying the health product, or for
                                        assigning to it a purpose, whether those
                                        tasks are performed by him or on his
                                        behalf
                                    </div>
                                </PgTermsSectionBulletDiv>
                            </PgTermsSectionDiv>
                            <PgTermsSectionDiv>
                                <b>Registrant:</b>
                                <br />
                                in relation to a registered health product,
                                means the person who applied for and obtained
                                the registration of the health product under the
                                Health Products Act
                            </PgTermsSectionDiv>
                            <PgTermsSectionDiv>
                                <b>Supply:</b>
                                <br />
                                in relation to a health product, means to
                                transfer possession of the health product by any
                                means whether or not for reward, and includes
                                the following:
                                <PgTermsSectionBulletDiv>
                                    <div>(a)</div>
                                    <div>
                                        to sell the health product, whether by
                                        retail, wholesale or auction;
                                    </div>
                                </PgTermsSectionBulletDiv>
                                <PgTermsSectionBulletDiv>
                                    <div>(b)</div>
                                    <div>
                                        to expose or display the health product
                                        as an invitation to treat;
                                    </div>
                                </PgTermsSectionBulletDiv>
                                <PgTermsSectionBulletDiv>
                                    <div>(c)</div>
                                    <div>
                                        to transfer possession of the health
                                        product by exchange, gift, lease, loan,
                                        hire or hire-purchase;
                                    </div>
                                </PgTermsSectionBulletDiv>
                                <PgTermsSectionBulletDiv>
                                    <div>(d)</div>
                                    <div>
                                        to supply the health product in
                                        connection with —
                                    </div>
                                </PgTermsSectionBulletDiv>
                                <PgTermsSectionBulletDiv
                                    style={{ padding: '0px 0px 0px 44px' }}
                                >
                                    <div>(i)</div>
                                    <div>
                                        a contract for the provision of any
                                        goods or the performance of any service;
                                        or
                                    </div>
                                </PgTermsSectionBulletDiv>
                                <PgTermsSectionBulletDiv
                                    style={{ padding: '0px 0px 0px 44px' }}
                                >
                                    <div>(ii)</div>
                                    <div>
                                        any advertising, sponsorship or
                                        promotional activity;
                                    </div>
                                </PgTermsSectionBulletDiv>
                                <PgTermsSectionBulletDiv>
                                    <div>(e)</div>
                                    <div>
                                        to supply the health product by way of
                                        administration to or application in any
                                        person in the course of any diagnosis,
                                        treatment or test;
                                    </div>
                                </PgTermsSectionBulletDiv>
                                <PgTermsSectionBulletDiv>
                                    <div>(f)</div>
                                    <div>
                                        to offer, agree or attempt to supply the
                                        health product in any of the ways
                                        described in paragraphs (a) to (e) or to
                                        cause or permit the health product to be
                                        so supplied; and
                                    </div>
                                </PgTermsSectionBulletDiv>
                                <PgTermsSectionBulletDiv>
                                    <div>(g)</div>
                                    <div>
                                        to keep or possess the health product
                                        for the purpose of supplying it in any
                                        of the ways described in paragraphs (a)
                                        to (f)
                                    </div>
                                </PgTermsSectionBulletDiv>
                            </PgTermsSectionDiv>
                        </PgTermsContentDiv>
                    </Pg4MainDiv>
                    <img
                        style={{
                            position: 'absolute',
                            top: '912px',
                            left: '572px',
                            height: '94.27px',
                            width: '95.29px',
                        }}
                        src={hsaStamp}
                        alt="HSA stamp"
                    ></img>
                </A4>
            </ScalableDocument>
        </>
    )
}
