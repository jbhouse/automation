"use strict";
module.exports = {
    execute: function (absolutePath, mavenArguments) {
        var mvn = require('maven').create({
            cwd: absolutePath
        });
        mvn.execute(mavenArguments, { 'skipTests': false }).then(function () {
            // As mvn.execute(..) returns a promise, you can use this block to continue
            // your stuff, once the execution of the command has been finished successfully.
        });
    }
};
