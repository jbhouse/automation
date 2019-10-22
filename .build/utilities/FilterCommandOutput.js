"use strict";
module.exports = (() => {
    const { exec } = require('child_process');
    return {
        filterOutput: (command, filterKey) => {
            exec(command + filterKey, (err, stdout, stderr) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                } // node couldn't execute the command
                console.log(stdout);
                console.log(stderr);
            });
        }
    };
})();
