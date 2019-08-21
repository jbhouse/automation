var git = require('simple-git');
var commitMessage = "";
const branch = require('git-branch');

module.exports = {
    gitCommit: (currentWorkingDirectory: string, commit: string[]) => {
        for (let i = 0; i < commit.length; i++) {
            commitMessage += (" " + process.argv[i])
        }
        return branch(currentWorkingDirectory)
            .then((name: string) => {
                let branchName = name + ":" + commitMessage;

                git(currentWorkingDirectory).raw(
                    [
                        'commit',
                        '.',
                        '-m',
                        branchName
                    ], (err: string, result: string) => {

                        if (Boolean(result)) {
                            console.log(result);
                        }
                        if (Boolean(err)) {
                            console.log(err);
                        }
                    });
            }) //=> 'master'
            .catch(console.error);
    }
}