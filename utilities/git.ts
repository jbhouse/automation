module.exports = (fs: any) => {
    const gitPull = require('./implementations/gitPull');
    const gitCheckout = require('./implementations/gitCheckout');
    const gitUrl = require('./implementations/gitUrl');
    const gitUpdate = require('./implementations/gitUpdate');
    const gitCommit = require('./implementations/gitCommit');
    const gitPopStash = require('./implementations/git-pop-stash-by-name');
    const parseBranchName = require('./implementations/parseBranchName');
    const openPr = require('./implementations/openPR');
    const google = require('./implementations/google');
    const cmd = require('./implementations/commandLine')(fs);
    const gitBranches = require('./implementations/gitListBranches')
    const filters = require('./filters')(cmd, fs);

    return {
        update: (path: string) => gitUpdate(cmd, filters).gitUpdate(path, gitPull.gitPull)
        , checkout: (workingDirectory: string, branchName: string) => gitCheckout.gitCheckout(branchName, gitBranches.listBranches, workingDirectory)
        , pull: (workingDirectory: string, branchName: string) => gitPull.gitPull(branchName, workingDirectory)
        , commit: (workingDirectory: string, commitMessage: string[]) => parseBranchName.parseGitBranch(gitBranches.listBranches, gitCommit.gitCommit(workingDirectory, commitMessage), workingDirectory)
        , GitUrl: (executablePath: string) => google.searchGoogle(executablePath, gitUrl(cmd).gitUrl())
        , openPR: (googleChromeExecutablePath: string) => parseBranchName.parseGitBranch(gitBranches.listBranches, openPr.openPR(googleChromeExecutablePath, gitUrl(cmd).gitUrl(), google.searchGoogle))
        , parseBranch: (executablePath: string) => parseBranchName.parseGitBranch(gitBranches.listBranches, console.log, executablePath)
        , popStashByName: (workingDirectory: string, stashName: string) => gitPopStash.popStash(workingDirectory, stashName)
    }
}