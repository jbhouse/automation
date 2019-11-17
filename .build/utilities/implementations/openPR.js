"use strict";
module.exports = {
    openPR: (executablePath, pullRequestUrl, fn) => {
        require('child_process').exec('git branch', function (err, stdout) {
            if (Boolean(err)) {
                console.log(err);
            }
            else {
                pullRequestUrl += "\\pull\\new\\" + stdout.split('*')[1].split('\n')[0].trim();
                fn(executablePath, pullRequestUrl);
            }
        });
    }
};
