# Release-it for Uploadcare

<a href="https://uploadcare.com/?utm_source=github&utm_campaign=uploadcare-ckeditor">
    <img align="right" width="64" height="64"
         src="https://ucarecdn.com/2f4864b7-ed0e-4411-965b-8148623aa680/uploadcare-logo-mark.svg"
         alt="">
</a>

This is a set of scripts used to release our open-source projects. It is based on [`release-it`][release-it] and [`gh-pages`][gh-pages] libraries.

[![NPM version][npm-img]][npm-url]
[![GitHub release][badge-release-img]][badge-release-url]&nbsp;
[![Uploadcare stack on StackShare][badge-stack-img]][badge-stack-url]

## Requirements

Expected project structure:

```
.
├── .release-it.json
├── demo (needed for deploy-demo)
│   └── index.html
├── dist
    ├── uploadcare-plugin.js
├── index.html (needed for deploy-demo)
```

## Install

```
npm install @uploadcare/release-it --save-dev
```

## Configuration

Create file named `.release-it.json` inside your project:

```
touch .release-it.json
```

Possible options:
```json
{
  "archiveName": "uploadcare-plugin",
  "buildCommand": "npm run build",
  "githubRelease": true,
  "createArchives": true,
  "npmPublish": true,
  "deployRelease": true,
  "deployDemo": true,
  "dryRun": false
}
```

Property `archiveName` is the name for `tar` and `zip` archives attached to the GitHub release. By default it is package name from `package.json`.

These options is passed down to the [`release-it`][release-it] so you can set some specific options for it.

## Usage

To start deploy

```
./node_modules/.bin/release-it
```

[release-it]: https://github.com/webpro/release-it
[badge-release-img]: https://img.shields.io/github/release/uploadcare/uploadcare-release-it.svg
[badge-release-url]: https://github.com/uploadcare/uploadcare-release-it/releases
[badge-stack-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat
[badge-stack-url]: https://stackshare.io/uploadcare/stacks/
[npm-img]: http://img.shields.io/npm/v/uploadcare-release-it.svg
[npm-url]: https://www.npmjs.org/package/uploadcare-release-it
[gh-pages]: https://github.com/tschaub/gh-pages
