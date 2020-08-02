// Function that sorts first by count to find max, 
// Then sorts by name for values that have the same counts.
// Useful for charts that have numerical data that could be the same
// for various "labels". In that case, you'd want to sort by the
// numerical data and then have alphabetical sort within occurences
// of the same numerical data.

const sortByNameAndCount = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error ('Invalid input, must be array')
  }

  return arr.map((inputVal) => { 
    if (typeof inputVal !== 'object') {
      throw new Error('Array values must be objects with keys count and name')
    }
    return inputVal
  })
  .sort((a, b) => b.count - a.count)
  .sort((a, b) => {
    if (a.count === b.count) {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    }
    return b.count - a.count
  })
  .map((newVals) => ({
    name: newVals.name,
    count: newVals.count,
  }))
}

module.exports = sortByNameAndCount