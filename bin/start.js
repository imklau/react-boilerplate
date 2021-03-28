#!/usr/bin/env node
/* eslint-disable no-console */
const { writeFile, copy } = require("fs-extra")
const fetch = require("node-fetch")
const path = require("path")
const { exec } = require("child_process")
const editJsonFile = require("edit-json-file")

const projectName = process.argv.slice(2)[0]

const getGitignore = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Noeemi/react-boilerplate/master/.gitignore"
  )
  return response.text()
}

if (!projectName) {
  console.log("⁉️ You need to specify your project name.")
} else {
  console.log("✨ Initializing project...")

  exec(`mkdir ${projectName} && cd ${projectName}`, (initErr) => {
    if (initErr) {
      console.error(`Everything was fine, then it wasn't:${initErr}`)
      return
    }

    copy(path.join(__dirname, "../app"), `${projectName}/`).then(() => {
      const packageJson = editJsonFile(`${projectName}/package.json`)

      packageJson.set("name", projectName)
      packageJson.save()

      getGitignore().then((response) => {
        writeFile(`${projectName}/.gitignore`, response)
      })
    })

    console.log("Installing dependencies ------ it might take a few minutes...")
    exec(`cd ${projectName} && yarn`, (err) => {
      if (err) {
        console.error(`Some error while installing dependencies ${err}`)
        return
      }
      console.log(
        `✅  All done!\n\nYour project is now ready\n\nUse the below command to run the app.\n\ncd ${projectName}\nyarn start`
      )
    })
  })
}
