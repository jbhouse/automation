"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function () {
    var branch = require('git-branch');
    return {
        parseGitBranch: function (pathName) {
            return branch(pathName)
                .then(function (name) {
                return name;
            }) //=> 'master'
                .catch(console.error);
        }
    };
};
