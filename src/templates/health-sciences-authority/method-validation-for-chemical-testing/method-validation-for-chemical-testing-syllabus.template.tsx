import { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { HealthSciencesAuthorityMethodValidationForChemicalTestingOaDoc } from './method-validation-for-chemical-testing.types'
import { Helmet } from 'react-helmet-async'
import { A4 } from 'components/paper-size'
import {
    SyllabusContentDivComponent,
    SyllabusSectionDivComponent,
    SyllabusListDivComponent,
    SyllabusListItemComponent,
    SyllabusListItemParagraph,
    SyllabusSubListDivComponent,
    SyllabusCourseTitleComponent,
} from './method-validation-for-chemical-testing.components'
import ellipseFilled from '../common/assets/ellipse-filled.svg'
import ellipseOutline from '../common/assets/ellipse-outline.svg'

export const HealthSciencesAuthorityMethodValidationForChemicalTestingSyllabusTemplate: FunctionComponent<
    TemplateProps<HealthSciencesAuthorityMethodValidationForChemicalTestingOaDoc> & {
        className?: string
    }
> = ({ document }) => {
    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400&family=Inter:wght@400;500;700"
                ></link>
                <title>
                    health-sciences-authority -
                    method-validation-for-chemical-testing
                </title>
            </Helmet>
            <A4>
                <SyllabusContentDivComponent>
                    <SyllabusCourseTitleComponent>
                        <b>Course title:</b> Method Validation for Chemical
                        Testing
                    </SyllabusCourseTitleComponent>
                    <SyllabusSectionDivComponent>
                        <SyllabusListItemParagraph>
                            <b>Syllabus</b>
                        </SyllabusListItemParagraph>
                        <SyllabusListDivComponent>
                            <SyllabusListItemComponent>
                                <img src={ellipseFilled}></img>
                                <SyllabusListItemParagraph>
                                    Fundamental principles of analytical method
                                    validation
                                </SyllabusListItemParagraph>
                            </SyllabusListItemComponent>
                            <SyllabusListItemComponent>
                                <img src={ellipseFilled}></img>
                                <SyllabusListItemParagraph>
                                    Building a validation protocol
                                </SyllabusListItemParagraph>
                            </SyllabusListItemComponent>
                            <SyllabusListItemComponent>
                                <img src={ellipseFilled}></img>
                                <SyllabusListItemParagraph>
                                    Performance parameters:
                                </SyllabusListItemParagraph>
                            </SyllabusListItemComponent>
                            <SyllabusSubListDivComponent>
                                <SyllabusListItemComponent>
                                    <img src={ellipseOutline}></img>
                                    <SyllabusListItemParagraph>
                                        Selectivity/specificity
                                    </SyllabusListItemParagraph>
                                </SyllabusListItemComponent>
                                <SyllabusListItemComponent>
                                    <img src={ellipseOutline}></img>
                                    <SyllabusListItemParagraph>
                                        Precision
                                    </SyllabusListItemParagraph>
                                </SyllabusListItemComponent>
                                <SyllabusListItemComponent>
                                    <img src={ellipseOutline}></img>
                                    <SyllabusListItemParagraph>
                                        Bias
                                    </SyllabusListItemParagraph>
                                </SyllabusListItemComponent>
                                <SyllabusListItemComponent>
                                    <img src={ellipseOutline}></img>
                                    <SyllabusListItemParagraph>
                                        Linearity and working range
                                    </SyllabusListItemParagraph>
                                </SyllabusListItemComponent>
                                <SyllabusListItemComponent>
                                    <img src={ellipseOutline}></img>
                                    <SyllabusListItemParagraph>
                                        Limit of detection
                                    </SyllabusListItemParagraph>
                                </SyllabusListItemComponent>
                                <SyllabusListItemComponent>
                                    <img src={ellipseOutline}></img>
                                    <SyllabusListItemParagraph>
                                        Limit of quantification
                                    </SyllabusListItemParagraph>
                                </SyllabusListItemComponent>
                                <SyllabusListItemComponent>
                                    <img src={ellipseOutline}></img>
                                    <SyllabusListItemParagraph>
                                        Robustness
                                    </SyllabusListItemParagraph>
                                </SyllabusListItemComponent>
                                <SyllabusListItemComponent>
                                    <img src={ellipseOutline}></img>
                                    <SyllabusListItemParagraph>
                                        Ruggedness
                                    </SyllabusListItemParagraph>
                                </SyllabusListItemComponent>
                            </SyllabusSubListDivComponent>
                            <SyllabusListItemComponent>
                                <img src={ellipseFilled}></img>
                                <SyllabusListItemParagraph>
                                    Using validation data to evaluate
                                    measurement uncertainty
                                </SyllabusListItemParagraph>
                            </SyllabusListItemComponent>
                            <SyllabusListItemComponent>
                                <img src={ellipseFilled}></img>
                                <SyllabusListItemParagraph>
                                    Verification of standard methods
                                </SyllabusListItemParagraph>
                            </SyllabusListItemComponent>
                            <SyllabusListItemComponent>
                                <img src={ellipseFilled}></img>
                                <SyllabusListItemParagraph>
                                    Documentation and report
                                </SyllabusListItemParagraph>
                            </SyllabusListItemComponent>
                        </SyllabusListDivComponent>
                    </SyllabusSectionDivComponent>
                </SyllabusContentDivComponent>
            </A4>
        </>
    )
}
