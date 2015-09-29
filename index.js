var through = require('through2')
var path = require('path')
var gutil = require('gulp-util')
var _ = require('lodash')
var Map = require('collections/map')

var pluginName = 'gulp-vuemaker'

module.exports = function (file, opt) {

  var components = new Map()

  /*
   * Detect the type of the file
   */
  function detectKind (ext) {
    switch (ext) {
      case '.js':
        return 'script'
      case '.css':
        return 'style'
      case '.html':
        return 'template'
      default:
        return null
    }
  }

  /*
   * Transform the files
   */
  function transform (file, encoding, cb) {
    if (file.isNull()) return cb()
    if (file.isStream()) return cb(new gutil.PluginError(pluginName, 'Streaming not supported'))

    var kind = detectKind(path.extname(file.path))
    if (kind === null) {
      return cb()
    }

    var componentName = gutil.replaceExtension(file.relative, '.vue')
    if (!components.has(componentName)) {
      components.set(componentName, new Map())
    }
    components.get(componentName).set(kind, file.contents.toString(encoding))

    return cb()
  }

  /*
   * flush the files
   */
  function flush (cb) {
    _.forEach(components.entries(), function (component, idx) {

      var elements = _.map(component[1].entries(), function (item, text) {
        return '<' + item[0] + '>\n' + item[1] + '</' + item[0] + '>\n\n'
      })

      this.push(new gutil.File({
        path: component[0],
        contents: new Buffer(elements.join(''))
      }))

    }.bind(this))
    cb()
  }

  return through.obj(transform, flush)
}
