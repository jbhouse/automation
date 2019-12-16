"use strict";
module.exports = (childProcess) => {
    return ({ "filterOutput": filterOutput });
    function filterOutput(command, filterKey) {
        childProcess.exec(command + filterKey, (err, stdout, stderr) => {
            if (err) {
                console.log("error: ", err);
                return;
            }
            Boolean(stdout) ? console.log(stdout) : console.log(stderr);
        });
    }
};
