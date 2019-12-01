module.exports = (fs: any) => {
    return ({
        "checkIfFileExists": checkIfFileExists,
        "changeDirectoryTo": changeDirectoryTo,
        "readFile": readFile
    });
    function changeDirectoryTo(directoryPath: string): string { return fs.readdirSync(directoryPath).map((project: string) => directoryPath + project) }
    function checkIfFileExists(absolutePathOfFile: string): boolean { return fs.existsSync(absolutePathOfFile) }
    function readFile(filePath: string) { return fs.readFileSync(filePath) }
}