/**
 * Based on pull.values: https://github.com/dominictarr/pull-stream/blob/master/sources.js#L26
 */
function sendValues (values) {
  var i = 0
  return function (err, cb) {
    if (err) { return cb(err) }
    if (i >= values.length) { return cb(true) }
    return cb(null, values[i++])
  }
}

/**
 * Run an async function which gives an array, and source a pull-stream with it
*/
module.exports = function asyncValues (func) {
  var send = run

  function run (end, cb) {
    func(function (err, res) {
      if (err) { return cb(err) }

      send = sendValues(res)
      send(end, cb)
    })
  }

  return function (end, cb) {
    send(end, cb)
  }
}
