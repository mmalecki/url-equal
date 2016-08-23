'use strict'

const assert = require('assert')
const urlEqual = require('../')

assert(urlEqual('/foo', '/foo'))
assert(!urlEqual('/foo', '/bar'))

assert(urlEqual('http://example.com/foo', 'http://example.com/foo'))
assert(!urlEqual('http://example.com/foo', 'http://exemplification.com/foo'))

assert(urlEqual('/foo?bar=baz&xyz=abc', '/foo?xyz=abc&bar=baz'))
assert(!urlEqual('/foo?bar=baz&xyz=abc', '/foo?xyz=baz&bar=abc'))

assert(urlEqual('https://example.com/#bad', 'https://example.com/#bad'))
assert(!urlEqual('https://example.com/#bad', 'https://example.com/#evil'))

assert(!urlEqual('https://example.com/', 'http://example.com/'))
