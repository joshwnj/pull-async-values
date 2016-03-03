# pull-async-values

A thin wrapper around [`pull.values`](https://github.com/dominictarr/pull-stream/blob/master/docs/sources.md#values-array--object), where you want to source a [pull-stream](https://github.com/dominictarr/pull-stream) with values from an async function.

Example usage
----

```
var pull = require('pull-stream')
var fs = require('fs')
var asyncValues = require('pull-async-values')

// collect all files in the current directory except for the README
pull(
  asyncValues(fs.readdir.bind(fs, __dirname)),
  pull.filter(function (filename) { return filename !== 'README.md' }),
  pull.collect(function (err, array) {
    console.log(array)
  })
)
```

You can also take a look at the [examples](./examples)

License
----

MIT
