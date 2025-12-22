import { DayNumbers, DateTime } from 'luxon'

function getOrdinal(n: DayNumbers) {
    const s = ['th', 'st', 'nd', 'rd'],
        v = n % 100
    return s[(v - 20) % 10] || s[v] || s[0]
}
export const GtoFormattedDate = ({ date }: { date: DateTime }) => {
    return (
        <>
            {date.toFormat('d').toUpperCase()}
            <sup>{getOrdinal(date.day)}</sup>{' '}
            {date.toFormat('MMM').toUpperCase()} {date.year}
        </>
    )
}

export const GtoCrisprFormattedDate = ({ date }: { date: DateTime }) => {
    return (
        <>
            {date.toFormat('d').toUpperCase()}
            <sup>{getOrdinal(date.day)}</sup> {date.toFormat('MMM')} {date.year}
        </>
    )
}
