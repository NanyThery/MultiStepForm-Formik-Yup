export function DueDateValidation(dueDate) {
  const today = new Date(new Date().toDateString());
  const inputDate = new Date(new Date(dueDate).toDateString());

  return inputDate < today;
}

export function IssueDateValidation(issueDate) {
  const today = new Date(new Date().toDateString());
  const inputDate = new Date(new Date(issueDate).toDateString());

  return inputDate > today;
}
