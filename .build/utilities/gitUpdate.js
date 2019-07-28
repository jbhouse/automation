"use strict";
var filters = require('./filters.js');
var git = require('simple-git');
var cmd = require('./commandLine');
var path = process.argv[2];
filters.filterForGitProjects(cmd.changeDirectoryTo(path)).forEach(function (projectName) {
    git(projectName).raw([
        'pull',
        'origin',
        'develop'
    ], function (err, result) {
        if (Boolean(result)) {
            console.log(projectName + "---", result);
        }
        if (Boolean(err)) {
            console.log(projectName + "---", err);
        }
    });
});
