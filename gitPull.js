const git = require('simple-git');
let branchName = "develop"
if (Boolean(process.argv[3])) {
    branchName = process.argv[3];
}
git(process.argv[2]).raw(
    [
        'pull',
        'origin',
        branchName
    ], (err, result) => {
        if (Boolean(result)) {
            console.log("git pull origin " + branchName);
            console.log(result);
        }
        if (Boolean(err)) {
            console.log(err);
        }
    });