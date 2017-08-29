var fs   = require('fs')
var path = require('path')

module.exports = function link(done, shared) {
  var source, target, command, args

  args = shared.args // later we use for command's args

  for (var i = 0; i < args.length; i++) {
    switch (args[i]) {
      case 'from':
        source = args[i + 1] // next arg is our source.
        i += 1               // skip next cuz we used it.
        break

      case 'to'  :
        target = args[i + 1] // next arg is our target.
        i += 1               // skip next cuz we used it.
        break

      default:
        // source is first, target second. assign the one we don't have.
        if (!source)      source = args[i]
        else if (!target) target = args[i]
        else              i = args.length // we're done
    }
  }

  if (!source) return done('@runling/link requires source')
  if (!target) return done('@runling/link requires target')

  if (!path.isAbsolute(target)) { // make it an absolute path
    target = path.resolve(target)
  }

  // set it to a path relative to `source`
  target = path.relative(path.dirname(source), target)

  // TODO: allow hard links?
  if (process.platform === 'win32') {
    command = 'mklink'
    args    = [ target, source ]

    // windows links to "file" by default, if it's a directory, set the /D option.
    if (isDirectory(target)) args.unshift('/D')
    // TODO: for now, always do soft link. /H is hard. /J is both hard and directory.
  }

  else {
    command = 'ln'
    args    = [ '-s', target, source ]
    // TODO: for now, always do soft link. later, add -s conditionally.
  }

  shared.run({ command, args, done })
}

module.exports.names = [ 'link', 'ln', 'mklink' ]

function isDirectory(path) {
  var stats

  try {
    stats = fs.statsSync(path)
    return stats && stats.isDirectory()
  }

  catch (e) {
    return false
  }
}
