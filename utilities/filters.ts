export const init = (fs: any) => {
    let cmd = require('./commandLine').init(fs);
    return {
        isGitProject: (absolutePath: string) => fs.lstatSync(absolutePath).isDirectory() && cmd.checkIfFileExists(absolutePath + '\\.git'),
        filterForGitProjects: (projects: string[]) => projects.filter((project) => fs.lstatSync(project).isDirectory() && cmd.checkIfFileExists(project + '\\.git')),
        filterForFileName: (projects: string[], desiredFileName: string) => projects.filter((project) => project.includes(desiredFileName))
    }
}