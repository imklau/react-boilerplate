#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs-extra")
const path = require("path")
const https = require("https")
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
        ".babelrc",
        ".eslintrc",
        ".prettierrc",
        ".stylelintrc",
      ]

      for (let i = 0; i < filesToCopy.length; i += 1) {
        fs.createReadStream(path.join(__dirname, `../${filesToCopy[i]}`)).pipe(
          fs.createWriteStream(`${projectName}/${filesToCopy[i]}`)
        )
      }

      // npm will remove the .gitignore file when the package is installed, therefore it cannot be copied, locally and needs to be downloaded. Use your raw .gitignore once you pushed your code to GitHub.
      https.get(
        "https://raw.githubusercontent.com/Noeemi/react-boilerplate/master/.gitignore",
        (res) => {
          res.setEncoding("utf8")
          let body = ""
          res.on("data", (data) => {
            body += data
          })
          res.on("end", () => {
            fs.writeFile(
              `${process.argv[2]}/.gitignore`,
              body,
              { encoding: "utf-8" },
              (err) => {
                if (err) throw err
              }
            )
          })
        }
      )

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
          fs.copy(path.join(__dirname, "../webpack"), `${projectName}/webpack`)
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
