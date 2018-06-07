const ghpages = require('gh-pages')
const path = require('path')

module.exports = function deployDemo(
  src = ['index.html', 'demo/**', 'dist/**'],
) {
  const baseDir = path.resolve(process.cwd())

  return new Promise((res, rej) =>
    ghpages.publish(baseDir, { src }, err => {
      if (err) {
        console.error('Demo push failed', err)
        rej(err)
      } else {
        console.log('Demo pushed')
        res()
      }
    }),
  )
}
