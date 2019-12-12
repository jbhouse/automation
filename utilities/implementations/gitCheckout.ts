module.exports = {
    gitCheckout: (givenBranchName: string, branchList: string[], workingDirectory?: string) => {
        // need to change to working directory, if not current directory
        let workingDir: string = Boolean(workingDirectory) && workingDirectory != undefined ? workingDirectory : process.cwd();
        let listOfBranches: string[] = branchList
            .filter(msg => msg.includes("remotes/origin/"))
            .map(msg => msg.replace("remotes/origin/", "").replace("*", "").trim())
            .filter(msg => msg !== "");
        let branchNamesContainingInput: string[] = listOfBranches.filter(msg => msg.includes(givenBranchName));
        if (branchNamesContainingInput.length == 0) {
            console.log("No branches were found with the given message. branch messages: ", branchList);
        } else if (branchNamesContainingInput.length > 1) {
            console.log("More than one branch was found that contains the given input: ", branchNamesContainingInput);
        } else {
            require('child_process').exec('git checkout ' + branchNamesContainingInput[0], { cwd: workingDir }, (err: string, stdout: string, stderr: string) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                } // node couldn't execute the command
                Boolean(stdout) ? console.log(stdout) : console.log(stderr)
            })
        }
    }
}