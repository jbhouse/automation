const fs = require('fs');
module.exports = {
    /**
     * 
     * cds to the given directory and lists out everything there that passes the filter
     * 
     */
    changeDirectoryTo: (directoryPath) => fs.readdirSync(directoryPath),

    checkIfFileExists: (absolutePathOfFile) => fs.existsSync(absolutePathOfFile),

    changeDirectoryAndReturnFilteredResults: (absolutePath, givenFilter) =>
        fs.readdirSync(absolutePath).filter(project => givenFilter(absolutePath + project))
}