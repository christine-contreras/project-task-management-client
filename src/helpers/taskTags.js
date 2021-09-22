export const priorityColor = (priority) => {
  switch (priority) {
    case 'Low':
      return 'btn-callout low'
    case 'Medium':
      return 'btn-callout medium'
    case 'High':
      return 'btn-callout high'
    default:
      return 'btn-callout default'
  }
}

export const statusColor = (status) => {
  switch (status) {
    case 'Complete':
      return 'btn-callout complete'
    case 'In Progress':
      return 'btn-callout progress'
    case 'Pending':
      return 'btn-callout pending'
    case 'Changes Needed':
      return 'btn-callout changes'
    default:
      return 'btn-callout default'
  }
}
