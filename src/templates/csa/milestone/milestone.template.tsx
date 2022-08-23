import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'

import {
    Signature,
    SignaturesContainer,
    TemplateContainer,
    Typography,
} from './milestone.components'

import { CsaMilestoneOaDoc } from './milestone.types'
import { DateTime } from 'luxon'
import { Line } from 'components/line'

export const CsaMilestoneTemplate: FunctionComponent<
    TemplateProps<CsaMilestoneOaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    const startDate = DateTime.fromISO(document.courseStartDate)
    const endDate = DateTime.fromISO(document.courseEndDate)
    const courseDateRange = `${startDate.day} ${startDate.monthLong} - ${endDate.day} ${endDate.monthLong} ${endDate.year}`
    return (
        <TemplateContainer className={className} id="milestone-template">
            <Typography $mt={0} $mb={4} as="h1" $size="xlarge" $bold>
                Certificate of Completion
            </Typography>
            <Typography $size="small" $italic>
                Presented jointly by
            </Typography>
            <Typography $bold>{document.presentedBy.join(' and ')}</Typography>
            <Typography $size="small" $mb={4}>
                awarded to
            </Typography>
            <Typography $size="large" $bold>
                {document.name}
            </Typography>
            <Line $maxWidth="792px" $mt={2} $mb={2} />
            <Typography $italic>For completion of the</Typography>
            <Typography $bold>{document.courseTitle}</Typography>
            <Typography $size="small">{courseDateRange}</Typography>
            <SignaturesContainer>
                <Signature {...document.signatureOne} />
                <Signature {...document.signatureTwo} />
            </SignaturesContainer>
        </TemplateContainer>
    )
}
