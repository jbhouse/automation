module.exports = (() => {
    const google = require('./implementations/google');
    const maven = require('./implementations/FilterCommandOutput');
    const childProcess = require('child_process');
    return {
        google: (executablePath: string, query: string[]) => google.searchGoogle(executablePath, "https://www.google.com/search?q=" + query.slice(4).join("+"))
        , FilterOutput: (command: string, filterKeys: string) => maven(childProcess).filterOutput(command, filterKeys)
    }
})();