import format from 'date-fns/format'

export const formatDate = (date: Date): string =>
  format(new Date(date), 'dd MMM yyyy')
