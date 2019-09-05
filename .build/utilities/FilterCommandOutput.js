"use strict";
var exec = require('child_process').exec;
module.exports = {
    filterOutput: function (command, filterKeyword) { return filterOutputByKeyword(command, filterKeyword); }
};
function filterOutputByKeyword(command, filterKey) {
    exec(command + filterKey, function (err, stdout, stderr) {
        if (err) {
            console.log("error: ", err);
            return;
        } // node couldn't execute the command
        console.log(stdout);
        console.log(stderr);
    });
}
