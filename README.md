# How-to use

1. Install
```
npm install @uploadcare/release-it --save-dev
```

2. Create configs
```
touch .release-it.json
```

Possible options:
```
{
  archiveName: 'uploadcare-plugin',
  buildCommand: 'npm run build',
  githubRelease: true,
  npmPublish: true,
  deployRelease: true,
  deployDemo: true,
  dryRun: false,
}
```

3. Run
```
node_modules/.bin/release-it
```

# Expected project structure
```
.
├── .release-it.json
├── demo (needed for deploy-demo)
│   └── index.html
├── dist
    ├── uploadcare-plugin.js
├── index.html (needed for deploy-demo)
```
