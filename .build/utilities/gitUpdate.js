"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function (fs, git) {
    var cmd = require('./commandLine').init(fs);
    var filters = require('./filters').init(fs);
    return {
        gitUpdate: function (path) {
            console.log("Updating git repos");
            filters.filterForGitProjects(cmd.changeDirectoryTo(path)).forEach(function (projectName) {
                git(projectName).raw(['pull', 'origin', 'develop'], function (err, result) {
                    Boolean(result) ? console.log(projectName + "---", result) : console.log(projectName + "---", err);
                });
            });
        }
    };
};
