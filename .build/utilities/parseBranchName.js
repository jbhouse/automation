"use strict";
var git = require('simple-git');
var branch = require('git-branch');
module.exports = {
    parseGitBranch: function (pathName) {
        return branch(pathName)
            .then(function (name) {
            return name;
        }) //=> 'master'
            .catch(console.error);
    }
};
