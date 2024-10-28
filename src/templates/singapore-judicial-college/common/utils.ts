import { DateTime } from 'luxon'

export function formatCourseDatefor(
    courseStartDate: string,
    courseEndDate: string | undefined = undefined
): string {
    if (!courseEndDate) {
        return DateTime.fromISO(courseStartDate).toFormat('dd MMMM yyyy')
    }

    const startDateTime = DateTime.fromISO(courseStartDate)
    const endDateTime = DateTime.fromISO(courseEndDate)

    // Format when dates are the same
    if (courseStartDate === courseEndDate) {
        return DateTime.fromISO(courseStartDate).toFormat('dd MMMM yyyy')
    }

    // Format when dates have the same month and year
    if (
        startDateTime.month === endDateTime.month &&
        startDateTime.year === endDateTime.year
    ) {
        const start = startDateTime.toFormat('dd')
        const end = endDateTime.toFormat('dd MMMM yyyy')
        return `${start} - ${end}`
    }

    // Format when dates have the same year
    if (startDateTime.year === endDateTime.year) {
        const start = startDateTime.toFormat('dd MMMM')
        const end = endDateTime.toFormat('dd MMMM yyyy')
        return `${start} - ${end}`
    }

    const start = startDateTime.toFormat('dd MMMM yyyy')
    const end = endDateTime.toFormat('dd MMMM yyyy')

    return `${start} - ${end}`
}
