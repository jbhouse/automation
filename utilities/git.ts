let gitUpdate = require('../utilities/gitUpdate');
let gitPull = require('../utilities/gitPull');
let gitCommit = require('../utilities/gitCommit');
let GitUrl = require('../utilities/GitUrl');
let openPr = require('../utilities/openPR');
let parseBranchName = require('../utilities/parseBranchName');
var parse = require('parse-git-config');
var google = require('./google')

module.exports = {
    update: (path: string) => gitUpdate.gitUpdate(path)
    , pull: (workingDirectory: string, branchName: string) => gitPull.gitPull(workingDirectory, branchName)
    , commit: (workingDirectory: string, commitMessage: string[]) => gitCommit.gitCommit(workingDirectory, commitMessage)
    , GitUrl: (executablePath: string) => google.searchGoogle(executablePath, GitUrl.gitUrl())
    , openPR: (executablePath: string) => openPr.openPR(executablePath, GitUrl.gitUrl())
    , parseBranch: (executablePath: string) => parseBranchName.parseGitBranch(executablePath)
}