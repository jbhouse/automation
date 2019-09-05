var commandLineActions = require('./commandLine')
var google = require('./google')
var maven = require('./FilterCommandOutput')

module.exports = {
    changeDirectoryTo: (directoryPath: string) => commandLineActions.changeDirectoryTo(directoryPath)
    , checkIfFileExists: (absoluteFilePath: string) => commandLineActions.checkIfFileExists(absoluteFilePath)
    , google: (executablePath: string, query: string[]) => google.searchGoogle(executablePath, "https://www.google.com/search?q=" + query.slice(4).join("+"))
    , FilterOutput: (command: string, filterKeys: string) => maven.filterOutput(command, filterKeys)
}