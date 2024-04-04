const { execSync } = require("node:child_process");
const output = execSync("node exec_demo.js", (error, stdout, stderr) => {
  if (error) {
    console.log(error);
  }
  console.log("stderr", stderr);
  console.log("output", stdout);
});
