"use strict";
var filters = require('./filters.js');
var git = require('simple-git');
var cmd = require('./commandLine');
module.exports = {
    gitUpdate: (path) => {
        console.log("Updating git repos");
        filters.filterForGitProjects(cmd.changeDirectoryTo(path)).forEach((projectName) => {
            git(projectName).raw(['pull', 'origin', 'develop'], (err, result) => {
                Boolean(result) ? console.log(projectName + "---", result) : console.log(projectName + "---", err);
            });
        });
    }
};
