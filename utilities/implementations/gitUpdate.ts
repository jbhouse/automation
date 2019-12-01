module.exports = (cmd: any, filters: any) => {
    return {
        gitUpdate: (path: string, fn: any) => {
            console.log("Updating git repos \n");
            filters.filterForGitProjects(cmd.changeDirectoryTo(path)).forEach((projectName: string) => {
                fn('develop', projectName, (err: any) => err.toString().split("\n")[1]);
            })
        }
    }
}