module.exports = {
    gitPull: (givenBranchName: string, workingDirectory: string, errorFormattingFunction?: any) => {

        let workingDir: string = Boolean(workingDirectory) ? workingDirectory : process.cwd();
        let branchName: string = Boolean(givenBranchName) ? givenBranchName : "develop";

        require('child_process').exec('git pull origin ' + branchName, { cwd: workingDir }, (err: any, stdout: string, stderr: string) => {
            if (Boolean(err)) {
                Boolean(errorFormattingFunction) ? console.log("Error: ", errorFormattingFunction(err), "\n") : console.log("Error: ", err);
                return;
            }
            Boolean(stdout) ? console.log(stdout) : console.log(stderr);
        })
    }
}