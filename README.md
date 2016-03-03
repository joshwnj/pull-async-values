# pull-async-values

A thin wrapper around `pull.values`, where the values you want to source the pull-stream with come from an async function.

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

