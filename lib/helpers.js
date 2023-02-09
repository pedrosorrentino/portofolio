export const shortify = (text, maxLength = 60) => {
  if (text.length <= maxLength) text
  return text.substring(0, maxLength) + '...'
}
