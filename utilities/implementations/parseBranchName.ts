module.exports = {
    // find a way to replace this with childprocess, or maybe simple git
    parseGitBranch: (pathName: string) =>
        require('git-branch')(pathName)
            .then((name: string) => name)
            .catch(console.error)
}