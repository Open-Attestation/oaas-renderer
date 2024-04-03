import { formatCourseDatefor } from '../utils'

describe('formatCourseDatefor', () => {
    describe.each([
        // Undefined courseEndDate
        ['2023-09-28', undefined, '28 September 2023'],

        // Same date
        ['2023-09-28', '2023-09-28', '28 September 2023'],

        // Same month and year
        ['2023-09-01', '2023-09-28', '01 - 28 September 2023'],
        ['2023-09-15', '2023-09-16', '15 - 16 September 2023'],

        // Same year, different months
        ['2023-01-01', '2023-12-31', '01 January - 31 December 2023'],
        ['2023-05-05', '2023-11-11', '05 May - 11 November 2023'],

        // Different years
        ['2022-12-31', '2023-01-01', '31 December 2022 - 01 January 2023'],
        ['2020-02-29', '2023-03-01', '29 February 2020 - 01 March 2023'],

        // Different months and years
        ['2021-11-15', '2023-02-20', '15 November 2021 - 20 February 2023'],
        ['2019-07-07', '2022-08-08', '07 July 2019 - 08 August 2022'],

        // Edge cases
        ['2023-01-31', '2023-02-01', '31 January - 01 February 2023'],
        ['2023-02-28', '2023-03-01', '28 February - 01 March 2023'],
    ])(
        'when start date is %s and end date is %s',
        (startDate, endDate, expected) => {
            it(`should return "${expected}"`, () => {
                const result = formatCourseDatefor(startDate, endDate)
                expect(result).toBe(expected)
            })
        }
    )
})
