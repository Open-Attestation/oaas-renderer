import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { FlexBox } from 'components/flexbox'
import { A4Landscape } from 'components/paper-size'
import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet-async'

import landscapeBg from '../common/assets/landscape-bg.png'
import obsLogo from '../common/assets/obs-logo-with-tagline.png'
import { GroupImg, ObsLogoImg, WatchNameComponent } from './obs-moc.components'
import { NationalYouthCouncilObsMocOaDoc } from './obs-moc.types'
import { formatCourseDatefor } from '../common/utils'

export const NationalYouthCouncilObsMocPhotoTemplate: FunctionComponent<
    TemplateProps<NationalYouthCouncilObsMocOaDoc> & { className?: string }
> = ({ document, className = '' }) => {
    const courseDate = formatCourseDatefor(
        document.courseStartDate,
        document.courseEndDate
    )
    return (
        <>
            <Helmet>
                <title>
                    national-youth-council - National Outdoor Adventure
                    Education Masterplan
                </title>
            </Helmet>

            <A4Landscape $bgImg={landscapeBg}>
                <FlexBox $vertical>
                    <GroupImg src={document.groupPhoto_image} />
                </FlexBox>
                <WatchNameComponent>
                    MOE-OBS Challenge
                    <br />
                    {document.watchName}
                    <br />
                    {courseDate}
                </WatchNameComponent>
                <ObsLogoImg src={obsLogo} alt="Outward Bound Singapore" />
            </A4Landscape>
        </>
    )
}
