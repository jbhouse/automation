const git = require('simple-git');
const path = './';

git(path).raw(
    [
        'status'
    ], (err, result) => {

        if (Boolean(result)) {
            console.log(result);
        }
        if (Boolean(err)) {
            console.log(err);
        }

        // err is null unless this command failed
        // result is the raw output of this command

    });