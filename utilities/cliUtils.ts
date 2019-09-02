var commandLineActions = require('./commandLine')
var google = require('./google')

module.exports = {
    changeDirectoryTo: (directoryPath: string) => commandLineActions.changeDirectoryTo(directoryPath)
    , checkIfFileExists: (absoluteFilePath: string) => commandLineActions.checkIfFileExists(absoluteFilePath)
    , google: (executablePath: string, query: string) => google.searchGoogle(executablePath, query)
}