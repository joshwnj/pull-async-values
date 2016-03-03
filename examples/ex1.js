var pull = require('pull-stream')
var fs = require('fs')
var asyncValues = require('../')

// collect all files in the current directory except for node_modules
pull(
  asyncValues(fs.readdir.bind(fs, __dirname)),
  pull.filter(function (filename) { return filename !== 'node_modules' }),
  pull.collect(function (err, array) {
    console.log(array)
  })
)
