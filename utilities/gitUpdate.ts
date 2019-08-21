var filters = require('./filters.js');
var git = require('simple-git');
var cmd = require('./commandLine');

module.exports = {
    gitUpdate: (path: string) => filters.filterForGitProjects(cmd.changeDirectoryTo(path)).forEach((projectName: string) => {
        git(projectName).raw(
            [
                'pull',
                'origin',
                'develop'

            ], (err: string, result: string) => {
                if (Boolean(result)) {
                    console.log(projectName + "---", result);
                }
                if (Boolean(err)) {
                    console.log(projectName + "---", err);
                }
            });
    })

}

