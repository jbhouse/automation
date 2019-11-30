"use strict";
module.exports = {
    gitCheckout: (workingDirectory, givenBranchName, branchList) => {
        // need to change to working directory, if not current directory
        let listOfBranches = branchList
            .filter(msg => !msg.includes("remote"))
            .map(msg => msg.replace("*", "").trim())
            .filter(msg => msg !== "");
        let branchNamesContainingInput = listOfBranches.filter(msg => msg.includes(givenBranchName));
        if (branchNamesContainingInput.length == 0) {
            console.log("No branches were found with the given message. branch messages: ", branchList);
        }
        else if (branchNamesContainingInput.length > 1) {
            console.log("More than one branch was found that contains the given input: ", branchNamesContainingInput);
        }
        else {
            require('child_process').exec('git checkout ' + branchNamesContainingInput[0], (err, stdout, stderr) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                } // node couldn't execute the command
                Boolean(stdout) ? console.log(stdout) : console.log(stderr);
            });
        }
    }
};
