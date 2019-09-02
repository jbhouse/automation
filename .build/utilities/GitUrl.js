"use strict";
var parse = require('parse-git-config');
module.exports = {
    gitUrl: function () {
        var gitUrl = parse.sync()['remote "origin"']['url'];
        return gitUrl.substring(0, gitUrl.length - 4);
    }
};
