import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { TrustdocsDemoLicenseToVerifyOaDoc } from './license-to-verify.types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { FlexBox } from 'components/flexbox'
import { DateTime } from 'luxon'
import frontCardBackground from './bg.svg'
import { QRCodeSVG } from 'qrcode.react'
import trustdocsLogoImage from './trustdocs-logo.svg'

const Root = styled.div`
    background: white;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.16px;

    min-width: 320px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 24px 0px;
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
        box-sizing: border-box;
    }

    > div:first-child {
        margin-bottom: 16px;
    }

    @media screen and (min-width: 800px) {
        flex-direction: row;

        > div:first-child {
            margin-bottom: 0;
            margin-right: 16px;
        }
    }
`

const BaseCardContainer = styled.div`
    display: flex;
    width: 320px;
    height: 500px;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 16px;

    overflow: hidden;

    text-align: center;
`

const FrontContainer = styled(BaseCardContainer)`
    background: white;
    border: 1px solid #d1d5db;
`

const SvgBg = styled(BaseCardContainer)`
    background: url(${frontCardBackground});
`

const BackContainer = styled(BaseCardContainer)`
    background: #edfafa;
    border: 1px solid #d1d5db;
`

const TitleContainer = styled.div`
    width: 100%;
    height: 48px;

    background: #047481;

    color: #ffffff;
    text-align: center;
    font-family: League Gothic;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 2.56px;
`

const ContentContainer = styled.div`
    padding: 32px 24px 24px 24px;
    width: 100%;

    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const QRPlaceHolder = styled(QRCodeSVG)`
    width: calc(175px - 24px);
    height: calc(175px - 24px);
    background: white;

    padding: 12px;

    border: 4px solid #afecef;
    box-sizing: content-box;
    border-radius: 8px;
`

const ProfileImagePlaceholder = styled.img`
    width: 151.638px;
    height: 160px;

    margin-bottom: 32px;
`

const Name = styled.div`
    color: #036672;
    text-align: center;
    /* text-lg/font-bold */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 27px */
    letter-spacing: -0.18px;
`

const QRCaption = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
    letter-spacing: -0.12px;
`

const TrustdocsLogoImage = styled.img`
    width: 159.273px;
    height: 24px;
    padding: 0px 6.218px 0px 5.74px;
`

export const TrustdocsDemoLicenseToVerifyTemplate: FunctionComponent<
    TemplateProps<TrustdocsDemoLicenseToVerifyOaDoc> & { className?: string }
> = ({ document }) => {
    return (
        <>
            <Helmet>
                <title>trustdocs-demo - license-to-verify</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=League+Gothic&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=League+Gothic&display=swap"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <Root id="trustdocs-demo-license-to-verify">
                <CardsContainer>
                    <FrontContainer>
                        <SvgBg>
                            <TitleContainer>LICENSE TO VERIFY</TitleContainer>
                            <ContentContainer>
                                <FlexBox $vertical $spacing={2}>
                                    <FlexBox $vertical>
                                        <ProfileImagePlaceholder
                                            src={document.profile_image}
                                            alt="Profile Image"
                                        />
                                        <Name>{document.name}</Name>
                                        <div>
                                            has been assessed to be capable of
                                            verifying TrustDocs.
                                        </div>
                                    </FlexBox>
                                    <LabelValue
                                        label="Valid till"
                                        value={DateTime.fromISO(
                                            document.validTill
                                        ).toFormat('dd MMMM yyyy')}
                                    />
                                </FlexBox>
                                <FlexBox
                                    $width="100%"
                                    $justifyContent="flex-start"
                                >
                                    <TrustdocsLogoImage
                                        alt="Trustdocs Logo"
                                        src={trustdocsLogoImage}
                                    />
                                </FlexBox>
                            </ContentContainer>
                        </SvgBg>
                    </FrontContainer>
                    <BackContainer>
                        <TitleContainer />
                        <ContentContainer>
                            <FlexBox $vertical $spacing={1.5}>
                                <LabelValue
                                    label="Issued on"
                                    value={DateTime.fromISO(
                                        document.issuedOn
                                    ).toFormat('dd MMMM yyyy')}
                                />
                                <LabelValue
                                    label="Country of assessment"
                                    value={document.countryOfAccessment}
                                />
                                <LabelValue
                                    label="Assessed by"
                                    value={document.accessedBy}
                                />
                            </FlexBox>
                            <FlexBox $vertical $spacing={0.5}>
                                <QRPlaceHolder value={document.qrCodeValue} />
                                <QRCaption>Scan QR to verify</QRCaption>
                            </FlexBox>
                        </ContentContainer>
                    </BackContainer>
                </CardsContainer>
            </Root>
        </>
    )
}

const Label = styled.div`
    color: #047481;
    text-align: center;
    /* text-sm/font-bold */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.154px;
`
const Value = styled.div`
    color: #111928;
    text-align: center;
    /* text-base/font-normal */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.16px;
`
function LabelValue({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <Label>{label}:</Label>
            <Value>{value}</Value>
        </div>
    )
}
