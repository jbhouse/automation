module.exports = {
    openPR: (executablePath: string, pullRequestUrl: string, fn: any, branchName: string) => {
        pullRequestUrl += "\\pull\\new\\" + branchName;
        fn(executablePath, pullRequestUrl);
    }
}