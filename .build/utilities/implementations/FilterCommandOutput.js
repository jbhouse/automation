"use strict";
module.exports = (childProcess) => {
    return ({ "filterOutput": filterOutput });
    function filterOutput(command, filterKey) {
        childProcess.exec(command + filterKey, (err, stdout, stderr) => {
            if (err) {
                console.log("error: ", err);
                return;
            } // node couldn't execute the command
            console.log(stdout);
            console.log(stderr);
        });
    }
};
