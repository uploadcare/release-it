const ghpages = require('gh-pages')
const path = require('path')

module.exports = function deployRelease(src = './dist/') {
  const distPath = path.resolve(process.cwd(), src)
  console.log(distPath)
  return new Promise((res, rej) =>
    ghpages.publish(
      distPath,
      {
        branch: 'release',
        message: 'Release ' + process.env.npm_package_version,
      },
      err => {
        if (err) {
          console.error('Release branch push failed', err)
          rej(err)
        } else {
          console.log('Release branch pushed')
          res()
        }
      },
    ),
  )
}
