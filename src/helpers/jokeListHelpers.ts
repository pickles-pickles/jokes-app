export function cleanAndConvertViews (views?: string | number) {
  if (typeof views === 'string') {
    // Remove any non-numeric characters from the "views" value
    const numericValue = views.replace(/\D/g, '')

    // Try converting the cleaned value to an integer
    const integerValue = parseInt(numericValue, 10)

    // Check if the conversion was successful
    if (!isNaN(integerValue)) {
      // Update the "views" value in the object with the cleaned integer value
      return integerValue
    } else {
      // Handle the case when the "views" value cannot be converted to an integer
      return '-'
    }
  } else if (typeof views === 'number') {
    return views
  }
  return '-'
}

export function mapColorToViews (views?: string | number) {
  const clearViews = cleanAndConvertViews(views)
  const tomato = 'tomato',
    orange = 'orange',
    yellow = 'yellow',
    green = 'green'
  if (typeof clearViews !== 'number') {
    return ''
  } else {
    if (0 < clearViews && clearViews <= 25) {
      return tomato
    } else if (25 < clearViews && clearViews <= 50) {
      return orange
    } else if (50 < clearViews && clearViews <= 75) {
      return yellow
    } else if (75 < clearViews && clearViews <= 100) {
      return green
    } else {
      return ''
    }
  }
}

export function convertDate (date: any) {
  if (typeof date === 'number') {
    const unixTimeToDate = new Date(date).toISOString()
    return unixTimeToDate
  }
  if (!date) {
    return undefined
  }
  return date
}
