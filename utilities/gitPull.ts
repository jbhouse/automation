var git = require('simple-git');
let branchName = "develop"

module.exports = {
    gitPull: (workingDirectory: string, givenBranchName: string) => {
        if (Boolean(givenBranchName)) {
            branchName = givenBranchName;
        }
        git(workingDirectory).raw(
            [
                'pull',
                'origin',
                branchName
            ],
            (err: string, result: string) => {
                if (Boolean(result)) {
                    console.log("git pull origin " + branchName);
                    console.log(result);
                }
                if (Boolean(err)) {
                    console.log(err);
                }
            }
        );
    }
}