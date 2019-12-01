"use strict";
module.exports = {
    openPR: (executablePath, pullRequestUrl, fn, branchName) => {
        pullRequestUrl += "\\pull\\new\\" + branchName;
        fn(executablePath, pullRequestUrl);
    }
};
