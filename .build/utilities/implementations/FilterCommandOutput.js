"use strict";
module.exports = {
    filterOutput: (command, filterKey) => {
        require('child_process').exec(command + filterKey, (err, stdout, stderr) => {
            if (err) {
                console.log("error: ", err);
                return;
            } // node couldn't execute the command
            console.log(stdout);
            console.log(stderr);
        });
    }
};
