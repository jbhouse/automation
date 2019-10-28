"use strict";
module.exports = {
    parseGitBranch: (pathName) => require('git-branch')(pathName)
        .then((name) => name)
        .catch(console.error)
};
