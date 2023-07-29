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
