"use strict";
module.exports = {
    execute: (absolutePath, mavenArguments) => {
        var mvn = require('maven').create({
            cwd: absolutePath
        });
        mvn.execute(mavenArguments, { 'skipTests': false }).then(() => {
            // As mvn.execute(..) returns a promise, you can use this block to continue
            // your stuff, once the execution of the command has been finished successfully.
        });
    }
};
