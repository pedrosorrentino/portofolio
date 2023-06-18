export function getDateToString(): string {
  const dateNow: Date = new Date()

  dateNow.setDate(dateNow.getDate() - 10)
  const day: number = dateNow.getDate()
  const month: string = getNameMonth(dateNow.getMonth())
  const year: number = dateNow.getFullYear()
  const formatedDate: string = `${day} ${month} ${year}`
  return formatedDate
}

function getNameMonth(monthNumber: number): string {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return months[monthNumber]
}
