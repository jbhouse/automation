"use strict";
module.exports = (() => {
    const branch = require('git-branch');
    return {
        parseGitBranch: (pathName) => {
            return branch(pathName)
                .then((name) => {
                return name;
            }) //=> 'master'
                .catch(console.error);
        }
    };
})();
