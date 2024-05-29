import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { SingaporeJudicialCollegeLetterOfAppreciationOaDoc } from './letter-of-appreciation.types'
import { Helmet } from 'react-helmet-async'
import { A4 } from 'components/paper-size'
import { Title, Typography } from './letter-of-appreciation.components'
import { formatCourseDatefor } from '../common/utils'
import portraitBg from '../common/assets/letter-bg.jpg'
import signature from '../common/assets/natalie-skead-signature.hash.png'

export const SingaporeJudicialCollegeLetterOfAppreciationTemplate: FunctionComponent<
    TemplateProps<SingaporeJudicialCollegeLetterOfAppreciationOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    const issueDate = formatCourseDatefor(document.issueDate)

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Italianno&display=swap"
                ></link>
                <title>
                    singapore-judicial-college - letter-of-appreciation
                </title>
            </Helmet>
            <A4 $bgImg={portraitBg} $padding="162px 96px 0px 96px">
                <Typography>
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col items-center">
                            <Title>
                                <b>Letter of Appreciation</b>
                            </Title>
                        </div>
                    </div>
                    <div className="flex flex-col mt-9 gap-16">
                        <div>{issueDate}</div>
                        <div>
                            Dear {document.name}
                            <br />
                            <br />
                            On behalf of the Singapore Judicial College, I
                            extend our heartfelt appreciation for your excellent
                            contribution to the {document.programmeTitle}{' '}
                            programme on{' '}
                            <span style={{ display: 'inline-block' }}>
                                {issueDate}
                            </span>
                            .
                            <br />
                            <br />
                            The College relies on the invaluable specialist
                            expertise of members of the
                            {` ${document.memberGroup} `} to fulfil our aim of
                            delivering exceptional judicial education that
                            equips judicial officers with the relevant
                            competencies to function as administrators of
                            justice in service of the Judiciary's values of
                            fairness, accessibility, integrity and respect.
                            <br />
                            <br />
                            The knowledge and insights you have shared have
                            undoubtedly made a lasting impression and have
                            significantly enriched the learning experience of
                            our participants.
                            <br />
                            <br />
                            Thank you for supporting the College in this
                            important way.
                        </div>
                        <div>
                            <img
                                alt="Signature of signee"
                                src={signature}
                                className="max-w-[171px] max-h-[85px]"
                            />
                            <br />
                            Natalie Skead
                            <br />
                            Dean
                            <br />
                            Singapore Judicial College
                        </div>
                    </div>
                </Typography>
            </A4>
        </>
    )
}
