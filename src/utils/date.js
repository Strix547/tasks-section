export const reverseDate = (dateString, divider) => {
  const p = dateString.split(/\D/g)
  return [p[2], p[1], p[0]].join(divider)
}

export const getCurrentDate = () => new Date().toLocaleString().slice(0, 10)