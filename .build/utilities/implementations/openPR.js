"use strict";
module.exports = (childProcess) => {
    return ({ "openPR": openPR });
    function openPR(executablePath, pullRequestUrl, fn) {
        childProcess.exec('git branch', function (err, stdout) {
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
