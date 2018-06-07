const releaseIt = require('release-it')

module.exports = function startReleaseIt(options) {
  const releaseItOptions = {
    buildCommand: options.buildCommand,
    'dry-run': options.dryRun,
    requireCleanWorkingDir: false,
    src: {
      tagName: 'v%s',
    },
    github: {
      release: options.githubRelease,
      draft: true,
      assets: options.assetsPath ? `${options.assetsPath}/*.*` : undefined,
      tokenRef: options.githubToken,
    },
    npm: {
      publish: options.npmPublish,
    },
  }

  return releaseIt(releaseItOptions)
}
