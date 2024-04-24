const addDays = require('date-fns/addDays')

const datefunction = function (days) {
  const new_date = addDays(new Date(2020, 7, 22), days)
  return `${new_date.getDate()}-${
    new_date.getMonth() + 1
  }-${new_date.getFullYear()}`
}
console.log(datefunction(14))
module.exports = datefunction
