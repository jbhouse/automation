"use strict";
module.exports = {
    // find a way to replace this with childprocess, or maybe simple git
    parseGitBranch: (pathName) => require('git-branch')(pathName)
        .then((name) => name)
        .catch(console.error)
};
