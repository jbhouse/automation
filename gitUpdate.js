const git = require('simple-git');
const cmd = require('./commandLine');
const filters = require('./filters.js')

let path = process.argv[2];

filters.filterForGitProjects(cmd.changeDirectoryTo(path)).forEach(projectName => {
    git(projectName).raw(
        [
            'pull',
            'origin',
            'develop'

        ], (err, result) => {
            if (Boolean(result)) {
                console.log(projectName + "---", result);
            }
            if (Boolean(err)) {
                console.log(projectName + "---", err);
            }
        });
});
