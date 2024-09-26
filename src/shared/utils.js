export function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}:${mins.toString().padStart(2, '0')}`
}

export function formatDate(dateInMs) {
  const date = new Date(dateInMs)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}

export function getNextMonday() {
  const today = new Date()
  const dayOfWeek = today.getDay()

  const daysUntilNextMonday = (8 - dayOfWeek) % 7 || 7

  const nextMonday = new Date(today.getTime() + daysUntilNextMonday * 24 * 60 * 60 * 1000)

  return nextMonday
}
