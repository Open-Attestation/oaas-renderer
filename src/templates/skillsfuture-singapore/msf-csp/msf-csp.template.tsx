/* eslint-disable jsx-a11y/anchor-is-valid */
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { DateTime } from 'luxon'
import { QRCodeSVG } from 'qrcode.react'
import React, { FunctionComponent, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { Helmet } from 'react-helmet-async'
import { Tooltip } from 'react-tooltip'
import { retrieveQrAttachmentPayload } from 'utils/retrieve-qr-attachment-payload'

import bgMsfLogo from '../common/assets/bg-msf-logo.png'
import alertIcon from '../common/assets/icon-alert.png'
import chevronDownIcon from '../common/assets/icon-chevron-down.png'
import checkmarkIcon from '../common/assets/icon-circle-check.png'
import infoIcon from '../common/assets/icon-info.png'
import shieldCheckmark from '../common/assets/icon-shield-checkmark.png'
import shieldIcon from '../common/assets/icon-shield-keyhole.png'
import msfLogo from '../common/assets/msf-logo.png'
import { SkillsfutureSingaporeMsfCsp } from './__generated__/msf-csp.schema'
import {
    FormLabel,
    H3,
    H5,
    SubHeading,
    TextPlaceholder,
    TextPrimary,
    Typography,
} from './msf-csp.components'
import { SkillsfutureSingaporeMsfCspOaDoc } from './msf-csp.types'

const SectionHeader = ({ headerText }: { headerText: string }) => (
    <div className="flex break-inside-avoid flex-col">
        <H5>{headerText}</H5>
        <div className="h-px bg-[#C6C6C6]" />
    </div>
)

const RenderHeaderSection = ({
    recipientName,
    issueDate,
    expiryDate,
    qrPayload,
}: {
    recipientName: string
    issueDate: string
    expiryDate: string
    qrPayload: string
}) => (
    <div className="flex flex-row flex-wrap justify-between">
        <div className="flex flex-col">
            <img
                style={{
                    height: '51px',
                    width: '151px',
                }}
                src={msfLogo}
                alt="MySkillsFuture Logo"
            />
            <H3>Careers & Skills Passport</H3>
            <FormLabel>
                Issued on {issueDate}
                <br />
                Expires on {expiryDate}
            </FormLabel>
            <div className="flex flex-row flex-wrap items-center gap-x-2 pb-4 pt-1">
                <SubHeading>{recipientName}</SubHeading>
                <VerifiedLabel />
            </div>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col items-center p-0 md:p-3">
                    <QRCodeSVG value={qrPayload} size={150} />
                    <Typography>
                        <div className="text-[#373737]">Scan to verify</div>
                    </Typography>
                </div>
            </div>
        </div>
    </div>
)
const PageContainer = ({
    children,
}: {
    children: React.ReactNode
}): JSX.Element => (
    <div className="relative mx-auto my-0 min-h-[29.7cm] max-w-[21cm] border border-solid border-slate-200 bg-white print:border-none">
        {children}
    </div>
)
const ContentContainer = ({
    children,
}: {
    children: React.ReactNode
}): JSX.Element => <div className="p-4 md:px-16 md:py-6">{children}</div>

const FooterContentContainer = ({
    children,
}: {
    children: React.ReactNode
}): JSX.Element => <div className="px-4 md:px-16">{children}</div>

const VerifiedIcon = (): JSX.Element => (
    <div className="pt-0.5">
        <img
            style={{
                height: '16px',
                width: '16px',
            }}
            src={shieldCheckmark}
            alt="Verified icon"
        />
    </div>
)
const VerifiedLabel = (): JSX.Element => (
    <div
        className={`flex h-[20px] w-[88px] flex-row items-center gap-1 rounded-[8px] bg-[#D7FFD7] px-2 py-1 leading-4 text-[#007C34]`}
    >
        <VerifiedIcon />

        <div className="text-xs font-semibold tracking-[0.10em]">VERIFIED</div>
    </div>
)

type SkillsType = SkillsfutureSingaporeMsfCsp['topSkills']['skills']
type SkillType = SkillsType[0]

const RenderTopCertifiedSkills = (props: {
    skills: SkillsType
}): JSX.Element => {
    const { skills } = props

    if (skills.length > 0) {
        return (
            <div className="flex break-inside-avoid flex-col gap-4">
                <SectionHeader headerText={'Top certified skills'} />
                <div className="flex flex-row flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <SkillTag
                            shortName={skill.shortName}
                            fullName={skill.fullName}
                            acquiredFrom={skill.acquiredFrom}
                            type={skill.type}
                            key={`skill-${index}`}
                        />
                    ))}
                </div>
            </div>
        )
    }
    return <></>
}

type PositionsType =
    SkillsfutureSingaporeMsfCsp['employmentHistory']['positions']
type PositionType = PositionsType[0]

const PositionItem = (props: PositionType): JSX.Element => {
    const showVerifiedLabel = props.isVerifiedEmployee
    return (
        <div className="flex break-inside-avoid flex-col">
            <TextPrimary>
                <b>{props.position}</b> at {props.employer}
            </TextPrimary>
            <div className="flex flex-row flex-wrap items-center gap-x-2">
                <TextPlaceholder>{props.period}</TextPlaceholder>
                {showVerifiedLabel && <VerifiedLabel />}
            </div>
        </div>
    )
}

const RenderEmploymentHistory = (props: { positions: PositionsType }) => {
    const { positions } = props

    if (positions.length > 0) {
        return (
            <div className="flex flex-col gap-4">
                <SectionHeader headerText={'Employment history'} />
                <div className="flex flex-col gap-6">
                    {positions.map((position, index) => (
                        <PositionItem
                            key={index}
                            position={position.position}
                            employer={position.employer}
                            period={position.period}
                            isVerifiedEmployee={position.isVerifiedEmployee}
                        />
                    ))}
                </div>
            </div>
        )
    }
    return <></>
}

type CertificationsType =
    SkillsfutureSingaporeMsfCsp['professionalCertifications']['certifications']
type CertificationType = CertificationsType[0]

const CertificationItem = (props: CertificationType): JSX.Element => {
    const { certificateTitle, source, dateAttained, isVerified } = props
    const showVerifiedLabel = isVerified
    return (
        <div className="flex break-inside-avoid flex-col">
            <TextPrimary>
                <b>{certificateTitle}</b> from {source}
            </TextPrimary>
            <div className="flex flex-row flex-wrap items-center gap-x-2">
                <TextPlaceholder>Date attained: {dateAttained}</TextPlaceholder>
                {showVerifiedLabel && <VerifiedLabel />}
            </div>
        </div>
    )
}

const RenderProfessionalCertifications = (props: {
    certifications: CertificationsType
}) => {
    const { certifications } = props

    if (certifications.length > 0) {
        return (
            <div className="flex flex-col gap-4">
                <SectionHeader headerText={'Professional certifications'} />
                <div className="flex flex-col gap-6">
                    {certifications.map((certification, index) => (
                        <CertificationItem
                            key={index}
                            certificateTitle={certification.certificateTitle}
                            source={certification.source}
                            dateAttained={certification.dateAttained}
                            isVerified={certification.isVerified}
                        />
                    ))}
                </div>
            </div>
        )
    }
    return <></>
}

type QualificationsType =
    SkillsfutureSingaporeMsfCsp['academicQualifications']['qualifications']

const RenderAcademicQualifications = (props: {
    qualifications: QualificationsType
}) => {
    const { qualifications } = props

    if (qualifications.length > 0) {
        return (
            <div className="flex flex-col gap-4">
                <SectionHeader headerText={'Academic qualifications'} />
                <div className="flex flex-col gap-6">
                    {qualifications.map((qualification, index) => (
                        <CertificationItem
                            key={index}
                            certificateTitle={qualification.qualificationTitle}
                            source={qualification.source}
                            dateAttained={qualification.dateAttained}
                            isVerified={qualification.isVerified}
                        />
                    ))}
                </div>
            </div>
        )
    }
    return <></>
}

const SkillTag = ({ type, shortName, fullName, acquiredFrom }: SkillType) => {
    const showCheckmarkIcon = type === 'CERTIFIED'

    return (
        <>
            <a data-tooltip-id={`tooltip-${shortName}`}>
                <div
                    className={`flex max-w-[256px] flex-row items-center gap-1 rounded-full bg-[#F0F3FF] px-3 py-1 leading-5 text-[#2A51FE]`}
                >
                    {showCheckmarkIcon && (
                        <img
                            style={{
                                height: '16px',
                                width: '16px',
                            }}
                            src={checkmarkIcon}
                            alt="Checkmark icon"
                        />
                    )}
                    <div className="overflow-hidden text-ellipsis min-[320px]:text-nowrap">
                        {shortName}
                    </div>
                </div>
            </a>
            <Tooltip
                id={`tooltip-${shortName}`}
                opacity={1}
                style={{
                    padding: 12,
                    maxWidth: '296px',
                    backgroundColor: '#151515',
                }}
            >
                <div>
                    <b>{fullName}</b>
                </div>
                {acquiredFrom && (
                    <div>
                        Skill acquired from
                        <br />
                        <ul className="mx-0 my-0 py-0 pl-5 pr-0">
                            <li className="leading-5">{acquiredFrom}</li>
                        </ul>
                    </div>
                )}
            </Tooltip>
        </>
    )
}

const RenderFooter = ({
    displayInfo,
}: {
    displayInfo: boolean
}): JSX.Element => {
    return (
        <div className="absolute bottom-0 left-0 w-full bg-[#F0F3FF] print:hidden">
            <FooterContentContainer>
                <div className="flex flex-row content-center items-start gap-1 py-1">
                    <img
                        className="mt-0.5 h-[16px] w-[16px]"
                        src={infoIcon}
                        alt="Info icon"
                    />

                    <TextPlaceholder className="leading-5">
                        Find out more about Careers & Skills Passport and its
                        verified information
                    </TextPlaceholder>
                    <img
                        className={
                            displayInfo
                                ? 'w-[16px] h-[16px] pt-1'
                                : 'w-[16px] h-[16px] mt-0.5 origin-center rotate-180'
                        }
                        src={chevronDownIcon}
                        alt="Chevron icon"
                    />
                </div>
                <div className="mx-auto flex max-w-[666px] flex-col gap-3">
                    <AnimateHeight
                        id="example-panel"
                        duration={500}
                        height={displayInfo ? 'auto' : 0}
                    >
                        <div className="flex flex-col gap-3 pt-2">
                            <div className="flex flex-col px-4 leading-5">
                                <div className="flex flex-row items-center gap-1">
                                    <img
                                        style={{
                                            height: '16px',
                                            width: '16px',
                                        }}
                                        src={checkmarkIcon}
                                        alt="Checkmark icon"
                                    />
                                    <div>
                                        <b>Certified skills</b>
                                    </div>
                                </div>
                                <TextPrimary>
                                    Certified skills were extracted from formal
                                    training and educational records.
                                </TextPrimary>
                            </div>

                            <div className="flex flex-col px-4 leading-5">
                                <div className="flex flex-row items-center gap-1">
                                    <img
                                        style={{
                                            height: '16px',
                                            width: '16px',
                                        }}
                                        src={shieldIcon}
                                        alt="Shield icon"
                                    />
                                    <div>
                                        <b>Verified Information</b>
                                    </div>
                                </div>
                                <TextPrimary>
                                    Company, training and education records from
                                    Government sources
                                </TextPrimary>
                            </div>

                            <div className="flex flex-col px-4 pb-4 leading-5">
                                <TextPrimary>
                                    For more information on Careers & Skills
                                    Passport,{' '}
                                    <a
                                        href={
                                            'https://www.myskillsfuture.gov.sg/content/portal/en/index.html'
                                        }
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        click here
                                    </a>
                                </TextPrimary>
                            </div>
                        </div>
                    </AnimateHeight>
                </div>
            </FooterContentContainer>
        </div>
    )
}

const PrintedFooter = (): JSX.Element => {
    return (
        <div className="hidden break-inside-avoid bg-[#F0F3FF] pt-1 print:block">
            <FooterContentContainer>
                <div className="mx-auto flex max-w-[666px] flex-col gap-3">
                    <div className="flex flex-row content-center items-center gap-1">
                        <img
                            style={{
                                height: '16px',
                                width: '16px',
                            }}
                            src={infoIcon}
                            alt="Info icon"
                        />
                        <TextPlaceholder className="leading-5">
                            Find out more about Careers & Skills Passport and
                            its verified information
                        </TextPlaceholder>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col px-4 leading-5">
                            <div className="flex flex-row items-center gap-1">
                                <img
                                    style={{
                                        height: '16px',
                                        width: '16px',
                                    }}
                                    src={checkmarkIcon}
                                    alt="Checkmark icon"
                                />
                                <div>
                                    <b>Certified skills</b>
                                </div>
                            </div>
                            <TextPrimary>
                                Certified skills were extracted from formal
                                training and educational records.
                            </TextPrimary>
                        </div>

                        <div className="flex flex-col px-4 leading-5">
                            <div className="flex flex-row items-center gap-1">
                                <img
                                    style={{
                                        height: '16px',
                                        width: '16px',
                                    }}
                                    src={shieldIcon}
                                    alt="Shield icon"
                                />
                                <div>
                                    <b>Verified Information</b>
                                </div>
                            </div>
                            <TextPrimary>
                                Company, training and education records from
                                Government sources
                            </TextPrimary>
                        </div>

                        <div className="flex flex-col px-4 pb-4 leading-5">
                            <TextPrimary>
                                For more information on Careers & Skills
                                Passport, please visit
                                https://www.myskillsfuture.gov.sg/content/portal/en/index.html
                            </TextPrimary>
                        </div>
                    </div>
                </div>
            </FooterContentContainer>
        </div>
    )
}

const RenderExpiry = ({ expiryDate }: { expiryDate: string }): JSX.Element => {
    return (
        <div className="flex flex-row items-start justify-center gap-1 bg-[#D90000] p-1 leading-5">
            <div className="h-[18px] pt-0.5">
                <img
                    className="max-h-[16px] max-w-[16px]"
                    src={alertIcon}
                    alt="Alert icon"
                />
            </div>

            <div className="text-white">
                This document has expired as of {expiryDate}
            </div>
        </div>
    )
}

type GetSectionsRecord<T extends Record<string, any>> = Record<
    Exclude<
        {
            [K in keyof T]: T[K] extends { displayOrder: number } ? K : never
        }[keyof T],
        undefined
    >,
    true
>

const SECTION_TYPES: GetSectionsRecord<SkillsfutureSingaporeMsfCsp> = {
    academicQualifications: true,
    employmentHistory: true,
    professionalCertifications: true,
    topSkills: true,
}
type SectionType = keyof typeof SECTION_TYPES

export function getSectionOrder(
    doc: SkillsfutureSingaporeMsfCspOaDoc
): SectionType[] {
    return Object.entries(doc)
        .filter(([key]) => SECTION_TYPES[key as keyof typeof SECTION_TYPES])
        .sort(([, a], [, b]) => a.displayOrder - b.displayOrder)
        .map(([key]) => key) as SectionType[]
}

export const SkillsfutureSingaporeMsfCspTemplate: FunctionComponent<
    TemplateProps<SkillsfutureSingaporeMsfCspOaDoc> & { className?: string }
> = ({ document }) => {
    const [displayInfo, setDisplayInfo] = useState<boolean>(false)
    const toggleDisplayInfo = () => {
        setDisplayInfo(!displayInfo)
    }
    const issueDate = DateTime.fromISO(document.issueDate)
    const expiryDate = DateTime.fromISO(document.expiryDate)
    const isExpired = DateTime.now().startOf('day') >= expiryDate.startOf('day')
    const issueDateStr = issueDate.toFormat('dd MMM yyyy')
    const expiryDateStr = expiryDate.toFormat('dd MMM yyyy')
    const qrPayload = retrieveQrAttachmentPayload(document)
    const sectionOrder = getSectionOrder(document)
    const sectionList = sectionOrder.map((item, index) => {
        if (item === 'topSkills') {
            return (
                <RenderTopCertifiedSkills
                    key={`section-${index}`}
                    skills={document.topSkills.skills}
                />
            )
        }
        if (item === 'employmentHistory') {
            return (
                <RenderEmploymentHistory
                    positions={document.employmentHistory.positions}
                    key={`section-${index}`}
                />
            )
        }
        if (item === 'professionalCertifications') {
            return (
                <RenderProfessionalCertifications
                    certifications={
                        document.professionalCertifications.certifications
                    }
                    key={`section-${index}`}
                />
            )
        }
        if (item === 'academicQualifications') {
            return (
                <RenderAcademicQualifications
                    qualifications={
                        document.academicQualifications.qualifications
                    }
                    key={`section-${index}`}
                />
            )
        }

        return undefined
    })

    return (
        <>
            <Helmet>
                <title>skillsfuture-singapore - msf-csp</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&family=League+Gothic&display=swap"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <Typography>
                <PageContainer>
                    {isExpired && <RenderExpiry expiryDate={expiryDateStr} />}
                    <ContentContainer>
                        <img
                            style={{
                                position: 'fixed',
                                left: '50%',
                                top: '50%',
                                width: '94%',
                                maxWidth: '20cm',
                                transform: 'translate(-50%,-50%)',
                            }}
                            src={bgMsfLogo}
                            alt="MySkillsFuture Logo"
                        ></img>
                        <div className="relative flex flex-col gap-8 pb-20 print:pb-0">
                            <RenderHeaderSection
                                recipientName={document.name}
                                issueDate={issueDateStr}
                                expiryDate={expiryDateStr}
                                qrPayload={qrPayload}
                            />
                            {sectionList}
                            <PrintedFooter />
                        </div>
                    </ContentContainer>
                    <div className="cursor-pointer" onClick={toggleDisplayInfo}>
                        <RenderFooter displayInfo={displayInfo} />
                    </div>
                </PageContainer>
            </Typography>
        </>
    )
}
