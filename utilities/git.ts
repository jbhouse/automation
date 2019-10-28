export const init = (fs: any) => {
    const git = require('simple-git');
    const gitPull = require('./implementations/gitPull');
    const gitUrl = require('./implementations/gitUrl');
    const gitUpdate = require('./implementations/gitUpdate');
    const gitCommit = require('./implementations/gitCommit');
    const gitPopStash = require('./implementations/git-pop-stash-by-name');
    const parseBranchName = require('./implementations/parseBranchName');
    const openPr = require('./implementations/openPR');
    const google = require('./implementations/google');
    return {
        update: (path: string) => gitUpdate.init(fs, git).gitUpdate(path)
        , pull: (workingDirectory: string, branchName: string) => gitPull.init(git).gitPull(workingDirectory, branchName)
        , commit: (workingDirectory: string, commitMessage: string[]) => gitCommit.init(git).gitCommit(workingDirectory, commitMessage)
        , GitUrl: (executablePath: string) => google.searchGoogle(executablePath, gitUrl.gitUrl())
        , openPR: (executablePath: string) => openPr.openPR(executablePath, gitUrl.gitUrl(), google.searchGoogle)
        , parseBranch: (executablePath: string) => parseBranchName.parseGitBranch(executablePath)
        , popStashByName: (workingDirectory: string, stashName: string) => gitPopStash.init(git).popStash(workingDirectory, stashName)
    }
}