import { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { NationalYouthCouncilObsWmfrOaDoc } from './obs-wmfr.types'
import { DateTime } from 'luxon'
import { Helmet } from 'react-helmet-async'
import { FlippableCard } from 'components/flippable-card/flippable-card'
import { FlipInstruction } from 'components/flippable-card/flip-instruction'
import { CardFace } from 'components/card-face'

import backgroundImgFront from '../common-assets/obs-wmfr-front-bg.png'
import backgroundImgBack from '../common-assets/obs-wmfr-back-bg.png'
import signatureImg from '../common-assets/1e6ebedbff42703518a83c1b296744c55f071f9147ec19c8ebae88794ab3f120.png'

import {
    BackgroundImg,
    Root,
    NameComponent,
    CourseComponent,
    SerialNumberComponent,
    DateOfIssueComponent,
    DateOfExpiryComponent,
    SignatureComponent,
    SignatureImg,
    SignatureProfileComponent,
} from './obs-wmfr.components'

const CERT_WIDTH = 352
const CERT_HEIGHT = 230

export const NationalYouthCouncilObsWmfrTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilObsWmfrOaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    const issueDate = DateTime.fromISO(document.issueDate).toFormat(
        'dd/MM/yyyy'
    )
    const expiryDate = DateTime.fromISO(document.issueDate)
        .plus({ years: 2 })
        .toFormat('dd MMM yyyy')

    return (
        <>
            <Helmet>
                <title>national-youth-council - obs-wmfr</title>
            </Helmet>
            <Root $vertical>
                <FlippableCard
                    widthInPx={CERT_WIDTH}
                    front={
                        <CardFace
                            $width={`${CERT_WIDTH}px`}
                            $height={`${CERT_HEIGHT}px`}
                            $zIndex={-2}
                            $vertical
                        >
                            <BackgroundImg
                                src={backgroundImgFront}
                            ></BackgroundImg>
                            <NameComponent>{document.name}</NameComponent>
                            <CourseComponent>
                                Successfully completed
                                <br />
                                Wilderness Medical First Responder
                                <br />
                                (WMFR)
                            </CourseComponent>
                            <SerialNumberComponent>
                                S/N: {document.serialNumber}
                            </SerialNumberComponent>
                            <DateOfIssueComponent>
                                DATE OF ISSUE: {issueDate}
                            </DateOfIssueComponent>
                        </CardFace>
                    }
                    back={
                        <CardFace
                            $width={`${CERT_WIDTH}px`}
                            $height={`${CERT_HEIGHT}px`}
                            $zIndex={-2}
                            $vertical
                        >
                            <BackgroundImg
                                src={backgroundImgBack}
                            ></BackgroundImg>
                            <DateOfExpiryComponent>
                                Valid till {expiryDate}
                            </DateOfExpiryComponent>
                            <SignatureComponent>
                                <SignatureImg src={signatureImg}></SignatureImg>
                            </SignatureComponent>
                            <SignatureProfileComponent>
                                {document.issuingOfficerName}
                                <br />
                                {document.issuingOfficerPosition}
                                <br />
                                Outward Bound Singapore
                            </SignatureProfileComponent>
                        </CardFace>
                    }
                />
                <FlipInstruction />
            </Root>
        </>
    )
}
