"use strict";
var fs = require('fs');
var gitCommands = require('../utilities/git').init(fs);
var dailyUpdate = require('../utilities/taskIncrementor').init(fs);
var cliUtils = require('../utilities/cliUtils').init();
var commandToInvoke = process.argv[2];
var commandMap = {
    "gitUpdate": function () { return gitCommands.update(process.argv[3]); },
    "gitPull": function () { return gitCommands.pull(process.argv[3], process.argv[4]); },
    "gitCommit": function () { return gitCommands.commit(process.argv[3], process.argv.slice(4).join(" ")); },
    "goToGithub": function () { return gitCommands.GitUrl(process.argv[3]); },
    "openPR": function () { return gitCommands.openPR(process.argv[3]); },
    "parseBranch": function () { return gitCommands.parseBranch(process.argv[3]); },
    "commitBranchName": function () { return gitCommands.parseBranch(process.argv[3])
        .then(function (branchName) {
        return gitCommands.commit(process.argv[3], branchName + ": " + process.argv.slice(4).join(" "));
    }); },
    "dailyUpdate": function () { return dailyUpdate.update(process.argv[3], gitCommands.update); },
    "google": function () { return cliUtils.google(process.argv[3], process.argv); },
    "FilterMavenCommand": function () { return cliUtils.FilterOutput(process.argv[3], " | grep --line-buffered "
        + process.argv.slice(4).join(" | grep --line-buffered ")); }
};
commandMap[commandToInvoke]();
