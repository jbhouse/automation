"use strict";
module.exports = {
    gitPull: (givenBranchName, workingDirectory, errorFormattingFunction) => {
        let workingDir = Boolean(workingDirectory) ? workingDirectory : process.cwd();
        let branchName = Boolean(givenBranchName) ? givenBranchName : "develop";
        require('child_process').exec('git pull origin ' + branchName, { cwd: workingDir }, (err, stdout, stderr) => {
            if (Boolean(err)) {
                console.log(workingDir);
                if (Boolean(errorFormattingFunction)) {
                    console.log("Error: ", errorFormattingFunction(err), "\n");
                }
                else {
                    console.log("Error: ", err);
                }
                return;
            } // node couldn't execute the command
            Boolean(stdout) ? console.log(stdout) : console.log(stderr);
        });
    }
};
