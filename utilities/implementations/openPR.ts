module.exports = {
    openPR: (executablePath: string, pullRequestUrl: string, fn: any) => {
        return (branchName: string) => {
            pullRequestUrl += "\\pull\\new\\" + branchName;
            fn(executablePath, pullRequestUrl);
        }
    }
}