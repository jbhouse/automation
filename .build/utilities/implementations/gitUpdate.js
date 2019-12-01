"use strict";
module.exports = (cmd, filters) => {
    return {
        gitUpdate: (path, fn) => {
            console.log("Updating git repos \n");
            filters.filterForGitProjects(cmd.changeDirectoryTo(path)).forEach((projectName) => {
                fn('develop', projectName, (err) => err.toString().split("\n")[1]);
            });
        }
    };
};
