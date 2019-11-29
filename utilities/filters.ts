module.exports = (cmd: any, fs: any) => {
    return ({
        "isGitProject": isGitProject,
        "filterForGitProjects": filterForGitProjects,
        "filterForFileName": filterForFileName
    })
    function isGitProject(absolutePath: string) { return fs.lstatSync(absolutePath).isDirectory() && cmd.checkIfFileExists(absolutePath + '\\.git') }
    function filterForGitProjects(projects: string[]) { return projects.filter((project) => fs.lstatSync(project).isDirectory() && cmd.checkIfFileExists(project + '\\.git')) }
    function filterForFileName(projects: string[], desiredFileName: string) { return projects.filter((project) => project.includes(desiredFileName)) }
}