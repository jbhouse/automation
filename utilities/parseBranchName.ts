var git = require('simple-git');
const branch = require('git-branch');

module.exports = {
    parseGitBranch: (pathName: string) => {
        return branch(pathName)
            .then((name: string) => {
                return name;
            }) //=> 'master'
            .catch(console.error);
    }
}