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
        console.log();

        if (Boolean(result)) {
            console.log(process.argv[2] + project + "---", result);
        }
        if (Boolean(err)) {
            console.log(process.argv[2] + project + "---", err);
        }
    });