"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = (fs, git) => {
    const cmd = require('./commandLine').init(fs);
    const filters = require('../filters').init(fs);
    return {
        gitUpdate: (path) => {
            console.log("Updating git repos");
            filters.filterForGitProjects(cmd.changeDirectoryTo(path)).forEach((projectName) => {
                git(projectName).raw(['pull', 'origin', 'develop'], (err, result) => {
                    Boolean(result) ? console.log(projectName + "---", result) : console.log(projectName + "---", err);
                });
            });
        }
    };
};
