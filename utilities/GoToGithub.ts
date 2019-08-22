var parse = require('parse-git-config');
var child = require('child_process').execFile;

var gitUrl = parse.sync()['remote "origin"']['url'];
var repoURL = gitUrl.substring(0, gitUrl.length - 4);

module.exports = {
    goToGithub: (executablePath: string) => child(executablePath, [repoURL], function (err: string, data: string) {
        if (err) {
            console.error(err);
            return;
        }
    })
}