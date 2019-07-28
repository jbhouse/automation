var fs = require('fs');
module.exports = {
    /**
     * 
     * cds to the given directory and lists out everything there that passes the filter
     * 
     */
    changeDirectoryTo: (directoryPath: string) => {
        return fs.readdirSync(directoryPath).map((project: string) => directoryPath + project)
    },

    checkIfFileExists: (absolutePathOfFile: string) => fs.existsSync(absolutePathOfFile),
}