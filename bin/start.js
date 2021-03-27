#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs-extra")
const path = require("path")
const { exec } = require("child_process")
const editJsonFile = require("edit-json-file")

const rootPackageJson = editJsonFile(
  path.join(path.join(__dirname, ".."), "package.json")
)
const projectName = process.argv.slice(2)[0]
const scripts = rootPackageJson.get("scripts")

if (!projectName) {
  console.log("⁉️ You need to specify your project name.")
} else {
  const getDeps = (deps) => {
    const obj = deps
    const depsToRemove = ["fs-extra", "edit-json-file"]
    depsToRemove.map((item) => delete obj[item])

    return Object.entries(obj)
      .map((dep) => `${dep[0]}@${dep[1]}`)
      .toString()
      .replace(/,/g, " ")
      .replace(/^/g, "")
  }

  console.log("✨ Initializing project...")

  // create folder and initialize yarn
  exec(
    `mkdir ${projectName} && cd ${projectName} && yarn init -y`,
    (initErr) => {
      if (initErr) {
        console.error(`Everything was fine, then it wasn't:${initErr}`)
        return
      }

      const packageJson = editJsonFile(`${projectName}/package.json`)

      packageJson.set("scripts", { ...scripts })
      packageJson.save()

      const filesToCopy = [
        "webpack.dev.js",
        "webpack.prod.js",
        ".babelrc",
        ".eslintrc",
        ".gitignore",
        ".prettierrc",
        ".stylelintrc",
      ]

      for (let i = 0; i < filesToCopy.length; i += 1) {
        fs.createReadStream(path.join(__dirname, `../${filesToCopy[i]}`)).pipe(
          fs.createWriteStream(`${projectName}/${filesToCopy[i]}`)
        )
      }

      // installing dependencies
      console.log("Installing dependencies -- it might take a few minutes...")
      const devDeps = getDeps(rootPackageJson.get("devDependencies"))
      const deps = getDeps(rootPackageJson.get("dependencies"))

      exec(
        `cd ${projectName} && git init && node -v && yarn -v && yarn add -D ${devDeps} && yarn add ${deps}`,
        (npmErr, npmStdout) => {
          if (npmErr) {
            console.error(`Some error while installing dependencies ${npmErr}`)
            return
          }
          console.log(npmStdout)
          console.log("Dependencies installed")

          console.log()
          console.log("Copying additional files...")
          // copy the src files
          fs.copy(path.join(__dirname, "../src"), `${projectName}/src`)
            .then(() =>
              console.log(
                `✅  All done!\n\nYour project is now ready\n\nUse the below command to run the app.\n\ncd ${projectName}\nyarn start`
              )
            )
            .catch((err) => console.error(err))
        }
      )
    }
  )
}
