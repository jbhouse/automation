let gitUpdate = require('../utilities/gitUpdate');
let gitPull = require('../utilities/gitPull');
let gitCommit = require('../utilities/gitCommit');
let goToGithub = require('../utilities/goToGithub');
let openPr = require('../utilities/openPR');
let parseBranchName = require('../utilities/parseBranchName');

module.exports = {
    update: (path: string) => gitUpdate.gitUpdate(path)
    , pull: (workingDirectory: string, branchName: string) => gitPull.gitPull(workingDirectory, branchName)
    , commit: (workingDirectory: string, commitMessage: string[]) => gitCommit.gitCommit(workingDirectory, commitMessage)
    , goToGithub: (executablePath: string) => goToGithub.goToGithub(executablePath)
    , openPR: (executablePath: string) => openPr.openPR(executablePath)
    , parseBranch: (executablePath: string) => parseBranchName.parseGitBranch(executablePath)
}