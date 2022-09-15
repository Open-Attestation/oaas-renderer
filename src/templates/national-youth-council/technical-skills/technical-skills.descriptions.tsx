import { OrderedList } from './technical-skills.components'
import { Typography } from '../common/components'

export const descriptions: { [key: string]: JSX.Element } = {
    'challenge-rope-course': (
        <>
            <Typography $m={0} $textAlign="center" $size="xlarge" $bold>
                Challenge Rope Course
            </Typography>
            <Typography $m={0} $textAlign="center" $size="xlarge" $bold>
                Course Modules – 40 Training hours
            </Typography>

            <Typography>
                The curriculum for the Challenge Ropes Course (CRC) Basic level
                programme aims to equip novice practitioners with the essential
                skills and knowledge to conduct safe and quality challenge ropes
                course activities in OBS. This includes familiarisation to all
                OBS CRC elements, competencies in RAMS for CRC, Activity Checks,
                Rigging of OBS Ropes Courses, Ropes Course Activity Management
                and Facilitation.
            </Typography>

            <Typography>
                Practitioners are also trained and assessed in executing basic
                recovery and troubleshooting skills to allow them to resolve
                simple participant situations that do not require the removal of
                the participant’s safety systems while it is being used, and
                also the minor rectification of belay systems on both Horizontal
                and Vertical elements.
            </Typography>

            <OrderedList>
                <li>
                    <b>
                        <u>
                            Risk Analysis & Management System (RAMS) and
                            Familiarisation to OBS CRC Related elements
                        </u>
                    </b>
                    <br />
                    Able to apply risk analysis and management processes to OBS
                    Challenge Ropes Course activities. Complete the process of
                    negotiating all OBS CRC activities at Camp 1 and 2.
                </li>

                <li>
                    <b>
                        <u>Activity Checks</u>
                    </b>
                    <br />
                    Able to execute the following tasks:
                    <ul>
                        <li>
                            Pre Activity checks involving Environment, Equipment
                            and Element.
                        </li>
                        <li>
                            Pre Dispatch checks involving Anchor, Belay, Climber
                            and Devices.
                        </li>
                    </ul>
                </li>

                <li>
                    <b>
                        <u>Rigging of Outward Bound Singapore Ropes Course</u>
                    </b>
                    <br />
                    Able to independently set up an OBS CRC activity with the
                    correct rigging method and ensuring that CRC is ready for
                    loading via a load test.
                </li>

                <li>
                    <b>
                        <u>
                            Identification of Parts of a Ropes Course and their
                            Critical Application
                        </u>
                    </b>
                    <br />
                    Able to identify components of a ropes course and select
                    correct applications for safe loading of a person on a
                    dynamic or static belay.
                </li>

                <li>
                    <b>
                        <u>Escalation Model application for Recovery</u>
                    </b>
                    <br />
                    Able to apply concept of Escalation Model (Verbal Assist,
                    Self/Buddy Assist, Recovery & Rescue) for recovery of
                    participants with the principles of:
                    <ul>
                        <li>Assess, Access, Execute and Exit.</li>
                        <li>Safe, Simple and Speedy.</li>
                    </ul>
                </li>

                <li>
                    <b>
                        <u>Troubleshooting of Ropes Course</u>
                    </b>
                    <br />
                    Able to rectify both Horizontal and Vertical anchor systems
                    using concept and principles of Escalation Model.
                </li>

                <li>
                    <b>
                        <u>Ropes Course Activity Management</u>
                    </b>
                    <br />
                    Able to articulate knowledge and execute skills to conduct a
                    safe and quality ropes course activity.
                    <ul>
                        <li>
                            Comprehensive briefing to highlight the safety
                            information as stated in the OBS Training Safety
                            Regulations,
                        </li>
                        <li>
                            Participant group management during ropes course
                            activity,
                        </li>
                        <li>
                            Effective supervision of the activity to ensure
                            safety,
                        </li>
                        <li>
                            Facilitate the review of ropes course activity using
                            Experiential Learning Cycle,
                        </li>
                        <li>Use of High and Low elements, and</li>
                        <li>Able to operate in OBS Camp 1 and Camp 2.</li>
                    </ul>
                </li>
            </OrderedList>

            <Typography>
                This certificate does not grant the holder any form of license
                to operate at other premises unless otherwise accepted and
                endorsed by the premise owners.
            </Typography>
            <Typography>
                This certificate shall remain valid for the period that the
                holder is an Operational instructional staff of OBS.
            </Typography>
        </>
    ),
}
