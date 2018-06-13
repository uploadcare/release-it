# Release-it for Uploadcare

This is a tool used to deploy our projects.

[![GitHub release][badge-release-img]][badge-release-url]&nbsp;

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

[badge-release-url]: https://github.com/uploadcare/uploadcare-ckeditor/releases
[release-it]: https://github.com/webpro/release-it
