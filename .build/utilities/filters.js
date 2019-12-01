"use strict";
module.exports = (cmd, fs) => {
    return ({
        "isGitProject": isGitProject,
        "filterForGitProjects": filterForGitProjects,
        "filterForFileName": filterForFileName
    });
    function isGitProject(absolutePath) { return fs.lstatSync(absolutePath).isDirectory() && cmd.checkIfFileExists(absolutePath + '\\.git'); }
    function filterForGitProjects(projects) { return projects.filter((project) => fs.lstatSync(project).isDirectory() && cmd.checkIfFileExists(project + '\\.git')); }
    function filterForFileName(projects, desiredFileName) { return projects.filter((project) => project.includes(desiredFileName)); }
};
