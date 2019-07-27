const git = require('simple-git');
const currentWorkingDirectory = process.argv[2];
var commitMessage = "";
const branch = require('git-branch');

for (let i = 3; i < process.argv.length; i++) {
    commitMessage += (" " + process.argv[i])
}

branch(currentWorkingDirectory)
    .then(name => {
        let branchName = name + ":" + commitMessage;

        git(currentWorkingDirectory).raw(
            [
                'commit',
                '.',
                '-m',
                branchName
            ], (err, result) => {

                if (Boolean(result)) {
                    console.log(result);
                }
                if (Boolean(err)) {
                    console.log(err);
                }
            });
    }) //=> 'master'
    .catch(console.error);

