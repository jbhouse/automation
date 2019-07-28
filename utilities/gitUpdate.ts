var filters = require('./filters.js')
var git = require('simple-git');
var cmd = require('./commandLine');
let path = process.argv[2];

filters.filterForGitProjects(cmd.changeDirectoryTo(path)).forEach((projectName: string) => {
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
});
