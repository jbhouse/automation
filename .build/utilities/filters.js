"use strict";
module.exports = (cmd) => {
    return ({
        "isGitProject": isGitProject,
        "filterForGitProjects": filterForGitProjects,
        "filterForFileName": filterForFileName
    });
    function isGitProject(absolutePath) { fs.lstatSync(absolutePath).isDirectory() && cmd.checkIfFileExists(absolutePath + '\\.git'); }
    function filterForGitProjects(projects) { projects.filter((project) => fs.lstatSync(project).isDirectory() && cmd.checkIfFileExists(project + '\\.git')); }
    function filterForFileName(projects, desiredFileName) { projects.filter((project) => project.includes(desiredFileName)); }
};
