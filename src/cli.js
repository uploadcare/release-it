#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const startReleaseIt = require('./startReleaseIt')
const archiveDist = require('./archiveDist')
const deployRelease = require('./deployRelease')
const deployDemo = require('./deployDemo')

const defaultOptions = {
  archiveName: undefined,
  buildCommand: 'npm run build',
  githubRelease: true,
  npmPublish: true,
  deployRelease: true,
  deployDemo: true,
  dryRun: false,
}

const optionsPath = path.resolve(process.cwd(), '.release-it.json')
const packagePath = path.resolve(process.cwd(), 'package.json')

const options = fs.existsSync(optionsPath)
  ? Object.assign(defaultOptions, JSON.parse(fs.readFileSync(optionsPath)))
  : defaultOptions

if (options.createArchives) {
  options['assetsPath'] = archiveDist(options.archiveName)
}

if (!options.archiveName) {
  const pkg = JSON.parse(fs.readFileSync(packagePath))
  const archiveName = pkg.name.replace('@uploadcare/', 'uploadcare-')

  options[archiveName] = archiveName
}

;(async() => {
  await startReleaseIt(options)

  if (options.deployDemo) {
    await deployDemo()
  }

  if (options.deployRelease) {
    await deployRelease()
  }

  console.log('All done.')
})()
