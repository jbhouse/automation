module.exports = (cmd: any, filters: any, git: any) => {
    return {
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
}