module.exports = (fs: any) => {
    return ({
        "checkIfFileExists": checkIfFileExists,
        "changeDirectoryTo": changeDirectoryTo
    });
    function changeDirectoryTo(directoryPath: string) { return fs.readdirSync(directoryPath).map((project: string) => directoryPath + project) }
    function checkIfFileExists(absolutePathOfFile: string) { return fs.existsSync(absolutePathOfFile) }
}