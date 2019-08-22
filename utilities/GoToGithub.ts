const parse = require('parse-git-config');
const child = require('child_process').execFile;

const gitUrl = parse.sync()['remote "origin"']['url'];
const sanitizedUrl = gitUrl.substring(0, gitUrl.length - 4);

module.exports = {
    goToGithub: (executablePath: string) => child(executablePath, [sanitizedUrl], function (err: string, data: string) {
        if (err) {
            console.error(err);
            return;
        }
    })
}