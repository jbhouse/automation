const git = require('simple-git');
const commitMessage = process.argv[3];
const currentWorkingDirectory = process.argv[2];
const branch = require('git-branch');

branch(currentWorkingDirectory)
    .then(name => {
        git(currentWorkingDirectory).raw(
            [
                'commit',
                '.',
                '-m',
                name + ": " + commitMessage
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

