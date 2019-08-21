let gitUpdate = require('../utilities/gitUpdate.js');
let gitPull = require('../utilities/gitPull.js');
let gitCommit = require('../utilities/gitCommit.js');
let goToGithub = require('../utilities/goToGithub.js');

module.exports = {
    update: (path: string) => gitUpdate.gitUpdate(path),
    pull: (workingDirectory: string, branchName: string) => gitPull.gitPull(workingDirectory, branchName),
    commit: (workingDirectory: string, commitMessage: string[]) => gitCommit.gitCommit(workingDirectory, commitMessage),
    goToGithub: (executablePath: string) => goToGithub.goToGithub(executablePath)
}