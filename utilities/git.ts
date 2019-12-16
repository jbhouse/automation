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
        , checkout: async (workingDirectory: string, branchName: string) => gitCheckout.gitCheckout(branchName, await gitBranches.listBranches(), workingDirectory)
        , pull: (workingDirectory: string, branchName: string) => gitPull.gitPull(branchName, workingDirectory)
        , commit: async (workingDirectory: string, commitMessage: string[]) => gitCommit.gitCommit(workingDirectory, parseBranchName.parseCurrentGitBranch(await gitBranches.listBranches(workingDirectory)) + ": " + commitMessage)
        , GitUrl: (executablePath: string) => google.searchGoogle(executablePath, gitUrl(cmd).gitUrl())
        , openPR: async (executablePath: string) => openPr.openPR(executablePath, gitUrl(cmd).gitUrl(), google.searchGoogle, parseBranchName.parseCurrentGitBranch(await gitBranches.listBranches()))
        , parseBranch: async (executablePath: string) => console.log(parseBranchName.parseCurrentGitBranch(await gitBranches.listBranches(executablePath)))
        , popStashByName: (workingDirectory: string, stashName: string) => gitPopStash.popStash(workingDirectory, stashName)
    }
}