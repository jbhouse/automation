var google = require('./google')

module.exports = {
    openPR: (executablePath: string, pullRequestUrl: string) => {

        require('child_process').exec('git branch', function (err: string, stdout: string) {
            pullRequestUrl += "\\pull\\new\\" + stdout.split('*')[1].split('\n')[0].trim();

            google.searchGoogle(executablePath, pullRequestUrl)
        });
    }
}