"use strict";
module.exports = (cmd, filters, git) => {
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
