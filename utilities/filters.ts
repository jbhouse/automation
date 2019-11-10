module.exports = (cmd: any) => {
    return ({
        "isGitProject": isGitProject,
        "filterForGitProjects": filterForGitProjects,
        "filterForFileName": filterForFileName
    })
    function isGitProject(absolutePath: string) { fs.lstatSync(absolutePath).isDirectory() && cmd.checkIfFileExists(absolutePath + '\\.git') }
    function filterForGitProjects(projects: string[]) { projects.filter((project) => fs.lstatSync(project).isDirectory() && cmd.checkIfFileExists(project + '\\.git')) }
    function filterForFileName(projects: string[], desiredFileName: string) { projects.filter((project) => project.includes(desiredFileName)) }
}