const git = require('simple-git');
const fs = require('fs');
const cmd = require('./commandLine');

const path = process.argv[2];
// const filterForGitProjects =
// (absolutePath) => fs.lstatSync(absolutePath).isDirectory() && cmd.checkIfFileExists(absolutePath + '\\.git')

cmd.changeDirectoryTo(path).filter((project) => fs.lstatSync(path + project).isDirectory() && cmd.checkIfFileExists(path + project + '\\.git')).forEach(projectName => {
    git(path + projectName).raw(
        [
            'pull',
            'origin',
            'develop'

        ], (err, result) => {
            if (Boolean(result)) {
                console.log(path + projectName + "---", result);
            }
            if (Boolean(err)) {
                console.log(path + projectName + "---", err);
            }
        });
})