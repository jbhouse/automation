module.exports = (git: any) => {

    return ({ "gitCheckout": gitCheckout });

    function parseGitBranches(branchList: string[], branchMessage: string, workingDirectory: string) {
        let listOfBranches: string[] = branchList
            .filter(msg => !msg.includes("remote"))
            .map(msg => msg.replace("*", "").trim())
            .filter(msg => msg !== "");
        let branchNamesContainingInput: string[] = listOfBranches.filter(msg => msg.includes(branchMessage));
        if (branchNamesContainingInput.length == 0) {
            console.log("No branches were found with the given message. branch messages: ", branchList);
        } else if (branchNamesContainingInput.length > 1) {
            console.log("More than one branch was found that contains the given input: ", branchNamesContainingInput);
        } else {
            require('child_process').exec('git checkout ' + branchNamesContainingInput[0], (err: string, stdout: string, stderr: string) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                } // node couldn't execute the command
                console.log(stdout);
                console.log(stderr);
            })
        }
    }

    function gitCheckout(workingDirectory: string, givenBranchName: string, branchList: string[]) {
        parseGitBranches(branchList, givenBranchName, workingDirectory)
    }
}