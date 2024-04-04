const { execFile } = require("node:child_process");
const child = execFile("node", ["demo.js"], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
