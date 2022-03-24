import format from 'date-fns/format'

export const formatDate = (date: string): string =>
  format(new Date(date), 'dd MMM yyyy')
