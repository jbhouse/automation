"use strict";
var filters = require('./filters.js');
var git = require('simple-git');
var cmd = require('./commandLine');
module.exports = {
    gitUpdate: function (path) { return filters.filterForGitProjects(cmd.changeDirectoryTo(path)).forEach(function (projectName) {
        git(projectName).raw(['pull', 'origin', 'develop'], function (err, result) {
            Boolean(result) ? console.log(projectName + "---", result) : console.log(projectName + "---", err);
        });
    }); }
};
