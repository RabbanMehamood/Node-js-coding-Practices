const factorialOfNumber = require('../factorial/index')
const ratioOfTwoNumbers = require('../ratio/index')

const ratioAndFactorial = function (a, b, c) {
  let factorial = factorialOfNumber(c)
  let ratio = ratioOfTwoNumbers(a, b)
  return {factorial, ratio}
}

module.exports = ratioAndFactorial
