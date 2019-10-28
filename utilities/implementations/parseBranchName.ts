module.exports = {
    parseGitBranch: (pathName: string) =>
        require('git-branch')(pathName)
            .then((name: string) => name)
            .catch(console.error)
}