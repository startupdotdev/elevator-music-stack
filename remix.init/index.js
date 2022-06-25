const fs = require("fs");
const path = require("path");
const prependFile = require("prepend-file");
const { execSync } = require("child_process");

async function main({ rootDirectory }) {
  // const HARDHAT_DIR = path.join(rootDirectory, "hardhat");
  // console.log("🛗");
  // console.log(
  //   "You have now reached the part where we're going to set you up for web3 development"
  // );
  // console.log("Let's start by installing Hardhat!");
  // console.log("🛗");
  // if (!fs.existsSync(HARDHAT_DIR)) {
  //   fs.mkdirSync(HARDHAT_DIR);
  // }
  // execSync(`npx hardhat`, { stdio: "inherit", cwd: HARDHAT_DIR });
  // execSync(`npm i hardhat`, { stdio: "inherit", cwd: HARDHAT_DIR });
  // execSync(
  //   `npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers hardhat-deploy`,
  //   { stdio: "inherit", cwd: HARDHAT_DIR }
  // );
  // // TODO: Handle etup using typescript and hardhat.config.ts
  // // Setup hardhat-deploy
  // const HARDHAT_CONFIG = path.join(HARDHAT_DIR, "hardhat.config.js");
  // if (!fs.existsSync(HARDHAT_CONFIG)) {
  //   throw "Error: missing hardhat.config.js";
  // }
  // prependFile.sync(HARDHAT_CONFIG, 'require("@nomiclabs/hardhat-ethers");\n');
  // prependFile.sync(HARDHAT_CONFIG, 'require("hardhat-deploy");\n');
  // const HARDHAT_DEPLOYMENTS_DIR = path.join(HARDHAT_DIR, "deployments");
  // if (!fs.existsSync(HARDHAT_DEPLOYMENTS_DIR)) {
  //   fs.mkdirSync(HARDHAT_DEPLOYMENTS_DIR);
  // }
  // // TODO: Handle subgraph deploy.
  // // Creating an empty file for now to keep parity with postdeploy script
  // const PUBLISH_SCRIPT = path.join(HARDHAT_DIR, "scripts/publish.js");
  // fs.closeSync(fs.openSync(PUBLISH_SCRIPT, "w"));
}

module.exports = main;
