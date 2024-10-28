import { DateTime } from 'luxon'

export function formatCourseDatefor(
    courseStartDate: string,
    courseEndDate: string
): string {
    const startDateTime = DateTime.fromISO(courseStartDate)
    const endDateTime = DateTime.fromISO(courseEndDate)

    // Format when dates are the same
    if (courseStartDate === courseEndDate) {
        return DateTime.fromISO(courseStartDate).toFormat('dd MMM yyyy')
    }

    // Format when dates have the same month and year
    if (
        startDateTime.month === endDateTime.month &&
        startDateTime.year === endDateTime.year
    ) {
        const start = startDateTime.toFormat('dd')
        const end = endDateTime.toFormat('dd MMM yyyy')
        return `${start} - ${end}`
    }

    // Format when dates have the same year
    if (startDateTime.year === endDateTime.year) {
        const start = startDateTime.toFormat('dd MMM')
        const end = endDateTime.toFormat('dd MMM yyyy')
        return `${start} - ${end}`
    }

    const start = startDateTime.toFormat('dd MMM yyyy')
    const end = endDateTime.toFormat('dd MMM yyyy')

    return `${start} - ${end}`
}
