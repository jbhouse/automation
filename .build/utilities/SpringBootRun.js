"use strict";
var exec = require('child_process').exec;
module.exports = {
    filterOutput: function (filterKeyword) { return filterOutputByKeyword(filterKeyword); }
};
function filterOutputByKeyword(filterKey) {
    exec("mvn spring-boot:run" + filterKey, function (err, stdout, stderr) {
        if (err) {
            console.log("error: ", err);
            return;
        } // node couldn't execute the command
        console.log(stdout);
        console.log(stderr);
    });
}
