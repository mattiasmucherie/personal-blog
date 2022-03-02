import formatDistance from 'date-fns/formatDistance'
import differenceInDays from 'date-fns/differenceInDays'
import format from 'date-fns/format'

const DAYS_BACK_TO_SHOW = 5

export const formatDate = (date: Date, ago = false): string => {
  const formattedDate = format(new Date(date), 'dd MMM yyyy')
  if (!ago) return formattedDate
  return differenceInDays(new Date(), new Date(date)) > DAYS_BACK_TO_SHOW
    ? formattedDate
    : formatDistance(new Date(date), new Date(), {
        addSuffix: true,
      })
}
