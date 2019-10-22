export const init = (git: any) => {
    let branchName = "develop";
    return {
        gitPull: (workingDirectory: string, givenBranchName: string) => {
            if (Boolean(givenBranchName)) {
                branchName = givenBranchName;
            }
            git(workingDirectory).raw(
                ['pull', 'origin', branchName],
                (err: string, result: string) => {
                    Boolean(result) ? console.log(result) : console.log(err)
                }
            );
        }
    }
}