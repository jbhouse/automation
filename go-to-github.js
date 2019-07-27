const parse = require('parse-git-config');
const child = require('child_process').execFile;
const executablePath = process.argv[2];

const gitUrl = parse.sync()['remote "origin"']['url'];
const sanitizedUrl = gitUrl.substring(0, gitUrl.length - 4);

child(executablePath, [sanitizedUrl], function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
});