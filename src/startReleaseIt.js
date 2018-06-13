const releaseIt = require('release-it')

module.exports = function(options) {
  const releaseItOptions = {
    'buildCommand': options.buildCommand,
    'dry-run': options.dryRun,
    'requireCleanWorkingDir': false,
    'src': {tagName: 'v%s'},
    'github': {
      release: options.githubRelease,
      draft: true,
      assets: options.assetsPath ? `${options.assetsPath}/*.*` : undefined,
    },
    'npm': {publish: options.npmPublish},
  }

  return releaseIt(releaseItOptions)
}
