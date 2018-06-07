const archiver = require('archiver')
const fs = require('fs')
const path = require('path')
const os = require('os')

function createZipArchive(tmpDir, name) {
  const archivePath = path.join(tmpDir, `${name}.zip`)
  const output = fs.createWriteStream(archivePath)
  const archive = archiver('zip')

  output.on('close', () => console.log(`Archive "${name}.zip" created`))
  archive.on('warning', err => console.error(err))

  archive.pipe(output)
  archive.directory('dist/', false)
  archive.finalize()
}

function createTarArchive(tmpDir, name) {
  const archivePath = path.join(tmpDir, `${name}.tar.gz`)
  const output = fs.createWriteStream(archivePath)
  const archive = archiver('tar')

  output.on('close', () => console.log(`Archive "${name}.tar.gz" created`))
  archive.on('warning', err => console.error(err))

  archive.pipe(output)
  archive.directory('dist/', false)
  archive.finalize()
}

module.exports = function createArchives(name) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'archives-'))

  createZipArchive(tmpDir, name)
  createTarArchive(tmpDir, name)

  return tmpDir
}
