"use strict";
const fs = require('fs');
const gitCommands = require('../utilities/git')(fs);
const dailyUpdate = require('../utilities/implementations/taskIncrementor')(fs);
const cliUtils = require('../utilities/cliUtils');
const commandToInvoke = process.argv[2];
const commandMap = {
    "gitUpdate": () => gitCommands.update(process.argv[3]),
    "gitCheckout": () => gitCommands.checkout(process.argv[3], process.argv[4]),
    "popStashByName": () => gitCommands.popStashByName(process.argv[3], process.argv.slice(4).join(" ")),
    "gitPull": () => gitCommands.pull(process.argv[3], process.argv[4]),
    "gitCommit": () => gitCommands.commit(process.argv[3], process.argv.slice(4).join(" ")),
    "goToGithub": () => gitCommands.GitUrl(process.argv[3]),
    "openPR": () => gitCommands.openPR(process.argv[3]),
    "parseBranch": () => gitCommands.parseBranch(process.argv[3]),
    "commitBranchName": () => gitCommands.parseBranch(process.argv[3])
        .then((branchName) => gitCommands.commit(process.argv[3], branchName + ": " + process.argv.slice(4).join(" "))),
    "dailyUpdate": () => dailyUpdate.update(process.argv[3], gitCommands.update),
    "google": () => cliUtils.google(process.argv[3], process.argv),
    "FilterMavenCommand": () => cliUtils.FilterOutput(process.argv[3], " | grep --line-buffered "
        + process.argv.slice(4).join(" | grep --line-buffered "))
};
commandMap[commandToInvoke]();
