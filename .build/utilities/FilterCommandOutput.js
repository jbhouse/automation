"use strict";
var { exec } = require('child_process');
module.exports = {
    filterOutput: (command, filterKeyword) => filterOutputByKeyword(command, filterKeyword)
};
function filterOutputByKeyword(command, filterKey) {
    exec(command + filterKey, (err, stdout, stderr) => {
        if (err) {
            console.log("error: ", err);
            return;
        } // node couldn't execute the command
        console.log(stdout);
        console.log(stderr);
    });
}
