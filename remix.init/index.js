const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

async function main({ rootDirectory }) {
  const HARDHAT_DIR = path.join(rootDirectory, "hardhat");
  console.log("🛗");
  console.log(
    "You have now reached the part where we're going to set you up for web3 development"
  );
  console.log("Let's start by installing Hardhat!");
  console.log("🛗");

  if (!fs.existsSync(HARDHAT_DIR)) {
    fs.mkdirSync(HARDHAT_DIR);
  }
  process.chdir(HARDHAT_DIR);

  execSync(`npx hardhat`, { stdio: "inherit", cwd: HARDHAT_DIR });
}

module.exports = main;
