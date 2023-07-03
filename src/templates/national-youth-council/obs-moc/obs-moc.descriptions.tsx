import { OrderedList } from './obs-moc.components'
import { Typography } from '../common/components'

export const descriptions: { [key: string]: JSX.Element } = {
    moc: (
        <>
            <Typography $m={0} $textAlign="center" $size="xlarge" $bold>
                National Outdoor Adventure Education Masterplan
            </Typography>

            <Typography $size="large" $textAlign="justify">
                The National Outdoor Adventure Education Masterplan is a joint
                initiative by the Ministry of Education and Ministry of Culture,
                Community and Youth to strengthen our youth's self-efficacy,
                resilience and social cohesion. To help our youths prepare for
                the future, the Masterplan aims to:
            </Typography>

            <OrderedList $size="large">
                <li>
                    Build <b>confidence</b> and <b>resilience</b> through rugged
                    outdoor living
                </li>
                <li>
                    Appreciate community diversity through{' '}
                    <b>social interaction</b> opportunities
                </li>
                <li>
                    Forge <b>camaraderie</b> through common challenging
                    experiences
                </li>
                <li>
                    Build a strong foundation for{' '}
                    <b>active and healthy living</b>
                </li>
            </OrderedList>

            <Typography $size="large" $textAlign="justify">
                Under the Masterplan, youths have the opportunity to attend at
                least three cohort camps from primary to secondary school. The
                youth's outdoor education experience will culminate in an
                Outward Bound Course for Secondary 3 students.
            </Typography>
        </>
    ),
}
