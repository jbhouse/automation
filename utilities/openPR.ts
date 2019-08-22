var parse = require('parse-git-config');
var child = require('child_process').execFile;
var git = require('simple-git');

var gitUrl = parse.sync()['remote "origin"']['url'];
var pullRequestUrl: string = gitUrl.substring(0, gitUrl.length - 4) + "\\pull\\new\\";

module.exports = {
    openPR: (executablePath: string) => {

        require('child_process').exec('git branch', function (err: string, stdout: string) {
            pullRequestUrl += stdout.split(' ')[1];

            child(executablePath, [pullRequestUrl], function (err: string, data: string) {
                if (err) {
                    console.error(err);
                    return;
                }
            })

        });
    }
}