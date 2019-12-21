"use strict";
const fs = require('fs');
const gitCommands = require('../utilities/git');
const dailyUpdate = require('../utilities/implementations/taskIncrementor');
const cliUtils = require('../utilities/cliUtils');
const sqlUtils = require('../utilities/implementations/sqlSyntax');
const codeCoffer = require('../utilities/implementations/callToCodeCoffer');
const commandToInvoke = process.argv[2];
const commandMap = {
    "gitUpdate": () => gitCommands(fs).update(process.argv[3]),
    "gitCheckout": () => gitCommands(fs).checkout(process.argv[3], process.argv[4]),
    "popStashByName": () => gitCommands(fs).popStashByName(process.argv[3], process.argv.slice(4).join(" ")),
    "gitPull": () => gitCommands(fs).pull(process.argv[3], process.argv[4]),
    "gitCommit": () => gitCommands(fs).commit(process.argv[3], process.argv.slice(4).join(" ")),
    "goToGithub": () => gitCommands(fs).GitUrl(process.argv[3]),
    "openPR": () => gitCommands(fs).openPR(process.argv[3]),
    "parseBranch": () => gitCommands(fs).parseBranch(process.argv[3]),
    "commitBranchName": () => gitCommands(fs).commit(process.argv[3], process.argv.slice(4).join(" ")),
    "dailyUpdate": () => dailyUpdate(fs).update(process.argv[3], gitCommands(fs).update),
    "google": () => cliUtils.google(process.argv[3], process.argv),
    "sql": () => sqlUtils.getSqlCommand(process.argv.slice(3).join(" ")),
    "jsSyntax": () => cliUtils.searchForJavascriptSyntax(process.argv[3], process.argv.slice(4).join(" ")),
    "codeCoffer": () => codeCoffer.openSnippet(process.argv.slice(3).join(" "))
};
commandMap[commandToInvoke]();
