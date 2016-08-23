'use strict'

const qs = require('querystring')
const url = require('url')
const deepEqual = require('deep-equal')

module.exports = function urlEqual(a, b) {
  if (a === b) return true

  const parsedA = url.parse(a)
  const parsedB = url.parse(b)

  const qsA = qs.decode(parsedA.query)
  const qsB = qs.decode(parsedB.query)

  return parsedA.protocol === parsedB.protocol &&
         parsedA.auth === parsedB.auth &&
         parsedA.host === parsedB.host && // host and port
         parsedA.hash === parsedB.hash &&
         parsedA.pathname === parsedB.pathname &&
         deepEqual(qsA, qsB)
}
