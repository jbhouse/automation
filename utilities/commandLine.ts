export const init = (fs: any) => ({
    changeDirectoryTo: (directoryPath: string) => fs.readdirSync(directoryPath).map((project: string) => directoryPath + project),
    checkIfFileExists: (absolutePathOfFile: string) => fs.existsSync(absolutePathOfFile)
})