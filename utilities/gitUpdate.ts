var filters = require('./filters.js');
var git = require('simple-git');
var cmd = require('./commandLine');

module.exports = {
    gitUpdate: (path: string) => {
        console.log("Updating git repos");
        filters.filterForGitProjects(cmd.changeDirectoryTo(path)).forEach((projectName: string) => {
            git(projectName).raw(
                ['pull', 'origin', 'develop'], (err: string, result: string) => {
                    Boolean(result) ? console.log(projectName + "---", result) : console.log(projectName + "---", err)
                });
        })
    }

}

