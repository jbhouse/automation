"use strict";
module.exports = (() => {
    const parse = require('parse-git-config');
    return {
        gitUrl: () => {
            const gitUrl = parse.sync()['remote "origin"']['url'];
            return gitUrl.substring(0, gitUrl.length - 4);
        }
    };
})();
