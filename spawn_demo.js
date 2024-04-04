const { spawn } = require("child_process");

// On Windows, use "node" as the command and pass arguments separately
//const ls = spawn("node", ["--help"]);
//fow windows IP
const ls = spawn("ipconfig");
ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
