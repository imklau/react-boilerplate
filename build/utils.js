const fs = require('fs')
const { whiteBright } = require('chalk')
const editJsonFile = require('edit-json-file')

const NODE_VERSION = process.versions.node

function checkNodeVersion() {
  if (parseInt(NODE_VERSION) < 14) {
    console.log(`
    ❗️ You have Node ${whiteBright(NODE_VERSION)} installed.

      The ${whiteBright('react-app')} requires Node ${whiteBright(
      '14.0'
    )} or higher. Please, update your version of Node.
    `)
    process.exit()
  }
}

function checkProjectName(name) {
  if (typeof name === 'undefined') {
    console.log(`
    ❗️ Please specify the app name.

      ${whiteBright('npx @imklau/react-app <app-name>')}
    `)

    process.exit(1)
  }

  if (fs.existsSync(`./${name}`)) {
    console.log(`
    ❗️ The directory ${whiteBright(name)} exists. Try using a new name.
    `)

    process.exit(1)
  }
}

function updatePackageJson(name) {
  const packageJson = editJsonFile(`./${name}/package.json`)

  packageJson.set('name', name)
  packageJson.save()
}

module.exports = {
  checkNodeVersion,
  checkProjectName,
  updatePackageJson,
}
