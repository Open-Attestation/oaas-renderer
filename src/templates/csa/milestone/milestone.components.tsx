import { Line } from 'components/line'
import { makeTypography } from 'components/typography/makeTypography'
import React from 'react'
import styled from 'styled-components'

import signatureImgOne from './7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab.png'
import { CsaMilestoneOaDoc } from './milestone.types'

// Register signature image source here
const SIGNATURE_SOURCE = {
    '7645fe871778d34c1daed13a12f2b3fe68555325fd7bdea3973a54399027eeab':
        signatureImgOne,
}

const TYPOGRAPHY_FONT_SIZES = {
    small: '1em',
    medium: '1.5em',
    large: '2em',
    xlarge: '3em',
} as const
export const Typography = makeTypography(TYPOGRAPHY_FONT_SIZES)

export const TemplateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 790px;
`

export const SignaturesContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const SignatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
        margin-right: 128px;
    }

    span {
        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }
`

export const Signature: React.FC<CsaMilestoneOaDoc['signatureOne']> = ({
    name,
    title,
    organization,
    signatureHash,
}) => {
    const imageSource =
        SIGNATURE_SOURCE[signatureHash as keyof typeof SIGNATURE_SOURCE]

    // If cant find image of given signature hash, should not render
    if (!imageSource) {
        console.debug(`Cannot find image of signature of hash ${signatureHash}`)
        return <></>
    }

    return (
        <SignatureContainer>
            <img src={imageSource} alt={signatureHash} />
            <Line $mt={1} $mb={1} />
            <Typography $my={0.5}>{name}</Typography>
            <Typography $my={0.5}>{title}</Typography>
            <Typography $my={0.5}>{organization}</Typography>
        </SignatureContainer>
    )
}
