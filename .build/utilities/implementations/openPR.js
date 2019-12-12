"use strict";
module.exports = {
    openPR: (executablePath, pullRequestUrl, fn) => {
        return (branchName) => {
            pullRequestUrl += "\\pull\\new\\" + branchName;
            fn(executablePath, pullRequestUrl);
        };
    }
};
