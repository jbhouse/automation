var fs = require('fs');
var cmd = require('./commandLine');
module.exports = {
    isGitProject: (absolutePath: string) => fs.lstatSync(absolutePath).isDirectory() && cmd.checkIfFileExists(absolutePath + '\\.git'),
    filterForGitProjects: (projects: string[]) => projects.filter((project) => fs.lstatSync(project).isDirectory() && cmd.checkIfFileExists(project + '\\.git')),
    filterForFileName: (projects: string[], desiredFileName: string) => projects.filter((project) => project.includes(desiredFileName)
    )
}