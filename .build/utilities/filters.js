"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = (fs) => {
    const cmd = require('./implementations/commandLine').init(fs);
    return {
        isGitProject: (absolutePath) => fs.lstatSync(absolutePath).isDirectory() && cmd.checkIfFileExists(absolutePath + '\\.git'),
        filterForGitProjects: (projects) => projects.filter((project) => fs.lstatSync(project).isDirectory() && cmd.checkIfFileExists(project + '\\.git')),
        filterForFileName: (projects, desiredFileName) => projects.filter((project) => project.includes(desiredFileName))
    };
};
