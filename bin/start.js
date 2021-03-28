#!/usr/bin/env node
/* eslint-disable no-console */
const { writeFile, copy } = require("fs-extra")
const fetch = require("node-fetch")
const path = require("path")
const { exec } = require("child_process")
const editJsonFile = require("edit-json-file")
const { redBright, whiteBright, greenBright } = require("chalk")

const projectName = process.argv.slice(2)[0]

const getGitignore = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Noeemi/react-boilerplate/master/.gitignore"
  )
  return response.text()
}

if (!projectName) {
  console.log(
    redBright(`
  ⁉️  You need to specify your project name.`)
  )
  console.log(`
  Try again with:`)
  console.log(
    whiteBright(`
    react-app [name]
      `)
  )
} else {
  console.log(`
  ✨ Initializing project...`)

  exec(`mkdir ${projectName} && cd ${projectName}`, (initErr) => {
    if (initErr) {
      console.error(
        redBright(`
  Everything was fine, then it wasn't :(`),
        `\n ${initErr}`
      )
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

    console.log(`
    Installing dependencies - it might take a few minutes...`)
    exec(`cd ${projectName} && yarn`, (err) => {
      if (err) {
        console.error(
          redBright(`Some error while installing dependencies ${err}`)
        )
        return
      }

      console.log(
        greenBright(`
    ✓ All done!`)
      )

      console.log(`
  Your project is now ready.
  Use the below commands to run the app.`)
      console.log(
        whiteBright(`
    cd ${projectName}
    yarn start
      `)
      )
    })
  })
}
