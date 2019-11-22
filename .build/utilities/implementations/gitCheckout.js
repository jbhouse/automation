"use strict";
module.exports = (git) => {
    return ({ "gitCheckout": gitCheckout });
    function parseGitBranches(branchList, branchMessage, workingDirectory) {
        let listOfBranches = branchList
            .split("\n")
            .filter(msg => !msg.includes("remote"))
            .map(msg => msg.replace("*", "").trim())
            .filter(msg => msg !== "");
        let branchNamesContainingInput = listOfBranches.filter(msg => msg.includes(branchMessage));
        if (branchNamesContainingInput.length == 0) {
            console.log("No branches were found with the given message. branch messages: ", branchList);
        }
        else if (branchNamesContainingInput.length > 1) {
            console.log("More than one branch was found that contains the given input: ", branchNamesContainingInput);
        }
        else {
            git(workingDirectory).raw(['checkout', branchNamesContainingInput[0]], (err, result) => Boolean(result) ? console.log(result) : err);
        }
    }
    function gitCheckout(workingDirectory, givenBranchName) {
        git(workingDirectory).raw(['branch'], (err, result) => Boolean(result) ? parseGitBranches(result, givenBranchName, workingDirectory) : console.log(err));
    }
};
