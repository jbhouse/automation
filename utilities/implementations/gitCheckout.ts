module.exports = (git: any) => {

    return ({ "gitCheckout": gitCheckout });

    function parseGitBranches(branchList: string, branchMessage: string, workingDirectory: string) {
        let listOfBranches: string[] = branchList
            .split("\n")
            .filter(msg => !msg.includes("remote"))
            .map(msg => msg.replace("*", "").trim())
            .filter(msg => msg !== "");
        let branchNamesContainingInput: string[] = listOfBranches.filter(msg => msg.includes(branchMessage));
        if (branchNamesContainingInput.length == 0) {
            console.log("No branches were found with the given message. branch messages: ", branchList);
        } else if (branchNamesContainingInput.length > 1) {
            console.log("More than one branch was found that contains the given input: ", branchNamesContainingInput);
        } else {
            git(workingDirectory).raw(['checkout', branchNamesContainingInput[0]],
                (err: string, result: string) => Boolean(result) ? console.log(result) : err
            );
        }
    }

    function gitCheckout(workingDirectory: string, givenBranchName: string) {
        git(workingDirectory).raw(
            ['branch'], (err: string, result: string) =>
                Boolean(result) ? parseGitBranches(result, givenBranchName, workingDirectory) : console.log(err)
        )
    }
}