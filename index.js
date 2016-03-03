/**
 Run an async function which gives an array, and source a pull-stream with it
*/
module.exports = function asyncValues (func) {
  var send = run

  function run (end, cb) {
    func(function (err, res) {
      if (err) { return cb(err) }

      send = pull.values(res)
      send(end, cb)
    })
  }

  return function (end, cb) {
    send(end, cb)
  }
}
