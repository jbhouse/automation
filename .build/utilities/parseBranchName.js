"use strict";
var git = require('simple-git');
const branch = require('git-branch');
module.exports = {
    parseGitBranch: (pathName) => {
        return branch(pathName)
            .then((name) => {
            return name;
        }) //=> 'master'
            .catch(console.error);
    }
};
