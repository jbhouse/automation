"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function () {
    var exec = require('child_process').exec;
    return {
        filterOutput: function (command, filterKey) {
            exec(command + filterKey, function (err, stdout, stderr) {
                if (err) {
                    console.log("error: ", err);
                    return;
                } // node couldn't execute the command
                console.log(stdout);
                console.log(stderr);
            });
        }
    };
};
