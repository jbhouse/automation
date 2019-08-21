"use strict";
var gitCommands = require('../utilities/git.js');
var commandToInvoke = process.argv[2];
var commandMap = {
    "gitUpdate": function () { return gitCommands.update(process.argv[3]); },
    "gitPull": function () { return gitCommands.pull(process.argv[3], process.argv[4]); },
    "gitCommit": function () { return gitCommands.commit(process.argv[3], process.argv.slice(4)); },
    "goToGithub": function () { return gitCommands.goToGithub(process.argv[3]); }
};
commandMap[commandToInvoke]();
