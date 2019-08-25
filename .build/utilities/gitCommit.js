"use strict";
var git = require('simple-git');
module.exports = {
    gitCommit: function (pathName, commitMessage) {
        /*
        * The commit message is based on terminal input of indeterminate length collected into a string array
        * We need to create one coherent message by prepending each word with a space and adding it to the message itself
        */
        return git(pathName).raw(['commit', '.', '-m', commitMessage], function (err, result) {
            if (Boolean(result)) {
                console.log(result);
            }
            if (Boolean(err)) {
                console.log(err);
            }
        });
    }
};
