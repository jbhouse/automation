"use strict";
module.exports = {
    gitUrl: () => {
        const gitUrl = require('parse-git-config').sync()['remote "origin"']['url'];
        return gitUrl.substring(0, gitUrl.length - 4);
    }
};
