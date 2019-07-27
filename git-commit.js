const git = require('simple-git');
const commitMessage = process.argv[3];
const currentWorkingDirectory = process.argv[2];

git(currentWorkingDirectory).raw(
    [
        'commit',
        '.',
        '-m',
        commitMessage
    ], (err, result) => {

        if (Boolean(result)) {
            console.log(result);
        }
        if (Boolean(err)) {
            console.log(err);
        }
    });