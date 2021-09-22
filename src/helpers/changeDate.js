import dateFormat from 'dateformat'

export const changeDate = (due_date) => {
  const dueDateToDate = Date.parse(due_date)
  return dateFormat(dueDateToDate, 'mmmm d, yyyy')
}
