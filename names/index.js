const getFirstNames = require('../utilities/utils/index')
const peopleNames = require('../country/state/city/index')

const getPeopleInCity = peopleNames => {
  return getFirstNames(peopleNames)
}
module.exports = getPeopleInCity
